import { Newsletter } from "./types/newsletter";
import {Images} from "../assets/images"
export const newsletters: Newsletter[] = [
  {
    id: "feb-2026",
    title: "BEYOND DELHI NCR",
    date: "February 2026",
    coverImage: "/images/cover.jpg",

    sections: [
      {
        sectionTitle: "WORLD",
        articles: [
          {
            id: 1,
            title: "Oil Jumps on U.S.–Iran Escalation Fears",
            image: "/images/world1.jpg",
            content:
              "Oil prices moved sharply higher this week as markets priced in rising geopolitical tensions and supply concerns across global markets."
          },
          {
            id: 2,
            title: "Europe Signals Extended Conflict Horizon",
            image: "/images/world2.jpg",
            content:
              "European leaders indicated no tangible signs toward peace, reshaping energy, defence, and fiscal strategies across the region."
          }
        ]
      },
      {
        sectionTitle: "TECHNOLOGY",
        articles: [
          {
            id: 3,
            title: "Micron Expands India Footprint",
            image: "/images/tech1.jpg",
            content:
              "Micron has announced major semiconductor investments in Gujarat, strengthening India's manufacturing ecosystem."
          }
        ]
      },
      {
        sectionTitle: "REAL ESTATE",
        articles: [
          {
            id: 4,
            title: "Maharashtra Clears Land for Expressway Corridor",
            image: "/images/realestate1.jpg",
            content:
              "Strategic infrastructure funding boosts regional connectivity and unlocks new real estate growth corridors."
          }
        ]
      }
    ],

    mostRead: [
      {
        title: "Budget 2026 Manufacturing Push",
        link: "/newsletter/feb-2026"
      },
      {
        title: "India Private Sector Growth Strengthens",
        link: "/newsletter/feb-2026"
      },
      {
        title: "Adani to Invest $100 Billion",
        link: "/newsletter/feb-2026"
      }
    ],

    featuredProjects: [
      {
        id: 1,
        title: "Luxury Villas",
        image: "/images/project1.jpg",
        location: "Gurgaon"
      },
      {
        id: 2,
        title: "Premium Plots",
        image: "/images/project2.jpg",
        location: "Sohna"
      }
    ],

    sponsoredVideos: [
      {
        id: 1,
        title: "Upcoming Real Estate Webinar",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ],

    pdfUrl: "/pdf/Goboundry-February-NewsLetter.pdf"
  }
];