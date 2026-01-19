import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#083a33] via-[#0f4b40] to-[#083a33] text-[#fffbba]">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center mb-5">
              <Building2 className="h-9 w-9" />
              <span className="ml-3 text-2xl font-extrabold tracking-wide">
                Brickhill Group
              </span>
            </div>
            <p className="text-[#fffbba]/80 mb-5">
              Building dreams, creating landmarks. Your trusted partner in premium real estate investments.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="hover:scale-110 transition">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-5 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-[#fffbba]/80">
              <li><a href="/about" className="hover:text-[#fffbba]">About Us</a></li>
              <li><a href="/projects" className="hover:text-[#fffbba]">Our Projects</a></li>
              <li><a href="/group-buying" className="hover:text-[#fffbba]">Group Buying</a></li>
              <li><a href="/blog" className="hover:text-[#fffbba]">Blog</a></li>
              <li><a href="/contact" className="hover:text-[#fffbba]">Contact</a></li>
            </ul>
          </div>

          {/* Project Types */}
          <div>
            <h3 className="font-bold mb-5 text-lg">Project Types</h3>
            <ul className="space-y-3 text-[#fffbba]/80">
              <li>Residential</li>
              <li>Commercial</li>
              <li>Industrial</li>
              <li>Warehouse</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-5 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-[#fffbba]/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5" /> Dlf Corporates Greens, Tower 1 1604-1605, Gurugram,Haryana,122002

              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" /> +91 84482 20334
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" /> info@brickhillgroup.com
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#fffbba]/30 mt-10 pt-6 text-center text-sm text-[#fffbba]/70">
          © {currentYear} Brickhill Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
