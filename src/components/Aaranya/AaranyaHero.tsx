import React from "react";
import {
  ArrowUpRight,
  MapPin,
  MoveUpRight,
} from "lucide-react";
import "./AaranyaHero.css";
import hero from "../../assets/aryana-hero.jpg"
const AaranyaHero: React.FC = () => {
  return (
    <section className="Aaranya-hero-wrapper">
      <div className="Aaranya-hero-card">

        {/* ================= TOP NAV ================= */}
        <div className="Aaranya-hero-nav">

          <div className="Aaranya-logo">
            <div className="Aaranya-logo-mark">A</div>

            <div className="Aaranya-logo-text">
              <strong>Aaranya</strong>
              <span>BY BHL GROUP</span>
            </div>
          </div>

          <nav className="Aaranya-nav-links">
            <a href="#about">About</a>
            <a href="#residences">Residences</a>
            <a href="#amenities">Amenities</a>
            <a href="#location">Location</a>
            <a href="#gallery">Gallery</a>
          </nav>

          <a href="#contact" className="Aaranya-contact-btn">
            Contact Us
            <MoveUpRight size={15} />
          </a>

        </div>


        {/* ================= HERO IMAGE ================= */}
        <div className="Aaranya-hero-image">

          <img
            src={hero}
            alt="Aaranya residential project in Sindhudurg"
            decoding="async"
            fetchPriority="high"
          />

          <div className="Aaranya-image-overlay" />


          {/* ================= HERO CONTENT ================= */}
          <div className="Aaranya-content">

            <div className="Aaranya-location-badge">
              <MapPin size={13} />
              Sindhudurg, Maharashtra
            </div>

            <p className="Aaranya-kicker">
              A NEW WAY OF LIVING
            </p>

            <h1>
              Live closer
              <br />
              <em>to nature.</em>
            </h1>

            <p className="Aaranya-description">
              Discover thoughtfully designed studios and
              apartments surrounded by the natural beauty
              of Sindhudurg.
            </p>


            {/* CTA BUTTONS */}
            <div className="Aaranya-buttons">

              <a
                href="#residences"
                className="Aaranya-primary-btn"
              >
                <span>Explore Residences</span>

                <span className="Aaranya-btn-icon">
                  <ArrowUpRight size={18} />
                </span>
              </a>

              <a
                href="#contact"
                className="Aaranya-secondary-btn"
              >
                Book a Site Visit
              </a>

            </div>

          </div>


          {/* ================= FLOATING CARD ================= */}
          <div className="Aaranya-floating-card">

            <div className="floating-card-top">
              <span>Aaranya</span>

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

export default AaranyaHero;