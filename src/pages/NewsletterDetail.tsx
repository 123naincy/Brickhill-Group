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
        <title>{pageTitle}</title>
        <meta name="description" content="Read Brickhill Group's newsletter." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
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