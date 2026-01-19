import { useEffect, useState } from 'react';
import { Calendar, User } from 'lucide-react';
import blogsData from '../data/blogs.json';

export default function Blog() {
  const [blogs, setBlogs] = useState<typeof blogsData>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBlogs(blogsData);
    setLoading(false);
  }, []);

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return (
    <section id="blog" className="py-20 bg-[#f6fbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E6F64] mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, news, and insights from the real estate world
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-[#1E6F64]">
            Loading blog posts...
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden border border-[#1E6F64]/10"
              >
                <div className="relative h-64">
                  <img src={blog.featured_image} alt={blog.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-[#1E6F64] to-[#4FA59A] text-white px-4 py-1 rounded-full text-sm">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1E6F64] mb-3">{blog.title}</h3>
                  <p className="text-neutral-600 mb-4 line-clamp-3">{blog.excerpt}</p>

                  <div className="flex gap-4 text-sm text-neutral-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1 text-[#1E6F64]" />
                      {blog.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-[#1E6F64]" />
                      {formatDate(blog.published_at)}
                    </div>
                  </div>

                  <button className="text-[#1E6F64] font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
