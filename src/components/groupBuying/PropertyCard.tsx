import { MapPin, Tag } from "lucide-react";
import type { Property } from "../../data/types/groupBuying";
import { allImages, fallbackImage } from "../../data/AllImages";

type Props = {
  property: Property;
  onClick: () => void;
};

export function PropertyCard({ property, onClick }: Props) {
  const price = Number(property.total_price) || 0;
  const imageUrl =
    allImages[property.image_url as keyof typeof allImages] ||
    fallbackImage;

  return (
    <div
      className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300 cursor-pointer border border-[#0b5394]/10"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      {/* Image */}
      <div className="relative h-60">
        <img
          src={imageUrl}
          className="w-full h-full object-cover"
          alt={property.title}
          loading="lazy"
        />

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 border border-[#0b5394]/10">
          <Tag className="w-4 h-4 text-[#0b5394]" />
          <span className="text-[#073762]">
            ₹{price.toLocaleString("en-IN")}
          </span>
        </div>

        {/* Overlay Title */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-2xl font-extrabold text-white">
            {property.title}
          </h3>

          <div className="flex items-center text-white/85 text-sm mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            {property.location}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-[#3d85c5] text-sm mb-5 line-clamp-3">
          {property.description}
        </p>

        {/* Info Grid */}
        <div className="mb-6 grid grid-cols-3 gap-4">

          {/* Project Sizes */}
          <div>
            <h4 className="text-xs font-semibold text-[#073762] mb-2">
              Project Sizes
            </h4>
            <div className="flex flex-wrap gap-2">
              {(property.project_sizes || []).map((size, i) => (
                <span
                  key={`${property.id}-size-${i}`}
                  className="px-3 py-1 text-xs rounded-full bg-[#9fc5e9] text-[#073762] font-medium"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Offers */}
          <div>
            <h4 className="text-xs font-semibold text-[#073762] mb-2">
              Offers
            </h4>
            <p className="text-xs text-[#0b5394] font-semibold">
              1% Assured Returns*
            </p>
          </div>

          {/* Group Members */}
          <div>
            <h4 className="text-xs font-semibold text-[#073762] mb-2">
              Group Members
            </h4>
            <p className="text-xs text-[#3d85c5] font-medium">
              {property.group_members || "0"} Joined
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <button
          className="w-full py-3 rounded-2xl text-white font-semibold shadow-lg transition hover:scale-105"
          style={{
            background: "linear-gradient(90deg,#0b5394,#3d85c5)",
          }}
          type="button"
        >
          I Am Interested →
        </button>
      </div>
    </div>
  );
}