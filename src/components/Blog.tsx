import { Link } from "react-router-dom";
import { blogs } from "../data/blog";
import { Calendar, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { createSlug } from "./utils/slug";

export default function BlogPage() {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Real Estate Blog & Investment Insights | BHL Group
        </title>

        {/* Description */}
        <meta
          name="description"
          content="Read the latest blogs from BHL Group about real estate investment trends, Gurugram property market insights, and commercial property opportunities."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="real estate blog India, property investment tips, Gurugram real estate trends, commercial property investment insights, BHL Group blog"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="BHL Group" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.brickhillgroup.com/blog"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brickhillgroup.com/blog" />

        <meta
          property="og:title"
          content="Real Estate Blog & Investment Insights | BHL Group"
        />

        <meta
          property="og:description"
          content="Explore real estate investment guides, market insights, and property trends from BHL Group."
        />

        <meta
          property="og:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Real Estate Blog | BHL Group"
        />

        <meta
          name="twitter:description"
          content="Stay updated with real estate investment insights and Gurugram property trends."
        />

        <meta
          name="twitter:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

      </Helmet>
      <section className="min-h-screen bg-gradient-to-br from-[#f4f8fc] via-white to-[#eaf3fb] py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#073762] to-[#3d85c5] bg-clip-text text-transparent">
              Latest Blogs & Insights
            </h1>
            <p className="text-lg text-neutral-600 mt-3 max-w-2xl mx-auto">
              Stay updated with real estate investment trends, market news, and
              property insights from BHL Group.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#9fc5e9]/30 hover:-translate-y-2"
              >
                {/* Blog Image */}
                <div className="h-60 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6">

                  {/* Category */}
                  <span className="text-sm bg-[#3d85c5]/10 text-[#073762] px-3 py-1 rounded-full font-semibold">
                    {blog.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-[#073762] mt-4 line-clamp-2">
                    {blog.title}
                  </h2>

                  {/* Author + Date */}
                  <div className="flex items-center gap-4 text-sm text-neutral-500 mt-4">
                    <p className="flex items-center gap-1">
                      <User size={16} className="text-[#3d85c5]" />
                      {blog.author}
                    </p>

                    <p className="flex items-center gap-1">
                      <Calendar size={16} className="text-[#3d85c5]" />
                      {blog.date}
                    </p>
                  </div>

                  {/* Button */}
                  <Link to={`/blog/${createSlug(blog.title)}`}>
                    Read full blog
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}