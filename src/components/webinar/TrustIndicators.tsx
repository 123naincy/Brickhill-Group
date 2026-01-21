export default function TrustIndicators() {
  const stats = [
    { value: "5,000+", label: "Active Investors" },
    { value: "$250M+", label: "Total Invested" },
    { value: "150+", label: "Properties Acquired" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="bg-white py-12 border-y">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-3xl font-bold text-green-700">{s.value}</div>
            <div className="text-gray-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
