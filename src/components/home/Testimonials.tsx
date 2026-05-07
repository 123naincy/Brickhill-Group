import { useEffect, useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

import male from "../../assets/male-icon.png";
import female from "../../assets/female.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sunil Kumar",
      role: "Investor – Aaranya Project",
      image: male,
      content:
        "I invested in 4 plots at the Aaranya Project through BHL Group, and the entire process was smooth, transparent, and professionally managed.",
      rating: 5,
    },

    {
      name: "Rajesh Malhotra",
      role: "Business Owner – Panipat Industrial Plots",
      image: male,
      content:
        "BHL Group helped us secure industrial plots in Panipat with excellent connectivity and infrastructure potential.",
      rating: 5,
    },

    {
      name: "Priya Mehta",
      role: "Investor – Eden Street Project",
      image: female,
      content:
        "The Eden Street project stood out because of its premium planning and strategic location. Highly professional experience.",
      rating: 5,
    },

    {
      name: "Amit Verma",
      role: "Real Estate Investor",
      image: male,
      content:
        "BHL Group projects offer strong appreciation potential and long-term value. Their market knowledge is excellent.",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    );
  };

  return (
    <section className="relative py-10 bg-[#f7fbff] overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#9fc5e9]/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#073762]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
      
          <h2
            className="text-4xl font-extrabold mb-4"
            style={{
              background: "linear-gradient(90deg,#073762,#3d85c5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Trusted by Investors 
            Across India
          </h2>

          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            Discover why investors, homebuyers, and business owners
            choose BHL Group for premium real estate and investment
            opportunities.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Slides */}
          <div
            className="flex transition-all duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-full px-3"
              >
                <div className="relative max-w-5xl mx-auto bg-white rounded-[40px] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/40 backdrop-blur-xl overflow-hidden">

                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 opacity-10">
                    <Quote
                      size={120}
                      className="text-[#073762]"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center mb-8">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-6 h-6 fill-[#3d85c5] text-[#3d85c5] mx-1"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-center text-xl md:text-2xl leading-relaxed text-neutral-700 italic max-w-4xl mx-auto mb-12">
                    “{t.content}”
                  </p>

                  {/* User */}
                  <div className="flex flex-col items-center">

                    {/* Image */}
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#073762] to-[#3d85c5] blur-md opacity-30"></div>

                      <img
                        src={t.image}
                        alt={t.name}
                        className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
                      />
                    </div>

                    {/* Name */}
                    <h3 className="mt-6 text-2xl font-bold text-[#073762]">
                      {t.name}
                    </h3>

                    {/* Role */}
                    <p className="text-[#3d85c5] font-medium mt-2">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-[#073762] hover:bg-[#073762] hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center text-[#073762] hover:bg-[#073762] hover:text-white transition-all duration-300"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  current === index
                    ? "w-10 h-3 bg-[#073762]"
                    : "w-3 h-3 bg-[#9fc5e9]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}