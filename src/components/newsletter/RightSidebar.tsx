import { useState } from "react";
import { submitToSheet } from "../utils/submitToSheet";
import add from "../../assets/newsletter/top-add.png"
import sponsor from "../../assets/newsletter/sponshered.image.png";
export default function RightSidebar() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await submitToSheet({
        formName: "Newsletter Download Form",
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
      });

      alert("✅ Thank you! We will Share with you.");

      window.open("/newsletter.pdf", "_blank");

      setFormData({
        name: "",
        email: "",
        mobile: ""
      });

      setShowForm(false);

    } catch (error) {
      alert("❌ Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="right-sidebar">

      {/* TOP AD */}
      {/* TOP AD */}
<div className="sidebar-box ad-box text-center">
  <small className="ad-label">ADVERTISEMENT</small>
  <img
    src={add}
    alt="Top Ad"
    className="img-fluid ad-clickable"
    onClick={() => setShowForm(true)}
  />
</div>

      {/* VIDEO GALLERY */}
      <div className="sidebar-box">
        <h5 className="sidebar-heading border-bottom pb-2">
          Latest Videos
        </h5>

        <div className="video-block mb-3">
          <iframe
            width="100%"
            height="180"
            src="https://www.youtube.com/embed/-e5rXbdJTjc"
            title="Eden Street Full Project"
            allowFullScreen
          />
          <small className="video-title">
            Eden Street Full Project
          </small>
        </div>

        <div className="video-block mb-3">
          <iframe
            width="100%"
            height="180"
            src="https://www.youtube.com/embed/h1fjP_KYlxU"
            title="Epic Panipat Aerial Tour"
            allowFullScreen
          />
          <small className="video-title">
            Epic Panipat Aerial Tour | Stunning Drone Footage
          </small>
        </div>

        <div className="video-block">
          <iframe
            width="100%"
            height="180"
            src="https://www.youtube.com/embed/NI2lDQkM4Y4"
            title="Sindudurg Project Message"
            allowFullScreen
          />
          <small className="video-title">
            Sindudurg Project | Director's Message
          </small>
        </div>
      </div>

      {/* MID AD */}
     {/* MID AD */}
<div className="sidebar-box ad-box text-center">
  <small className="ad-label">SPONSORED</small>
  <img
    src={sponsor}
    alt="Sponsored Ad"
    className="img-fluid ad-clickable"
    onClick={() => setShowForm(true)}
  />
</div>

      {/* DOWNLOAD BUTTON */}
      <div className="sidebar-box text-center">
        <button
          className="download-btn w-100"
          onClick={() => setShowForm(true)}
        >
          Download Full Newsletter (PDF)
        </button>
      </div>

      {/* CONTACT CTA */}
      <div className="sidebar-box text-center">
        <p className="fw-bold">Invest Smartly</p>
        <a href="tel:+91-9910729093"><button className="contact-btn w-100">
          Talk to Advisor
        </button></a>
      </div>

      {/* MODAL FORM */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h5>Download Newsletter</h5>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />

              <button type="submit" className="submit-btn">
                Submit & Download
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}