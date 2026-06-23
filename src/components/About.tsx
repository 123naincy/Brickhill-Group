import { Target, Eye, Award, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
     <>
      <Helmet>
        {/* Title */}
        <title>
          About BHL Group | Real Estate Developers in Gurugram
        </title>
        {/* Meta Description */}
        <meta
          name="description"
          content="Learn about BHL Group, a trusted real estate developer in Gurugram specializing in residential, commercial, industrial, and warehouse developments."
        />
        {/* Keywords */}
        <meta
          name="keywords"
          content="BHL Group, real estate developers Gurugram, property development company India, commercial real estate Gurugram, warehouse projects Gurugram"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="BHL Group" />
        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.brickhillgroup.com/about"
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brickhillgroup.com/about" />
        <meta
          property="og:title"
          content="About BHL Group | Real Estate Developers"
        />

        <meta
          property="og:description"
          content="Discover BHL Group's journey, mission, and vision in building premium real estate developments."
        />
        <meta
          property="og:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="About BHL Group | Real Estate Developers"
        />

        <meta
          name="twitter:description"
          content="Explore BHL Group’s mission, vision and real estate expertise."
        />

        <meta
          name="twitter:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

      </Helmet>
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-[#f4f8fc] via-white to-[#eaf3fb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-inter antialiased">

        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#073762] to-[#3d85c5] bg-clip-text text-transparent mb-6">
              About BHL Group
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed">
  BHL Group is a trusted real estate brand with over a decade of expertise in delivering residential, commercial, industrial, warehousing, and innovative lifestyle developments, including BHL Studioz. We believe real estate is more than just building structures it is about creating valuable spaces where businesses grow, communities thrive, and modern lifestyles evolve. Driven by innovation, strategic vision, transparency, and a commitment to excellence, BHL Group continues to set new industry benchmarks by developing future-ready spaces that inspire trust, growth, and long-term value.
</p>
            
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="BHL Group Office"
              className="rounded-2xl shadow-xl"
            />

            {/* Gradient badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#0b5394] to-[#3d85c5] text-white p-8 rounded-xl shadow-2xl">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div>Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Mission / Vision / Values / Team */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Target, title: "Our Mission", desc: "World-class real estate solutions that exceed expectations" },
            { icon: Eye, title: "Our Vision", desc: "Most trusted and innovative developer in the region" },
            { icon: Award, title: "Our Values", desc: "Integrity, quality, innovation, customer focus" },
            { icon: Users, title: "Our Team", desc: "Experienced professionals dedicated to you" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#9fc5e9]/30 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#3d85c5] to-[#073762] rounded-full mb-4">
                <item.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#073762] mb-2">
                {item.title}
              </h3>

              <p className="text-neutral-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Journey */}
        <div className="bg-gradient-to-r from-[#073762] via-[#0b5394] to-[#3d85c5] rounded-2xl p-8 md:p-12 shadow-2xl text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Our Journey
          </h3>

          <div className="space-y-8">
            {[
              { year: "2016", title: "Foundation", desc: "Started with a vision to transform the real estate landscape" },
              { year: "2021", title: "Expansion", desc: "Expanded into commercial and industrial sectors" },
              { year: "2025", title: "Innovation", desc: "Leading sustainable development initiatives" },
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="w-32 font-bold text-[#9fc5e9]">
                  {item.year}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white/90">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
    </>
  );
}