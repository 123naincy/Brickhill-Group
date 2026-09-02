import React, { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Home,
  Maximize2,
} from "lucide-react";
import "./ArayanaHero.css";

import studioImg from "../../assets/studio-apartment.png";
import oneBhkImg from "../../assets/1-bhk.png";
import twoBhkImg from "../../assets/2-bhk.png";
import bungalowImg from "../../assets/bunglows.png";

const residences = [
  {
    id: "studio",
    number: "01",
    type: "STUDIO APARTMENTS",
    title: "Studio",
    size: "255–300 sq. ft.",
    detail: "1 BLK",
    units: "102 Units",
    image: studioImg,
  },
  {
    id: "1bhk",
    number: "02",
    type: "RESIDENCES",
    title: "1 BHK",
    size: "300–450 sq. ft.",
    detail: "Fully Furnished",
    units: "32 Units",
    image: oneBhkImg,
  },
  {
    id: "2bhk",
    number: "03",
    type: "RESIDENCES",
    title: "2 BHK",
    size: "Premium Residences",
    detail: "Phase 2",
    units: "Premium Living",
    image: twoBhkImg,
  },
  {
    id: "bungalow",
    number: "04",
    type: "PREMIUM RESIDENCES",
    title: "Bungalows",
    size: "Premium Spaces",
    detail: "Phase 2",
    units: "Exclusive",
    image: bungalowImg,
  },
];

const ArayanaResidences: React.FC = () => {
  const [active, setActive] = useState("studio");

  const selected =
    residences.find((item) => item.id === active) ||
    residences[0];

  return (
    <section
      className="arayana-residences"
      id="residences"
    >

      {/* ================= HEADER ================= */}

      <div className="residences-header">

        <div>
          <span className="residences-eyebrow">
            THE RESIDENCES
          </span>

          <h2>
            Find your
            <br />
            <em>place at Arayana.</em>
          </h2>
        </div>

        <p>
          From intelligently planned studio apartments to
          premium residences and bungalows, choose a space
          that fits the way you want to live.
        </p>

      </div>


      {/* ================= MAIN SHOWCASE ================= */}

      <div className="residences-showcase">

        {/* Image */}

        <div className="residence-main-image">

          <img
            src={selected.image}
            alt={selected.title}
          />

          <div className="residence-image-overlay" />

          <div className="residence-image-number">
            {selected.number}
          </div>

          <div className="residence-image-caption">

            <span>
              {selected.type}
            </span>

            <h3>
              {selected.title}
            </h3>

          </div>

        </div>


        {/* Details */}

        <div className="residence-details">

          <span className="residence-detail-label">
            SELECTED RESIDENCE
          </span>

          <h3>
            {selected.title}
          </h3>

          <div className="residence-detail-line" />


          <div className="residence-specs">

            <div>
              <Maximize2 size={17} />

              <span>
                AREA
              </span>

              <strong>
                {selected.size}
              </strong>
            </div>

            <div>
              <Building2 size={17} />

              <span>
                CONFIGURATION
              </span>

              <strong>
                {selected.detail}
              </strong>
            </div>

            <div>
              <Home size={17} />

              <span>
                AVAILABILITY
              </span>

              <strong>
                {selected.units}
              </strong>
            </div>

          </div>


          <p className="residence-description">
            Thoughtfully planned spaces created for
            comfortable, contemporary living at Arayana.
          </p>


          <a
            href="#contact"
            className="residence-enquire"
          >
            Enquire About This Residence

            <span>
              <ArrowUpRight size={17} />
            </span>
          </a>

        </div>

      </div>


      {/* ================= CONFIGURATIONS ================= */}

      <div className="residence-selector">

        <div className="selector-heading">
          <span>
            EXPLORE CONFIGURATIONS
          </span>
        </div>


        <div className="residence-tabs">

          {residences.map((residence) => (

            <button
              key={residence.id}
              className={
                active === residence.id
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActive(residence.id)
              }
            >

              <span className="tab-number">
                {residence.number}
              </span>

              <span className="tab-content">

                <strong>
                  {residence.title}
                </strong>

                <small>
                  {residence.size}
                </small>

              </span>

              <ArrowUpRight
                size={15}
                className="tab-arrow"
              />

            </button>

          ))}

        </div>

      </div>

    </section>
  );
};

export default ArayanaResidences;