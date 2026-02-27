import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import { Calendar, User } from "lucide-react";

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Latest Blogs & Insights
          </h1>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Stay updated with real estate investment trends, market news, and
            property insights from KBD Landcorp.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* Blog Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Category */}
                <span className="text-sm bg-[#FCAF2E]/20 text-[#FCAF2E] px-3 py-1 rounded-full">
                  {blog.category}
                </span>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mt-4 line-clamp-2">
                  {blog.title}
                </h2>

                {/* Author + Date */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
                  <p className="flex items-center gap-1">
                    <User size={16} />
                    {blog.author}
                  </p>

                  <p className="flex items-center gap-1">
                    <Calendar size={16} />
                    {blog.date}
                  </p>
                </div>

                {/* Button */}
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-block mt-6 text-[#FCAF2E] font-semibold hover:underline"
                >
                  Read Full Blog →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
