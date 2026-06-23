import { CheckCircle, Lightbulb, Gift } from "lucide-react";
import { Helmet } from "react-helmet-async";

const benefits = [
  "Accessible Entry Model",
  "Institutional-Grade Management",
  "Strategic Diversification",
  "Strong Investor Ecosystem",
  "Early Deal Access",
];

export default function BenefitsSection() {
  return (
    <>
      <Helmet>
        {/* Primary Meta */}
        <title>
          Real Estate Investment Webinar | Learn Group Buying Strategy | BHL Group
        </title>

        <meta
          name="title"
          content="Real Estate Investment Webinar | Learn Group Buying Strategy | BHL Group"
        />

        <meta
          name="description"
          content="Join BHL Group’s real estate investment webinar to learn how group buying helps investors access premium residential, commercial and warehouse properties at builder-level pricing."
        />

        <meta
          name="keywords"
          content="real estate investment webinar, property investment webinar India, group buying real estate webinar, Gurugram property investment webinar, BHL Group webinar"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="BHL Group" />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.brickhillgroup.com/webinar"
        />

        {/* Geo Tags */}
        <meta name="geo.region" content="IN-HR" />
        <meta name="geo.placename" content="Gurugram" />
        <meta name="geo.position" content="28.4595;77.0266" />
        <meta name="ICBM" content="28.4595, 77.0266" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brickhillgroup.com/webinar" />

        <meta
          property="og:title"
          content="Real Estate Investment Webinar | BHL Group"
        />

        <meta
          property="og:description"
          content="Discover how investors access premium property opportunities through group buying. Join BHL Group's real estate investment webinar."
        />

        <meta
          property="og:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

        <meta property="og:site_name" content="BHL Group" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Real Estate Investment Webinar | BHL Group"
        />

        <meta
          name="twitter:description"
          content="Join our webinar and learn how to invest in real estate through group buying strategies."
        />

        <meta
          name="twitter:image"
          content="https://www.brickhillgroup.com/og-image.jpg"
        />

        {/* Event Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Real Estate Investment Webinar",
            "description": "Learn how to invest in premium real estate through group buying strategies.",
            "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "organizer": {
              "@type": "Organization",
              "name": "BHL Group",
              "url": "https://www.brickhillgroup.com"
            }
          })}
        </script>

      </Helmet>
      <section className="relative py-28 bg-[#f8fbff] overflow-hidden">
        {/* Soft accent blobs */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#9fc5e9]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3d85c5]/20 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT – Benefits */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#073762] mb-6">
              Why You Should Attend
            </h2>

            <p className="text-lg text-neutral-600 mb-12 max-w-xl">
              This isn’t theory. It’s a practical framework used by
              real investors to negotiate smarter and reduce risk.
            </p>

            <div className="space-y-6">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md border border-[#9fc5e9]/20 hover:shadow-xl transition"
                >
                  <CheckCircle className="w-6 h-6 text-[#3d85c5] mt-1" />
                  <span className="text-lg font-medium text-[#073762]">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Bonus Card */}
          <div className="relative">

            <div className="bg-gradient-to-br from-[#073762] to-[#0b5394] text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">

              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#9fc5e9]/20 blur-3xl rounded-full"></div>

              <div className="relative">

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-2xl">
                    <Lightbulb className="w-8 h-8 text-[#9fc5e9]" />
                  </div>
                  <h3 className="text-3xl font-bold">
                    Exclusive Attendee Bonus
                  </h3>
                </div>

                <p className="text-[#cfe3f8] text-lg mb-8">
                  Get our <strong>Group Buying Investment Blueprint</strong> —
                  a practical step-by-step PDF guide used by professional investors.
                </p>

                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
                  <Gift className="w-6 h-6 text-[#9fc5e9]" />
                  <span className="font-semibold">
                    Included FREE with ₹99 Ticket
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}