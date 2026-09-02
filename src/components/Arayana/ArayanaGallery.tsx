import React from "react";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import "./ArayanaHero.css";

import gallery1 from "../../assets/aryana-lifestyle.png";
import gallery2 from "../../assets/premium-spcaes.png";
import gallery3 from "../../assets/natural-surrending.png";
import gallery4 from "../../assets/community-spaces.png";
import gallery5 from "../../assets/outdoor-spaces.png";

const galleryItems = [
  {
    image: gallery1,
    title: "The Arayana Lifestyle",
    category: "LIFESTYLE",
    size: "large",
  },
  {
    image: gallery2,
    title: "Premium Residences",
    category: "RESIDENCES",
    size: "small",
  },
  {
    image: gallery3,
    title: "Natural Surroundings",
    category: "NATURE",
    size: "small",
  },
  {
    image: gallery4,
    title: "Community Spaces",
    category: "COMMUNITY",
    size: "medium",
  },
  {
    image: gallery5,
    title: "Outdoor Living",
    category: "OUTDOORS",
    size: "medium",
  },
];

const ArayanaGallery: React.FC = () => {
  return (
    <section className="arayana-gallery" id="gallery">

      {/* ================= HEADER ================= */}

      <div className="gallery-header">

        <div>
          <span className="gallery-eyebrow">
            A GLIMPSE OF ARAYANA
          </span>

          <h2>
            See the
            <br />
            <em>possibility.</em>
          </h2>
        </div>

        <div className="gallery-header-right">

          <p>
            Explore a visual glimpse of the spaces,
            lifestyle and natural character envisioned
            at Arayana, Sindhudurg.
          </p>

          <span className="gallery-count">
            01 — 05
          </span>

        </div>

      </div>


      {/* ================= GALLERY ================= */}

      <div className="gallery-grid">

        {galleryItems.map((item, index) => (

          <div
            className={`gallery-item gallery-${item.size}`}
            key={item.image}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-overlay" />


            {/* Number */}

            <span className="gallery-number">
              {String(index + 1).padStart(2, "0")}
            </span>


            {/* Expand */}

            <button
              className="gallery-expand"
              aria-label={`View ${item.title}`}
            >
              <Maximize2 size={15} />
            </button>


            {/* Content */}

            <div className="gallery-item-content">

              <span>
                {item.category}
              </span>

              <h3>
                {item.title}
              </h3>

              <div className="gallery-line" />

            </div>

          </div>

        ))}

      </div>


      {/* ================= FOOTER ================= */}

      <div className="gallery-footer">

        <div>
          <span>
            ARAYANA • SINDHUDURG
          </span>

          <strong>
            A destination shaped around better living.
          </strong>
        </div>

        <a href="#contact">
          Plan a Site Visit

          <span>
            <ArrowUpRight size={16} />
          </span>
        </a>

      </div>

    </section>
  );
};

export default ArayanaGallery;