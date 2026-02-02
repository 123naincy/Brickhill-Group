import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { submitToSheet } from "../components/utils/submitToSheet";

export default function Contact() {
  // ✅ Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // ✅ Handle Change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit Form
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

    // ✅ Reset Form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#f6fbf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E6F64] mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Have a question or ready to start your project? We’re here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#1E6F64] mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  lines: [
                    "Dlf Corporates Greens, Tower 1 1604-1605, Gurugram,Haryana,122002",
                  ],
                },
                { icon: Phone, title: "Phone", lines: ["+91-8395994524"] },
                {
                  icon: Mail,
                  title: "Email",
                  lines: ["info@brickhillgroup.com", "sales@brickhillgroup.com"],
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  lines: [
                    "Mon - Fri: 9:00 AM - 6:00 PM",
                    "Sat: 10:00 AM - 4:00 PM",
                    "Sun: Closed",
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#1E6F64] to-[#4FA59A] flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-[#1E6F64]">
                      {item.title}
                    </h4>
                    {item.lines.map((line, idx) => (
                      <p key={idx} className="text-neutral-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <img
              src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Office Building"
              className="rounded-2xl shadow-lg mt-8"
            />
          </div>

          {/* Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-xl border border-[#1E6F64]/10"
            >
              <h3 className="text-2xl font-bold text-[#1E6F64] mb-6">
                Send Us a Message
              </h3>

              {/* Inputs */}
              {[
                { label: "Full Name *", name: "name", type: "text" },
                { label: "Email Address *", name: "email", type: "email" },
                { label: "Phone Number", name: "phone", type: "tel" },
              ].map((field) => (
                <div key={field.name} className="mb-5">
                  <label className="block text-sm font-semibold text-[#1E6F64] mb-2">
                    {field.label}
                  </label>
                  <input
                    name={field.name}
                    type={field.type}
                    required={field.name !== "phone"}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#1E6F64]/30 outline-none focus:ring-2 focus:ring-[#1E6F64]/30"
                  />
                </div>
              ))}

              {/* Subject */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-[#1E6F64] mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#1E6F64]/30"
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
                <label className="block text-sm font-semibold text-[#1E6F64] mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#1E6F64]/30 resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#1E6F64] to-[#4FA59A] text-white font-semibold py-4 rounded-lg hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
