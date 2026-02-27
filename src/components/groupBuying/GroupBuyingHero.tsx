import {
  Users,
  Building2,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
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
      formName: "Group Buying Inquiry",
      ...data,
    });

    alert("✅ Thank you! Our team will contact you shortly.");
    setData({ name: "", phone: "", email: "", location: "" });
  };

  return (
    <section className="relative py-32 bg-[#041f38] text-white overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3d85c5]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9fc5e9]/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>

          <span className="inline-flex items-center gap-2 bg-[#9fc5e9]/10 border border-[#9fc5e9]/30 px-6 py-2 rounded-full text-sm font-semibold mb-8">
            <Users className="w-4 h-4 text-[#9fc5e9]" />
            Exclusive Group Buying Model
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Invest Together.
            <br />
            <span className="bg-gradient-to-r from-[#9fc5e9] to-[#3d85c5] bg-clip-text text-transparent">
              Save More.
            </span>
          </h1>

          <p className="text-xl text-[#cfe3f8] mb-10 max-w-xl">
            Join a verified buyer group and unlock builder-level pricing,
            lower risk exposure, and stronger negotiation power.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-[#cfe3f8] text-lg">
            <Feature icon={<Building2 />} text="Premium Verified Projects" />
            <Feature icon={<TrendingUp />} text="Better ROI Potential" />
            <Feature icon={<Users />} text="Collective Buying Power" />
            <Feature icon={<ShieldCheck />} text="Transparent & Secure Process" />
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-white text-gray-800 rounded-3xl shadow-2xl p-10">

          <h3 className="text-2xl font-bold text-center text-[#073762] mb-4">
            Join the Group Buying Program
          </h3>

          <p className="text-center text-sm mb-6 text-gray-500">
            Our advisor will guide you through available projects.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>

            <input
              placeholder="Full Name"
              value={data.name}
              onChange={(e) =>
                setData({ ...data, name: e.target.value })
              }
              required
              className="w-full border p-3 rounded-xl"
            />

            <input
              placeholder="Mobile Number"
              value={data.phone}
              onChange={(e) =>
                setData({ ...data, phone: e.target.value })
              }
              required
              className="w-full border p-3 rounded-xl"
            />

            <input
              placeholder="Email Address"
              value={data.email}
              onChange={(e) =>
                setData({ ...data, email: e.target.value })
              }
              required
              className="w-full border p-3 rounded-xl"
            />

            <select
              value={data.location}
              onChange={(e) =>
                setData({ ...data, location: e.target.value })
              }
              className="w-full border p-3 rounded-xl"
            >
              <option value="">Preferred Location</option>
              <option value="Mohali">Mohali</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Kharar">Kharar</option>
              <option value="Zirakpur">Zirakpur</option>
            </select>

            <button
              className="w-full bg-gradient-to-r from-[#3d85c5] to-[#9fc5e9] text-[#041f38] font-bold py-4 rounded-xl hover:scale-105 transition"
            >
              Get Project Details →
            </button>

          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            🔒 Privacy protected • No spam • Advisory support included
          </p>

        </div>

      </div>
    </section>
  );
}

function Feature({ icon, text }: { icon: JSX.Element; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-[#9fc5e9]">{icon}</div>
      <span>{text}</span>
    </div>
  );
}