const faqs = [
  ["Is it free?", "Yes, completely free"],
  ["Need experience?", "No experience required"],
  ["Recording available?", "Yes"],
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know before joining the webinar.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map(([q, a], i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {q}
              </h3>
              <p className="text-gray-700">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
