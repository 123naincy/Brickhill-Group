import { useParams, Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import { newsletters } from "../data/newsletters";
import FlipBook from "../components/newsletter/FlipBook";
import { getPdfUrl } from "../utils/pdfUrl";
import NotFound from "./NotFound";
import { getSeoEntries } from "../seo/manifest";

const NewsletterViewer = () => {
  const { id } = useParams();
  const newsletter = newsletters.find((item) => item.id === Number(id));
  const entry = getSeoEntries().find((item) => item.path === `/newsletter/${id}`);

  if (!newsletter || !entry) {
    return <NotFound />;
  }

  return (
    <main className="viewer-page">
      <Seo entry={entry} />
      <Breadcrumbs items={entry.breadcrumbs} />
      <div className="viewer-header">
          <Link to="/newsletter" className="text-[#3d85c5] font-semibold">
            ← Back to Newsletters
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-[#073762]">
            {newsletter.month} {newsletter.year}
          </h1>
          <a
            href={getPdfUrl(newsletter.pdf)}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-open-btn"
          >
            Open PDF
          </a>
        </div>

        <FlipBook key={newsletter.id} pdf={newsletter.pdf} />
    </main>
  );
};

export default NewsletterViewer;
