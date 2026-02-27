import NewsletterBreadcrumb from "../components/newsletter/NewsletterBreadcrumb";
import { Container, Row, Col } from "react-bootstrap";
import NewsletterCardItem from "../components/newsletter/NewsletterCardItem";
import Feb from "../assets/newsletter/first-page.png";

const cards = [
  {
    title: "Beyond Delhi NCR",
    imageUrl: Feb,
    to: "/newsletter/feb-2026",
  },
  
];

export default function NewsletterCardsPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      <NewsletterBreadcrumb />

      <Container className="py-4 text-center">
        <h3 className="fw-bold mb-4">Newsletters</h3>

        <Row className="g-4 justify-content-center">
          {cards.map((c, idx) => (
            <Col key={idx} lg={4} md={6} sm={12}>
              <NewsletterCardItem {...c} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}