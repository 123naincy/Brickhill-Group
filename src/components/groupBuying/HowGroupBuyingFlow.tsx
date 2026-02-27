import { motion } from "framer-motion";
import { Users, Building2, BadgePercent, FileCheck, Handshake } from "lucide-react";

const steps = [
  { step: "01", title: "Discover the Right Project", desc: "Explore projects using smart search, interactive maps, and virtual site tours to shortlist your top choices.", icon: Building2 },
  { step: "02", title: "Show Your Interest", desc: "Connect with our Relationship Manager, schedule a site visit, and evaluate your selected project with confidence.", icon: Users },
  { step: "03", title: "Join a Buyer Group", desc: "Become part of a verified buyer group to unlock collective buying power and stronger negotiation leverage.", icon: Handshake },
  { step: "04", title: "Unlock Group Pricing", desc: "We negotiate directly with trusted developers to secure the most competitive pricing through bulk deals.", icon: BadgePercent },
  { step: "05", title: "Book with Confidence", desc: "Enjoy RERA-verified projects, transparent documentation, and a seamless booking process from start to finish.", icon: FileCheck },
];

export default function HowGroupBuyingFlow() {
  return (
    <section className="py-32 bg-[#f4f8fc] overflow-hidden">

      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#073762] mb-6">
        How Group Buying Works
      </h2>

      <p className="text-center text-[#3d85c5] mb-24">
        Follow these <span className="font-semibold">5 Strategic Steps</span> to Secure Better Pricing
      </p>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Curved Line */}
        <motion.svg
          viewBox="0 0 800 1300"
          className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full"
        >
          <motion.path
            d="M400 50 C650 200 650 400 400 550 C150 700 150 900 400 1050 C650 1200 650 1300 400 1400"
            fill="none"
            stroke="#6fa8dd"
            strokeDasharray="8 8"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          />
        </motion.svg>

        {steps.map((s, i) => {
          const Icon = s.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-32 flex ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="bg-white rounded-3xl px-10 py-8 max-w-md shadow-xl border border-[#0b5394]/10 flex items-start gap-6 hover:shadow-2xl transition">

                {/* Step Circle */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0b5394] to-[#3d85c5] flex flex-col items-center justify-center text-white font-bold shadow-md">
                  <span className="text-xs opacity-80">STEP</span>
                  <span className="text-xl">{s.step}</span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="text-[#0b5394] w-5 h-5" />
                    <h3 className="text-xl font-semibold text-[#073762]">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-[#3d85c5] text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}