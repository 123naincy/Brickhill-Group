import { Helmet } from "react-helmet-async";
import BlogSection from "../components/Blog";

export default function Blog() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          BHL Group Blog | Real Estate, Infrastructure & Investment Insights India
        </title>

        <meta
          name="title"
          content="BHL Group Blog | Real Estate, Infrastructure & Investment Insights India"
        />

        <meta
          name="description"
          content="Explore BHL Group blogs covering luxury real estate, land banking, infrastructure, warehousing, logistics, property investment opportunities, and emerging market trends across India."
        />

        <meta
          name="keywords"
          content="BHL Group, BHL Group, BHL Group Blog, Real Estate Blog India, Luxury Real Estate India, Property Investment India, Land Banking India, BHLRealtors, BHLInfra, Logi Prime, BHL Studioz, Goa Real Estate, Infrastructure Company India, Warehousing Solutions India, Real Estate Market Trends"
        />

        <meta name="author" content="BHL Group" />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <meta name="language" content="English" />

        <meta name="revisit-after" content="2 days" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://brickhillgroup.com/blog"
        />

        {/* Open Graph */}
        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://brickhillgroup.com/blog"
        />

        <meta
          property="og:title"
          content="BHL Group Blog | Real Estate & Investment Insights"
        />

        <meta
          property="og:description"
          content="Read the latest blogs from BHL Group covering luxury real estate, infrastructure, logistics, warehousing, and smart investment opportunities across India."
        />

        <meta
          property="og:image"
          content="https://brickhillgroup.com/og-blog.jpg"
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
          content="BHL Group Blog | Real Estate & Investment Insights"
        />

        <meta
          name="twitter:description"
          content="Explore expert insights on luxury real estate, land banking, infrastructure, warehousing, and investment opportunities across India with BHL Group."
        />

        <meta
          name="twitter:image"
          content="https://brickhillgroup.com/og-blog.jpg"
        />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "BHL Group Blog",
            url: "https://brickhillgroup.com/blog",
            description:
              "Official blog of BHL Group covering luxury real estate, land investment, infrastructure, warehousing, logistics, and market insights across India.",
            publisher: {
              "@type": "Organization",
              name: "BHL Group",
              url: "https://brickhillgroup.com",
              logo: {
                "@type": "ImageObject",
                url: "https://brickhillgroup.com/logo.png",
              },
            },
          })}
        </script>
      </Helmet>

      <main className="pt-24">
        <h1 className="sr-only">
          BHL Group Blog - Real Estate & Investment Insights
        </h1>
        <BlogSection />
      </main>
    </>
  );
}