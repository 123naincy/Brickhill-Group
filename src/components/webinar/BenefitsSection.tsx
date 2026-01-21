import { CheckCircle, Lightbulb } from "lucide-react";

const benefits = [
  "Lower entry barriers",
  "Professional management",
  "Diversified portfolio",
  "Network building with investors",
  "Access to exclusive bulk deals",
  "Tax-efficient investment structure",
];

export default function BenefitsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0f4b40] via-[#0b6b5c] to-[#0f4b40] text-white overflow-hidden">

      {/* Glass background wash */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT – Benefits */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6">
            Why Should You Attend This Webinar?
          </h2>

          <p className="text-green-100 mb-10 max-w-lg">
            This session is designed for serious investors who want to
            invest smarter, safer, and together.
          </p>

          <div className="space-y-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-6 py-4"
              >
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span className="text-lg">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – Bonus Card */}
        <div className="relative">
          <div className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl p-10 shadow-2xl">
            <Lightbulb className="w-16 h-16 text-yellow-300 mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Exclusive Attendee Bonus
            </h3>
            <p className="text-green-100 text-lg mb-6">
              Get our <strong>Group Buying Investment Guide</strong> —
              a step-by-step PDF used by real investors.
            </p>

            <div className="inline-block bg-green-400 text-green-900 font-bold px-6 py-3 rounded-full">
              FREE with ₹99 Ticket
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
