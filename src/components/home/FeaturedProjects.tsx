import { useEffect, useState } from "react";
import projectsData from "../../data/projects.json";
import { ArrowRight, MapPin } from "lucide-react";
import type { Project } from "../../types/Project";
import { allImages, fallbackImage } from "../../data/AllImages";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const featured = (projectsData as any[])
      .filter((project) => project.status === "delivered")
      .sort((a, b) => {
        const aDate = a.created_at ? new Date(a.created_at).getTime() : 0;
        const bDate = b.created_at ? new Date(b.created_at).getTime() : 0;
        return bDate - aDate;
      })
      .slice(0, 3);

    setProjects(featured);
  }, []);

  if (!projects.length) return null;

  return (
    <section className="py-20 bg-[#f6fbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E6F64] mb-4">
            Delivered Projects
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Successfully delivered developments that reflect trust and quality
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-14">
          {projects.map((project) => {
            const imageSrc =
              allImages[project.featured_image] || fallbackImage;

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#1E6F64]/10 shadow hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="relative h-64">
                  <img
                    src={imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-gradient-to-r from-[#1E6F64] to-[#4FA59A] text-white px-4 py-1 rounded-full text-sm capitalize">
                    {project.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1E6F64] mb-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-neutral-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1 text-[#1E6F64]" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <p className="text-neutral-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500">
                      {project.area}
                    </span>
                    <a
                      href="#projects"
                      className="text-[#1E6F64] font-semibold hover:underline"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1E6F64] to-[#4FA59A] text-white font-semibold rounded-lg transition hover:scale-105"
          >
            View All Projects
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
