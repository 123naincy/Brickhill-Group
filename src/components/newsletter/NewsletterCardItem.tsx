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
    <Card className="nl-card border-0 shadow-sm">
      <div className="nl-image-wrap">
        <img src={imageUrl} alt={title} className="nl-image" />
      </div>

      <Card.Body className="text-center">
        <Card.Title className="fw-bold fs-5">{title}</Card.Title>

        <Button
          as={Link}
          to={to}
          variant="dark"
          className="mt-2 px-4 rounded-pill"
        >
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}