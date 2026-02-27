import { Home, Building, Factory, Warehouse } from "lucide-react";
import { allImages } from "../../data/AllImages";

const residential = allImages.residentialFallback;
const commercial = allImages.kbdPlaza21;
const industrial = allImages.panipatIndustrial;
const warehouse = allImages.logiPrime;

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential",
      description:
        "Luxurious homes and apartments designed for modern living with premium amenities and strategic locations.",
      image: residential,
    },
    {
      icon: Building,
      title: "Commercial",
      description:
        "State-of-the-art office spaces and retail complexes that drive business growth and success.",
      image: commercial,
    },
    {
      icon: Factory,
      title: "Industrial",
      description:
        "Robust industrial facilities equipped with modern infrastructure for manufacturing excellence.",
      image: industrial,
    },
    {
      icon: Warehouse,
      title: "Warehouse",
      description:
        "Efficient storage and logistics solutions with strategic connectivity and advanced systems.",
      image: warehouse,
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
            Our Specializations
          </h2>

          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We deliver excellence across diverse real estate sectors with proven expertise and long-term value creation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden border border-[#9fc5e9]/30 shadow-md hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-[#073762] to-[#3d85c5] flex items-center justify-center shadow-lg">
                  <s.icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#073762] mb-3">
                  {s.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed text-sm">
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