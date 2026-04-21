import { useState } from "react";
import { submitToSheet } from "../utils/submitToSheet";
import add from "../../assets/newsletter/top-add.png";
import sponsor from "../../assets/newsletter/sponshered.image.png";

export default function RightSidebar() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

      alert("✅ Thank you! We will share it with you.");
      window.open("/newsletter.pdf", "_blank");

      setFormData({ name: "", email: "", mobile: "" });
      setShowForm(false);

    } catch (error) {
      alert("❌ Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="right-sidebar">

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

      {/* VIDEO SECTION */}
      <div className="sidebar-box">
        <h5 className="sidebar-heading">Latest Videos</h5>

        {[
          { src: "-e5rXbdJTjc", title: "Eden Street Full Project" },
          { src: "h1fjP_KYlxU", title: "Epic Panipat Aerial Tour" },
          { src: "NI2lDQkM4Y4", title: "Sindudurg Project | Director's Message" },
        ].map((video, i) => (
          <div key={i} className="video-block">
            <iframe
              width="100%"
              height="180"
              src={`https://www.youtube.com/embed/${video.src}`}
              title={video.title}
              allowFullScreen
            />
            <small className="video-title">{video.title}</small>
          </div>
        ))}
      </div>

      {/* SPONSORED AD */}
      <div className="sidebar-box ad-box text-center">
        <small className="ad-label">SPONSORED</small>
        <img
          src={sponsor}
          alt="Sponsored"
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
        <p className="fw-bold text-[#073762]">Invest Smartly</p>
        <a href="tel:+91-83959945524">
          <button className="contact-btn w-100">
            Talk to Advisor
          </button>
        </a>
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h5 className="modal-title">Download Newsletter</h5>

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

            <button
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>

          </div>
        </div>
      )}
    </div>
  );
}