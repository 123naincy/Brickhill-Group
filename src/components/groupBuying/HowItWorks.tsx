import { Users, Building2, BadgePercent, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-28 bg-[#f4f8fc]">

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-[#073762]">
        How Group Buying Works
      </h2>

      <p className="text-center text-[#3d85c5] max-w-2xl mx-auto mb-16 text-lg">
        Invest smarter by combining buying power. Unlock exclusive bulk pricing,
        reduce risk, and secure premium real estate with confidence.
      </p>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        {[
          {
            icon: Users,
            title: "Join a Verified Group",
            desc: "Register and become part of a curated buyer pool for selected premium projects.",
          },
          {
            icon: Building2,
            title: "Strategic Negotiation",
            desc: "We negotiate directly with trusted developers to secure institutional-level pricing.",
          },
          {
            icon: BadgePercent,
            title: "Unlock Bulk Discounts",
            desc: "Save 10–25% compared to individual buying through collective leverage.",
          },
          {
            icon: ShieldCheck,
            title: "Secure & Transparent",
            desc: "RERA-verified projects, legal clarity, and full documentation support.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white text-center p-8 rounded-3xl shadow-xl border border-[#0b5394]/10 hover:shadow-2xl transition duration-300 group"
          >

            {/* Top Accent Line */}
            <div className="h-1 w-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#0b5394] to-[#6fa8dd]"></div>

            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#0b5394] to-[#3d85c5] flex items-center justify-center group-hover:scale-110 transition">
              <item.icon size={28} className="text-white" />
            </div>

            {/* Title */}
            <h3 className="font-bold text-xl mb-3 text-[#073762]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[#3d85c5] text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}