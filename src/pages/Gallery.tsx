import { Helmet } from "react-helmet-async";
import GallerySection from "../components/GallerySection";

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          BHL Group Gallery | Luxury Real Estate, Infrastructure & Projects
        </title>

        <meta
          name="description"
          content="Explore the official BHL Group gallery showcasing luxury real estate developments, infrastructure projects, warehousing solutions, commercial spaces, and premium lifestyle destinations across India."
        />

        <meta
          name="keywords"
          content="BHL Group Gallery, BHL Group Projects, Luxury Real Estate India, Infrastructure Projects India, Warehousing Solutions, Property Development Gallery, Goa Real Estate, Delhi NCR Projects, Commercial Real Estate India"
        />

        <meta
          name="author"
          content="BHL Group"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://brickhillgroup.com/gallery"
        />

        {/* Open Graph */}
        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="BHL Group Gallery | Luxury Real Estate & Infrastructure"
        />

        <meta
          property="og:description"
          content="View premium real estate developments, infrastructure projects, logistics solutions, and lifestyle destinations by BHL Group across India."
        />

        <meta
          property="og:url"
          content="https://brickhillgroup.com/gallery"
        />

        <meta
          property="og:image"
          content="https://brickhillgroup.com/og-gallery.jpg"
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
          content="BHL Group Gallery | Luxury Real Estate & Projects"
        />

        <meta
          name="twitter:description"
          content="Explore images of luxury real estate projects, infrastructure developments, warehousing solutions, and commercial spaces by BHL Group."
        />

        <meta
          name="twitter:image"
          content="https://brickhillgroup.com/og-gallery.jpg"
        />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "BHL Group Gallery",
            url: "https://brickhillgroup.com/gallery",
            description:
              "Official gallery of BHL Group showcasing luxury real estate developments, infrastructure projects, and commercial properties across India.",
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

      <main className="pt-24">
        <h1 className="sr-only">
          BHL Group Gallery
        </h1>

        <GallerySection />
      </main>
    </>
  );
}