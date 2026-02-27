import { useEffect, useState } from "react";
import galleryData from "../data/gallery.json";
import { allImages, fallbackImage } from "../data/AllImages";

interface GalleryImage {
  id: string;
  title: string;
  description?: string;
  category: string;
  image_key: string;
}

export default function GallerySection() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filter, setFilter] = useState("all");

  const filters = [
    { value: "all", label: "All" },
    { value: "commercial", label: "Commercial" },
    { value: "residential", label: "Residential" },
    { value: "industrial", label: "Industrial" },
    { value: "warehouse", label: "Warehouse" },
  ];

  useEffect(() => {
    const filtered =
      filter === "all"
        ? galleryData
        : galleryData.filter(
            (img) =>
              img.category.toLowerCase() === filter.toLowerCase()
          );
    setImages(filtered);
  }, [filter]);

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-[#f4f8fc] via-white to-[#eaf3fb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#073762] to-[#3d85c5] bg-clip-text text-transparent mb-4">
            Gallery
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Explore our visual journey through projects and developments
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === f.value
                  ? "bg-gradient-to-r from-[#073762] to-[#3d85c5] text-white shadow-lg"
                  : "bg-white text-[#073762] border border-[#9fc5e9]/40 hover:bg-[#f0f6fd]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-2xl shadow-md group bg-white border border-[#9fc5e9]/30 hover:shadow-2xl transition duration-300"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={allImages[image.image_key] || fallbackImage}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#073762]/90 via-[#0b5394]/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-bold mb-1">
                    {image.title}
                  </h3>

                  {image.description && (
                    <p className="text-sm mb-2 text-white/90">
                      {image.description}
                    </p>
                  )}

                  <span className="inline-block text-xs bg-[#3d85c5] px-3 py-1 rounded-full capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}