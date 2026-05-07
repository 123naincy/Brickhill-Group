import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import landbase from "../../assets/projects/landbase.jpg";
import realtors from "../../assets/projects/realtors.png";
import studio from "../../assets/projects/studio.jpg";
import logi from "../../assets/projects/warehouse-two.jpg";
import infra from "../../assets/projects/infra.jpg"
const tabsData = [
  {
    title: "BHL Landbase",
    url:"https://www.brickhillandbase.com/",
    image:
      landbase,
    description:
      "BHL Landbase plays a strategic role in shaping India’s emerging luxury real estate landscape by developing resort-style residential destinations that generate employment, boost tourism-driven economies, and create long-term asset value for investors and homebuyers alike. By focusing on Goa, Maharashtra, Chandigarh, and upcoming Sindhudurg developments, BHL contributes to regional growth while redefining lifestyle-led real estate.",
  },

  {
    title: "BHL Realtors",
    url:"https://www.brickhillandbase.com/",
    image:
      realtors,
    description:
      "BHL Realtors is a strategic land-banking and real estate advisory firm providing high-potential land assets across India. The company focuses on identifying, acquiring, and consolidating land parcels in emerging growth corridors, enabling future residential, commercial, and mixed-use developments. With a strong pan-India presence, BHL Realtors supports investors, developers, and institutions with secure, scalable, and appreciation-driven land opportunities.",
  },

  {
    title: "BHL Infra",
    url:"https://www.brickhillandbase.com/",
    image:
      infra,
    description:
      "BHL Infra is a specialized construction company delivering top-class, quality-driven construction solutions for large-scale real estate developments. The company works closely with leading real estate developers, ensuring precision execution, timely delivery, and superior build standards. With active involvement in upcoming projects across Delhi NCR, BHL Infra plays a key role in shaping modern residential and mixed-use developments.",
  },

  {
    title: "Logi Prime",
    url:"https://thelogiprime.com/",
    image:
      logi,
    description:
      "Logi Prime is a key company of the Brickhill Group, specializing in pan-India warehousing and integrated logistics solutions. The company supports supply chains by providing modern, scalable, and strategically located warehousing infrastructure tailored to the needs of manufacturers, distributors, and e-commerce players. With a focus on efficiency, reliability, and future-ready logistics, Logi Prime enables seamless movement and storage of goods across India.",
  },

  {
    title: "BHL Studioz",
    url:"https://bhlstudioz.com/",
    image:
      studio,
    description:
      "BHL Studioz is the creative and digital innovation arm of the Brickhill Group, focused on branding, content production, digital marketing, and modern media solutions. The company helps businesses build strong digital identities through creative storytelling, performance marketing, social media campaigns, and premium visual production. With a vision to blend creativity with strategy, BHL Studioz empowers brands to grow, engage audiences, and create lasting impact in the digital world.",
  },
];

export default function BusinessTabs() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="business-tabs">
            {/* Tabs */}
            <div className="tabs-header">
                {tabsData.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`tab-btn ${activeTab === index ? "active" : ""
                            }`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            {/* Content */}
            <div className="content-wrapper">
                <div className="left-content">
                    <h2
            className="text-xl font-bold mb-4"
            style={{
              background: "linear-gradient(90deg,#073762,#3d85c5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >{tabsData[activeTab].title}</h2>

                    <p>{tabsData[activeTab].description}</p>

                   <button className="explore-btn">
  {tabsData[activeTab].url ? (
    <a
      href={tabsData[activeTab].url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#073762] to-[#3d85c5] text-white font-semibold rounded-full shadow-xl hover:scale-105 transition duration-300"
    >
      {tabsData[activeTab].ctaText || "Explore More"}
      <ArrowUpRight size={18} />
    </a>
  ) : (
    <span>
      {tabsData[activeTab].ctaText || "Coming Soon"}
    </span>
  )}
</button>
                </div>

                <div className="right-content">
                    <img
                        src={tabsData[activeTab].image}
                        alt={tabsData[activeTab].title}
                    />
                </div>
            </div>
        </div>
    );
}