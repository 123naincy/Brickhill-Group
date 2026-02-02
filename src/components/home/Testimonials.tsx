import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
  {
    name: 'Ankit Sharma',
    role: 'Home Buyer, Gurugram',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    content:
      'Brickhill Group made our home-buying journey smooth and transparent. The build quality and timely delivery truly impressed us.',
    rating: 5,
  },
  {
    name: 'Priya Mehta',
    role: 'Retail Business Owner',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    content:
      'Our commercial unit is perfectly planned and strategically located. Brickhill’s team was professional and supportive throughout.',
    rating: 5,
  },
  {
    name: 'Rohit Verma',
    role: 'Real Estate Investor',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    content:
      'As an investor, I value trust and returns. Brickhill Group consistently delivers projects with excellent appreciation potential.',
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
