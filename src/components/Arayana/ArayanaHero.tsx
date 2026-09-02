import React from "react";
import {
  ArrowUpRight,
  MapPin,
  MoveUpRight,
} from "lucide-react";
import "./ArayanaHero.css";
import hero from "../../assets/aryana-hero.png"
const ArayanaHero: React.FC = () => {
  return (
    <section className="arayana-hero-wrapper">
      <div className="arayana-hero-card">

        {/* ================= TOP NAV ================= */}
        <div className="arayana-hero-nav">

          <div className="arayana-logo">
            <div className="arayana-logo-mark">A</div>

            <div className="arayana-logo-text">
              <strong>ARAYANA</strong>
              <span>BY BHL GROUP</span>
            </div>
          </div>

          <nav className="arayana-nav-links">
            <a href="#about">About</a>
            <a href="#residences">Residences</a>
            <a href="#amenities">Amenities</a>
            <a href="#location">Location</a>
            <a href="#gallery">Gallery</a>
          </nav>

          <a href="#contact" className="arayana-contact-btn">
            Contact Us
            <MoveUpRight size={15} />
          </a>

        </div>


        {/* ================= HERO IMAGE ================= */}
        <div className="arayana-hero-image">

          <img
            src={hero}
            alt="Arayana Sindhudurg"
          />

          <div className="arayana-image-overlay" />


          {/* ================= HERO CONTENT ================= */}
          <div className="arayana-content">

            <div className="arayana-location-badge">
              <MapPin size={13} />
              Sindhudurg, Maharashtra
            </div>

            <p className="arayana-kicker">
              A NEW WAY OF LIVING
            </p>

            <h1>
              Live closer
              <br />
              <em>to nature.</em>
            </h1>

            <p className="arayana-description">
              Discover thoughtfully designed studios and
              apartments surrounded by the natural beauty
              of Sindhudurg.
            </p>


            {/* CTA BUTTONS */}
            <div className="arayana-buttons">

              <a
                href="#residences"
                className="arayana-primary-btn"
              >
                <span>Explore Residences</span>

                <span className="arayana-btn-icon">
                  <ArrowUpRight size={18} />
                </span>
              </a>

              <a
                href="#contact"
                className="arayana-secondary-btn"
              >
                Book a Site Visit
              </a>

            </div>

          </div>


          {/* ================= FLOATING CARD ================= */}
          <div className="arayana-floating-card">

            <div className="floating-card-top">
              <span>ARAYANA</span>

              <div className="floating-arrow">
                <ArrowUpRight size={16} />
              </div>
            </div>

            <h3>
              Your space.
              <br />
              Your escape.
            </h3>

            <p>
              Studios & Apartments
              <br />
              in Sindhudurg
            </p>

            <a href="#residences">
              Explore Residences
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ArayanaHero;