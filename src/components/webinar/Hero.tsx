import {
  Users,
  Clock,
  Award,
  Star,
  Calendar,
  ShieldCheck
} from "lucide-react";
import RegistrationForm from "../webinar/RegistrationForm";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#041f38] via-[#073762] to-[#041f38] text-white overflow-hidden mt-10">

      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3d85c5]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9fc5e9]/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Premium Tag */}
          <div className="inline-flex items-center gap-3 bg-[#9fc5e9]/10 border border-[#9fc5e9]/30 px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <Calendar className="w-4 h-4 text-[#9fc5e9]" />
            Live Premium Webinar · ₹99 Only
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Unlock the Power of{" "}
            <span className="bg-gradient-to-r from-[#9fc5e9] to-[#3d85c5] bg-clip-text text-transparent">
              Group Buying
            </span>{" "}
            in Real Estate
          </h1>

          <p className="text-xl text-[#cfe3f8] max-w-xl mb-10">
            Discover how investors save ₹10–25 Lakhs by negotiating
            property deals collectively with verified builders.
          </p>

          {/* Feature points */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <HeroPoint icon={<Clock />} text="60-Min Live Strategy Session" />
            <HeroPoint icon={<Users />} text="Limited Paid Seats" />
            <HeroPoint icon={<Award />} text="Expert-Led Negotiation Model" />
            <HeroPoint icon={<ShieldCheck />} text="Transparent & Verified Projects" />
          </div>

          {/* Social Proof Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5 max-w-md flex items-center gap-4">
            <Star className="w-7 h-7 text-[#9fc5e9] fill-current" />
            <div>
              <p className="font-semibold">2,800+ Paid Investors Attended</p>
              <p className="text-sm text-[#cfe3f8]">
                Rated 4.9/5 for value & clarity
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT – PREMIUM FORM CARD */}
        <div className="relative">

          {/* Floating Price Badge */}
          <div className="absolute -top-8 right-6 bg-gradient-to-r from-[#3d85c5] to-[#9fc5e9] text-[#041f38] px-6 py-3 rounded-full font-bold shadow-2xl text-lg animate-bounce">
            ₹99 ONLY
          </div>

          <div className="bg-white text-gray-800 rounded-3xl shadow-2xl p-10">
            <h3 className="text-2xl font-bold text-center text-[#073762] mb-6">
              Reserve Your Seat Now
            </h3>

            <RegistrationForm />

            <p className="text-xs text-gray-500 text-center mt-6">
              🔒 Secure payment · No spam · Limited seats available
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

/* Reusable Feature Point */
function HeroPoint({ icon, text }: { icon: JSX.Element; text: string }) {
  return (
    <div className="flex items-center gap-3 text-[#cfe3f8]">
      <div className="text-[#9fc5e9]">{icon}</div>
      <span>{text}</span>
    </div>
  );
}