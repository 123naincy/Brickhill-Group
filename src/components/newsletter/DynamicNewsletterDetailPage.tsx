import { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import type { Newsletter, Article } from "../../data/types/newsletter";

type Props = {
  newsletter: Newsletter;
};

function fileNameFromPath(path: string) {
  const parts = path.replace(/\\/g, "/").split("/");
  return parts[parts.length - 1] || path;
}

export default function DynamicNewsletterDetailPage({
  newsletter,
}: Props) {
  // Build-time map of local newsletter assets to their final URLs.
  // JSON can reference images by filename (e.g. "first-page.png").
  const imageUrlByFileName = useMemo(() => {
    const modules = import.meta.glob("../../assets/newsletter/*", {
      eager: true,
      query: "?url",
      import: "default",
    }) as Record<string, string>;

    const map: Record<string, string> = {};
    for (const [path, url] of Object.entries(modules)) {
      map[fileNameFromPath(path)] = url;
    }
    return map;
  }, []);

  const getImageUrl = (fileOrUrl: string) => {
    return imageUrlByFileName[fileOrUrl] ?? fileOrUrl;
  };

  const renderArticle = (article: Article) => {
    const hasTitle = !!article.title?.trim();
    const hasDirectorName = !!article.directorName?.trim();
    const hasDirectorRole = !!article.directorRole?.trim();

    return (
      <>
        <div className="main-banner">
          <img
            src={getImageUrl(article.image)}
            alt={hasTitle ? article.title : newsletter.title}
            className="img-fluid mb-3"
          />
        </div>

        <div className="article-block">
          {hasTitle ? <h2 className="fw-bold">{article.title}</h2> : null}

          {hasDirectorName ? <h4>{article.directorName}</h4> : null}
          {hasDirectorRole ? <h5>{article.directorRole}</h5> : null}

          {article.content ? (
            <p style={{ whiteSpace: "pre-line" }}>{article.content}</p>
          ) : null}
        </div>
      </>
    );
  };

  const introSection = newsletter.sections.find(
    (s) => !s.sectionTitle.trim()
  );
  const sectionList = newsletter.sections.filter((s) =>
    s.sectionTitle.trim()
  );

  return (
    <Container className="newsletter-container py-5">
      {/* First Full Page Image */}
      {newsletter.coverImage ? (
        <img
          src={getImageUrl(newsletter.coverImage)}
          alt="newsletter cover"
          className="newsletter-image img-fluid mb-4"
        />
      ) : null}

      {/* ================= HEADER ================= */}
      <Row
        className="align-items-center text-center pb-4 mb-5"
        style={{ borderBottom: "2px solid rgba(159,197,233,0.4)" }}
      >
        {/* LEFT LOGO */}
        <Col md={3} className="text-md-start text-center">
          {newsletter.logoImage ? (
            <img
              src={getImageUrl(newsletter.logoImage)}
              alt="Go Boundary Logo"
              className="logo"
            />
          ) : null}
        </Col>

        {/* CENTER TITLE */}
        <Col md={9}>
          <h1
            className="fw-bold newsletter-title mb-1"
            style={{
              background: "linear-gradient(90deg,#073762,#3d85c5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NEWS LETTER
          </h1>

          <div className="d-flex justify-content-between small">
            <span>{newsletter.date}</span>
            <span>{newsletter.volume ?? ""}</span>
          </div>
        </Col>
      </Row>

      {/* Intro articles (optional, represented by a section with empty title) */}
      {introSection?.articles.map((article) => (
        <div key={article.id}>{renderArticle(article)}</div>
      ))}

      {/* ================= MAIN SECTIONS ================= */}
      {sectionList.map((section) => {
        const isWorld2 = section.sectionTitle.trim().toUpperCase() === "WORLD 2.0";
        const headingClass = isWorld2
          ? "section-heading text-center py-3 my-5"
          : "section-heading text-center border-top border-bottom border-dark py-2 my-5";

        return (
          <div key={section.sectionTitle}>
            <h2 className={headingClass}>{section.sectionTitle}</h2>
            {section.articles.map((article) => (
              <div key={article.id}>{renderArticle(article)}</div>
            ))}
          </div>
        );
      })}
    </Container>
  );
}

