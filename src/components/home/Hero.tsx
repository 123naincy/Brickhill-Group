import { useNavigate } from "react-router-dom";
import poster from "../../assets/slider-one.png";

const HERO_VIDEO = "/videos/hero.mp4";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[70vh] md:h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
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
            <button
              onClick={() => navigate("/contact")}
              className="hero-btn-primary"
            >
              Book Site Visit
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="hero-btn-secondary"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
