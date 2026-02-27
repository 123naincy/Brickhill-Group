import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ankit Sharma",
      role: "Home Buyer, Gurugram",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      content:
        "Brickhill Group made our home-buying journey smooth and transparent. The build quality and timely delivery truly impressed us.",
      rating: 5,
    },
    {
      name: "Priya Mehta",
      role: "Retail Business Owner",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      content:
        "Our commercial unit is perfectly planned and strategically located. Brickhill’s team was professional and supportive throughout.",
      rating: 5,
    },
    {
      name: "Rohit Verma",
      role: "Real Estate Investor",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      content:
        "As an investor, I value trust and returns. Brickhill Group consistently delivers projects with excellent appreciation potential.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#f4f8fc] to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-extrabold mb-4"
            style={{
              background: "linear-gradient(90deg,#073762,#3d85c5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What Our Clients Say
          </h2>

          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Don’t just take our word for it – hear from investors and buyers who trust Brickhill Group.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-3xl border border-[#9fc5e9]/30 shadow-md hover:shadow-2xl transition duration-500"
            >
              {/* Stars */}
              <div className="flex mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-5 w-5 text-[#3d85c5] fill-[#3d85c5] mr-1"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-600 mb-8 italic leading-relaxed">
                “{t.content}”
              </p>

              {/* User */}
              <div className="flex items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-[#6fa8dd]"
                />

                <div>
                  <div className="font-semibold text-[#073762]">
                    {t.name}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}