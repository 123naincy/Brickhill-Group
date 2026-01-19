import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      content: 'Brickhill Group transformed our dream into reality. The quality of construction and attention to detail exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      content: 'Our new commercial space has significantly enhanced our business operations. Professional team and exceptional delivery.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Investor',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      content: 'Working with Brickhill has been a pleasure. Their projects consistently deliver strong returns and quality construction.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-[#f6fbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E6F64] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Don’t just take our word for it – hear from our satisfied clients
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition border border-[#1E6F64]/10"
            >
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-neutral-600 mb-6 italic">“{t.content}”</p>

              <div className="flex items-center">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <div className="font-semibold text-[#1E6F64]">{t.name}</div>
                  <div className="text-sm text-neutral-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
