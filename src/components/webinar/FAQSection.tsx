import { webinarFaqs } from "../../data/webinarFaqs";

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
          {webinarFaqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-[#9fc5e9]/30 hover:-translate-y-1"
            >
              <div className="border-l-4 border-[#3d85c5] pl-4">
                <h3 className="font-semibold text-lg text-[#073762] mb-2">
                  {faq.question}
                </h3>
                <p className="text-neutral-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}