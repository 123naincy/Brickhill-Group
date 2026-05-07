import { Helmet } from "react-helmet-async";
import AboutSection from "../components/About";

export default function About() {
  return (
    <>
      <Helmet>
  {/* Primary SEO */}
  <title>
    About BHL Group | Luxury Real Estate, Infrastructure & Investment Company India
  </title>

  <meta
    name="title"
    content="About BHL Group | Luxury Real Estate, Infrastructure & Investment Company India"
  />

  <meta
    name="description"
    content="Learn about BHL Group, a leading real estate, infrastructure, logistics, warehousing, and investment company in India delivering luxury developments, strategic land banking, and future-ready business solutions."
  />

  <meta
    name="keywords"
    content="About BHL Group, Brickhill Group, Real Estate Company India, Luxury Real Estate India, Infrastructure Company India, Land Banking India, Warehousing Solutions India, Logistics Company India, Property Investment India, Commercial Real Estate India"
  />

  <meta
    name="robots"
    content="index, follow, max-image-preview:large"
  />

  <meta
    name="author"
    content="BHL Group"
  />

  <meta
    name="language"
    content="English"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://brickhillgroup.com/about"
  />

  {/* Open Graph */}
  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:url"
    content="https://brickhillgroup.com/about"
  />

  <meta
    property="og:title"
    content="About BHL Group | Real Estate & Infrastructure Company"
  />

  <meta
    property="og:description"
    content="Discover BHL Group’s vision, expertise, and commitment to luxury real estate, infrastructure, warehousing, logistics, and investment opportunities across India."
  />

  <meta
    property="og:image"
    content="https://brickhillgroup.com/og-about.jpg"
  />

  <meta
    property="og:site_name"
    content="BHL Group"
  />

  {/* Twitter SEO */}
  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="About BHL Group | Luxury Real Estate & Investment Company"
  />

  <meta
    name="twitter:description"
    content="Learn how BHL Group is shaping India’s real estate, infrastructure, logistics, and investment landscape with premium developments and strategic opportunities."
  />

  <meta
    name="twitter:image"
    content="https://brickhillgroup.com/og-about.jpg"
  />

  {/* Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "BHL Group",
      alternateName: "Brickhill Group",
      url: "https://brickhillgroup.com",
      logo: "https://brickhillgroup.com/logo.png",
      description:
        "BHL Group is a leading luxury real estate, infrastructure, logistics, warehousing, and investment company in India.",
      sameAs: [
        "https://www.linkedin.com/",
        "https://www.instagram.com/",
        "https://www.facebook.com/"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-7389667262",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"]
      }
    })}
  </script>
</Helmet>

      <div className="pt-24">
        <AboutSection />
      </div>
    </>
  );
}