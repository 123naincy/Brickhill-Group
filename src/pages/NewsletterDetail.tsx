import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import type { Newsletter } from "../data/types/newsletter";
import LeftSidebar from "../components/newsletter/LeftSidebar";
import RightSidebar from "../components/newsletter/RightSidebar";
import DynamicNewsletterDetailPage from "../components/newsletter/DynamicNewsletterDetailPage";

export default function NewsletterDetail() {
  const { id } = useParams<{ id: string }>();
  const [newsletter, setNewsletter] = useState<Newsletter | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/data/newsletters.json");
        if (!res.ok) {
          throw new Error(`Failed to load newsletters.json (${res.status})`);
        }

        const json = (await res.json()) as { newsletters: Newsletter[] };
        const found = json.newsletters.find((n) => n.id === id);

        if (!cancelled) {
          if (!found) {
            setError(`Newsletter not found for id "${id}"`);
            setNewsletter(null);
          } else {
            setNewsletter(found);
            setError(null);
          }
        }
      } catch (e) {
        if (!cancelled) {
          setError(
            e instanceof Error
              ? e.message
              : "Something went wrong loading newsletter"
          );
          setNewsletter(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const pageTitle = newsletter
    ? `${newsletter.title}: ${newsletter.date} | Brickhill Group Newsletter`
    : "Brickhill Group Newsletter";

  const canonicalUrl = id
    ? `https://brickhillgroup.com/newsletter/${id}`
    : "https://brickhillgroup.com/newsletter";

  return (
    <>
      <Helmet>
  {/* Primary SEO */}
  <title>
    {pageTitle} | BHL Group
  </title>

  <meta
    name="description"
    content="Explore the latest newsletters, luxury real estate insights, infrastructure updates, warehousing solutions, logistics trends, and investment opportunities across India with BHL Group."
  />

  <meta
    name="keywords"
    content="BHL Group Newsletter, Brickhill Group, Real Estate News India, Luxury Real Estate India, Infrastructure Development, Property Investment Insights, Warehousing Solutions India, Logistics Trends India, Land Banking India"
  />

  <meta
    name="robots"
    content="index, follow, max-image-preview:large"
  />

  <meta
    name="author"
    content="BHL Group"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href={canonicalUrl}
  />

  {/* Open Graph */}
  <meta
    property="og:type"
    content="article"
  />

  <meta
    property="og:title"
    content={`${pageTitle} | BHL Group`}
  />

  <meta
    property="og:description"
    content="Read the latest BHL Group newsletter covering real estate, infrastructure, logistics, warehousing, and investment opportunities across India."
  />

  <meta
    property="og:url"
    content={canonicalUrl}
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
    content={`${pageTitle} | BHL Group`}
  />

  <meta
    name="twitter:description"
    content="Explore premium newsletters and investment insights from BHL Group."
  />

  <meta
    name="twitter:image"
    content="https://brickhillgroup.com/og-newsletter.jpg"
  />

  {/* Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: pageTitle,
      description:
        "Official newsletter from BHL Group featuring real estate, infrastructure, warehousing, and investment insights.",
      publisher: {
        "@type": "Organization",
        name: "BHL Group",
        logo: {
          "@type": "ImageObject",
          url: "https://brickhillgroup.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonicalUrl,
      },
    })}
  </script>
</Helmet>

      <Container fluid className="newspaper-wrapper">
        <Row className="justify-content-center">
          {/* LEFT */}
          <Col lg={3} className="d-none d-lg-block">
            <LeftSidebar />
          </Col>

          {/* CENTER */}
          <Col lg={6} md={12}>
            {loading ? (
              <div className="py-5 text-center">Loading newsletter...</div>
            ) : error ? (
              <div className="py-5 text-center" style={{ color: "#b42318" }}>
                {error}
              </div>
            ) : newsletter ? (
              <DynamicNewsletterDetailPage newsletter={newsletter} />
            ) : null}
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