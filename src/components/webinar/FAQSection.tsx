const faqs = [
  [
    "What is this webinar about?",
    "This webinar explains how group buying works in real estate and how buyers save significantly through collective purchasing.",
  ],
  [
    "Who should attend this webinar?",
    "Anyone interested in buying property whether for investment or personal use who wants to understand smarter buying strategies and real, on-ground deals.",
  ],
  [
    "Why is there a ₹99 access fee?",
    "The fee ensures serious participation and helps maintain quality interaction.",
  ],
  [
    "Will real projects and pricing be discussed?",
    "Yes. The webinar includes real projects, live price comparisons, and an explanation of how group negotiations are conducted with developers.",
  ],
  [
    "Will there be a live Q&A session?",
    "Absolutely. Participants can ask questions directly during the session and get clarity on the process, projects, and next steps.",
  ],
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f4f8fc] via-white to-[#eaf3fb]">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#073762] to-[#3d85c5] bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-neutral-600 text-lg">
            Everything you need to know before joining the webinar.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map(([q, a], i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-[#9fc5e9]/30 hover:-translate-y-1"
            >
              <div className="border-l-4 border-[#3d85c5] pl-4">
                <h3 className="font-semibold text-lg text-[#073762] mb-2">
                  {q}
                </h3>
                <p className="text-neutral-600">
                  {a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}