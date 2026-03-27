export interface Article {
  id: number;
  title: string;
  image: string;
  content: string;
  directorName?: string;
  directorRole?: string;
}

export interface Section {
  sectionTitle: string;
  articles: Article[];
}

export interface SidebarLink {
  title: string;
  link: string;
}

export interface Newsletter {
  id: string;
  title: string;
  date: string;
  volume?: string;
  coverImage?: string;
  logoImage?: string;
  sections: Section[];   // ✅ This is correct
  mostRead: SidebarLink[];
}