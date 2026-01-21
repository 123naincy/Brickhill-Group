import { Star } from "lucide-react";

const reviews = [
  ["Michael Chen", "First investment in 30 days!"],
  ["Jennifer Roberts", "Diversified across 5 properties"],
  ["David Thompson", "Highly valuable webinar"],
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Investors Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Trusted by investors who are building wealth through smart group real estate investments.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map(([name, text], i) => (
            <div
              key={i}
              className="bg-green-50 p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-500 fill-yellow-500 w-5 h-5"
                  />
                ))}
              </div>

              <p className="italic text-gray-700 mb-4">"{text}"</p>
              <strong className="text-gray-900">{name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
