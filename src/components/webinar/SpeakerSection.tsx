export default function SpeakerSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-widest text-green-600 font-semibold text-sm">
            Speaker
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-3">
            Learn From an Industry Leader
          </h2>
        </div>

        {/* Speaker Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gray-100 rounded-2xl flex items-center justify-center text-5xl font-bold text-green-700">
             KR
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
            Khushboo Raghav
            </h3>
            <p className="text-green-600 font-semibold mb-6">
              Real Estate Consultant
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              With over 15 years of hands-on experience, Sarah has structured and
              facilitated large-scale group buying deals, helping investors
              access premium properties with lower risk and better returns.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-extrabold text-gray-900">15+</p>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">$500M+</p>
                <p className="text-sm text-gray-500">Deals Facilitated</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-gray-900">2,800+</p>
                <p className="text-sm text-gray-500">Investors Trained</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
