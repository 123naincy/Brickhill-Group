import { MapPin, Users, Clock, TrendingUp } from "lucide-react";

type Property = {
  id: string;
  title: string;
  description: string;
  location: string;
  image_url: string;
  total_price: number;
  max_participants: number;
  deadline: string;
};

interface Props {
  property: Property;
  participantCount: number;
  totalInvested: number;
  onClick: () => void;
}

export function PropertyCard({ property, participantCount, totalInvested, onClick }: Props) {
  const progress = (totalInvested / property.total_price) * 100;
  const daysLeft = Math.ceil((new Date(property.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  const sharePrice = property.total_price / property.max_participants;

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition cursor-pointer" onClick={onClick}>
      
      {/* Image Section */}
      <div className="relative h-60">
        <img src={property.image_url} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-white text-emerald-600 px-4 py-1 rounded-full font-bold shadow">
          ${(property.total_price / 1000000).toFixed(1)}M
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-xl font-bold text-white">{property.title}</h3>
          <div className="flex items-center text-white/80 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {property.location}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Funding Progress</span>
            <span className="text-emerald-600 font-semibold">{progress.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-emerald-500 h-3 rounded-full" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center mb-5">
          <div>
            <Users className="mx-auto text-emerald-600" />
            <div className="font-bold">{participantCount}/{property.max_participants}</div>
            <div className="text-xs text-gray-500">Investors</div>
          </div>

          <div>
            <Clock className="mx-auto text-blue-600" />
            <div className="font-bold">{daysLeft} days</div>
            <div className="text-xs text-gray-500">Remaining</div>
          </div>

          <div>
            <TrendingUp className="mx-auto text-purple-600" />
            <div className="font-bold">${(sharePrice/1000).toFixed(0)}K</div>
            <div className="text-xs text-gray-500">Per Share</div>
          </div>
        </div>

        <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
}
