import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface NewsletterCardProps {
  title: string;
  imageUrl: string;
  to: string;
  buttonText?: string;
}

export default function NewsletterCardItem({
  title,
  imageUrl,
  to,
  buttonText = "Read More",
}: NewsletterCardProps) {
  return (
    <Card
      className="border-0 shadow-sm h-100 overflow-hidden"
      style={{
        borderRadius: "20px",
        border: "1px solid rgba(159,197,233,0.4)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Image */}
      <div
        style={{
          overflow: "hidden",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
          className="nl-hover-image"
        />
      </div>

      <Card.Body className="text-center p-4">
        <Card.Title
          className="fw-bold fs-5 mb-3"
          style={{ color: "#073762" }}
        >
          {title}
        </Card.Title>

        <Button
          as={Link}
          to={to}
          className="px-4 py-2 border-0 fw-semibold"
          style={{
            background: "linear-gradient(90deg, #073762, #3d85c5)",
            borderRadius: "50px",
          }}
        >
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}