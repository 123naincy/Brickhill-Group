import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import type { Connect, Plugin, PreviewServer, ViteDevServer } from "vite";
import { getNotFoundSeo, getSeoEntries, type SeoEntry } from "../src/seo/manifest";
import { absoluteUrl, SITE_URL } from "../src/seo/site";

/**
 * Build-time head injection for a client-rendered Vite app.
 * This is not server-side rendering. It copies the same Helmet tags into each
 * route's HTML file so the first response is readable without JavaScript.
 * Tags that Helmet owns are marked data-rh="true" so hydration updates them
 * instead of inserting a second copy.
 */

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function assertAbsoluteUrl() {
  const cases: [string, string][] = [
    ["/", "https://brickhillgroup.com/"],
    ["/about", "https://brickhillgroup.com/about"],
    ["/projects", "https://brickhillgroup.com/projects"],
    ["/projects/example", "https://brickhillgroup.com/projects/example"],
    ["https://external-domain.com/image.jpg", "https://external-domain.com/image.jpg"],
    ["/Aaranya", "https://brickhillgroup.com/aaranya"],
    ["/about/", "https://brickhillgroup.com/about"],
  ];

  if (SITE_URL !== "https://brickhillgroup.com") {
    throw new Error(`SITE_URL must be https://brickhillgroup.com, received ${SITE_URL}`);
  }

  for (const [input, expected] of cases) {
    const actual = absoluteUrl(input);
    if (actual !== expected) {
      throw new Error(`absoluteUrl(${JSON.stringify(input)}) returned ${actual}, expected ${expected}`);
    }
  }
}

function seoBlock(entry: SeoEntry): string {
  const url = absoluteUrl(entry.path);
  const image = absoluteUrl(entry.image || "/og-image.jpg");
  const robots = entry.robots || "index, follow, max-image-preview:large";
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": entry.jsonLd || [],
  }).replace(/</g, "\\u003c");
  const dimensions = image.endsWith("/og-image.jpg")
    ? `\n  <meta data-rh="true" property="og:image:width" content="1280" />\n  <meta data-rh="true" property="og:image:height" content="720" />`
    : "";

  return `<!--seo:start-->
  <title data-rh="true">${escapeHtml(entry.title)}</title>
  <meta data-rh="true" name="description" content="${escapeHtml(entry.description)}" />
  <link data-rh="true" rel="canonical" href="${escapeHtml(url)}" />
  <meta data-rh="true" name="robots" content="${escapeHtml(robots)}" />
  <meta data-rh="true" property="og:type" content="${entry.ogType || "website"}" />
  <meta data-rh="true" property="og:site_name" content="Brickhill Group" />
  <meta data-rh="true" property="og:locale" content="en_IN" />
  <meta data-rh="true" property="og:title" content="${escapeHtml(entry.title)}" />
  <meta data-rh="true" property="og:description" content="${escapeHtml(entry.description)}" />
  <meta data-rh="true" property="og:url" content="${escapeHtml(url)}" />
  <meta data-rh="true" property="og:image" content="${escapeHtml(image)}" />
  <meta data-rh="true" property="og:image:alt" content="${escapeHtml(entry.title)}" />${dimensions}
  <meta data-rh="true" name="twitter:card" content="summary_large_image" />
  <meta data-rh="true" name="twitter:title" content="${escapeHtml(entry.title)}" />
  <meta data-rh="true" name="twitter:description" content="${escapeHtml(entry.description)}" />
  <meta data-rh="true" name="twitter:image" content="${escapeHtml(image)}" />
  <meta data-rh="true" name="twitter:url" content="${escapeHtml(url)}" />
  <script data-rh="true" type="application/ld+json" id="seo-jsonld">${json}</script>
  <!--seo:end-->`;
}

function applyEntry(template: string, entry: SeoEntry): string {
  const next = seoBlock(entry);
  if (!template.includes("<!--seo:start-->") || !template.includes("<!--seo:end-->")) {
    throw new Error("index.html is missing seo markers");
  }
  return template.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, next);
}

function writeRouteHtml(dist: string, template: string, entry: SeoEntry) {
  const html = applyEntry(template, entry);
  if (entry.path === "/") {
    writeFileSync(join(dist, "index.html"), html);
    return;
  }

  const clean = entry.path.replace(/^\/+|\/+$/g, "");
  const asDirectory = join(dist, clean, "index.html");
  mkdirSync(dirname(asDirectory), { recursive: true });
  writeFileSync(asDirectory, html);
  writeFileSync(join(dist, `${clean}.html`), html);
}

function indexableEntries(): SeoEntry[] {
  return getSeoEntries().filter((entry) => !entry.robots?.includes("noindex"));
}

function sitemapXml(entries: SeoEntry[]): string {
  const urls = entries
    .map((entry) => {
      const loc = absoluteUrl(entry.path);
      const lastmod = entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : "";
      return `  <url>\n    <loc>${loc}</loc>${lastmod}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function warnOnDuplicates(entries: SeoEntry[]) {
  const titles = new Map<string, string>();
  const descriptions = new Map<string, string>();
  for (const entry of entries) {
    const previousTitle = titles.get(entry.title);
    if (previousTitle) {
      console.warn(`[seo] Duplicate title on ${entry.path} and ${previousTitle}`);
    }
    titles.set(entry.title, entry.path);

    const previousDescription = descriptions.get(entry.description);
    if (previousDescription) {
      console.warn(`[seo] Duplicate description on ${entry.path} and ${previousDescription}`);
    }
    descriptions.set(entry.description, entry.path);
  }
}

function requestPath(url: string | undefined): { path: string; search: string } {
  const raw = url || "/";
  const query = raw.indexOf("?");
  return {
    path: query === -1 ? raw : raw.slice(0, query),
    search: query === -1 ? "" : raw.slice(query),
  };
}

function redirectTarget(path: string): string | null {
  if (path === "/Aaranya" || path === "/Aaranya/") return "/aaranya";
  if (path === "/newsletter-card" || path === "/newsletter-card/") return "/newsletter";
  if (path.length > 1 && path.endsWith("/")) return path.replace(/\/+$/, "");
  return null;
}

function hasExtension(path: string): boolean {
  return /\.[a-z0-9]+$/i.test(path);
}

function isPublicRoute(path: string): boolean {
  if (path === "/") return true;
  return getSeoEntries().some((entry) => entry.path === path);
}

function attachRedirects(middlewares: Connect.Server) {
  middlewares.use((req, res, next) => {
    const { path, search } = requestPath(req.url);
    const target = redirectTarget(path);
    if (!target || target === path) {
      next();
      return;
    }
    res.statusCode = 301;
    res.setHeader("Location", target + search);
    res.end();
  });
}

function attachPreviewStatus(middlewares: Connect.Server) {
  middlewares.use((req, res, next) => {
    const { path } = requestPath(req.url);
    if (
      path === "/sitemap.xml" ||
      hasExtension(path) ||
      isPublicRoute(path) ||
      path.startsWith("/assets/") ||
      path.startsWith("/images/") ||
      path.startsWith("/covers/") ||
      path.startsWith("/newsletters/") ||
      path.startsWith("/videos/")
    ) {
      next();
      return;
    }

    const file = join(process.cwd(), "dist", "404.html");
    if (!existsSync(file)) {
      next();
      return;
    }

    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(readFileSync(file));
  });
}

export function seoBuildPlugin(): Plugin {
  assertAbsoluteUrl();

  const serveSitemap = (server: ViteDevServer | PreviewServer) => {
    server.middlewares.use((req, res, next) => {
      const { path } = requestPath(req.url);
      if (path !== "/sitemap.xml") {
        next();
        return;
      }
      res.setHeader("Content-Type", "application/xml; charset=utf-8");
      res.end(sitemapXml(indexableEntries()));
    });
  };

  return {
    name: "brickhill-seo",
    configureServer(server) {
      attachRedirects(server.middlewares);
      serveSitemap(server);
    },
    configurePreviewServer(server) {
      attachRedirects(server.middlewares);
      attachPreviewStatus(server.middlewares);
      serveSitemap(server);
    },
    closeBundle() {
      const dist = join(process.cwd(), "dist");
      const indexPath = join(dist, "index.html");
      const template = readFileSync(indexPath, "utf8");
      const pages = getSeoEntries();
      const indexable = indexableEntries();
      warnOnDuplicates(indexable);

      for (const page of pages) {
        writeRouteHtml(dist, template, page);
      }

      const notFound = getNotFoundSeo("/404");
      writeFileSync(join(dist, "404.html"), applyEntry(template, notFound));
      writeFileSync(join(dist, "sitemap.xml"), sitemapXml(indexable));
      console.log(
        `[seo] Wrote ${pages.length} route HTML files and ${indexable.length} sitemap URLs for ${SITE_URL}`
      );
    },
  };
}
