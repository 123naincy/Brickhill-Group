import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { newsletters } from "../data/newsletters";
import { Newsletter } from "../data/types/newsletter";
import LeftSidebar from "../components/newsletter/LeftSidebar";
import RightSidebar from "../components/newsletter/RightSidebar";
import NewsletterDetailPage from "../components/newsletter/NewsletterDetailPage";


export default function NewsletterDetail() {
  const { id } = useParams<{ id: string }>();

  const newsletter: Newsletter | undefined = newsletters.find(
    (item) => item.id === id
  );

  if (!newsletter) return <h2 className="text-center mt-5">Not Found</h2>;

  return (
   <Container fluid className="newspaper-wrapper">
  <Row className="justify-content-center">
    
    {/* LEFT */}
    <Col lg={3} className="d-none d-lg-block">
  <LeftSidebar mostRead={newsletter.mostRead} />
</Col>

    {/* CENTER */}
    <Col lg={6} md={12}>
<NewsletterDetailPage />
    </Col>

    {/* RIGHT */}
    <Col lg={3} className="d-none d-lg-block">
      <RightSidebar />
    </Col>

  </Row>
</Container>
  );
}