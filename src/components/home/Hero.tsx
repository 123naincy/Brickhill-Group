import { Link } from "react-router-dom";


const HERO_VIDEO = "/videos/hero.mp4";
const PHONE = "+919910729150";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
        <div className="max-w-5xl">
          <h1 className="hero-title hero-animate hero-animate-1 mt-5">
            Experience Luxury Living
            <br />
            Amidst Nature
          </h1>

          <p className="hero-subtitle hero-animate hero-animate-2">
            Discover premium villa plots near Goa, thoughtfully crafted for luxury living, serene holiday homes, and exceptional long-term investment.
          </p>

          <div className="hero-buttons hero-animate hero-animate-3">
            <Link to="/contact" className="hero-btn-primary">
              Book Site Visit
            </Link>

            <a href={`tel:${PHONE}`} className="hero-btn-secondary">
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
