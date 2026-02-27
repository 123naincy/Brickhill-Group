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
    <section className="py-24 bg-gradient-to-b from-[#f4f8fc] to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-extrabold mb-4"
            style={{
              background: "linear-gradient(90deg,#073762,#3d85c5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Delivered Projects
          </h2>

          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Successfully delivered developments that reflect trust,
            precision, and long-term value creation.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {projects.map((project) => {
            const imageSrc =
              allImages[project.featured_image] || fallbackImage;

            return (
              <div
                key={project.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#9fc5e9]/30 shadow-md hover:shadow-2xl transition duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <span className="absolute top-4 right-4 bg-gradient-to-r from-[#073762] to-[#3d85c5] text-white px-4 py-1 rounded-full text-sm capitalize shadow">
                    {project.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#073762] mb-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-neutral-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1 text-[#3d85c5]" />
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
                      className="text-[#3d85c5] font-semibold hover:text-[#073762] transition"
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
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#073762] to-[#3d85c5] text-white font-semibold rounded-full shadow-xl hover:scale-105 transition duration-300"
          >
            View All Projects
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

      </div>
    </section>
  );
}