import { useState } from "react";
import { submitToSheet } from "../utils/submitToSheet";

const latestProjects = [
  { title: "BHL Aaranya", link: "https://www.brickhillandbase.com/sindhudurg" },
  { title: "BHL Landbase", link: "https://www.brickhillandbase.com/" },
   { title: "BHL GROUP", link: "https://brickhillgroup.com/" },
   { title: "BHL Studioz", link: "https://bhlstudioz.com/" },
  { title: "Panipat Industrial Plots", link: "https://panipatindustrialplots.com/" },
  { title: "Logi Prime – Warehouse Leasing, Development & Operations", link: "https://thelogiprime.com/" },
];

const latestBlogs = [
   { title: "Indian Real Estate: The Next Big Wealth Creator", link: "https://brickhillgroup.com/blog/indian-real-estate-the-next-big-wealth-creator" },
   { title: "Real Estate Trends Shaping the Future of Property Investment", link: "https://brickhillgroup.com/blog/real-estate-trends-shaping-the-future-of-property-investment" },
   { title: "How a Real Estate Realtor Provides Smart Real Estate Solutions", link: "https://brickhillgroup.com/blog/how-a-real-estate-realtor-provides-smart-real-estate-solutions" },
   { title: "Why Real Estate India Is Booming in 2026", link: "https://brickhillgroup.com/blog/why-real-estate-india-is-booming-in-2026" },
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
  <div className="space-y-4 mt-20 left-sidebar">

    {/* OUR LATEST PROJECTS */}
    <div className="bg-white p-6 rounded-2xl shadow-md border border-[#9fc5e9]/30">
      <h5 className="text-lg font-bold text-[#073762] mb-4 border-b border-[#9fc5e9]/30 pb-2 pt-5">
        Our Latest Projects
      </h5>

      <ul className="space-y-3">
        {latestProjects.map((item) => (
          <li key={item.title}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0b5394] hover:text-[#3d85c5] transition text-sm"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* BLOG SECTION */}
    <div className="bg-white p-6 rounded-2xl shadow-md border border-[#9fc5e9]/30">
      <h5 className="text-lg font-bold text-[#073762] mb-4 border-b border-[#9fc5e9]/30 pb-2 pt-2">
        Latest Blogs
      </h5>

      <ul className="space-y-3">
        {latestBlogs.map((blog) => (
          <li key={blog.title}>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0b5394] hover:text-[#3d85c5] transition text-sm"
            >
              {blog.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* LEAD FORM */}
    <div className="bg-gradient-to-br from-[#f4f8fc] to-white p-6 rounded-2xl shadow-xl border border-[#9fc5e9]/40">
      <h5 className="text-lg font-bold text-[#073762] mb-6">
        Get Free Consultation
      </h5>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg border border-[#9fc5e9]/40 focus:ring-2 focus:ring-[#3d85c5] outline-none transition"
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg border border-[#9fc5e9]/40 focus:ring-2 focus:ring-[#3d85c5] outline-none transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg border border-[#9fc5e9]/40 focus:ring-2 focus:ring-[#3d85c5] outline-none transition"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#073762] to-[#3d85c5] text-white py-3 rounded-full font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        <small className="block text-xs text-neutral-500 text-center mt-2">
          We respect your privacy. Your information is safe with us.
        </small>

      </form>
    </div>

  </div>
);
}