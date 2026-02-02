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
          (img) => img.category.toLowerCase() === filter.toLowerCase()
        );
    setImages(filtered);
  }, [filter]);

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0f4b40] mb-4">
            Gallery
          </h2>
          <p className="text-xl text-[#0f4b40] max-w-2xl mx-auto">
            Explore our visual journey through projects and developments
          </p>
        </div>

        {/* ✅ Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${filter === f.value
                  ? "bg-[#0f4b40] text-[#fffbba]"
                  : "bg-[#fffbba] text-[#0f4b40] border-2 border-[#0f4b40]"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ✅ Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-xl shadow-lg group bg-[#0f4b40]"
            >
              {/* ✅ Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={allImages[image.image_key] || fallbackImage}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* ✅ Hover Overlay */}
              <div className="absolute inset-0 flex items-end bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="p-4 text-[#fffbba]">
                  <h3 className="text-lg font-bold mb-1">
                    {image.title}
                  </h3>

                  {image.description && (
                    <p className="text-sm mb-2">{image.description}</p>
                  )}

                  <span className="inline-block text-xs border border-[#fffbba] px-2 py-1 rounded capitalize">
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
