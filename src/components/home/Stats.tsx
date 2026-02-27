import { Building2, Users, Award, TrendingUp } from "lucide-react";

export default function Stats() {
  const stats = [
    { icon: Building2, value: "150+", label: "Projects Completed" },
    { icon: Users, value: "5000+", label: "Happy Clients" },
    { icon: Award, value: "25+", label: "Awards Won" },
    { icon: TrendingUp, value: "15+", label: "Years Experience" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#f4f8fc] to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-3xl text-center border border-[#9fc5e9]/30 shadow-md hover:shadow-2xl transition duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#073762] to-[#3d85c5] flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-extrabold text-[#073762] mb-3 group-hover:text-[#3d85c5] transition">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-neutral-600 font-medium text-sm tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}