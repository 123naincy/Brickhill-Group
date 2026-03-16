import { Helmet } from "react-helmet-async";
import AboutSection from "../components/About";

export default function About() {
  return (
    <>
      <Helmet>

        {/* Title */}
        <title>
          About Brickhill Group | Real Estate Investment Experts in Gurugram
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Learn about Brickhill Group, a trusted real estate investment platform in Gurugram offering residential, commercial, industrial and warehouse opportunities through a unique group buying model."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="about Brickhill Group, real estate developers Gurugram, property investment company India, group buying real estate, commercial property investment Gurugram"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brickhill Group" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.brickhillgroup.com/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brickhillgroup.com/about" />

        <meta
          property="og:title"
          content="About Brickhill Group | Real Estate Investment Experts"
        />

        <meta
          property="og:description"
          content="Discover the story behind Brickhill Group and our mission to provide premium real estate investment opportunities through group buying."
        />

        <meta
          property="og:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="About Brickhill Group | Real Estate Investment Platform"
        />

        <meta
          name="twitter:description"
          content="Learn how Brickhill Group helps investors access premium real estate opportunities in Gurugram."
        />

        <meta
          name="twitter:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

      </Helmet>

      <div className="pt-24">
        <AboutSection />
      </div>
    </>
  );
}