const REQUIRED_SITE_URL = "https://brickhillgroup.com";

if (!/^https:\/\/brickhillgroup\.com$/.test(REQUIRED_SITE_URL)) {
  throw new Error("SITE_URL must be https://brickhillgroup.com");
}

export const SITE_URL = REQUIRED_SITE_URL;
export const SITE_NAME = "Brickhill Group";
export const SITE_ALTERNATE_NAME = "BHL Group";
export const DEFAULT_OG_IMAGE = "/og-image.jpg";
export const LOGO_PATH = "/logo.png";

export const BUSINESS = {
  email: "sales@brickhillgroup.com",
  telephone: "+91-9910729150",
  supportTelephone: "+91-9056401240",
  streetAddress: "DLF Corporate Greens, Tower 1 1604-1605",
  addressLocality: "Gurugram",
  addressRegion: "Haryana",
  postalCode: "122002",
  addressCountry: "IN",
};

/** Profiles already linked from the site footer. */
export const SOCIAL_PROFILES = [
  "https://www.facebook.com/profile.php?id=100088910250148",
  "https://www.youtube.com/@goboundry",
  "https://www.instagram.com/brickhill__/",
  "https://www.linkedin.com/company/bhlgroups/",
];

for (const profile of SOCIAL_PROFILES) {
  if (!/^https:\/\/[^\s()[\]]+$/.test(profile)) {
    throw new Error(`Social profile must be a plain https URL: ${profile}`);
  }
}

export function absoluteUrl(pathOrUrl: string): string {
  const value = pathOrUrl.trim();
  if (!value) return `${SITE_URL}/`;
  if (/^https?:\/\//i.test(value)) return value;

  const withSlash = value.startsWith("/") ? value : `/${value}`;
  const split = withSlash.match(/^([^?#]*)(.*)$/);
  const pathname = split?.[1] || "/";
  const suffix = split?.[2] || "";
  if (pathname === "/") return `${SITE_URL}/${suffix}`;
  return `${SITE_URL}${pathname.replace(/\/+$/, "").toLowerCase()}${suffix}`;
}

export type Crumb = { name: string; path: string };

export function organizationNode() {
  return {
    "@type": ["RealEstateAgent", "Organization"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAME,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(LOGO_PATH),
    },
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    description:
      "Brickhill Group, also known as BHL Group, is a real estate company based in Gurugram, Haryana. It develops and markets residential, commercial, industrial, and warehouse projects.",
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: [
      "Gurugram",
      "Haryana",
      "Mohali",
      "Punjab",
      "Panipat",
      "Sindhudurg",
      "Maharashtra",
    ],
    sameAs: SOCIAL_PROFILES,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.supportTelephone,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAME,
    description:
      "Official website of Brickhill Group, a Gurugram-based real estate company.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

export function webPageNode(options: {
  title: string;
  description: string;
  path: string;
  type?: string;
  image?: string;
}) {
  const url = absoluteUrl(options.path);
  return {
    "@type": options.type || "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: options.title,
    description: options.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
    ...(options.image
      ? { primaryImageOfPage: absoluteUrl(options.image) }
      : {}),
  };
}

export function breadcrumbNode(items: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqNode(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
