export default function TrustIndicators() {
  const stats = [
    { value: "5,000+", label: "Active Investors" },
    { value: "$250M+", label: "Total Invested" },
    { value: "150+", label: "Properties Acquired" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#f4f8fc] via-white to-[#f4f8fc] border-y border-[#9fc5e9]/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {stats.map((s, i) => (
          <div
            key={i}
            className="group transition duration-300 hover:-translate-y-1"
          >
            <div className="text-3xl md:text-4xl font-extrabold text-[#073762] group-hover:text-[#3d85c5] transition">
              {s.value}
            </div>

            <div className="text-neutral-600 mt-2">
              {s.label}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}