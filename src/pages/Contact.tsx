import { Helmet } from "react-helmet-async";
import ContactSection from "../components/Contact";

export default function Contact() {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          Contact BHL Group | Real Estate & Investment Experts India
        </title>

        <meta
          name="description"
          content="Contact BHL Group for luxury real estate investments, land banking, infrastructure projects, warehousing solutions, and premium property opportunities across India. Connect with our expert team today."
        />

        <meta
          name="keywords"
          content="Contact BHL Group, Brickhill Group Contact, Real Estate Company India, Property Investment Consultation, Luxury Real Estate India, Land Banking India, Infrastructure Development Company, Warehousing Solutions India, Real Estate Experts"
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
          href="https://brickhillgroup.com/contact"
        />

        {/* Open Graph */}
        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Contact BHL Group | Real Estate & Investment Experts"
        />

        <meta
          property="og:description"
          content="Get in touch with BHL Group for premium real estate investments, infrastructure solutions, logistics, and property consultation services across India."
        />

        <meta
          property="og:url"
          content="https://brickhillgroup.com/contact"
        />

        <meta
          property="og:image"
          content="https://brickhillgroup.com/og-contact.jpg"
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
          content="Contact BHL Group | Real Estate & Investment Experts"
        />

        <meta
          name="twitter:description"
          content="Reach out to BHL Group for luxury real estate opportunities, land banking, infrastructure, and investment consultation across India."
        />

        <meta
          name="twitter:image"
          content="https://brickhillgroup.com/og-contact.jpg"
        />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact BHL Group",
            url: "https://brickhillgroup.com/contact",
            description:
              "Official contact page of BHL Group for real estate investment, infrastructure, logistics, and property consultation services across India.",
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
          Contact BHL Group
        </h1>

        <ContactSection />
      </main>
    </>
  );
}