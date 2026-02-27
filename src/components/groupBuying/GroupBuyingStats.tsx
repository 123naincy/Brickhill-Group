import { Building2, Users, DollarSign, TrendingUp } from "lucide-react";

interface Props {
  propertiesCount: number;
  investorsCount: number;
  totalInvested: number;
  avgInvestment: number;
}

export function GroupBuyingStats({
  propertiesCount,
  investorsCount,
  totalInvested,
  avgInvestment,
}: Props) {
  return (
    <section className="bg-[#f4f8fc] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#073762] mb-4">
          Premium Properties for Group Investment
        </h2>

        <p className="text-[#3d85c5] max-w-3xl mx-auto mb-16 text-lg">
          Join forces with verified investors to access high-value real estate.
          Lower entry barriers. Smarter capital deployment. Stronger returns.
        </p>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8">

          <StatCard
            icon={Building2}
            value={propertiesCount}
            label="Live Investment Opportunities"
            tag="Active"
          />

          <StatCard
            icon={Users}
            value={investorsCount}
            label="Verified Investors"
            tag="Live"
          />

          <StatCard
            icon={DollarSign}
            value={`₹${(totalInvested / 10000000).toFixed(1)} Cr`}
            label="Capital Deployed"
            tag="Total"
          />

          <StatCard
            icon={TrendingUp}
            value={`₹${(avgInvestment / 100000).toFixed(0)} L`}
            label="Avg Ticket Size"
            tag="Average"
          />

        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
  tag,
}: {
  icon: any;
  value: any;
  label: string;
  tag: string;
}) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 text-left border border-[#0b5394]/10 hover:shadow-2xl transition">

      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b5394] to-[#3d85c5] mb-5">
        <Icon className="text-white w-7 h-7" />
      </div>

      {/* Value + Tag */}
      <div className="flex justify-between items-center mb-3">
        <div className="text-4xl font-extrabold text-[#073762]">
          {value}
        </div>

        <span className="px-3 py-1 text-xs rounded-full bg-[#9fc5e9] text-[#073762] font-semibold">
          {tag}
        </span>
      </div>

      {/* Label */}
      <p className="text-[#3d85c5] font-medium">
        {label}
      </p>

    </div>
  );
}