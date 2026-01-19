import { useEffect, useState } from "react";
import projectsData from "../../data/projects.json";
import { ArrowRight, MapPin } from "lucide-react";

interface Project {
  id: number | string;
  title: string;
  description: string;
  type: string;
  location: string;
  area: string;
  status: string;
  featured_image: string;
  created_at?: string;
}

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const completed = projectsData
      .filter(p => p.status === "completed")
      .sort((a, b) => new Date(b.created_at ?? "").getTime() - new Date(a.created_at ?? "").getTime())
      .slice(0, 3);

    setProjects(completed);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-[#f6fbf9] text-center">
        <div className="text-lg font-medium text-[#1E6F64]">Loading projects...</div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#f6fbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E6F64] mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Explore our landmark developments that define excellence
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden border border-[#1E6F64]/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.featured_image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute top-4 right-4 bg-gradient-to-r from-[#1E6F64] to-[#4FA59A] text-white px-4 py-1 rounded-full text-sm capitalize">
                  {project.type}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1E6F64] mb-2">{project.title}</h3>

                <div className="flex items-center text-neutral-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1 text-[#1E6F64]" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <p className="text-neutral-600 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-500">{project.area}</span>
                  <a href="#projects" className="text-[#1E6F64] font-semibold hover:underline">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#1E6F64] to-[#4FA59A] text-white font-semibold rounded-lg hover:scale-105 transition"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
