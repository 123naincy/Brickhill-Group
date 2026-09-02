import React from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  Waves,
  Sparkles,
  Home,
} from "lucide-react";
import "./ArayanaHero.css";
import lifestyle_image from "../../assets/lifestyle.png";

const ArayanaLifestyle: React.FC = () => {
  return (
    <section className="arayana-lifestyle" id="amenities">

      {/* ================= LEFT CONTENT ================= */}
      <div className="lifestyle-intro">

        <span className="lifestyle-label">
          THE ARAYANA EXPERIENCE
        </span>

        <h2>
          More than a
          <br />
          <em>place to live.</em>
        </h2>

        <p>
          Arayana brings together thoughtfully planned residences,
          a secure community and the natural charm of Sindhudurg
          to create a lifestyle that feels different from the ordinary.
        </p>

        <a
          href="#contact"
          className="lifestyle-cta"
        >
          Discover Arayana

          <span>
            <ArrowUpRight size={17} />
          </span>
        </a>

      </div>


      {/* ================= VISUAL ================= */}
      <div className="lifestyle-visual">

        <img
          src={lifestyle_image}
          alt="Arayana Lifestyle"
        />

        <div className="lifestyle-image-overlay" />

        <div className="lifestyle-quote">
          <span>ARAYANA</span>

          <strong>
            Luxury that feels
            <br />
            naturally yours.
          </strong>
        </div>

      </div>


      {/* ================= FEATURES ================= */}
      <div className="lifestyle-features">

        <div className="lifestyle-feature">

          <div className="feature-icon">
            <Waves size={20} />
          </div>

          <div>
            <span>01</span>

            <h3>
              Natural River Flow
            </h3>

            <p>
              A natural setting that brings the beauty
              of the surroundings closer to everyday life.
            </p>
          </div>

        </div>


        <div className="lifestyle-feature">

          <div className="feature-icon">
            <ShieldCheck size={20} />
          </div>

          <div>
            <span>02</span>

            <h3>
              Gated & Secure
            </h3>

            <p>
              A fully gated society with
              24 × 7 security for peace of mind.
            </p>
          </div>

        </div>


        <div className="lifestyle-feature">

          <div className="feature-icon">
            <Home size={20} />
          </div>

          <div>
            <span>03</span>

            <h3>
              Thoughtful Residences
            </h3>

            <p>
              From studio apartments to premium
              residences, spaces designed around modern living.
            </p>
          </div>

        </div>


        <div className="lifestyle-feature">

          <div className="feature-icon">
            <Sparkles size={20} />
          </div>

          <div>
            <span>04</span>

            <h3>
              Luxury Living
            </h3>

            <p>
              A lifestyle that combines comfort,
              surroundings and a sense of belonging.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ArayanaLifestyle;