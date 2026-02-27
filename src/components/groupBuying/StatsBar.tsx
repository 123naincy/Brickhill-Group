import { Building2, Users, DollarSign, TrendingUp } from "lucide-react";

type Props = {
  totalProperties: number;
  totalInvestors: number;
  totalInvested: number;
  avgInvestment: number;
};

export default function StatsBar({
  totalProperties,
  totalInvestors,
  totalInvested,
  avgInvestment,
}: Props) {
  const stats = [
    {
      icon: Building2,
      label: "Properties",
      value: totalProperties,
    },
    {
      icon: Users,
      label: "Investors",
      value: totalInvestors,
    },
    {
      icon: DollarSign,
      label: "Total Invested",
      value: `₹${(totalInvested / 1e7).toFixed(1)} Cr`,
    },
    {
      icon: TrendingUp,
      label: "Avg Investment",
      value: `₹${(avgInvestment / 1e5).toFixed(0)} L`,
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-8 mb-16">
      {stats.map((s, i) => {
        const Icon = s.icon;

        return (
          <div
            key={i}
            className="bg-white p-8 rounded-3xl shadow-xl border border-[#0b5394]/10 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br from-[#0b5394] to-[#3d85c5] flex items-center justify-center">
              <Icon className="text-white w-6 h-6" />
            </div>

            {/* Value */}
            <div className="text-3xl font-extrabold text-[#073762] mb-1">
              {s.value}
            </div>

            {/* Label */}
            <p className="text-[#3d85c5] text-sm font-medium">
              {s.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}