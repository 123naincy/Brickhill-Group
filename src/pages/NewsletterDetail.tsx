import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { newsletters } from "../data/newsletters";
import { Newsletter } from "../data/types/newsletter";
import LeftSidebar from "../components/newsletter/LeftSidebar";
import RightSidebar from "../components/newsletter/RightSidebar";
import NewsletterDetailPage from "../components/newsletter/NewsletterDetailPage";
import { Helmet } from "react-helmet-async";


export default function NewsletterDetail() {
  const { id } = useParams<{ id: string }>();

  const newsletter: Newsletter | undefined = newsletters.find(
    (item) => item.id === id
  );

  if (!newsletter) return <h2 className="text-center mt-5">Not Found</h2>;

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Beyond Delhi NCR: Real Estate Investment Trends | Brickhill Group Newsletter
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Read Brickhill Group's latest newsletter covering real estate investment trends beyond Delhi NCR, emerging property markets, and opportunities for investors."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="Delhi NCR real estate trends, property investment India 2026, emerging real estate markets India, Brickhill Group newsletter, real estate market insights"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brickhill Group" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.brickhillgroup.com/newsletter/feb-2026"
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />

        <meta
          property="og:url"
          content="https://brickhillgroup.com/newsletter/feb-2026"
        />

        <meta
          property="og:title"
          content="Beyond Delhi NCR: Real Estate Investment Trends | Brickhill Group"
        />

        <meta
          property="og:description"
          content="Explore the latest property investment insights beyond Delhi NCR and discover emerging real estate opportunities for investors."
        />

        <meta
          property="og:image"
          content="https://www.brickhillgroup.com/newsletters/feb-2026-cover.jpg"
        />

        <meta property="article:publisher" content="Brickhill Group" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Beyond Delhi NCR: Real Estate Investment Trends"
        />

        <meta
          name="twitter:description"
          content="Read the latest Brickhill Group newsletter covering emerging property investment markets in India."
        />

        <meta
          name="twitter:image"
          content="https://www.brickhillgroup.com/newsletters/feb-2026-cover.jpg"
        />
      </Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Beyond Delhi NCR: Real Estate Investment Trends",
          "description": "Brickhill Group newsletter covering emerging property investment opportunities beyond Delhi NCR.",
          "author": {
            "@type": "Organization",
            "name": "Brickhill Group"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Brickhill Group",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.brickhillgroup.com/logo.png"
            }
          },
          "mainEntityOfPage": "https://www.brickhillgroup.com/newsletter/feb-2026"
        })}
      </script>
      <Container fluid className="newspaper-wrapper">
        <Row className="justify-content-center">

          {/* LEFT */}
          <Col lg={3} className="d-none d-lg-block">
            <LeftSidebar mostRead={newsletter.mostRead} />
          </Col>

          {/* CENTER */}
          <Col lg={6} md={12}>
            <NewsletterDetailPage />
          </Col>

          {/* RIGHT */}
          <Col lg={3} className="d-none d-lg-block">
            <RightSidebar />
          </Col>

        </Row>
      </Container>
    </>
  );
}