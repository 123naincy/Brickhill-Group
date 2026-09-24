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

import "./AaranyaHero.css";

import poolImg from "../../assets/swimming-pool.jpeg";
import wellnessImg from "../../assets/spa.jpg";
import restaurantImg from "../../assets/restaurant.jpg";
import clubImg from "../../assets/club-house.jpg";
import outdoorImg from "../../assets/out-door-spaces.jpg";
import gymImg from "../../assets/gym.jpg";

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

const AaranyaAmenities: React.FC = () => {
  return (
    <section className="Aaranya-amenities" id="amenities">

      {/* ================= HEADER ================= */}

      <div className="amenities-heading">

        <span className="amenities-eyebrow">
          LIFE AT Aaranya
        </span>

        <h2>
         Amenities Designed for
          <br />
          <em>Modern Living</em>
        </h2>

        <p>
          Thoughtfully crafted spaces for wellness, recreation, connection and everyday comfort.
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

export default AaranyaAmenities;