import { Building2, Users, DollarSign, TrendingUp } from "lucide-react";

interface Props {
  propertiesCount: number;
  investorsCount: number;
  totalInvested: number;
  avgInvestment: number;
}

export function GroupBuyingStats({ propertiesCount, investorsCount, totalInvested, avgInvestment }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Premium Properties for Group Investment</h1>
      <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
        Join forces with other investors to own luxury real estate. Lower barriers, higher returns.
      </p>

      <div className="grid md:grid-cols-4 gap-8">
        <StatCard icon={Building2} value={propertiesCount} label="Properties Available" tag="Active" color="emerald" />
        <StatCard icon={Users} value={investorsCount} label="Active Investors" tag="Live" color="blue" />
        <StatCard icon={DollarSign} value={`$${(totalInvested/1000000).toFixed(1)}M`} label="Total Invested" tag="Total" color="purple" />
        <StatCard icon={TrendingUp} value={`$${(avgInvestment/1000).toFixed(0)}K`} label="Avg Investment" tag="Avg" color="teal" />
      </div>
    </div>
  );
}

function StatCard({ icon:Icon, value, label, tag, color }:{icon:any,value:any,label:string,tag:string,color:string}) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 text-left">
      <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-${color}-50 mb-4`}>
        <Icon className={`text-${color}-600 w-7 h-7`} />
      </div>

      <div className="flex justify-between items-center mb-2">
        <div className="text-4xl font-bold">{value}</div>
        <span className={`px-3 py-1 text-sm rounded-full bg-${color}-100 text-${color}-700`}>{tag}</span>
      </div>

      <p className="text-gray-500">{label}</p>
    </div>
  );
}
