import React from "react";
import {
  ArrowUpRight,
  MapPin,
  Navigation,
  Waves,
  Plane,
  Palmtree,
  MapPinned,
} from "lucide-react";

import "./ArayanaHero.css";

const ArayanaLocation: React.FC = () => {
  return (
    <section className="arayana-location" id="location">

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
          Set in Sindhudurg, Maharashtra, Arayana brings
          together thoughtfully planned residences with the
          calm and natural character of its surroundings.
        </p>

        <div className="location-highlight">

          <div className="location-highlight-icon">
            <Waves size={20} />
          </div>

          <div>
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


      {/* ================= MAP VISUAL ================= */}
      <div className="location-map">

        <div className="map-grid" />

        <div className="map-land-shape" />

        <div className="arabian-sea-label">
          ARABIAN SEA
        </div>


        {/* ================= ROUTES ================= */}

        <svg
          className="map-route"
          viewBox="0 0 700 520"
          preserveAspectRatio="none"
        >

          {/* Mopa → Arayana */}
          <path
            className="route-main"
            d="
              M630 70
              C575 100 525 135 475 175
              C430 210 390 245 350 270
              C330 283 310 292 290 300
            "
          />

          {/* Arayana → Shiroda */}
          <path
            className="route-coastal"
            d="
              M290 300
              C255 308 220 320 190 338
              C155 355 125 370 95 382
            "
          />

          {/* Shiroda → Redi */}
          <path
            className="route-coastal"
            d="
              M95 382
              C108 405 125 425 145 445
            "
          />

          {/* Arayana → Nirvade */}
          <path
            className="route-secondary"
            d="
              M290 300
              C260 275 245 250 220 225
            "
          />

          {/* Redi → Vengurla */}
          <path
            className="route-secondary"
            d="
              M145 445
              C180 450 220 458 255 468
            "
          />

        </svg>


        {/* ================= MOPA AIRPORT ================= */}

        <div className="map-point map-mopa">

          <div className="map-point-icon airport">
            <Plane size={15} />
          </div>

          <div className="map-point-label">
            <strong>MOPA AIRPORT</strong>
            <span>GOA</span>
          </div>

        </div>


        {/* ================= ARAYANA ================= */}

        <div className="map-point map-arayana">

          <div className="arayana-pulse" />

          <div className="arayana-main-pin">
            <MapPin size={21} />
          </div>

          <div className="arayana-map-label">
            <span>PROJECT</span>
            <strong>ARAYANA</strong>
            <small>SINDHUDURG</small>
          </div>

        </div>


        {/* ================= SHIRODA BEACH ================= */}

        <div className="map-point map-shiroda">

          <div className="map-point-icon beach">
            <Palmtree size={14} />
          </div>

          <div className="map-point-label">
            <strong>SHIRODA BEACH</strong>
            <span>COASTAL ESCAPE</span>
          </div>

        </div>


        {/* ================= REDI BEACH ================= */}

        <div className="map-point map-redi">

          <div className="map-point-icon beach">
            <Palmtree size={14} />
          </div>

          <div className="map-point-label">
            <strong>REDI BEACH</strong>
            <span>BEACH & COAST</span>
          </div>

        </div>


        {/* ================= NIRVADE ================= */}

        <div className="map-point map-nirvade">

          <div className="map-point-icon place">
            <MapPinned size={14} />
          </div>

          <div className="map-point-label">
            <strong>NIRVADE</strong>
            <span>SAWANTWADI</span>
          </div>

        </div>


        {/* ================= VENGURLA ================= */}

        <div className="map-point map-vengurla">

          <div className="map-point-icon place">
            <MapPinned size={14} />
          </div>

          <div className="map-point-label">
            <strong>VENGURLA</strong>
            <span>SINDHUDURG</span>
          </div>

        </div>


        {/* ================= COMPASS ================= */}

        <div className="location-compass">

          <span>N</span>

          <Navigation size={18} />

        </div>


        {/* ================= MAP CAPTION ================= */}

        <div className="map-caption">

          <span>LOCATION</span>

          <strong>
            Sindhudurg
          </strong>

          <small>
            Maharashtra
          </small>

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
          <strong>Shiroda • Redi • Vengurla</strong>
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

export default ArayanaLocation;