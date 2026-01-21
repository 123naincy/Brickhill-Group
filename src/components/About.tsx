import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f6fbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-inter antialiased">

        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-[#1E6F64] mb-6">
              About Brickhill Group
            </h2>

            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              Brickhill Group is a trusted real estate developer with over a decade of experience across residential, commercial, industrial, and warehousing projects.
            </p>

            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
              We believe real estate is more than construction — it is about building spaces where businesses grow and communities thrive.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed">
              Driven by a clear vision and a strong professional team, Brickhill Group continues to raise industry standards.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Brickhill Group Office"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#1E6F64] to-[#4FA59A] text-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div>Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Mission / Vision / Values / Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Target, title: 'Our Mission', desc: 'World-class real estate solutions that exceed expectations' },
            { icon: Eye, title: 'Our Vision', desc: 'Most trusted and innovative developer in the region' },
            { icon: Award, title: 'Our Values', desc: 'Integrity, quality, innovation, customer focus' },
            { icon: Users, title: 'Our Team', desc: 'Experienced professionals dedicated to you' },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center bg-[#eef7f5] p-8 rounded-2xl shadow border border-[#1E6F64]/10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1E6F64] to-[#4FA59A] rounded-full mb-4">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1E6F64] mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-700">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Journey */}
        <div className="bg-gradient-to-br from-[#1E6F64] to-[#4FA59A] rounded-2xl p-8 md:p-12 shadow-xl text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Our Journey
          </h3>

          <div className="space-y-8">
            {[
              { year: '2016', title: 'Foundation', desc: 'Started with a vision to transform the real estate landscape' },
              { year: '2021', title: 'Expansion', desc: 'Expanded into commercial and industrial sectors' },
              { year: '2025', title: 'Innovation', desc: 'Leading sustainable development initiatives' },
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="w-32 font-bold text-[#c8f0e6]">{item.year}</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-white/90">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
