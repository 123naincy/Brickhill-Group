import React from "react";
import {
  Waves,
  Dumbbell,
  Utensils,
  Sparkles,
  Trees,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

import "./ArayanaHero.css";

import poolImg from "../../assets/swinning-pool.png";
import wellnessImg from "../../assets/spa.png";
import restaurantImg from "../../assets/rastaurent.png";
import clubImg from "../../assets/club-house.png";
import outdoorImg from "../../assets/outdoor-spaces.png";
import gymImg from "../../assets/gym.png";

const amenities = [
  {
    title: "SWIMMING POOL",
    subtitle: "LEISURE & RELAXATION",
    image: poolImg,
    icon: Waves,
  },
  {
    title: "GYM & FITNESS",
    subtitle: "HEALTH & WELLNESS",
    image: gymImg,
    icon: Dumbbell,
  },
  {
    title: "RESTAURANT",
    subtitle: "DINING & SOCIAL",
    image: restaurantImg,
    icon: Utensils,
  },
  {
    title: "SPA & WELLNESS",
    subtitle: "RELAXATION & CARE",
    image: wellnessImg,
    icon: Sparkles,
  },
  {
    title: "Club House",
    subtitle: "SPORTS & OUTDOORS",
    image: clubImg,
    icon: Trophy,
  },
  {
    title: "OUTDOOR SPACES",
    subtitle: "NATURE & FRESH AIR",
    image: outdoorImg,
    icon: Trees,
  },
];

const ArayanaAmenities: React.FC = () => {
  return (
    <section className="arayana-amenities" id="amenities">

      {/* ================= HEADER ================= */}

      <div className="amenities-heading">

        <span className="amenities-eyebrow">
          LIFE AT ARAYANA
        </span>

        <h2>
          25+ Curated
          <br />
          <em>Amenities</em>
        </h2>

        <p>
          Thoughtfully designed spaces for wellness,
          recreation, connection and everyday living.
        </p>

      </div>


      {/* ================= AMENITY GRID ================= */}

      <div className="amenities-grid">

        {amenities.map((amenity, index) => {

          const Icon = amenity.icon;

          return (
            <div
              className="amenity-card"
              key={amenity.title}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >

              <img
                src={amenity.image}
                alt={amenity.title}
              />

              <div className="amenity-overlay" />

              {/* Number */}
              <span className="amenity-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>


              {/* Icon */}
              <div className="amenity-card-icon">
                <Icon size={22} strokeWidth={1.5} />
              </div>


              {/* Content */}
              <div className="amenity-card-content">

                <span>
                  {amenity.subtitle}
                </span>

                <h3>
                  {amenity.title}
                </h3>

                <div className="amenity-line" />

              </div>

            </div>
          );
        })}

      </div>


      {/* ================= MORE AMENITIES ================= */}

      <div className="amenities-more">

        <div className="amenities-more-text">

          <span>
            AND MUCH MORE
          </span>

          <strong>
            Designed around the way you live.
          </strong>

        </div>

        <a
          href="#contact"
          className="amenities-button"
        >
          Explore All Amenities

          <span>
            <ArrowUpRight size={17} />
          </span>
        </a>

      </div>

    </section>
  );
};

export default ArayanaAmenities;