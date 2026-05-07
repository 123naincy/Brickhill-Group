import { Helmet } from "react-helmet-async";
import ProjectsSection from "../components/Projects";

export default function Projects() {
  return (
    <>
     <Helmet>
  {/* Primary SEO */}
  <title>
    BHL Group Projects | Luxury Real Estate, Infrastructure & Investment Projects India
  </title>

  <meta
    name="title"
    content="BHL Group Projects | Luxury Real Estate, Infrastructure & Investment Projects India"
  />

  <meta
    name="description"
    content="Explore premium BHL Group projects including luxury residential developments, commercial spaces, warehousing solutions, infrastructure projects, logistics hubs, and high-growth investment opportunities across India."
  />

  <meta
    name="keywords"
    content="BHL Group Projects, Brickhill Group Projects, Luxury Real Estate India, Commercial Projects India, Infrastructure Development India, Warehousing Projects India, Logistics Parks India, Property Investment India, Goa Real Estate Projects, Delhi NCR Projects, Land Banking India"
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
    href="https://brickhillgroup.com/projects"
  />

  {/* Open Graph */}
  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:url"
    content="https://brickhillgroup.com/projects"
  />

  <meta
    property="og:title"
    content="BHL Group Projects | Luxury Real Estate & Infrastructure Developments"
  />

  <meta
    property="og:description"
    content="Discover premium residential, commercial, infrastructure, warehousing, and logistics projects by BHL Group across India."
  />

  <meta
    property="og:image"
    content="https://brickhillgroup.com/og-projects.jpg"
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
    content="BHL Group Projects | Real Estate & Investment Opportunities"
  />

  <meta
    name="twitter:description"
    content="Explore luxury real estate, warehousing, infrastructure, and commercial investment projects with BHL Group across India."
  />

  <meta
    name="twitter:image"
    content="https://brickhillgroup.com/og-projects.jpg"
  />

  {/* Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "BHL Group Projects",
      url: "https://brickhillgroup.com/projects",
      description:
        "Official projects page of BHL Group showcasing luxury real estate, infrastructure, warehousing, logistics, and investment developments across India.",
      publisher: {
        "@type": "Organization",
        name: "BHL Group",
        logo: {
          "@type": "ImageObject",
          url: "https://brickhillgroup.com/logo.png",
        },
      },
    })}
  </script>
</Helmet>

      <div className="pt-24">
        <ProjectsSection />
      </div>
    </>
  );
}