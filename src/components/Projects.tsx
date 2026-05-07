import { useEffect, useState } from "react";
import projectsData from "../data/projects.json";
import { MapPin, Square, Tag } from "lucide-react";
import { Project } from "../types/Project";
import { allImages, fallbackImage } from "../data/AllImages";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "industrial", label: "Industrial" },
    { value: "warehouse", label: "Warehouse" },
  ];

  useEffect(() => {
    setLoading(true);
    let filteredProjects = [...projectsData] as Project[];

    if (filter !== "all") {
      filteredProjects = filteredProjects.filter((p) => p.type === filter);
    }

    filteredProjects.sort(
      (a, b) =>
        new Date(b.created_at).getTime() -
        new Date(a.created_at).getTime()
    );

    setProjects(filteredProjects);
    setLoading(false);
  }, [filter]);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-[#f4f8fc] via-white to-[#eaf3fb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#073762] to-[#3d85c5] bg-clip-text text-transparent mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover our portfolio of exceptional developments across all sectors
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === f.value
                  ? "bg-gradient-to-r from-[#0b5394] to-[#3d85c5] text-white shadow-lg"
                  : "bg-white text-[#073762] border border-[#9fc5e9]/40 hover:bg-[#f0f6fd]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-20 text-[#073762]/70">
            Loading projects...
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#9fc5e9]/30 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
  src={allImages[project.featured_image] || fallbackImage}
  alt={project.title}
/>

                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-[#073762] to-[#3d85c5] text-white px-4 py-1 rounded-full text-sm font-semibold capitalize shadow">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#073762] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-neutral-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="space-y-2 text-neutral-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-[#3d85c5]" />
                      <span className="text-sm">{project.location}</span>
                    </div>

                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-2 text-[#3d85c5]" />
                      <span className="text-sm">{project.area}</span>
                    </div>

                    {project.price_range && (
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-2 text-[#3d85c5]" />
                        <span className="text-sm">{project.price_range}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}