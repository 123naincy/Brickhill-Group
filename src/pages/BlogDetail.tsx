import { useParams, Link, Navigate } from "react-router-dom";
import { blogs } from "../data/blog";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { createSlug } from "../components/utils/slug";

export default function BlogDetail() {
const { id, slug } = useParams<{ id: string; slug?: string }>();
const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return <h2 className="text-center mt-10">Blog Not Found ❌</h2>;
  }

  const correctSlug = createSlug(blog.title);

  // 👉 agar slug missing hai
  if (!slug) {
    return <Navigate to={`/blog/${id}/${correctSlug}`} replace />;
  }

  // 👉 agar slug galat hai
  if (slug !== correctSlug) {
    return <Navigate to={`/blog/${id}/${correctSlug}`} replace />;
  }
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  if (!blog) {
    return <h2 className="text-center mt-10">Blog Not Found ❌</h2>;
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ✅ Hero Banner */}
      <div className="relative w-full h-[420px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Title */}
        <div className="absolute bottom-12 left-10 max-w-4xl text-white">
          <p className="text-sm uppercase tracking-wider">
            {blog.category} • {blog.date}
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-snug">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* ✅ Main Layout */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ✅ Blog Content */}
        <article className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-10">
          {/* Author */}
          <p className="text-gray-500 mb-6">
            Written by <span className="font-semibold">{blog.author}</span>
          </p>

          {/* Markdown */}
          <div className="prose prose-lg max-w-none prose-p:font-normal prose-img:rounded-xl prose-img:shadow-md blog-content">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>

          {/* CTA */}
          <div className="mt-14 p-8 rounded-2xl bg-[#FCAF2E]/20">
            <h2 className="text-2xl font-bold text-gray-900">
              Need Property Investment Guidance?
            </h2>

            <p className="text-gray-700 mt-2">
              Our experts can help you find the best opportunities in Mohali,
              Kharar, Gurugram and beyond.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-5 px-6 py-3 bg-[#FCAF2E] text-black font-semibold rounded-xl hover:bg-black hover:text-white transition"
            >
              Book Free Consultation →
            </Link>
          </div>
        </article>

        {/* ✅ Sticky Lead Form */}
        <aside className="sticky top-24 h-fit bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Get Free Consultation
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Fill details & our team will call you back.
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border rounded-xl p-3 outline-none focus:border-[#FCAF2E]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full border rounded-xl p-3 outline-none focus:border-[#FCAF2E]"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border rounded-xl p-3 outline-none focus:border-[#FCAF2E]"
            />
            <button
              type="submit"
              className="w-full bg-[#FCAF2E] text-black font-semibold py-3 rounded-xl hover:bg-black hover:text-white transition"
            >
              Request Callback →
            </button>
          </form>
          <p className="text-xs text-gray-400 text-center mt-4">
            ✅ Trusted Advisors • ✅ No Spam • ✅ Free Site Visit
          </p>
        </aside>
      </div>
    </div>
  );
}
