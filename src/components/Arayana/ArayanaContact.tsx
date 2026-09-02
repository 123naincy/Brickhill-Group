import React from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import "./ArayanaHero.css";

const ArayanaContact: React.FC = () => {
  return (
    <section className="arayana-contact" id="contact">

      {/* Decorative background */}
      <div className="contact-bg-text">
        ARAYANA
      </div>


      <div className="contact-container">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="contact-intro">

          <span className="contact-eyebrow">
            BEGIN YOUR ARAYANA JOURNEY
          </span>

          <h2>
            Your place
            <br />
            <em>is waiting.</em>
          </h2>

          <p>
            Discover Arayana, Sindhudurg and explore premium
            villa plots, studio apartments, apartments and
            premium residences designed for a better way of living.
          </p>


          {/* Contact Info */}

          <div className="contact-info-list">

            <a href="tel:+919910729150">
              <span className="contact-info-icon">
                <Phone size={17} />
              </span>

              <div>
                <small>CALL US</small>
                <strong>+91 99107 29150</strong>
              </div>
            </a>


            <a href="mailto:info@brickhillgroup.com">
              <span className="contact-info-icon">
                <Mail size={17} />
              </span>

              <div>
                <small>EMAIL US</small>
                <strong>info@brickhillgroup.com</strong>
              </div>
            </a>


            <div className="contact-location">
              <span className="contact-info-icon">
                <MapPin size={17} />
              </span>

              <div>
                <small>LOCATION</small>
                <strong>Sindhudurg, Maharashtra</strong>
              </div>
            </div>

          </div>


          <div className="contact-note">
            <span>ARAYANA • SINDHUDURG</span>

            <strong>
              Luxury living. Natural surroundings.
            </strong>
          </div>

        </div>


        {/* =================================================
            FORM
        ================================================= */}

        <div className="contact-form-wrapper">

          <div className="contact-form-header">

            <div>
              <span>
                ENQUIRE NOW
              </span>

              <h3>
                Let's talk
                <br />
                <em>about Arayana.</em>
              </h3>
            </div>

            <div className="contact-form-number">
              01
            </div>

          </div>


          <form className="arayana-form">

            <div className="form-row">

              <div className="form-field">

                <label>
                  YOUR NAME
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  required
                />

              </div>


              <div className="form-field">

                <label>
                  PHONE NUMBER
                </label>

                <input
                  type="tel"
                  placeholder="+91"
                  name="phone"
                  required
                />

              </div>

            </div>


            <div className="form-field">

              <label>
                EMAIL ADDRESS
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                name="email"
              />

            </div>


            <div className="form-field">

              <label>
                I'M INTERESTED IN
              </label>

              <select name="interest" defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>

                <option value="villa-plots">
                  Premium Villa Plots
                </option>

                <option value="studio">
                  Studio Apartments
                </option>

                <option value="1bhk">
                  1 BHK Apartments
                </option>

                <option value="2bhk">
                  2 BHK Apartments
                </option>

                <option value="bungalow">
                  Premium Bungalows
                </option>

                <option value="commercial">
                  Commercial Spaces
                </option>

              </select>

            </div>


            <div className="form-field">

              <label>
                MESSAGE
              </label>

              <textarea
                name="message"
                rows={3}
                placeholder="Tell us what you're looking for..."
              />

            </div>


            <button
              type="submit"
              className="contact-submit"
            >

              <span>
                Request a Callback
              </span>

              <b>
                <ArrowUpRight size={18} />
              </b>

            </button>


            <p className="form-disclaimer">
              By submitting this form, you agree to be contacted
              regarding Arayana project information and enquiries.
            </p>

          </form>

        </div>

      </div>


      {/* =================================================
          BOTTOM STRIP
      ================================================= */}

      <div className="contact-bottom">

        <div className="contact-bottom-brand">
          ARAYANA
        </div>

        <div className="contact-bottom-center">
          SINDHUDURG • MAHARASHTRA
        </div>

        <a
          href="#top"
          className="contact-back-top"
        >
          BACK TO TOP
          <ArrowUpRight size={14} />
        </a>

      </div>

    </section>
  );
};

export default ArayanaContact;