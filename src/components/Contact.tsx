import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { submitToSheet } from "../components/utils/submitToSheet";
import { Helmet } from "react-helmet-async";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await submitToSheet({
      formName: "Contact Page Form",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    });

    alert("✅ Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Contact Brickhill Group | Real Estate Investment Experts in Gurugram
        </title>
        {/* Meta Description */}
        <meta
          name="description"
          content="Contact Brickhill Group for premium real estate investment opportunities in Gurugram. Reach our team for residential, commercial, industrial and warehouse property inquiries."
        />
        {/* Keywords */}
        <meta
          name="keywords"
          content="Brickhill Group contact, real estate developers Gurugram, property investment Gurugram contact, commercial property Gurugram contact"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Brickhill Group" />
        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.brickhillgroup.com/contact"
        />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact Brickhill Group | Real Estate Investment"
        />

        <meta
          property="og:description"
          content="Get in touch with Brickhill Group to explore property investment opportunities in Gurugram."
        />

       

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Contact Brickhill Group | Real Estate Experts"
        />

        <meta
          name="twitter:description"
          content="Reach Brickhill Group for real estate investment opportunities in Gurugram."
        />

      </Helmet>
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-[#f4f8fc] via-white to-[#eaf3fb]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#073762] to-[#3d85c5] bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Have a question or ready to start your project? We’re here to help!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Info */}
            <div>
              <h3 className="text-2xl font-bold text-[#073762] mb-6">
                Contact Information
              </h3>

             <div className="space-y-6">
  {[
    {
      icon: MapPin,
      title: "Address",
      lines: [
        "DLF Corporate Greens, Tower 1 1604-1605, Gurugram, Haryana, 122002",
      ],
    },
    { icon: Phone, title: "Phone", lines: ["+91-8395994524"] },
    {
      icon: Mail,
      title: "Email",
      lines: [
        "info@brickhillgroup.com",
        "updates@brickhillgroup.com",
      ],
    },
    {
  icon: Clock,
  title: "Business Hours",
  lines: [
    "Open 24 Hours",
    "7 Days a Week",
  ],
    },
  ].map((item, i) => (
    <div key={i} className="flex items-start">
      <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#0b5394] to-[#3d85c5] flex items-center justify-center shadow-md">
        <item.icon className="h-6 w-6 text-white" />
      </div>

      <div className="ml-4">
        <h4 className="font-semibold text-[#073762]">
          {item.title}
        </h4>

        {item.lines.map((line, idx) => {
          // 👉 Phone clickable
          if (item.title === "Phone") {
            return (
              <a
                key={idx}
                href={`tel:${line.replace(/\D/g, "")}`}
                className="block text-neutral-600 hover:underline"
              >
                {line}
              </a>
            );
          }

          // 👉 Email clickable
          if (item.title === "Email") {
            return (
              <a
                key={idx}
                href={`mailto:${line}`}
                className="block text-neutral-600 hover:underline"
              >
                {line}
              </a>
            );
          }

          // 👉 Default (Address / Hours)
          return (
            <p key={idx} className="text-neutral-600">
              {line}
            </p>
          );
        })}
      </div>
    </div>
  ))}
</div>

              <img
                src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Office Building"
                className="rounded-2xl shadow-xl mt-8"
              />
            </div>

            {/* Form */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-2xl border border-[#9fc5e9]/30"
              >
                <h3 className="text-2xl font-bold text-[#073762] mb-6">
                  Send Us a Message
                </h3>

                {[
                  { label: "Full Name *", name: "name", type: "text" },
                  { label: "Email Address *", name: "email", type: "email" },
                  { label: "Phone Number", name: "phone", type: "tel" },
                ].map((field) => (
                  <div key={field.name} className="mb-5">
                    <label className="block text-sm font-semibold text-[#073762] mb-2">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      type={field.type}
                      required={field.name !== "phone"}
                      value={(formData as any)[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#9fc5e9]/40 outline-none focus:ring-2 focus:ring-[#3d85c5] focus:border-[#3d85c5] transition"
                    />
                  </div>
                ))}

                {/* Subject */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-[#073762] mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#9fc5e9]/40 focus:ring-2 focus:ring-[#3d85c5]"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="residential">Residential Projects</option>
                    <option value="commercial">Commercial Projects</option>
                    <option value="industrial">Industrial Projects</option>
                    <option value="warehouse">Warehouse Projects</option>
                    <option value="investment">Investment Opportunities</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-[#073762] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#9fc5e9]/40 resize-none focus:ring-2 focus:ring-[#3d85c5]"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#073762] to-[#3d85c5] text-white font-semibold py-4 rounded-lg hover:scale-105 hover:shadow-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}