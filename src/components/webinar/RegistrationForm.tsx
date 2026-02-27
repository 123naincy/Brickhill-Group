import { useState } from "react";
import { submitToSheet } from "../utils/submitToSheet";

export default function RegistrationForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await submitToSheet({
      formName: "Webinar Registration Form",
      ...data,
    });

    alert("✅ Spot Reserved!");

    setData({ name: "", email: "", phone: "" });
  };

  return (
    <form
      className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-[#9fc5e9]/30 text-[#073762]"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#073762] to-[#3d85c5] bg-clip-text text-transparent">
        Register Now
      </h3>

      {/* Name */}
      <input
        placeholder="Full Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        required
        className="w-full mb-4 p-3 rounded-lg border border-[#9fc5e9]/40 outline-none focus:ring-2 focus:ring-[#3d85c5] focus:border-[#3d85c5] transition"
      />

      {/* Email */}
      <input
        placeholder="Email Address"
        type="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        required
        className="w-full mb-4 p-3 rounded-lg border border-[#9fc5e9]/40 outline-none focus:ring-2 focus:ring-[#3d85c5] focus:border-[#3d85c5] transition"
      />

      {/* Phone */}
      <input
        placeholder="Phone Number"
        type="tel"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
        required
        className="w-full mb-6 p-3 rounded-lg border border-[#9fc5e9]/40 outline-none focus:ring-2 focus:ring-[#3d85c5] focus:border-[#3d85c5] transition"
      />

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#073762] to-[#3d85c5] text-white py-3 rounded-full font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
      >
        Reserve My Spot – ₹99
      </button>
    </form>
  );
}