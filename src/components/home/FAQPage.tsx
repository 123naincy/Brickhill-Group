import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is BHL Group?",
    answer:
      "BHL Group is a diversified business group specializing in luxury real estate, infrastructure development, land banking, warehousing, logistics, and strategic investment opportunities across India.",
  },

  {
    question: "Which sectors does BHL Group operate in?",
    answer:
      "BHL Group operates across multiple sectors including luxury residential real estate, commercial developments, infrastructure construction, logistics parks, warehousing solutions, land banking, and digital media services.",
  },

  {
    question: "What is BHL Landbase?",
    answer:
      "BHL Landbase is the real estate development arm of BHL Group focused on premium resort-style residential destinations, luxury villas, plotted developments, and lifestyle-driven investment projects across India.",
  },

  {
    question: "What services does Brickhill Realtors provide?",
    answer:
      "Brickhill Realtors specializes in land banking, strategic land acquisition, property advisory, investment consulting, and identifying high-growth real estate opportunities across emerging locations in India.",
  },

  {
    question: "What is Brickhill Infra known for?",
    answer:
      "Brickhill Infra is known for delivering high-quality infrastructure and construction solutions for residential, commercial, and mixed-use real estate developments with a focus on timely execution and superior build quality.",
  },

  {
    question: "What does Logi Prime do?",
    answer:
      "Logi Prime provides pan-India warehousing and integrated logistics solutions with scalable infrastructure, strategic locations, and modern supply-chain support for businesses and industrial operations.",
  },

  {
    question: "How can I contact BHL Group?",
    answer:
      "You can contact BHL Group through the official website, inquiry forms, WhatsApp support, phone consultation, or by visiting the company’s official office locations.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>

      <section className="bg-[#f7fbff] min-h-screen py-10">
        <div className="max-w-5xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
           <h2
            className="text-4xl font-extrabold mb-4"
            style={{
              background: "linear-gradient(90deg,#073762,#3d85c5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto mt-6 leading-relaxed">
              Find answers related to luxury real estate investments,
              infrastructure developments, land banking, logistics,
              warehousing, and BHL Group services across India.
            </p>
          </div>

          {/* FAQ Cards */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md border border-[#dbe9f6] overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left px-8 py-7"
                >
                  <h2 className="text-lg md:text-xl font-semibold text-[#073762] pr-5 leading-relaxed">
                    {faq.question}
                  </h2>

                  <div
                    className={`transition-transform duration-300 ${
                      activeIndex === index
                        ? "rotate-180"
                        : ""
                    }`}
                  >
                    <ChevronDown className="text-[#073762]" />
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
                    <div className="px-8 pb-8 text-neutral-600 leading-relaxed text-lg border-t border-[#eef5fb] pt-6">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-gradient-to-r from-[#073762] to-[#3d85c5] rounded-[40px] p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Still Have Questions?
            </h2>

            <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
              Connect with the BHL Group team for personalized
              guidance on real estate investments, infrastructure
              opportunities, and strategic business solutions.
            </p>

            <a
              href="/contact"
              className="inline-block mt-8 px-8 py-4 rounded-full bg-white text-[#073762] font-semibold hover:bg-black hover:text-white transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}