import { Link, Navigate, useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import { allImages, fallbackImage } from "../data/AllImages";
import { createSlug } from "../components/utils/slug";
import Seo from "../components/seo/Seo";
import Breadcrumbs from "../components/seo/Breadcrumbs";
import NotFound from "./NotFound";
import { buildProjectEntry } from "../seo/manifest";
import {
  PROJECT_WEBSITES,
  propertyTypeLabel,
  projectPath,
  type ProjectRecord,
} from "../seo/projects";

const projects = projectsData as ProjectRecord[];

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => createSlug(item.title) === slug);

  if (!project) return <NotFound />;
  if (project.id === "p1") return <Navigate to="/aaranya" replace />;

  const entry = buildProjectEntry(project);
  const image = allImages[project.featured_image] || fallbackImage;
  const website = PROJECT_WEBSITES[project.id];
  const related = projects
    .filter((item) => item.id !== project.id && item.type === project.type)
    .slice(0, 3);
  const showPrice = project.price_range && project.price_range !== "N/A";

  return (
    <>
      <Seo entry={entry} />
      <main className="pt-24 lg:pt-32 bg-gradient-to-br from-[#f4f8fc] via-white to-[#eaf3fb] min-h-screen">
        <Breadcrumbs items={entry.breadcrumbs} />
        <article className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <img
            src={image}
            alt={`${project.title} in ${project.location}`}
            className="w-full h-72 md:h-[420px] object-cover rounded-3xl"
            width={1280}
            height={720}
            fetchPriority="high"
            decoding="async"
          />

          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-[#3d85c5]">
            {propertyTypeLabel(project.type)} · {project.status}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#073762] mt-2">
            {project.title}
          </h1>
          <p className="text-lg text-neutral-700 mt-4 max-w-3xl">{project.description}</p>

          <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-2xl border border-[#9fc5e9]/40 p-5">
              <dt className="text-sm text-neutral-500">Location</dt>
              <dd className="text-[#073762] font-semibold mt-1">{project.location}</dd>
            </div>
            <div className="bg-white rounded-2xl border border-[#9fc5e9]/40 p-5">
              <dt className="text-sm text-neutral-500">Type</dt>
              <dd className="text-[#073762] font-semibold mt-1">{propertyTypeLabel(project.type)}</dd>
            </div>
            <div className="bg-white rounded-2xl border border-[#9fc5e9]/40 p-5">
              <dt className="text-sm text-neutral-500">Area</dt>
              <dd className="text-[#073762] font-semibold mt-1">{project.area}</dd>
            </div>
            {showPrice && (
              <div className="bg-white rounded-2xl border border-[#9fc5e9]/40 p-5">
                <dt className="text-sm text-neutral-500">Price range</dt>
                <dd className="text-[#073762] font-semibold mt-1">{project.price_range}</dd>
              </div>
            )}
          </dl>

          {project.amenities && project.amenities.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold text-[#073762]">Project details</h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {project.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="bg-white border border-[#9fc5e9]/40 text-[#073762] px-4 py-2 rounded-full text-sm"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#073762] to-[#3d85c5] text-white px-6 py-3 rounded-full font-semibold"
            >
              Enquire about {project.title}
            </Link>
            <Link
              to="/projects"
              className="bg-white border border-[#9fc5e9] text-[#073762] px-6 py-3 rounded-full font-semibold"
            >
              All projects
            </Link>
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#9fc5e9] text-[#073762] px-6 py-3 rounded-full font-semibold"
              >
                Project website
              </a>
            )}
          </div>

          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-[#073762]">Related projects</h2>
              <ul className="mt-6 grid md:grid-cols-3 gap-6">
                {related.map((item) => (
                  <li key={item.id} className="bg-white rounded-2xl border border-[#9fc5e9]/40 overflow-hidden">
                    <img
                      src={allImages[item.featured_image] || fallbackImage}
                      alt={`${item.title} in ${item.location}`}
                      className="w-full h-44 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-[#073762]">
                        <Link to={projectPath(item)} style={{ color: "#073762" }}>
                          {item.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-neutral-600 mt-2">{item.location}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </main>
    </>
  );
}
