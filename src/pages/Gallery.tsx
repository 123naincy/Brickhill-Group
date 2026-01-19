import { useEffect, useState } from 'react';


export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'project', label: 'Projects' },
    { value: 'office', label: 'Office' },
    { value: 'team', label: 'Team' },
    { value: 'event', label: 'Events' },
  ];

  useEffect(() => {
    fetchImages();
  }, [filter]);

  async function fetchImages() {
    try {
      setLoading(true);
      let query = supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('category', filter);
      }

      const { data, error } = await query;
      if (error) throw error;

      setImages(data || []);
    } catch (error) {
      console.error('Error fetching gallery:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0f4b40] mb-4">
            Gallery
          </h2>
          <p className="text-xl text-[#0f4b40] max-w-2xl mx-auto">
            Explore our visual journey through projects, events, and milestones
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === f.value
                  ? 'bg-[#0f4b40] text-[#fffbba]'
                  : 'bg-[#fffbba] text-[#0f4b40] border-2 border-[#0f4b40]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-20 text-[#0f4b40]">
            Loading gallery...
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-20 text-[#0f4b40]">
            No images found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#0f4b40]"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.image_url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 flex items-end bg-[#0f4b40] opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4 text-[#fffbba]">
                    <h3 className="text-lg font-bold mb-1">
                      {image.title}
                    </h3>

                    {image.description && (
                      <p className="text-sm mb-2">
                        {image.description}
                      </p>
                    )}

                    <span className="inline-block text-xs border-2 border-[#fffbba] px-2 py-1 rounded capitalize">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
