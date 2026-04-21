import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Testimonials from "../components/home/Testimonials";
import AboutSection from "../components/About";
import BlogSection from "../components/Blog";


const schema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Brickhill Group",
  "url": "https://www.brickhillgroup.com/",
  "description": "Brickhill Group offers premium residential, commercial, industrial and warehouse investment opportunities in Gurugram.",
};

export default function Home() {

  return (
    <>
      <Helmet>
        {/* Primary Meta */}
        <title>
          Brickhill Group | Real Estate Investment & Group Buying in Gurugram
        </title>

        <meta
          name="description"
          content="Brickhill Group offers premium residential, commercial, industrial and warehouse investment opportunities in Gurugram. Join our group buying real estate model and unlock builder-level pricing."
        />

        <meta
          name="keywords"
          content="Brickhill Group, real estate investment Gurugram, property investment Gurugram, group buying real estate India, commercial property investment India, warehouse investment India, industrial plots Gurugram, residential projects Gurugram"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brickhill Group" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.brickhillgroup.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brickhillgroup.com/" />

        <meta
          property="og:title"
          content="Brickhill Group | Premium Real Estate Investment Opportunities"
        />

        <meta
          property="og:description"
          content="Discover premium residential, commercial, industrial and warehouse investment opportunities in Gurugram with Brickhill Group's group buying investment model."
        />

        <meta
          property="og:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Brickhill Group | Real Estate Investment Platform"
        />

        <meta
          name="twitter:description"
          content="Join verified investor groups and unlock builder-level pricing with Brickhill Group."
        />

        <meta
          name="twitter:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

        {/* Geo SEO */}
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Gurugram" />
        <meta name="geo.position" content="28.4595;77.0266" />
        <meta name="ICBM" content="28.4595, 77.0266" />
       
      </Helmet>
      <Hero />
      <AboutSection />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <BlogSection />
    </>
  );
}