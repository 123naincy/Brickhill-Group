import { Link } from "react-router-dom";
import { blogs } from "../data/blog";
import { Calendar, User } from "lucide-react";
import { createSlug } from "./utils/slug";

type BlogSectionProps = {
  /** When true (blog route), use page-level H1 and full-height layout */
  isPage?: boolean;
};

export default function BlogSection({ isPage = false }: BlogSectionProps) {
  const HeadingTag = isPage ? "h1" : "h2";

  return (
    <section
      className={`${
        isPage ? "min-h-screen" : ""
      } bg-gradient-to-br from-[#f4f8fc] via-white to-[#eaf3fb] py-16`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <HeadingTag className="text-4xl font-extrabold bg-gradient-to-r from-[#073762] to-[#3d85c5] bg-clip-text text-transparent">
            Latest Blogs & Insights
          </HeadingTag>
          <p className="text-lg text-neutral-600 mt-3 max-w-2xl mx-auto">
            Stay updated with real estate investment trends, market news, and
            property insights from BHL Group.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#9fc5e9]/30 hover:-translate-y-2"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <span className="text-sm bg-[#3d85c5]/10 text-[#073762] px-3 py-1 rounded-full font-semibold">
                  {blog.category}
                </span>

                <h3 className="text-xl font-bold text-[#073762] mt-4 line-clamp-2">
                  {blog.title}
                </h3>

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

                <Link
                  to={`/blog/${createSlug(blog.title)}`}
                  className="inline-block mt-4 text-[#3d85c5] font-semibold hover:text-[#073762] transition"
                >
                  Read full blog
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
