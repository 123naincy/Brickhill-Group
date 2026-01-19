import { useEffect, useState } from 'react';
import galleryData from '../data/gallery.json';

type GalleryImage = {
  id: string;
  title: string;
  description?: string;
  category: string;
  image_url: string;
};

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filter, setFilter] = useState('all');

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'project', label: 'Projects' },
    { value: 'office', label: 'Office' },
    { value: 'team', label: 'Team' },
    { value: 'event', label: 'Events' },
  ];

  useEffect(() => {
    if (filter === 'all') setImages(galleryData);
    else setImages(galleryData.filter(img => img.category === filter));
  }, [filter]);

  return (
    <section id="gallery" className="py-20 bg-[#f6fbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E6F64] mb-4">Gallery</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Explore our visual journey through projects, events, and milestones
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                filter === f.value
                  ? 'bg-gradient-to-r from-[#1E6F64] to-[#4FA59A] text-white'
                  : 'bg-white text-[#1E6F64] border border-[#1E6F64]/20 hover:bg-[#eef7f5]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map(img => (
            <div key={img.id} className="relative overflow-hidden rounded-2xl shadow border border-[#1E6F64]/10 group">
              <img src={img.image_url} alt={img.title} className="w-full h-64 object-cover" />

              <div className="absolute inset-0 bg-[#1E6F64]/80 opacity-0 group-hover:opacity-100 transition flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">{img.title}</h3>
                  <p className="text-sm">{img.description}</p>
                  <span className="inline-block mt-2 text-xs border border-white px-3 py-1 rounded-full capitalize">
                    {img.category}
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
