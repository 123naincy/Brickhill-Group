import {
  CheckCircle,
  Shield,
  Clock,
  Lightbulb,
  Users,
  HeartHandshake,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "Uncompromising standards in construction and materials.",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description:
        "Transparent processes, ethical practices, and dependable delivery.",
    },
    {
      icon: Clock,
      title: "Timely Completion",
      description:
        "Projects delivered within committed timelines without compromise.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Modern architecture, smart planning, and sustainable practices.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Experienced professionals dedicated to excellence at every stage.",
    },
    {
      icon: HeartHandshake,
      title: "Customer First",
      description:
        "Your satisfaction and long-term value remain our highest priority.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#f4f8fc] to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-extrabold mb-4"
            style={{
              background: "linear-gradient(90deg,#073762,#3d85c5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Why Choose Brickhill Group
          </h2>

          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We combine expertise, innovation, and integrity to deliver
            long-term value across every real estate segment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl border border-[#9fc5e9]/30 shadow-md hover:shadow-2xl transition duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#073762] to-[#3d85c5] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#073762] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}