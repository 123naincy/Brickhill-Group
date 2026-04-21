import { Helmet } from "react-helmet-async";
import NewsletterBreadcrumb from "../components/newsletter/NewsletterBreadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import NewsletterCardItem from "../components/newsletter/NewsletterCardItem";
import Feb from "../assets/newsletter/first-page.png";
import march from "../assets/newsletter/march-card.jpg";
import april from "../assets/newsletter/april-cover.jpg"
const cards = [
  {
    title: "Beyond Delhi NCR",
    imageUrl: Feb,
    to: "/newsletter/feb-2026",
  },
  {
    title: "March-2026",
    imageUrl: march,
    to: "/newsletter/march-2026",
  },
   {
    title: "April-2026",
    imageUrl: april,
    to: "/newsletter/april-2026",
  },
];

export default function NewsletterCardsPage() {
  return (
    <>
      <Helmet>

        {/* Title */}
        <title>
          Real Estate Newsletters & Market Insights | Brickhill Group
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore Brickhill Group newsletters covering real estate market insights, property investment trends, and opportunities in Gurugram and Delhi NCR."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="real estate newsletter India, Gurugram property market updates, property investment insights, real estate trends India, Brickhill Group newsletter"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brickhill Group" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.brickhillgroup.com/newsletter"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brickhillgroup.com/newsletter" />

        <meta
          property="og:title"
          content="Real Estate Newsletters | Brickhill Group"
        />

        <meta
          property="og:description"
          content="Stay updated with the latest property investment insights, Gurugram real estate trends, and market reports from Brickhill Group."
        />

        <meta
          property="og:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Real Estate Market Insights & Newsletters | Brickhill Group"
        />

        <meta
          name="twitter:description"
          content="Read the latest real estate newsletters and investment insights from Brickhill Group."
        />

        <meta
          name="twitter:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

      </Helmet>

      <div style={{ paddingTop: 70 }}>
        <NewsletterBreadcrumb />

        <Container className="py-4 text-center">
          <h1 className="fw-bold mb-4">Real Estate Newsletters & Market Insights</h1>

          <Row className="g-4 justify-content-center">
            {cards.map((c, idx) => (
              <Col key={idx} lg={4} md={6} sm={12}>
                <NewsletterCardItem {...c} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}