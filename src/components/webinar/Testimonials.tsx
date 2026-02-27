import { Star } from "lucide-react";

const reviews = [
  ["Michael Chen", "First investment in 30 days!"],
  ["Jennifer Roberts", "Diversified across 5 properties"],
  ["David Thompson", "Highly valuable webinar"],
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f4f8fc] via-white to-[#eaf3fb]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#073762] to-[#3d85c5] bg-clip-text text-transparent mb-4">
            What Our Investors Say
          </h2>

          <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
            Trusted by investors who are building wealth through smart group real estate investments.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map(([name, text], i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-[#9fc5e9]/30 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="text-[#3d85c5] fill-[#3d85c5] w-5 h-5"
                  />
                ))}
              </div>

              <p className="italic text-neutral-600 mb-6">
                "{text}"
              </p>

              <strong className="text-[#073762] text-lg">
                {name}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}