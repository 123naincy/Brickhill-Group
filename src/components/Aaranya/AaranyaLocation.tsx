import React from "react";
import {
  ArrowUpRight,
  Waves,
  Play,
} from "lucide-react";

import "./AaranyaHero.css";
import map from "../../assets/map-location.mp4";
const AaranyaLocation: React.FC = () => {
  return (
    <section className="Aaranya-location" id="location">

      {/* ================= LEFT CONTENT ================= */}
      <div className="location-content">

        <span className="location-label">
          THE LOCATION • SINDHUDURG
        </span>

        <h2>
          Where nature
          <br />
          <em>feels closer.</em>
        </h2>

        <p className="location-intro">
          Set in Sindhudurg, Maharashtra, Aaranya brings
          together thoughtfully planned residences with the
          calm and natural character of its surroundings.
        </p>

        {/* Natural Surroundings */}
        <div className="location-highlight">

          <div className="location-highlight-icon">
            <Waves size={20} />
          </div>

          <div className="location-highlight-content">

            <span>NATURAL SURROUNDINGS</span>

            <strong>
              A setting shaped by nature
            </strong>

            <p>
              Experience a lifestyle surrounded by greenery,
              coastal destinations and a natural river flow.
            </p>

          </div>

        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="location-cta"
        >
          Plan Your Visit

          <span>
            <ArrowUpRight size={17} />
          </span>
        </a>

      </div>


      {/* ================= VIDEO VISUAL ================= */}
      <div className="location-video">

        {/* Video */}
        <video
          className="location-video-element"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src={map}
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>


        {/* Dark Overlay */}
        <div className="location-video-overlay" />


        {/* Top Label */}
        <div className="location-video-top">

          <div className="location-video-badge">
            <span className="video-live-dot" />
            EXPLORE THE LOCATION
          </div>

          <div className="location-video-play">
            <Play size={15} fill="currentColor" />
          </div>

        </div>
      </div>


      {/* ================= BOTTOM STATS ================= */}
      <div className="location-bottom">

        <div className="location-bottom-item">
          <span>DESTINATION</span>
          <strong>Sindhudurg</strong>
        </div>

        <div className="location-bottom-item">
          <span>NEARBY</span>
          <strong>Mopa Airport</strong>
        </div>

        <div className="location-bottom-item">
          <span>COASTAL BELT</span>
          <strong>
            Shiroda • Redi • Vengurla
          </strong>
        </div>

        <div className="location-bottom-item location-bottom-action">

          <a href="#contact">
            Get Directions
            <ArrowUpRight size={15} />
          </a>

        </div>

      </div>

    </section>
  );
};

export default AaranyaLocation;