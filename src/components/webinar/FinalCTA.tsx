export default function FinalCTA() {
  return (
    <section className="relative py-28 bg-[#041f38] text-white text-center overflow-hidden">

      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3d85c5]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9fc5e9]/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-4xl mx-auto px-6">

        {/* Urgency Badge */}
        <div className="inline-block bg-red-500/20 text-red-300 px-6 py-2 rounded-full font-semibold text-sm mb-8 animate-pulse">
          ⏳ Limited Seats Available
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          This ₹99 Webinar Could <br />
          <span className="bg-gradient-to-r from-[#9fc5e9] to-[#3d85c5] bg-clip-text text-transparent">
            Save You Lakhs
          </span>
        </h2>

        <p className="text-lg md:text-xl text-[#cfe3f8] mb-12 max-w-2xl mx-auto">
          Learn the exact strategy investors are using to negotiate better
          property deals through collective buying power.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-block bg-gradient-to-r from-[#3d85c5] to-[#9fc5e9] text-[#041f38] font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:scale-110 transition duration-300"
        >
          Secure My Seat for ₹99 →
        </button>

        <p className="text-sm text-[#9fc5e9] mt-6">
          🔒 Secure Payment · No Spam · Instant Access
        </p>

      </div>
    </section>
  );
}