import {
  CheckCircle,
  Shield,
  Clock,
  Lightbulb,
  Users,
  HeartHandshake,
} from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    { icon: CheckCircle, title: 'Quality Assurance', description: 'Uncompromising standards in construction and materials' },
    { icon: Shield, title: 'Trust & Reliability', description: 'Transparent processes and on-time delivery' },
    { icon: Clock, title: 'Timely Completion', description: 'Projects delivered within committed timelines' },
    { icon: Lightbulb, title: 'Innovation', description: 'Cutting-edge designs and sustainable practices' },
    { icon: Users, title: 'Expert Team', description: 'Experienced professionals dedicated to excellence' },
    { icon: HeartHandshake, title: 'Customer First', description: 'Your satisfaction is our top priority' },
  ];

  return (
    <section className="py-20 bg-[#f6fbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E6F64] mb-4">
            Why Choose Brickhill Group
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            We combine expertise, innovation, and integrity to deliver exceptional results
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition border border-[#1E6F64]/10"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1E6F64] to-[#4FA59A] flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#1E6F64] mb-2">
                {feature.title}
              </h3>

              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
