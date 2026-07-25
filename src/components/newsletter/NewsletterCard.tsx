import { Link } from "react-router-dom";
import type { Newsletter } from "../../data/newsletters";

interface Props {
  newsletter: Newsletter;
}

const NewsletterCard = ({ newsletter }: Props) => {
  return (
    <Link
      to={`/newsletter/${newsletter.id}`}
      className="newsletter-card text-decoration-none"
    >
      <img
        src={newsletter.cover}
        alt={newsletter.title}
        className="newsletter-img"
      />

      <div className="newsletter-overlay">
        <button className="newsletter-btn">
          Read More
          <i className="bi bi-arrow-right ms-2"></i>
        </button>
      </div>
    </Link>
  );
};

export default NewsletterCard;