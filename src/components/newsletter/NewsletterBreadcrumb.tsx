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
  <div className="breadcrumb-banner position-relative mt-5" style={{
    background: "linear-gradient(135deg, #073762, #0b5394, #073762)",
    padding: "2rem 0",
  }}>
    <div className="overlay position-absolute top-0 start-0 w-100 h-100"
      style={{ background: "rgba(0,0,0,0.25)" }}
    ></div>

    <Container className="text-center text-white position-relative">

      {/* Breadcrumb */}
      <Breadcrumb className="justify-content-center custom-breadcrumb mb-3">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} className="text-light">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item active className="text-light">
          Newsletter
        </Breadcrumb.Item>
      </Breadcrumb>

      {/* Title */}
      <h1
        className="fw-bold"
        style={{
          fontSize: "42px",
          background: "linear-gradient(90deg, #9fc5e9, #6fa8dd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        February 2026 Real Estate Newsletter
      </h1>

      {/* Description */}
      <p className="mt-3 text-light" style={{ maxWidth: "700px", margin: "0 auto" }}>
        Explore the latest real estate trends, premium project updates,
        investment insights, and market intelligence curated by Brickhill Group.
      </p>

      {/* CTA */}
      <Button
        size="lg"
        className="mt-4 fw-semibold px-5 py-3 border-0"
        style={{
          background: "linear-gradient(90deg, #3d85c5, #6fa8dd)",
          color: "#fcfcfc",
          borderRadius: "50px",
        }}
        onClick={() => setShow(true)}
      >
        Download Full Newsletter
      </Button>
        
      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton style={{ background: "#073762", color: "white" }}>
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
                style={{
                  borderRadius: "10px",
                  border: "1px solid #9fc5e9"
                }}
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
                style={{
                  borderRadius: "10px",
                  border: "1px solid #9fc5e9"
                }}
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
                style={{
                  borderRadius: "10px",
                  border: "1px solid #9fc5e9"
                }}
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100 mt-2 border-0"
              disabled={loading}
              style={{
                background: "linear-gradient(90deg, #073762, #3d85c5)",
                borderRadius: "50px"
              }}
            >
              {loading ? "Submitting..." : "Submit & Download"}
            </Button>

          </Form>
        </Modal.Body>
      </Modal>

    </Container>
  </div>
);
}