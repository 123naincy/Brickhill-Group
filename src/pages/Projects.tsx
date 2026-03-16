import { Helmet } from "react-helmet-async";
import ProjectsSection from "../components/Projects";

export default function Projects() {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Real Estate Projects in Gurugram | Residential & Commercial | Brickhill Group
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore premium residential, commercial, industrial and warehouse real estate projects in Gurugram with Brickhill Group. Discover exclusive property investment opportunities through our group buying model."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="real estate projects Gurugram, residential projects Gurugram, commercial property Gurugram, industrial plots Gurugram, warehouse investment India, Brickhill Group projects"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brickhill Group" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.brickhillgroup.com/projects"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.brickhillgroup.com/projects"
        />

        <meta
          property="og:title"
          content="Premium Real Estate Projects in Gurugram | Brickhill Group"
        />

        <meta
          property="og:description"
          content="Browse Brickhill Group’s latest residential, commercial, industrial and warehouse projects in Gurugram and discover top investment opportunities."
        />

        <meta
          property="og:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Real Estate Projects in Gurugram | Brickhill Group"
        />

        <meta
          name="twitter:description"
          content="Explore premium property investment projects with Brickhill Group in Gurugram."
        />

        <meta
          name="twitter:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

      </Helmet>

      <div className="pt-24">
        <ProjectsSection />
      </div>
    </>
  );
}