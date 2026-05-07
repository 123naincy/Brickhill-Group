import { useEffect, useState } from "react";
import { submitToSheet } from "../utils/submitToSheet";

export default function AutoPopupForm() {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "", // ✅ added
  });

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true); // ✅ start loader

  try {
    await submitToSheet({
      formName: "Popup Lead Form",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });

    alert("Form submitted successfully ✅");

    setIsOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    alert("Something went wrong ❌");
  } finally {
    setLoading(false); // ✅ stop loader
  }
};

  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={popupStyle}>
        
        {/* Close */}
        <button onClick={() => setIsOpen(false)} style={closeBtn}>
          ✖
        </button>

        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* ✅ Message Box */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            style={inputStyle}
          />

          <button type="submit" style={submitBtn} disabled={loading}>
  {loading ? "Submitting..." : "Submit"}
</button>
        </form>
      </div>
    </div>
  );
}

/* Styles */
const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const popupStyle: React.CSSProperties = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  width: "320px",
  position: "relative",
};

const closeBtn: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
  border: "none",
  background: "transparent",
  fontSize: "18px",
  cursor: "pointer",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const submitBtn: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  background: "#0b5394",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};