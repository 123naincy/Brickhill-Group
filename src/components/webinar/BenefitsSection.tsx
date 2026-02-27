import { CheckCircle, Lightbulb, Gift } from "lucide-react";

const benefits = [
  "Accessible Entry Model",
  "Institutional-Grade Management",
  "Strategic Diversification",
  "Strong Investor Ecosystem",
  "Early Deal Access",
];

export default function BenefitsSection() {
  return (
    <section className="relative py-28 bg-[#f8fbff] overflow-hidden">

      {/* Soft accent blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#9fc5e9]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3d85c5]/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT – Benefits */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#073762] mb-6">
            Why You Should Attend
          </h2>

          <p className="text-lg text-neutral-600 mb-12 max-w-xl">
            This isn’t theory. It’s a practical framework used by
            real investors to negotiate smarter and reduce risk.
          </p>

          <div className="space-y-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md border border-[#9fc5e9]/20 hover:shadow-xl transition"
              >
                <CheckCircle className="w-6 h-6 text-[#3d85c5] mt-1" />
                <span className="text-lg font-medium text-[#073762]">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – Bonus Card */}
        <div className="relative">

          <div className="bg-gradient-to-br from-[#073762] to-[#0b5394] text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">

            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#9fc5e9]/20 blur-3xl rounded-full"></div>

            <div className="relative">

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-2xl">
                  <Lightbulb className="w-8 h-8 text-[#9fc5e9]" />
                </div>
                <h3 className="text-3xl font-bold">
                  Exclusive Attendee Bonus
                </h3>
              </div>

              <p className="text-[#cfe3f8] text-lg mb-8">
                Get our <strong>Group Buying Investment Blueprint</strong> —
                a practical step-by-step PDF guide used by professional investors.
              </p>

              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
                <Gift className="w-6 h-6 text-[#9fc5e9]" />
                <span className="font-semibold">
                  Included FREE with ₹99 Ticket
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}