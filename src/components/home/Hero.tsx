import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

// Add your images here
import slide1 from "../../assets/banner-one.jpg";
import slide2 from "../../assets/banner-two.jpg";
import slide3 from "../../assets/banner-three.jpg";

const slides = [slide1, slide2, slide3];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden mt-10">

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt="Hero Slide"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Building Tomorrow’s
            <span
              className="block"
              style={{
                background: "linear-gradient(90deg,#9fc5e9,#3d85c5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Landmark Developments
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Delivering premium residential, commercial and industrial
            projects with trust, precision and long-term value.
          </p>

          <a
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#073762] to-[#3d85c5] text-white font-semibold rounded-full shadow-2xl hover:scale-105 transition duration-300"
          >
            Explore Projects
            <ArrowRight className="h-5 w-5" />
          </a>

        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index
                ? "bg-white scale-125"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </section>
  );
}