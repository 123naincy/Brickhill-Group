import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { submitToSheet } from "../utils/submitToSheet";
export default function NewsletterBreadcrumb() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      alert("Enter valid 10 digit mobile number");
      return;
    }

    try {
      setLoading(true);

      await submitToSheet({
        formName: "Newsletter Download Popup",
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
      });
      alert("✅ Thank you! We will Share with you.");

      setFormData({
        name: "",
        email: "",
        mobile: "",
      });

      setShow(false);

    } catch (error) {
      alert("❌ Something went wrong");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="breadcrumb-banner">
      <div className="overlay">
        <Container className="text-center text-white">

          {/* Breadcrumb Links */}
          <Breadcrumb className="justify-content-center custom-breadcrumb mb-3">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              Newsletter
            </Breadcrumb.Item>
          </Breadcrumb>

          {/* Title */}
          <h1 className="banner-title">
            February 2026 Real Estate Newsletter
          </h1>

          {/* Description */}
          <p className="banner-description">
            Explore the latest real estate trends, premium project updates,
            investment insights, and market intelligence curated by Brickhill Group.
          </p>

          {/* CTA Button */}
          <Button
            variant="light"
            size="lg"
            className="mt-3 fw-semibold px-4"
            onClick={() => setShow(true)}
          >
            Download Full Newsletter
          </Button>

          {/* Modal */}
          <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Download Newsletter</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mobile *</Form.Label>
                  <Form.Control
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="dark"
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit & Download"}
                </Button>
              </Form>
            </Modal.Body>
          </Modal>


        </Container>
      </div>
    </div>
  );
}