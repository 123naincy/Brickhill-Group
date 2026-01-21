import {
  Users,
  DollarSign,
  Building2,
  TrendingUp,
  Shield,
  Target,
} from "lucide-react";

const items = [
  { icon: Users, title: "Group Buying Fundamentals" },
  { icon: DollarSign, title: "Reduce Investment Risk" },
  { icon: Building2, title: "Access Premium Properties" },
  { icon: TrendingUp, title: "Maximize Returns" },
  { icon: Shield, title: "Legal Framework" },
  { icon: Target, title: "Deal Analysis" },
];

export default function LearnSection() {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-green-900 mb-4">
            What You’ll Learn in This Webinar
          </h2>
          <p className="text-lg text-green-700">
            A practical, investor-focused session designed to help you
            understand and apply group buying strategies confidently.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <item.icon className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-green-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
