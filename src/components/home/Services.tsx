import { Home, Building, Factory, Warehouse } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential',
      description: 'Luxurious homes and apartments designed for modern living with premium amenities and strategic locations.',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
    },
    {
      icon: Building,
      title: 'Commercial',
      description: 'State-of-the-art office spaces and retail complexes that drive business growth and success.',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Robust industrial facilities equipped with modern infrastructure for manufacturing excellence.',
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg',
    },
    {
      icon: Warehouse,
      title: 'Warehouse',
      description: 'Efficient storage and logistics solutions with strategic connectivity and advanced systems.',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg',
    },
  ];

  return (
    <section className="py-20 bg-[#f6fbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E6F64] mb-4">
            Our Specializations
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            We deliver excellence across diverse real estate sectors with proven expertise
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition border border-[#1E6F64]/10 overflow-hidden"
            >
              <img src={s.image} alt={s.title} className="w-full h-48 object-cover" />

              <div className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#1E6F64] to-[#4FA59A] flex items-center justify-center">
                  <s.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#1E6F64] mb-2">
                  {s.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
