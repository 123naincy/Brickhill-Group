import projectsData from "../data/projects.json";
import { blogs } from "../data/blog";
import { newsletters } from "../data/newsletters";
import { homeFaqs } from "../data/homeFaqs";
import { webinarFaqs } from "../data/webinarFaqs";
import { createSlug } from "../components/utils/slug";
import {
  absoluteUrl,
  breadcrumbNode,
  DEFAULT_OG_IMAGE,
  faqNode,
  organizationNode,
  SITE_URL,
  webPageNode,
  websiteNode,
  type Crumb,
} from "./site";
import {
  PROJECT_IMAGES,
  projectPath,
  projectTitle,
  propertyTypeLabel,
  type ProjectRecord,
} from "./projects";
import { plainExcerpt, toIsoDate } from "./text";

export type SeoEntry = {
  path: string;
  title: string;
  description: string;
  image?: string;
  robots?: string;
  ogType?: "website" | "article";
  breadcrumbs?: Crumb[];
  jsonLd?: Record<string, unknown>[];
  lastmod?: string;
};

const projects = projectsData as ProjectRecord[];

function graph(
  entry: Omit<SeoEntry, "jsonLd">,
  extra: Record<string, unknown>[] = [],
  pageType?: string
): Record<string, unknown>[] {
  const crumbs =
    entry.breadcrumbs && entry.breadcrumbs.length > 1
      ? [breadcrumbNode(entry.breadcrumbs)]
      : [];

  return [
    organizationNode(),
    websiteNode(),
    webPageNode({
      title: entry.title,
      description: entry.description,
      path: entry.path,
      type: pageType,
      image: entry.image || DEFAULT_OG_IMAGE,
    }),
    ...crumbs,
    ...extra,
  ];
}

function entry(
  partial: Omit<SeoEntry, "jsonLd"> & { pageType?: string; extra?: Record<string, unknown>[] }
): SeoEntry {
  const { pageType, extra, ...rest } = partial;
  return {
    ...rest,
    image: rest.image || DEFAULT_OG_IMAGE,
    robots: rest.robots || "index, follow, max-image-preview:large",
    ogType: rest.ogType || "website",
    jsonLd: graph(rest, extra, pageType),
  };
}

/**
 * Place describes the development. RealEstateListing is not used because these
 * pages do not publish an offer. Only fields already stored on the project are included.
 */
function placeNode(project: ProjectRecord, path: string, image?: string) {
  return {
    "@type": "Place",
    "@id": `${absoluteUrl(path)}#place`,
    name: project.title,
    description: project.description,
    url: absoluteUrl(path),
    ...(image ? { image: absoluteUrl(image) } : {}),
    containedInPlace: {
      "@type": "Place",
      name: project.location,
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Property type",
        value: propertyTypeLabel(project.type),
      },
      {
        "@type": "PropertyValue",
        name: "Area",
        value: project.area,
      },
      {
        "@type": "PropertyValue",
        name: "Status",
        value: project.status,
      },
    ],
  };
}

export function buildProjectEntry(project: ProjectRecord): SeoEntry {
  const path = projectPath(project);
  const title = projectTitle(project);
  const description = project.description;
  const image = PROJECT_IMAGES[project.id];
  const crumbs: Crumb[] = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path },
  ];

  return entry({
    path,
    title,
    description,
    image,
    breadcrumbs: crumbs,
    lastmod: toIsoDate(project.created_at),
    extra: [placeNode(project, path, image)],
  });
}

const staticPages: SeoEntry[] = [
  entry({
    path: "/",
    title: "Brickhill Group | Real Estate Company in Gurugram",
    description:
      "Brickhill Group (BHL Group) is a Gurugram real estate company developing residential, commercial, industrial, and warehouse projects.",
    extra: [faqNode(homeFaqs)],
  }),
  entry({
    path: "/about",
    title: "About Brickhill Group | Real Estate Developers in Gurugram",
    description:
      "Learn about Brickhill Group, also known as BHL Group, a Gurugram-based company developing residential, commercial, industrial, and warehouse real estate.",
    pageType: "AboutPage",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ],
  }),
  entry({
    path: "/projects",
    title: "Real Estate Projects | Brickhill Group",
    description:
      "Browse residential, commercial, industrial, and warehouse projects from Brickhill Group, including developments in Sindhudurg, Mohali, and Panipat.",
    pageType: "CollectionPage",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
    ],
    extra: [
      {
        "@type": "ItemList",
        name: "Brickhill Group projects",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: absoluteUrl(projectPath(project)),
        })),
      },
    ],
  }),
  entry({
    path: "/contact",
    title: "Contact Brickhill Group | Gurugram Office",
    description:
      "Contact Brickhill Group at DLF Corporate Greens, Gurugram, Haryana, for residential, commercial, industrial, and warehouse property enquiries.",
    pageType: "ContactPage",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
  }),
  entry({
    path: "/blog",
    title: "Real Estate Blog | Brickhill Group",
    description:
      "Articles from Brickhill Group on Indian property investment, real estate trends, and how buyers evaluate residential and commercial projects.",
    pageType: "Blog",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ],
    extra: [
      {
        "@type": "ItemList",
        name: "Brickhill Group articles",
        itemListElement: blogs.map((blog, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: blog.title,
          url: absoluteUrl(`/blog/${createSlug(blog.title)}`),
        })),
      },
    ],
  }),
  entry({
    path: "/gallery",
    title: "Project Gallery | Brickhill Group",
    description:
      "Photographs of Brickhill Group residential, commercial, industrial, and warehouse projects.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Gallery", path: "/gallery" },
    ],
  }),
  entry({
    path: "/group-buying",
    title: "Group Buying | Real Estate Investment | Brickhill Group",
    description:
      "See how Brickhill Group group buying works and review the properties currently listed for collective real estate investment.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Group Buying", path: "/group-buying" },
    ],
  }),
  entry({
    path: "/webinar",
    title: "Group Buying Webinar | Brickhill Group",
    description:
      "Register for the Brickhill Group webinar on group buying in real estate, including who it is for and what the live session covers.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Webinar", path: "/webinar" },
    ],
    extra: [faqNode(webinarFaqs)],
  }),
  entry({
    path: "/newsletter",
    title: "Newsletters | Brickhill Group",
    description:
      "Monthly Brickhill Group newsletters with business, real estate, and company updates, available to read online or as a PDF.",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Newsletters", path: "/newsletter" },
    ],
  }),
];

function blogEntries(): SeoEntry[] {
  return blogs.map((blog) => {
    const path = `/blog/${createSlug(blog.title)}`;
    const description = plainExcerpt(blog.content);
    const published = toIsoDate(blog.date);
    const crumbs: Crumb[] = [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: blog.title, path },
    ];
    const base = {
      path,
      title: `${blog.title} | Brickhill Group`,
      description,
      image: blog.image,
      ogType: "article" as const,
      breadcrumbs: crumbs,
      lastmod: published,
    };

    return entry({
      ...base,
      extra: [
        {
          "@type": "BlogPosting",
          "@id": `${absoluteUrl(path)}#article`,
          headline: blog.title,
          description,
          image: absoluteUrl(blog.image),
          ...(published ? { datePublished: published } : {}),
          author: {
            "@type": "Person",
            name: blog.author,
            ...(blog.category ? { jobTitle: blog.category } : {}),
          },
          publisher: { "@id": `${SITE_URL}/#organization` },
          mainEntityOfPage: { "@id": `${absoluteUrl(path)}#webpage` },
        },
      ],
    });
  });
}

function newsletterEntries(): SeoEntry[] {
  return newsletters.map((item) => {
    const path = `/newsletter/${item.id}`;
    const title = `${item.month} ${item.year} Newsletter | Brickhill Group`;
    const description = `${item.month} ${item.year} Brickhill Group newsletter: ${item.title}. ${item.description}`;
    return entry({
      path,
      title,
      description,
      image: item.cover,
      robots: "noindex, follow",
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Newsletters", path: "/newsletter" },
        { name: `${item.month} ${item.year}`, path },
      ],
    });
  });
}

let cached: SeoEntry[] | null = null;

export function getSeoEntries(): SeoEntry[] {
  if (cached) return cached;
  cached = [
    ...staticPages,
    ...projects.map((project) => buildProjectEntry(project)),
    ...blogEntries(),
    ...newsletterEntries(),
  ];
  return cached;
}

export function getPageSeo(path: string): SeoEntry {
  const found = getSeoEntries().find((item) => item.path === path);
  if (!found) {
    throw new Error(`Missing SEO entry for ${path}`);
  }
  return found;
}

export function getNotFoundSeo(path: string): SeoEntry {
  const title = "Page Not Found | Brickhill Group";
  const description =
    "This page is not available. Visit the Brickhill Group homepage, projects, or contact page.";
  return {
    path,
    title,
    description,
    image: DEFAULT_OG_IMAGE,
    robots: "noindex, nofollow",
    ogType: "website",
    jsonLd: [
      organizationNode(),
      webPageNode({
        title,
        description,
        path,
        image: DEFAULT_OG_IMAGE,
      }),
    ],
  };
}
