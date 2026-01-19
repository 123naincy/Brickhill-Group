import { Building2, Users, DollarSign, TrendingUp } from 'lucide-react';

export default function StatsBar({ totalProperties, totalInvestors, totalInvested, avgInvestment }: any) {
  const stats = [
    { icon: Building2, label: "Properties", value: totalProperties, color: "emerald" },
    { icon: Users, label: "Investors", value: totalInvestors, color: "blue" },
    { icon: DollarSign, label: "Total Invested", value: `$${(totalInvested/1e6).toFixed(1)}M`, color: "purple" },
    { icon: TrendingUp, label: "Avg Investment", value: `$${(avgInvestment/1000).toFixed(0)}K`, color: "teal" },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-12">
      {stats.map((s, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
          <s.icon className={`text-${s.color}-600 mb-2`} />
          <div className="text-3xl font-bold">{s.value}</div>
          <p className="text-gray-600 text-sm">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
