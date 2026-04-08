import { Helmet } from "react-helmet-async";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Testimonials from "../components/home/Testimonials";
import AboutSection from "../components/About";
import BlogSection from "../components/Blog";

export default function Home() {
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://brickhillgroup.com/#organization",
      name: "Brickhill Group",
      url: "https://brickhillgroup.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://brickhillgroup.com/assets/logo-Z3TNQcFG.png",
      },
      image: "https://brickhillgroup.com/assets/logo-Z3TNQcFG.png",
      description:
        "Brickhill Group is a diversified real estate and infrastructure company offering land acquisition, development, construction, and investment solutions across India.",
      email: "info@brickhillgroup.com",
      telephone: "+91-9910729093",
      sameAs: [
        "https://www.linkedin.com/in/brickhill-landbase/",
        "https://www.youtube.com/@goboundry"
      ],
      areaServed: [
        "India",
        "Punjab",
        "Chandigarh",
        "Mohali",
        "Maharashtra",
        "Sindhudurg",
        "NCR"
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Real Estate Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Residential Projects"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial Projects"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Industrial & Warehouse Investment"
            }
          }
        ]
      }
    },
    {
      "@type": "RealEstateDeveloper",
      "@id": "https://brickhillgroup.com/#developer",
      name: "Brickhill Group",
      url: "https://brickhillgroup.com/",
      logo: "https://brickhillgroup.com/assets/logo-Z3TNQcFG.png",
      description:
        "Premium real estate developer offering residential, commercial, and industrial investment opportunities.",
      telephone: "+91-9910729093",
      email: "info@brickhillgroup.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "DLF Corporate Greens, Tower 1 1604-1605",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122002",
        addressCountry: "IN"
      },
      sameAs: [
        "https://www.linkedin.com/in/brickhill-landbase/",
        "https://www.youtube.com/@goboundry"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://brickhillgroup.com/#website",
      url: "https://brickhillgroup.com/",
      name: "Brickhill Group",
      publisher: {
        "@id": "https://brickhillgroup.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://brickhillgroup.com/#homepage",
      url: "https://brickhillgroup.com/",
      name: "Brickhill Group - Home",
      isPartOf: {
        "@id": "https://brickhillgroup.com/#website"
      },
      about: {
        "@id": "https://brickhillgroup.com/#organization"
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://brickhillgroup.com/assets/logo-Z3TNQcFG.png"
      },
      description:
        "Explore premium real estate investment opportunities in Gurugram with Brickhill Group."
    },
    {
      "@type": "FAQPage",
      "@id": "https://brickhillgroup.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is group buying in real estate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Group buying allows multiple investors to purchase property together at discounted prices directly from builders."
          }
        },
        {
          "@type": "Question",
          name: "Where does Brickhill Group operate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brickhill Group operates across Gurugram, Punjab, Maharashtra and other high-growth regions in India."
          }
        }
      ]
    }
  ]
};
  return (
    <>
      <Helmet>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema),
    }}
  />
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