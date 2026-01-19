import { useEffect, useState } from 'react';
import projectsData from '../data/projects.json';
import { MapPin, Square, Tag } from 'lucide-react';
import { Project } from '../types/Project';
import { IMAGES } from '../assets/images';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'warehouse', label: 'Warehouse' },
  ];

  useEffect(() => {
    setLoading(true);
    let filteredProjects = [...projectsData] as Project[];

    if (filter !== 'all') {
      filteredProjects = filteredProjects.filter(p => p.type === filter);
    }

    filteredProjects.sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    setProjects(filteredProjects);
    setLoading(false);
  }, [filter]);

  return (
    <section id="projects" className="py-20 bg-[#f6fbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E6F64] mb-4">
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
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                filter === f.value
                  ? 'bg-gradient-to-r from-[#1E6F64] to-[#4FA59A] text-white shadow'
                  : 'bg-white text-[#1E6F64] border border-[#1E6F64]/20 hover:bg-[#eef7f5]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-20 text-[#1E6F64]/70">
            Loading projects...
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden border border-[#1E6F64]/10"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={
                      IMAGES.projects[
                        project.featured_image as keyof typeof IMAGES.projects
                      ] || IMAGES.common.placeholder
                    }
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-[#1E6F64] to-[#4FA59A] text-white px-4 py-1 rounded-full text-sm font-semibold capitalize">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1E6F64] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-neutral-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="space-y-2 text-neutral-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-[#1E6F64]" />
                      <span className="text-sm">{project.location}</span>
                    </div>

                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-2 text-[#1E6F64]" />
                      <span className="text-sm">{project.area}</span>
                    </div>

                    {project.price_range && (
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-2 text-[#1E6F64]" />
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
