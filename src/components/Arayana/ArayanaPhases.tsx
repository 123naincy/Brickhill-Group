import React from "react";
import {
  ArrowUpRight,
  Building2,
  Home,
  Map,
  ShieldCheck,
  Store,
} from "lucide-react";
import "./ArayanaHero.css";
import phase_one from "../../assets/phase-one.png";
import phase_two from "../../assets/phase-two.png";
const ArayanaPhases: React.FC = () => {
  return (
    <section className="arayana-phases" id="residences">

      {/* ================= HEADER ================= */}
      <div className="arayana-phases-header">

        <div className="arayana-phases-heading">

          <span className="arayana-section-label">
            ARAYANA • THE DEVELOPMENT
          </span>

          <h2>
            Two phases.
            <br />
            <em>One destination.</em>
          </h2>

        </div>

        <p className="arayana-phases-intro">
          A thoughtfully planned development combining premium
          villa plots, studio apartments, apartments, bungalows
          and commercial spaces across two distinctive phases.
        </p>

      </div>


      {/* ================= PHASE 01 ================= */}
      <article className="arayana-phase phase-one">

        {/* Image */}
        <div className="arayana-phase-image">

          <img
            src={phase_one}
            alt="Arayana Phase 1"
          />

          <div className="phase-image-overlay" />

          <div className="phase-number">
            01
          </div>

          <div className="phase-image-label">
            PREMIUM VILLA PLOTS
          </div>

        </div>


        {/* Content */}
        <div className="arayana-phase-content">

          <div className="phase-top">

            <div>
              <span className="phase-label">
                PHASE 01
              </span>

              <h3>
                Premium Villa
                <br />
                <em>Plots</em>
              </h3>
            </div>

            <div className="phase-acre">
              <strong>6.5</strong>
              <span>ACRES</span>
            </div>

          </div>


          <p className="phase-description">
            A limited inventory of premium villa plots designed
            for those looking to create their own space in a
            peaceful and secure setting.
          </p>


          {/* Highlights */}
          <div className="phase-highlights">

            <div className="phase-highlight">
              <Map size={20} />

              <div>
                <span>PLOT SIZES</span>
                <strong>350–450 sq. yd.</strong>
              </div>
            </div>


            <div className="phase-highlight">
              <Home size={20} />

              <div>
                <span>INVENTORY</span>
                <strong>45 Premium Villa Plots</strong>
              </div>
            </div>


            <div className="phase-highlight">
              <ShieldCheck size={20} />

              <div>
                <span>SECURITY</span>
                <strong>24 × 7 Security</strong>
              </div>
            </div>


            <div className="phase-highlight">
              <Map size={20} />

              <div>
                <span>SETTING</span>
                <strong>Natural River Flow</strong>
              </div>
            </div>

          </div>


          {/* Bottom */}
          <div className="phase-bottom">

            <div className="phase-tag">
              Luxury Living
            </div>

            <div className="phase-tag">
              High Return Investment
            </div>

            <a
              href="#contact"
              className="phase-explore"
            >
              Enquire About Phase 1
              <span>
                <ArrowUpRight size={16} />
              </span>
            </a>

          </div>

        </div>

      </article>


      {/* ================= PHASE 02 ================= */}
      <article className="arayana-phase phase-two">

        {/* Content */}
        <div className="arayana-phase-content">

          <div className="phase-top">

            <div>
              <span className="phase-label">
                PHASE 02
              </span>

              <h3>
                Fully Furnished
                <br />
                <em>Residences</em>
              </h3>
            </div>

            <div className="phase-acre">
              <strong>6.5</strong>
              <span>ACRES</span>
            </div>

          </div>


          <p className="phase-description">
            Phase 2 brings together fully furnished 1 BLK Studio
            Apartments, 1 BHK & 2 BHK Apartments, Premium
            Bungalows and commercial spaces.
          </p>


          {/* Residence Types */}
          <div className="phase-two-types">

            <div className="phase-type">

              <div className="phase-type-icon">
                <Home size={20} />
              </div>

              <div>
                <strong>Studio Apartments</strong>
                <span>1 BLK • 255–300 sq. ft.</span>
              </div>

              <b>102</b>

            </div>


            <div className="phase-type">

              <div className="phase-type-icon">
                <Building2 size={20} />
              </div>

              <div>
                <strong>1 BHK Apartments</strong>
                <span>300–450 sq. ft.</span>
              </div>

              <b>32</b>

            </div>


            <div className="phase-type">

              <div className="phase-type-icon">
                <Home size={20} />
              </div>

              <div>
                <strong>2 BHK Apartments</strong>
                <span>Premium Residences</span>
              </div>

              <b>—</b>

            </div>


            <div className="phase-type">

              <div className="phase-type-icon">
                <Store size={20} />
              </div>

              <div>
                <strong>Commercial Shops</strong>
                <span>318 sq. ft. each</span>
              </div>

              <b>09</b>

            </div>

          </div>


          {/* Buildings */}
          <div className="phase-building-info">

            <div className="building-number">
              2
            </div>

            <div>
              <span>RESIDENTIAL BUILDINGS</span>

              <strong>
                Two G+3 Residential Buildings
              </strong>
            </div>

          </div>


          <div className="phase-bottom">

            <div className="phase-tag">
              Fully Furnished
            </div>

            <div className="phase-tag">
              Premium Bungalows
            </div>

            <a
              href="#contact"
              className="phase-explore"
            >
              Explore Phase 2
              <span>
                <ArrowUpRight size={16} />
              </span>
            </a>

          </div>

        </div>


        {/* Image */}
        <div className="arayana-phase-image">

          <img
            src={phase_two}
            alt="Arayana Phase 2"
          />

          <div className="phase-image-overlay" />

          <div className="phase-number">
            02
          </div>

          <div className="phase-image-label">
            STUDIOS • APARTMENTS • BUNGALOWS
          </div>

        </div>

      </article>

    </section>
  );
};

export default ArayanaPhases;