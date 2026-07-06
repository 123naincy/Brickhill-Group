import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Testimonials from "../components/home/Testimonials";
import AboutSection from "../components/About";
import BlogSection from "../components/Blog";
import PopupForm from "../components/home/PopupForm"
import BusinessTabs from "../components/home/BusinessTabs";
import FloatingIcons from "../components/home/FloatingIcons";
import FAQPage from "../components/home/FAQPage";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BHL Group",
  "url": "https://www.brickhillgroup.com/",
  "description": "BHL Group offers premium residential, commercial, industrial and warehouse investment opportunities in Gurugram.",
};

export default function Home() {

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          BHL Group | Luxury Real Estate, Infrastructure & Investment Company India
        </title>

        <meta
          name="title"
          content="BHL Group | Luxury Real Estate, Infrastructure & Investment Company India"
        />

        <meta
          name="description"
          content="BHL Group is a leading real estate, infrastructure, logistics, and investment company in India offering luxury residential developments, land banking, warehousing solutions, commercial spaces, and premium investment opportunities."
        />

        <meta
          name="keywords"
          content="BHL Group, BHL Group, Luxury Real Estate India, Property Investment India, Land Banking India, Real Estate Company India, Infrastructure Development India, Warehousing Solutions India, Commercial Property Investment, Goa Real Estate, Delhi NCR Projects, Luxury Villas India, Logistics Company India"
        />

        <meta
          name="author"
          content="BHL Group"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <meta
          name="language"
          content="English"
        />

        <meta
          name="revisit-after"
          content="2 days"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://brickhillgroup.com/"
        />

        {/* Open Graph */}
        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://brickhillgroup.com/"
        />

        <meta
          property="og:title"
          content="BHL Group | Luxury Real Estate & Investment Opportunities"
        />

        <meta
          property="og:description"
          content="Explore luxury real estate developments, infrastructure projects, warehousing solutions, logistics, and investment opportunities across India with BHL Group."
        />

        <meta
          property="og:image"
          content="https://brickhillgroup.com/og-image.jpg"
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
          content="BHL Group | Luxury Real Estate & Infrastructure Company"
        />

        <meta
          name="twitter:description"
          content="Discover premium real estate, infrastructure, warehousing, and investment opportunities with BHL Group across India."
        />

        <meta
          name="twitter:image"
          content="https://brickhillgroup.com/og-image.jpg"
        />

        {/* Geo SEO */}
        <meta
          name="geo.region"
          content="IN"
        />

        <meta
          name="geo.placename"
          content="India"
        />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BHL Group",
            alternateName: "BHL Group",
            url: "https://brickhillgroup.com",
            logo: "https://brickhillgroup.com/assets/logo-Z3TNQcFG.png",
            description:
              "BHL Group is a leading luxury real estate, infrastructure, warehousing, logistics, and investment company in India.",
            sameAs: [
              "https://www.linkedin.com/",
              "https://www.instagram.com/",
              "https://www.facebook.com/"
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9910729150",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"]
            }
          })}
        </script>
      </Helmet>
      <Hero />
      <BusinessTabs />
      <FloatingIcons />
      <PopupForm />
      <AboutSection />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <BlogSection />
      <FAQPage />
    </>
  );
}