import { Users, Building2, BadgePercent, FileCheck, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-28 bg-[#f4f9f7]">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#0f4b40]">
        How Group Buying Works
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
        Buy property together, unlock bulk discounts and save lakhs with our simple,
        transparent and trusted group buying model.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        {[
          { icon: Users, title: "Join a Group", desc: "Register and select your preferred project" },
          { icon: Building2, title: "Builder Negotiation", desc: "We negotiate the best bulk price for you" },
          { icon: BadgePercent, title: "Big Discount", desc: "Save 10–25% instantly on property price" },
          { icon: ShieldCheck, title: "Safe & Verified", desc: "RERA verified projects with legal support" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white text-center p-8 rounded-2xl shadow hover:shadow-xl transition"
          >
            <item.icon size={48} className="mx-auto mb-5 text-[#0f4b40]" />
            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
