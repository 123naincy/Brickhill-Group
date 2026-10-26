import { Helmet } from "react-helmet-async";
import type { SeoEntry } from "../../seo/manifest";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME } from "../../seo/site";

/**
 * Client-side metadata for this Vite + React app (BrowserRouter and createRoot).
 * react-helmet-async updates the document after JavaScript runs. It does not
 * server-render HTML. The production build writes the same tags into each
 * route file so the first response is readable without JavaScript. Those tags
 * use data-rh so Helmet updates them instead of adding a second copy.
 */
function imageUrl(image: string | undefined): string {
  return absoluteUrl(image || DEFAULT_OG_IMAGE);
}

export default function Seo({ entry }: { entry: SeoEntry }) {
  const url = absoluteUrl(entry.path);
  const image = imageUrl(entry.image);
  const robots = entry.robots || "index, follow, max-image-preview:large";
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": entry.jsonLd || [],
  }).replace(/</g, "\\u003c");
  const defaultImage = image.endsWith("/og-image.jpg");

  return (
    <Helmet prioritizeSeoTags>
      <title>{entry.title}</title>
      <meta name="description" content={entry.description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={robots} />
      <meta property="og:type" content={entry.ogType || "website"} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={entry.title} />
      <meta property="og:description" content={entry.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={entry.title} />
      {defaultImage ? <meta property="og:image:width" content="1280" /> : null}
      {defaultImage ? <meta property="og:image:height" content="720" /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={entry.title} />
      <meta name="twitter:description" content={entry.description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      {entry.jsonLd?.length ? (
        <script type="application/ld+json" id="seo-jsonld">
          {json}
        </script>
      ) : null}
    </Helmet>
  );
}
