export default function SpeakerSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-[#f4f8fc] via-white to-[#eaf3fb]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-widest text-[#3d85c5] font-semibold text-sm">
            Speaker
          </span>

          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#073762] to-[#3d85c5] bg-clip-text text-transparent mt-3">
            Learn From an Industry Leader
          </h2>
        </div>

        {/* Speaker Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-[#0b5394] to-[#3d85c5] rounded-3xl flex items-center justify-center text-5xl font-bold text-white shadow-2xl">
              KR
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-[#073762] mb-2">
              Khushboo Raghav
            </h3>

            <p className="text-[#3d85c5] font-semibold mb-6">
              Real Estate Consultant
            </p>

            <p className="text-neutral-600 text-lg leading-relaxed mb-10">
              With over 15 years of hands-on experience, Khushboo has structured and
              facilitated large-scale group buying deals, helping investors
              access premium properties with lower risk and better returns.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-[#9fc5e9]/30 text-center">
                <p className="text-3xl font-extrabold text-[#073762]">15+</p>
                <p className="text-sm text-neutral-500">Years Experience</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-[#9fc5e9]/30 text-center">
                <p className="text-3xl font-extrabold text-[#073762]">$500M+</p>
                <p className="text-sm text-neutral-500">Deals Facilitated</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-[#9fc5e9]/30 text-center">
                <p className="text-3xl font-extrabold text-[#073762]">2,800+</p>
                <p className="text-sm text-neutral-500">Investors Trained</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}