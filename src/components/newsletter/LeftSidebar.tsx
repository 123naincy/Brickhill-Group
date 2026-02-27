import { useState } from "react";
import { Link } from "react-router-dom";
import { submitToSheet } from "../utils/submitToSheet";

const latestProjects = [
  { title: "Eden Street", link: "https://kbdlandcorp.in/eden-street" },
  { title: "Bridal Square", link: "https://kbdlandcorp.in/bridal-shopping-commercial" },
  { title: "Panipat Industrial Plots", link: "https://panipatindustrialplots.com/" },
  { title: "Logi Prime – Warehouse Leasing, Development & Operations", link: "https://thelogiprime.com/" },
];

const latestBlogs = [
  { title: "Why Mohali and Kharar Are Attracting Buyers and Investors in 2026", link: "https://kbdlandcorp.in/blog/1" },
  { title: "Commercial Shops: A Smart Investment Opportunity in India’s Growing Real Estate Market", link: "https://kbdlandcorp.in/blog/2" },
];

export default function LeftSidebar() {

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      alert("Please enter valid 10 digit mobile number");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter valid email address");
      return;
    }

    try {
      setLoading(true);

      await submitToSheet({
        formName: "Left Sidebar Consultation Form",
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
      });

      alert("✅ Thank you! Your Consultation Request Has Been Received. We will Get Back to You Soon.");

      setFormData({
        name: "",
        mobile: "",
        email: "",
      });

    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="left-sidebar">

      {/* OUR LATEST PROJECTS */}
      <div className="sidebar-box">
        <h5 className="sidebar-heading">Our Latest Projects</h5>
        <ul className="sidebar-list">
          {latestProjects.map((item) => (
            <li key={item.title}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* BLOG SECTION */}
      <div className="sidebar-box">
        <h5 className="sidebar-heading">Latest Blogs</h5>
        <ul className="sidebar-list">
          {latestBlogs.map((blog) => (
            <li key={blog.title}>
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                {blog.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* LEAD FORM */}
      <div className="sidebar-box">
        <h5 className="sidebar-heading">Get Free Consultation</h5>

        <form onSubmit={handleSubmit} className="lead-form">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
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

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          <small style={{ display: "block", marginTop: "8px" }}>
            We respect your privacy. Your information is safe with us.
          </small>

        </form>
      </div>

    </div>
  );
}