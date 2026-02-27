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

  const imageUrl =
    allImages[property.image_url as keyof typeof allImages] || fallbackImage;

  const offers: string[] = [
    "Priority Allotment in First Round",
    "Early Bird Discount for Group Members",
    "Free Site Visit & Pick-up",
    "Legal Documentation Assistance",
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
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">

        {/* Header */}
        <div className="relative h-80">
          <img
            src={imageUrl}
            className="w-full h-full object-cover"
            alt={property.title}
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
            type="button"
            aria-label="Close"
          >
            <X />
          </button>

          <div className="absolute bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent w-full">
            <h2 className="text-4xl font-extrabold text-white">
              {property.title}
            </h2>
            <div className="text-white/85 flex items-center mt-2">
              <MapPin className="mr-2" />
              {property.location}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-10 grid md:grid-cols-2 gap-10">

          {/* LEFT DETAILS */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#073762]">
              Investment Details
            </h3>

            <p className="text-[#3d85c5] mb-6">
              {property.description}
            </p>

            <div className="space-y-5">

              {/* Price Box */}
              <div className="flex justify-between items-center p-5 bg-[#f4f8fc] rounded-2xl border border-[#0b5394]/10">
                <span className="flex items-center gap-2 text-[#073762] font-medium">
                  <Tag className="w-4 h-4 text-[#0b5394]" />
                  Total Investment
                </span>
                <span className="text-2xl font-bold text-[#073762]">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Offers */}
              <div className="p-6 bg-[#9fc5e9]/20 rounded-2xl border border-[#6fa8dd]">
                <div className="flex items-center gap-2 mb-4 font-semibold text-[#073762]">
                  <Gift className="w-5 h-5 text-[#0b5394]" />
                  Exclusive Group Benefits
                </div>

                <ul className="space-y-2 text-sm text-[#073762]">
                  {offers.map((offer, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#0b5394]">•</span>
                      <span>{offer}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#f4f8fc] rounded-xl text-sm text-[#3d85c5]">
                Interested Members:{" "}
                <b className="text-[#073762]">{participations.length}</b>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#073762]">
              Join Investment Group
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                placeholder="Full Name"
                className="w-full p-3 border border-[#0b5394]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3d85c5]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isClosed}
              />

              <input
                placeholder="Email Address"
                className="w-full p-3 border border-[#0b5394]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3d85c5]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isClosed}
              />

              <div className="relative">
                <Phone className="absolute left-3 top-3.5 w-4 h-4 text-[#3d85c5]" />
                <input
                  placeholder="Phone Number"
                  className="w-full p-3 pl-10 border border-[#0b5394]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3d85c5]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  disabled={isClosed}
                  inputMode="numeric"
                  maxLength={10}
                />
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                className={`w-full py-3 rounded-xl font-semibold shadow-lg transition ${
                  isClosed
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : ""
                }`}
                style={
                  isClosed
                    ? {}
                    : {
                        background:
                          "linear-gradient(90deg,#0b5394,#3d85c5)",
                        color: "white",
                      }
                }
                disabled={isClosed}
                type="submit"
              >
                {isClosed ? "Closed" : "Join Now →"}
              </button>

              <p className="text-xs text-[#3d85c5]">
                Our investment team will contact you with pricing details and next steps.
              </p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}