const faqs = [
  ["What is this webinar about?", "This webinar explains how group buying works in real estate,  and how buyers save significantly through collective purchasing."],
  ["Who should attend this webinar?", "Anyone interested in buying property whether for investment or personal use who wants to understand smarter buying strategies and real, on-ground deals."],
  ["Why is there a ₹99 access fee?", "The fee ensures serious participation and helps maintain quality interaction. "],
  ["Will real projects and pricing be discussed?", "Yes. The webinar includes real projects, live price comparisons, and an explanation of how group negotiations are conducted with developers."],
  ["Will there be a live Q&A session?" , "Absolutely. Participants can ask questions directly during the session and get clarity on the process, projects, and next steps."]
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
