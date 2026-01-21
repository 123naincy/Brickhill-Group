import {
  Users,
  Clock,
  Award,
  Star,
  Calendar
} from "lucide-react";
import RegistrationForm from "../webinar/RegistrationForm";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f4b40] via-[#0b6b5c] to-[#0f4b40] text-white overflow-hidden">
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          {/* Top badges */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold">
              <Calendar className="w-4 h-4 text-green-300" />
              Live Paid Webinar · ₹99
            </span>

            <span className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              ⏳ Starts in 02:14:36
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Master <span className="text-green-300">Group Buying</span><br />
            in Real Estate
          </h1>

          <p className="text-xl text-green-100 max-w-xl mb-10">
            Learn how smart investors reduce property prices, minimize risk,
            and grow wealth by investing together.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            <HeroStat icon={<Clock />} label="60-Min Live Session" />
            <HeroStat icon={<Users />} label="Limited Paid Seats" />
            <HeroStat icon={<Award />} label="Expert-Led Strategy" />
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl max-w-md">
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <p className="text-sm">
              <strong>2,800+ investors</strong> attended our paid sessions
            </p>
          </div>
        </div>

        {/* RIGHT – GLASS FORM */}
        <div className="relative">
          
          {/* Price badge */}
          <div className="absolute -top-6 -right-6 bg-green-400 text-green-900 px-5 py-3 rounded-full font-bold shadow-xl z-10">
            ₹99 ONLY
          </div>

          <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
            <RegistrationForm />
          </div>

          <p className="text-xs text-green-100 text-center mt-4">
            🔒 Secure payment · No spam · Limited seats
          </p>
        </div>

      </div>
    </section>
  );
}

function HeroStat({ icon, label }: { icon: JSX.Element; label: string }) {
  return (
    <div className="flex items-center gap-2 text-green-100">
      <span className="text-green-300">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
