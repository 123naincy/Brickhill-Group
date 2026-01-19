import { X, MapPin } from 'lucide-react';
import { useState, FormEvent } from 'react';

type Property = {
  id: string;
  title: string;
  description: string;
  location: string;
  image_url: string;
  total_price: number;
  min_participants: number;
  max_participants: number;
  deadline: string;
  status: string;
  created_at: string;
};

type Participation = {
  id: string;
  property_id: string;
  participant_name: string;
  participant_email: string;
  investment_amount: number;
  created_at: string;
};

interface PropertyModalProps {
  property: Property;
  participations: Participation[];
  onClose: () => void;
  onSuccess: (p: Participation) => void;
}

export function PropertyModal({ property, participations, onClose, onSuccess }: PropertyModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [shares, setShares] = useState(1);
  const [error, setError] = useState('');

  const participantCount = participations.length;
  const totalInvested = participations.reduce((sum, p) => sum + p.investment_amount, 0);
  const progress = (totalInvested / property.total_price) * 100;
  const sharePrice = property.total_price / property.max_participants;
  const investmentAmount = sharePrice * shares;
  const availableShares = property.max_participants - participantCount;
  const isClosed = property.status !== 'open';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (isClosed) return setError('This property is closed.');
    if (shares > availableShares) return setError('Not enough shares available.');
    if (!email.includes('@')) return setError('Enter a valid email.');
    if (name.length < 3) return setError('Name must be at least 3 characters.');

    const newEntry: Participation = {
      id: Date.now().toString(),
      property_id: property.id,
      participant_name: name,
      participant_email: email,
      investment_amount: investmentAmount,
      created_at: new Date().toISOString()
    };

    onSuccess(newEntry);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Header */}
        <div className="relative h-80">
          <img src={property.image_url} className="w-full h-full object-cover" />
          <button onClick={onClose} className="absolute top-4 right-4 bg-white p-2 rounded-full"><X /></button>
          <div className="absolute bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
            <h2 className="text-4xl font-bold text-white">{property.title}</h2>
            <div className="text-white/80 flex items-center"><MapPin className="mr-2" />{property.location}</div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 grid md:grid-cols-2 gap-8">
          {/* Details */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Property Details</h3>
            <p className="text-gray-600 mb-6">{property.description}</p>

            <div className="space-y-4">
              <div className="flex justify-between p-4 bg-emerald-50 rounded-xl"><span>Total Price</span><b>${property.total_price.toLocaleString()}</b></div>
              <div className="flex justify-between p-4 bg-blue-50 rounded-xl"><span>Price Per Share</span><b>${sharePrice.toLocaleString()}</b></div>
              <div className="flex justify-between p-4 bg-purple-50 rounded-xl"><span>Deadline</span><b>{new Date(property.deadline).toLocaleDateString()}</b></div>
            </div>
          </div>

          {/* Join */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Join Group Buying</h3>

            <div className="mb-6">
              <div className="flex justify-between mb-2 text-sm">
                <span>Funding Progress</span>
                <span className="text-emerald-600">{progress.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-emerald-500 h-4 rounded-full" style={{ width: `${progress}%` }} />
              </div>
              <div className="text-sm mt-2">${totalInvested.toLocaleString()} of ${property.total_price.toLocaleString()} raised</div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input placeholder="Full Name" className="w-full p-3 border rounded-xl" value={name} onChange={e=>setName(e.target.value)} />
              <input placeholder="Email" className="w-full p-3 border rounded-xl" value={email} onChange={e=>setEmail(e.target.value)} />
              <input type="number" min="1" max={availableShares} className="w-full p-3 border rounded-xl" value={shares} onChange={e=>setShares(+e.target.value)} />
              <div className="p-4 bg-emerald-50 rounded-xl font-bold">Investment: ${investmentAmount.toLocaleString()}</div>

              {error && <div className="bg-red-50 text-red-600 p-3 rounded">{error}</div>}

              <button className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold">
                Join Group Buying
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
