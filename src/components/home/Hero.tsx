import { useEffect, useState } from "react";

// Banner Images
import slide1 from "../../assets/slider-one.jpeg";

const slides = [slide1];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-screen overflow-hidden">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }`}
        >
          <img
            src={slide}
            alt={`BHL Group Banner ${index + 1}`}
            className="
              w-full
              h-full
              object-cover
              object-center
              md:object-center
            "
          />
        </div>
      ))}

      {/* Optional Dark Overlay */}
      

      {/* dots Navigation */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-8 h-3 bg-white"
                : "w-3 h-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}