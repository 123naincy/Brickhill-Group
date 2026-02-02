export type ProjectStatus = "delivered" | "ongoing" | "upcoming";

export interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  location: string;
  area: string;
  status: ProjectStatus;
  price_range: string;
  featured_image: string; // 🔑 image key
  amenities: string[];
  created_at?: string;
}
