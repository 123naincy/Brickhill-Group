import { MapPin, Tag } from "lucide-react";
import type { Property } from "../../data/types/groupBuying";
import { allImages, fallbackImage } from "../../data/AllImages";

type Props = {
  property: Property;
  onClick: () => void;
};

export function PropertyCard({ property, onClick }: Props) {
  const price = Number(property.total_price) || 0;
  const imageUrl = allImages[property.image_url as keyof typeof allImages] || fallbackImage;

  return (
    <div
      className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition cursor-pointer"
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

        {/* Price */}
        <div className="absolute top-4 right-4 bg-white text-emerald-700 px-4 py-2 rounded-full font-bold shadow flex items-center gap-2">
          <Tag className="w-4 h-4" />
          <span>₹{price.toLocaleString("en-IN")}</span>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-2xl font-extrabold text-white">
            {property.title}
          </h3>

          <div className="flex items-center text-white/85 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {property.location}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {property.description}
        </p>

        {/* Sizes */}
        {/* Sizes + Offers + Group Members */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-between gap-4">

            {/* Project Sizes */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Project Sizes
              </h4>

              <div className="flex flex-wrap gap-2">
                {(property.project_sizes || []).map((size, i) => (
                  <span
                    key={`${property.id}-size-${i}`}
                    className="px-3 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Offers */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Offers
              </h4>
              <p className="text-xs text-emerald-700 font-semibold">
                1% Assured Returns Till Possession
              </p>
            </div>

            {/* Group Members */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Group Members
              </h4>
              <p className="text-xs text-gray-600 font-medium">
                {property.group_members || "0"} Joined
              </p>
            </div>

          </div>
        </div>

        <button
          className="w-full bg-emerald-600 text-white py-3 rounded-2xl font-bold"
          type="button"
        >
          I am Intrested
        </button>
      </div>
    </div>
  );
}
