import { Calendar, Users, Video, Phone, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { submitToSheet } from "../utils/submitToSheet";

export default function GroupBuyingHero() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await submitToSheet({
      formName: "Group Buying Form",
      ...data,
    });

    alert("✅ Registered Successfully!");

    setData({ name: "", phone: "", email: "", location: "" });
  };

  return (
    <section className="py-28 bg-gradient-to-r from-[#0f4b40] via-[#0b6b5c] to-[#0f4b40] text-[#fffbba]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-[#fffbba]/10 px-5 py-2 rounded-full text-sm mb-6">
            Paid Live Webinar • Just ₹99 • Limited Seats
          </span>

          <h1 className="text-5xl leading-tight font-extrabold mb-6">
            Buy Property at <span className="text-white">Bulk Discount</span><br />
            Using Group Buying
          </h1>

          <p className="text-lg mb-7 text-[#fffbba]/90">
            Learn how smart buyers are saving <b>₹10–25 Lakhs</b> by joining our
            exclusive group buying model with real projects & live negotiation strategy.
          </p>

          <ul className="space-y-4 text-[#fffbba]/90 text-lg">
            <li className="flex gap-3 items-center"><Calendar /> Live Demo + Q&A Session</li>
            <li className="flex gap-3 items-center"><Users /> 100+ Buyers Already Joined</li>
            <li className="flex gap-3 items-center"><Video /> Real Projects & Price Comparison</li>
            <li className="flex gap-3 items-center"><Phone /> Direct Builder Interaction</li>
            <li className="flex gap-3 items-center"><ShieldCheck /> Trusted & Transparent Process</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="bg-white text-gray-800 p-9 rounded-3xl shadow-2xl">
          <h3 className="text-3xl font-bold mb-1 text-center text-[#0f4b40]">
            Register for Webinar
          </h3>
          <p className="text-center text-sm mb-5 text-gray-500">
            Access Fee: <b>₹99 only</b> • Refundable if you don’t like the session
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              placeholder="Full Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
              className="w-full border p-3 rounded-lg"
            />

            <input
              placeholder="Mobile Number"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              className="w-full border p-3 rounded-lg"
            />

            <input
              placeholder="Email Address"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full border p-3 rounded-lg"
            />

            <select
              value={data.location}
              onChange={(e) => setData({ ...data, location: e.target.value })}
              className="w-full border p-3 rounded-lg"
            >
              <option value="">Interested Location</option>
              <option value="Mohali">Mohali</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Kharar">Kharar</option>
              <option value="Zirakpur">Zirakpur</option>
            </select>

            <button className="w-full bg-green-700 text-white py-3 rounded-lg">
              Reserve Seat Free ✅
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4">
            Limited seats • Secure payment • Privacy protected • No spam
          </p>
        </div>

      </div>
    </section>
  );
}
