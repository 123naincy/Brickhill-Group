import { Building2, Users, Award, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Building2, value: '150+', label: 'Projects Completed' },
    { icon: Users, value: '5000+', label: 'Happy Clients' },
    { icon: Award, value: '25+', label: 'Awards Won' },
    { icon: TrendingUp, value: '15+', label: 'Years Experience' },
  ];

  return (
    <section className="py-20 bg-[#f6fbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow text-center border border-[#1E6F64]/10"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#1E6F64] to-[#4FA59A] flex items-center justify-center">
                <stat.icon className="h-7 w-7 text-white" />
              </div>

              <div className="text-4xl font-bold text-[#1E6F64] mb-2">
                {stat.value}
              </div>

              <div className="text-neutral-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
