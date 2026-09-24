import React, { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import "./AaranyaHero.css";
import { submitToSheet } from "../utils/submitToSheet";

const AaranyaContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (isSubmitting) return;

  setIsSubmitting(true);

  try {
    await submitToSheet({
      formName: "Aaranya Contact Form",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.interest,
      message: formData.message,
    });

    alert("✅ Enquiry submitted successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    });

  } catch (error) {
    console.error("Submission error:", error);

    alert(
      "❌ Unable to submit enquiry. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="Aaranya-contact" id="contact">

      {/* ================= BACKGROUND ================= */}

      <div className="contact-bg-text">
        Aaranya
      </div>

      <div className="contact-container">

        {/* ================= LEFT CONTENT ================= */}

        <div className="contact-intro">

          <span className="contact-eyebrow">
            BEGIN YOUR AARANYA JOURNEY
          </span>

          <h2>
            Your place
            <br />
            <em>is waiting.</em>
          </h2>

          <p>
            Discover Aaranya, Sindhudurg and explore premium
            villa plots, studio apartments, apartments and
            premium residences designed for a better way of living.
          </p>

          {/* ================= CONTACT INFO ================= */}

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

            <a href="mailto:sales@brickhillgroup.com">
              <span className="contact-info-icon">
                <Mail size={17} />
              </span>

              <div>
                <small>EMAIL US</small>
                <strong>sales@brickhillgroup.com</strong>
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
            <span>AARANYA • SINDHUDURG</span>

            <strong>
              Luxury living. Natural surroundings.
            </strong>
          </div>

        </div>


        {/* ================= FORM ================= */}

        <div className="contact-form-wrapper">

          <div className="contact-form-header">

            <div>
              <span>ENQUIRE NOW</span>

              <h3>
                Let's talk
                <br />
                <em>about Aaranya.</em>
              </h3>
            </div>

            <div className="contact-form-number">
              01
            </div>

          </div>


          {/* IMPORTANT: onSubmit added here */}

          <form
            className="Aaranya-form"
            onSubmit={handleSubmit}
          >

            {/* ================= NAME + PHONE ================= */}

            <div className="form-row">

              <div className="form-field">

                <label>
                  YOUR NAME
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-field">

                <label>
                  PHONE NUMBER
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* ================= EMAIL ================= */}

            <div className="form-field">

              <label>
                EMAIL ADDRESS
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>


            {/* ================= INTEREST ================= */}

            <div className="form-field">

              <label>
                I'M INTERESTED IN
              </label>

              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
              >

                <option value="" disabled>
                  Select an option
                </option>

                <option value="Premium Villa Residential Plots">
                  Premium Villa Residential Plots
                </option>

                <option value="Studio Apartments">
                  Studio Apartments
                </option>

                <option value="1 BHK Apartments">
                  1 BHK Apartments
                </option>

                <option value="2 BHK Apartments">
                  2 BHK Apartments
                </option>

                <option value="Premium Bungalows">
                  Premium Bungalows
                </option>

                <option value="Commercial Spaces">
                  Commercial Spaces
                </option>

              </select>

            </div>


            {/* ================= MESSAGE ================= */}

            <div className="form-field">

              <label>
                MESSAGE
              </label>

              <textarea
                name="message"
                rows={3}
                placeholder="Tell us what you're looking for..."
                value={formData.message}
                onChange={handleChange}
              />

            </div>


            {/* ================= SUBMIT ================= */}

            <button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
            >

              <span>
                {isSubmitting
                  ? "Submitting..."
                  : "Request a Callback"}
              </span>

              <b>
                <ArrowUpRight size={18} />
              </b>

            </button>


            <p className="form-disclaimer">
              By submitting this form, you agree to be contacted
              regarding Aaranya project information and enquiries.
            </p>

          </form>

        </div>

      </div>


      {/* ================= BOTTOM STRIP ================= */}

      <div className="contact-bottom">

        <div className="contact-bottom-brand">
          Aaranya
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

export default AaranyaContact;