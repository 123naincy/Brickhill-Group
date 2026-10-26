import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { homeFaqs } from "../../data/homeFaqs";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f7fbff] py-10 md:py-14">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-2"
            style={{
              background: "linear-gradient(90deg,#073762,#3d85c5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
            Find answers related to luxury real estate investments,
            infrastructure developments, land banking, logistics,
            warehousing, and BHL Group services across India.
          </p>
        </div>

        <div className="w-full space-y-2.5">
          {homeFaqs.map((faq, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-xl shadow-sm border border-[#dbe9f6] overflow-hidden transition-shadow duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-3 text-left px-4 py-3.5 md:px-5 md:py-4"
              >
                <h3 className="flex-1 text-sm md:text-base font-semibold text-[#073762] leading-snug">
                  {faq.question}
                </h3>

                <div
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="text-[#073762] w-4 h-4 md:w-5 md:h-5" />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-3.5 md:px-5 md:pb-4 text-neutral-600 text-sm md:text-base leading-relaxed border-t border-[#eef5fb] pt-3">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full mt-8 md:mt-10 text-center bg-gradient-to-r from-[#073762] to-[#3d85c5] rounded-2xl px-5 py-7 md:px-8 md:py-8 shadow-lg">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Still Have Questions?
          </h3>

          <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto">
            Connect with the BHL Group team for personalized guidance on
            real estate investments, infrastructure opportunities, and
            strategic business solutions.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-4 px-6 py-2.5 rounded-full bg-white text-[#073762] text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
