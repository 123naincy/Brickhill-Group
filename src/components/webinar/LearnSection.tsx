import {
  Users,
  DollarSign,
  Building2,
  TrendingUp,
  Shield,
  Target,
} from "lucide-react";

const items = [
  { icon: Users, title: "Group Buying Fundamentals", desc: "Understand the psychology and mechanics behind collective property negotiation." },
  { icon: DollarSign, title: "Reduce Investment Risk", desc: "Learn how shared capital reduces exposure and increases confidence." },
  { icon: Building2, title: "Access Premium Properties", desc: "Unlock builder-level pricing normally reserved for bulk buyers." },
  { icon: TrendingUp, title: "Maximize Returns", desc: "Structure deals for appreciation, rental yield & exit strategy." },
  { icon: Shield, title: "Legal Framework", desc: "Understand RERA compliance, documentation & safe booking process." },
  { icon: Target, title: "Deal Analysis", desc: "Evaluate projects using practical investment metrics." },
];

export default function LearnSection() {
  return (
    <section className="relative py-28 bg-[#f8fbff] overflow-hidden">

      {/* Soft background accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#9fc5e9]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3d85c5]/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#073762]">
            What You’ll <span className="text-[#3d85c5]">Master</span> in This Webinar
          </h2>

          <p className="text-lg text-neutral-600">
            A structured, practical roadmap designed for serious real estate investors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition duration-300 border border-[#9fc5e9]/20 hover:-translate-y-3"
            >
              {/* Number badge */}
              <div className="absolute -top-5 left-6 bg-gradient-to-r from-[#073762] to-[#3d85c5] text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                0{i + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#3d85c5] to-[#6fa8dd] mb-6 shadow-md">
                <item.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#073762] mb-3">
                {item.title}
              </h3>

              <p className="text-neutral-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}