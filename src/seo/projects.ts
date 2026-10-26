import { createSlug } from "../components/utils/slug";

export type ProjectRecord = {
  id: string;
  title: string;
  description: string;
  type: string;
  location: string;
  area: string;
  status: string;
  price_range?: string;
  featured_image: string;
  amenities?: string[];
  created_at?: string;
};

/** Stable copies of the featured images already used on each project page. */
export const PROJECT_IMAGES: Record<string, string> = {
  p1: "/images/projects/goa.jpg",
  p2: "/images/projects/bridal-square.png",
  p3: "/images/projects/panipat-industrial.jpg",
  p4: "/images/projects/logi-prime.jpg",
  p5: "/images/projects/kbd-plaza.jpg",
  p6: "/images/projects/himalayan-city.png",
  p7: "/images/projects/yash-homes.jpg",
  p8: "/images/projects/yash-homes.jpg",
  p9: "/images/projects/kbd-plaza.jpg",
  p10: "/images/projects/himalayan-city.png",
  p11: "/images/projects/eden-street.jpeg",
};

/** External project sites already linked from the footer. */
export const PROJECT_WEBSITES: Record<string, string> = {
  p2: "https://kbdlandcorp.in/bridal-shopping-commercial",
  p3: "https://panipatindustrialplots.com/",
  p4: "https://thelogiprime.com/",
  p11: "https://kbdlandcorp.in/eden-street",
};

const TYPE_LABEL: Record<string, string> = {
  residential: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
  warehouse: "Warehouse",
};

export function propertyTypeLabel(type: string): string {
  return TYPE_LABEL[type] || type;
}

export function projectPath(project: { id: string; title: string }): string {
  if (project.id === "p1") return "/aaranya";
  return `/projects/${createSlug(project.title)}`;
}

export function projectTitle(project: ProjectRecord): string {
  const type = propertyTypeLabel(project.type);
  return `${project.title} | ${type} in ${project.location} | Brickhill Group`;
}
