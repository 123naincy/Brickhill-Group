import { Helmet } from "react-helmet-async";
import NewsletterBreadcrumb from "../components/newsletter/NewsletterBreadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import NewsletterCardItem from "../components/newsletter/NewsletterCardItem";
import Feb from "../assets/newsletter/first-page.png";
import march from "../assets/newsletter/march-card.jpg";
import may from "../assets/newsletter/world-transition.png";
import june from "../assets/newsletter/card.png"
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
    title: "The World in Transition",
    imageUrl: may,
    to: "/newsletter/the-world-in-transition",
  },
   {
    title: "The Global Pulse",
    imageUrl: june,
    to: "/newsletter/the-global-pulse",
  },
];

export default function NewsletterCardsPage() {
  return (
    <>
      <Helmet>
  <title>
    BHL Group Newsletters | Real Estate, Infrastructure & Investment Insights
  </title>

  <meta
    name="title"
    content="BHL Group Newsletters | Real Estate, Infrastructure & Investment Insights"
  />

  <meta
    name="description"
    content="Explore BHL Group newsletters covering luxury real estate, infrastructure developments, warehousing, logistics, land banking, and investment opportunities across India."
  />

  <meta
    name="keywords"
    content="BHL Group Newsletter, BHL Group News, Real Estate Newsletter India, Luxury Real Estate India, Property Investment Insights, Infrastructure Development India, Land Banking India, Warehousing Solutions India, Goa Real Estate, Delhi NCR Projects, Investment Opportunities India"
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
    href="https://brickhillgroup.com/newsletter"
  />

  {/* Open Graph */}
  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:url"
    content="https://brickhillgroup.com/newsletter"
  />

  <meta
    property="og:title"
    content="BHL Group Newsletters | Real Estate & Investment Insights"
  />

  <meta
    property="og:description"
    content="Stay updated with luxury real estate trends, infrastructure projects, logistics solutions, and investment opportunities across India with BHL Group newsletters."
  />

  <meta
    property="og:image"
    content="https://brickhillgroup.com/og-newsletter.jpg"
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
    content="BHL Group Newsletters | Real Estate & Investment Updates"
  />

  <meta
    name="twitter:description"
    content="Read the latest newsletters from BHL Group covering luxury real estate, infrastructure, warehousing, logistics, and investment trends in India."
  />

  <meta
    name="twitter:image"
    content="https://brickhillgroup.com/og-newsletter.jpg"
  />

  {/* Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "BHL Group Newsletters",
      url: "https://brickhillgroup.com/newsletter",
      description:
        "Official newsletter page of BHL Group featuring real estate insights, infrastructure updates, warehousing solutions, logistics, and investment opportunities across India.",
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