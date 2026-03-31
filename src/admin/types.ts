export type SectionType = "article" | "section-title";

export interface Newsletter {
  id: string;
  title: string;
  created_at: string;
}

export interface Section {
  id: number;
  newsletter_id: string;
  type: SectionType;
  title: string;
  content: string;
  image_url: string;
  position: number;
}
