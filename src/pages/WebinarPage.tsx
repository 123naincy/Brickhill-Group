import { Helmet } from "react-helmet-async";

import Hero from "../components/webinar/Hero";
import BenefitsSection from "../components/webinar/BenefitsSection";
import Testimonials from "../components/webinar/Testimonials";
import FAQSection from "../components/webinar/FAQSection";
import FinalCTA from "../components/webinar/FinalCTA";
import LearnSection from "../components/webinar/LearnSection";

const WebinarPage = () => {
  return (
    <>
      <Helmet>
  {/* Primary SEO */}
  <title>
    BHL Group Webinar | Real Estate, Infrastructure & Investment Opportunities India
  </title>

  <meta
    name="title"
    content="BHL Group Webinar | Real Estate, Infrastructure & Investment Opportunities India"
  />

  <meta
    name="description"
    content="Join BHL Group webinars to explore luxury real estate investments, infrastructure developments, warehousing solutions, logistics opportunities, land banking, and high-growth investment strategies across India."
  />

  <meta
    name="keywords"
    content="BHL Group Webinar, BHL Group Webinar, Real Estate Webinar India, Property Investment Webinar, Luxury Real Estate India, Infrastructure Investment India, Warehousing Solutions India, Land Banking India, Goa Real Estate, Commercial Property Investment India"
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
    href="https://brickhillgroup.com/webinar"
  />

  {/* Open Graph */}
  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:url"
    content="https://brickhillgroup.com/webinar"
  />

  <meta
    property="og:title"
    content="BHL Group Webinar | Real Estate & Investment Opportunities"
  />

  <meta
    property="og:description"
    content="Attend BHL Group webinars and discover premium real estate, infrastructure, warehousing, logistics, and investment opportunities across India."
  />

  <meta
    property="og:image"
    content="https://brickhillgroup.com/og-webinar.jpg"
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
    content="BHL Group Webinar | Real Estate & Investment Insights"
  />

  <meta
    name="twitter:description"
    content="Register for BHL Group webinars and learn about luxury real estate, infrastructure, warehousing, and investment trends across India."
  />

  <meta
    name="twitter:image"
    content="https://brickhillgroup.com/og-webinar.jpg"
  />

  {/* Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Event",
      name: "BHL Group Webinar",
      url: "https://brickhillgroup.com/webinar",
      description:
        "Official webinar page of BHL Group featuring luxury real estate, infrastructure, warehousing, logistics, and investment opportunities across India.",
      organizer: {
        "@type": "Organization",
        name: "BHL Group",
        url: "https://brickhillgroup.com",
        logo: {
          "@type": "ImageObject",
          url: "https://brickhillgroup.com/logo.png",
        },
      },
      eventAttendanceMode:
        "https://schema.org/OnlineEventAttendanceMode",
      eventStatus:
        "https://schema.org/EventScheduled",
    })}
  </script>
</Helmet>

      <Hero />
      <LearnSection />
      <BenefitsSection />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </>
  );
};

export default WebinarPage;