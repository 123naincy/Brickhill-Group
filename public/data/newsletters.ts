export interface Newsletter {
  id: number;
  month: string;
  year: number;
  title: string;
  description: string;
  cover: string;
  pdf: string;
}

export const newsletters: Newsletter[] = [
  {
    id: 1,
    month: "March",
    year: 2026,
    title: "GoBoundry Newsletter — March 2026",
    description: "Business, technology, sports, and real estate updates from BHL Group.",
    cover: "/assets/march-cover.png",
    pdf: "/newsletters/March.pdf",
  },
  {
    id: 2,
    month: "April",
    year: 2026,
    title: "BHL Newsletter — April 2026",
    description: "Business, technology, sports, and real estate updates from BHL Group.",
    cover: "/assets/april-cover.png",
    pdf: "/newsletters/April.pdf",
  },
  {
    id: 3,
    month: "June",
    year: 2026,
    title: "The Global Purse — June 2026",
    description: "Business, technology, sports, and real estate updates from BHL Group.",
    cover: "/assets/june-cover.png",
    pdf: "/newsletters/June.pdf",
  },
  {
    id: 4,
    month: "July",
    year: 2026,
    title: "Nation First — July 2026",
    description: "Business, technology, sports, and real estate updates from BHL Group.",
    cover: "/assets/july-cover.png",
    pdf: "/newsletters/July.pdf",
  },
];
