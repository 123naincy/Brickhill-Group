import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { newsletters } from "../data/newsletters";
import FlipBook from "../components/newsletter/FlipBook";
import { getPdfUrl } from "../utils/pdfUrl";

const NewsletterViewer = () => {
  const { id } = useParams();
  const newsletter = newsletters.find((item) => item.id === Number(id));

  if (!newsletter) {
    return (
      <div className="pt-24 px-6 text-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-[#073762] mb-4">
          Newsletter Not Found
        </h2>
        <Link to="/newsletter" className="text-[#3d85c5] font-semibold">
          ← Back to Newsletters
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${newsletter.title} | BHL Group`}</title>
      </Helmet>

      <div className="viewer-page pt-24">
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
      </div>
    </>
  );
};

export default NewsletterViewer;
