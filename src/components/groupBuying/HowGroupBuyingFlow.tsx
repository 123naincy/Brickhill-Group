import { motion } from "framer-motion";
import { Users, Building2, BadgePercent, FileCheck, Handshake } from "lucide-react";

const steps = [
  { step: "01", title: "Shortlist Dream Project", desc: "Use search, map & virtual site visit to shortlist your top 3 projects.", icon: Building2 },
  { step: "02", title: "Express Interest", desc: "Plan a site visit with our RM & choose your dream project confidently.", icon: Users },
  { step: "03", title: "Join the Group", desc: "Become part of a verified buyer group for bulk negotiation power.", icon: Handshake },
  { step: "04", title: "Bulk Price Negotiation", desc: "We negotiate directly with builders for best group pricing.", icon: BadgePercent },
  { step: "05", title: "Secure Purchase", desc: "RERA verified, transparent documentation & smooth booking experience.", icon: FileCheck },
];

export default function TogetherBuyingFlow() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#f4f9f7] to-[#e7f3ee] overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-[#0f4b40] mb-6">
        TogetherBuying Work?
      </h2>
      <p className="text-center text-gray-600 mb-24">
        Follow the Simple <span className="text-[#1f7f6d] font-semibold">5 Steps</span> to Your Dream Home
      </p>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Glowing Curved Line */}
        <motion.svg
          viewBox="0 0 800 1200"
          className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full"
        >
          <motion.path
            d="M400 50 C650 150 650 350 400 450 C150 550 150 750 400 850 C650 950 650 1150 400 1250"
            fill="none"
            stroke="#1f7f6d"
            strokeDasharray="10 10"
            strokeWidth="5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            style={{ filter: "drop-shadow(0 0 12px rgba(31,127,109,0.6))" }}
          />

          {/* Moving Dot */}
          <motion.circle
            r="8"
            fill="#1f7f6d"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path="M400 50 C650 150 650 350 400 450 C150 550 150 750 400 850 C650 950 650 1150 400 1250"
            />
          </motion.circle>
        </motion.svg>

        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
            viewport={{ once: true }}
            className={`relative mb-32 flex ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="bg-[#0f4b40] text-white rounded-full px-10 py-8 max-w-md shadow-2xl flex items-center gap-6 hover:scale-105 transition">

              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-white text-[#0f4b40] rounded-full w-20 h-20 flex flex-col items-center justify-center font-bold shadow-md"
              >
                <span className="text-xs">STEP</span>
                <span className="text-2xl">{s.step}</span>
              </motion.div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-white/90 text-sm">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
