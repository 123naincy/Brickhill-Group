export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'residential' | 'commercial' | 'industrial' | 'warehouse';
  location: string;
  area: string;
  status: 'ongoing' | 'completed' | 'upcoming';
  price_range?: string;
  featured_image: string;
  amenities?: string[];
  created_at: string;
}
