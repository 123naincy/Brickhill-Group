import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blog";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { createSlug } from "../components/utils/slug";
import { submitToSheet } from "../components/utils/submitToSheet";
import { Helmet } from "react-helmet-async";
export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => createSlug(b.title) === slug);

  if (!blog) {
    return <h2 className="text-center mt-10">Blog Not Found ❌</h2>;
  }

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitToSheet({
        ...formData,
        formName: "Blog Detail Consultation",
      });
      alert("Thank you! Our team will contact you soon.");
      setFormData({ name: "", phone: "", email: "" });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
    <Helmet>
  {/* Primary SEO */}
  <title>
    {blog.title} | BHL Group
  </title>

  <meta
    name="description"
    content="Explore premium real estate insights, investment opportunities, infrastructure developments, luxury projects, warehousing, and market trends with BHL Group across India."
  />

  <meta
    name="keywords"
    content="BHL Group, BHL Group, Real Estate India, Property Investment, Luxury Real Estate, Land Banking India, Infrastructure Development, Warehousing Solutions, Goa Real Estate, Delhi NCR Projects, Investment Opportunities"
  />

  <meta
    name="author"
    content="BHL Group"
  />

  <meta
    name="robots"
    content="index, follow"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href={`https://brickhillgroup.com/blog/${slug}`}
  />

  {/* Open Graph */}
  <meta
    property="og:type"
    content="article"
  />

  <meta
    property="og:title"
    content={`${blog.title} | BHL Group`}
  />

  <meta
    property="og:description"
    content="Read expert insights on luxury real estate, land banking, infrastructure, logistics, and investment opportunities across India with BHL Group."
  />

  <meta
    property="og:url"
    content={`https://brickhillgroup.com/blog/${slug}`}
  />

  <meta
    property="og:image"
    content={blog.image}
  />

  <meta
    property="og:site_name"
    content="BHL Group"
  />

  {/* Twitter SEO */}
  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content={`${blog.title} | BHL Group`}
  />

  <meta
    name="twitter:description"
    content="Explore premium real estate trends, infrastructure developments, and investment opportunities with BHL Group."
  />

  <meta
    name="twitter:image"
    content={blog.image}
  />

  {/* Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blog.title,
      image: blog.image,
      author: {
        "@type": "Organization",
        name: "BHL Group",
      },
      publisher: {
        "@type": "Organization",
        name: "BHL Group",
        logo: {
          "@type": "ImageObject",
          url: "https://brickhillgroup.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://brickhillgroup.com/blog/${slug}`,
      },
      description:
        "Explore luxury real estate, infrastructure, warehousing, land banking, and investment opportunities across India with BHL Group.",
    })}
  </script>
</Helmet>
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

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border rounded-xl p-3 outline-none focus:border-[#FCAF2E]"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full border rounded-xl p-3 outline-none focus:border-[#FCAF2E]"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border rounded-xl p-3 outline-none focus:border-[#FCAF2E]"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FCAF2E] text-black font-semibold py-3 rounded-xl hover:bg-black hover:text-white transition disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Request Callback →"}
            </button>
          </form>
          <p className="text-xs text-gray-400 text-center mt-4">
            ✅ Trusted Advisors • ✅ No Spam • ✅ Free Site Visit
          </p>
        </aside>
      </div>
    </div>
    </>
    
  );
}
