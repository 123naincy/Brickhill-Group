import { X, MapPin, Tag, Gift, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import type { Property, Participation } from "../../data/types/groupBuying";
import { allImages, fallbackImage } from "../../data/AllImages";

type PropertyModalProps = {
  property: Property;
  participations: Participation[];
  onClose: () => void;
  onSuccess: (newParticipation: Participation) => void;
};

export function PropertyModal({
  property,
  participations,
  onClose,
  onSuccess,
}: PropertyModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const totalPrice = Number(property.total_price) || 0;
  const isClosed = property.status !== "open";

  // ✅ use mapped image or fallback
  const imageUrl =
    allImages[property.image_url as keyof typeof allImages] || fallbackImage;

  const offers: string[] = [
    "✅ Priority Allotment in First Round",
    "✅ Early Bird Discount for Group Members",
    "✅ Free Site Visit & Pick-up",
    "✅ Legal Documentation Assistance",
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (isClosed) return setError("This property is closed.");
    if (name.trim().length < 3)
      return setError("Name must be at least 3 characters.");
    if (!email.includes("@")) return setError("Enter a valid email.");
    if (!/^[6-9]\d{9}$/.test(phone))
      return setError("Enter a valid 10-digit phone number.");

    const newEntry: Participation = {
      id: Date.now().toString(),
      property_id: property.id,
      participant_name: name.trim(),
      participant_email: email.trim(),
      phone_number: phone.trim(),
      investment_amount: 0,
      created_at: new Date().toISOString(),
    };

    onSuccess(newEntry);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="relative h-80">
          <img
            src={imageUrl}   // ✅ FIXED
            className="w-full h-full object-cover"
            alt={property.title}
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white p-2 rounded-full"
            type="button"
            aria-label="Close"
          >
            <X />
          </button>

          <div className="absolute bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
            <h2 className="text-4xl font-bold text-white">{property.title}</h2>
            <div className="text-white/80 flex items-center">
              <MapPin className="mr-2" />
              {property.location}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 grid md:grid-cols-2 gap-8">
          {/* Details */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Property Details</h3>
            <p className="text-gray-600 mb-6">{property.description}</p>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-xl">
                <span className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Total Price
                </span>
                <b>₹{totalPrice.toLocaleString("en-IN")}</b>
              </div>

              {/* Offers */}
              <div className="p-5 bg-yellow-50 rounded-2xl border border-yellow-200">
                <div className="flex items-center gap-2 mb-3 font-bold text-yellow-900">
                  <Gift className="w-5 h-5" />
                  Offers for Group Members
                </div>

                <ul className="space-y-2 text-sm text-yellow-900">
                  {offers.map((offer, i) => (
                    <li key={i} className="flex gap-2">
                      <span>•</span>
                      <span>{offer}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl text-sm text-gray-700">
                Interested Members: <b>{participations.length}</b>
              </div>
            </div>
          </div>

          {/* Join */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Join Interest Group</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                placeholder="Full Name"
                className="w-full p-3 border rounded-xl"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isClosed}
              />

              <input
                placeholder="Email"
                className="w-full p-3 border rounded-xl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isClosed}
              />

              <div className="relative">
                <Phone className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                <input
                  placeholder="Phone Number"
                  className="w-full p-3 pl-10 border rounded-xl"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  disabled={isClosed}
                  inputMode="numeric"
                  maxLength={10}
                />
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded">
                  {error}
                </div>
              )}

              <button
                className={`w-full text-white py-3 rounded-xl font-bold ${
                  isClosed ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-600"
                }`}
                disabled={isClosed}
                type="submit"
              >
                {isClosed ? "Closed" : "Join Now"}
              </button>

              <p className="text-xs text-gray-500">
                Our team will contact you via phone/email with offers & next
                steps.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
