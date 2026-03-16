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

        {/* Title */}
        <title>
          Free Real Estate Investment Webinar | Gurugram Property Opportunities | Brickhill Group
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Join Brickhill Group's free real estate investment webinar and discover exclusive residential, commercial and warehouse opportunities in Gurugram through our group buying model."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="real estate investment webinar, property investment webinar India, Gurugram real estate investment webinar, commercial property investment webinar, Brickhill Group webinar"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brickhill Group" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.brickhillgroup.com/webinar"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brickhillgroup.com/webinar" />

        <meta
          property="og:title"
          content="Free Real Estate Investment Webinar | Brickhill Group"
        />

        <meta
          property="og:description"
          content="Learn how to invest in premium real estate projects in Gurugram through Brickhill Group's group buying investment model."
        />

        <meta
          property="og:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Free Real Estate Investment Webinar | Brickhill Group"
        />

        <meta
          name="twitter:description"
          content="Register for our webinar to learn about high-return real estate investment opportunities in Gurugram."
        />

        <meta
          name="twitter:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

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