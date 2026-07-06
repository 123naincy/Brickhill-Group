import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/footer-logo.png";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#073762] via-[#0b5394] to-[#073762] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="logo mb-2">
              <Link to="/" className="logo">
                <img src={Logo} alt="Brickhill-group" className="img-fluid" />
              </Link>
            </div>

            <p className="text-white/80 mb-5">
              Building dreams, creating landmarks. Your trusted partner in premium real estate investments.
            </p>

            <div className="flex space-x-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-[#9fc5e9] hover:text-white hover:scale-110 transition duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-5 text-lg text-[#9fc5e9]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="/about" className="hover:text-[#9fc5e9] transition">About Us</a></li>
              <li><a href="/group-buying" className="hover:text-[#9fc5e9] transition">Group Buying</a></li>
              <li><a href="/blog" className="hover:text-[#9fc5e9] transition">Blog</a></li>
              <li><a href="/newsletter-card" className="hover:text-[#9fc5e9] transition">Newsletter</a></li>
            </ul>
          </div>

          {/* Project Types */}
          <div>
            <h3 className="font-bold mb-5 text-lg text-[#9fc5e9]">
              Featured Projects
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="https://kbdlandcorp.in/eden-street"
                  className="text-white/80 hover:text-[#9fc5e9] transition"
                >
                  Eden street
                </Link>
              </li>

              <li>
                <Link
                  to="https://kbdlandcorp.in/bridal-shopping-commercial"
                  className="text-white/80 hover:text-[#9fc5e9] transition"
                >
                  Bridal Square
                </Link>
              </li>

              <li>
                <Link
                  to="https://panipatindustrialplots.com/"
                  className="text-white/80 hover:text-[#9fc5e9] transition"
                >
                  Panipat Industrial Plots
                </Link>
              </li>

              <li>
                <Link
                  to="https://thelogiprime.com/"
                  className="text-white/80 hover:text-[#9fc5e9] transition"
                >
                  Warehouse
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-5 text-lg text-[#9fc5e9]">
              Contact Us
            </h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#6fa8dd]" />
                DLF Corporate Greens, Tower 1 1604-1605, Gurugram, Haryana, 122002
              </li>

             <li className="flex items-center gap-2">
  <Phone className="h-5 w-5 text-[#6fa8dd]" />
  
  <a 
    href="tel:9910729150" 
    className="hover:underline"
  >
    +91-9910729150
  </a>
</li>

             <li className="flex items-center gap-2">
  <Mail className="h-5 w-5 text-[#6fa8dd]" />
  
  <a 
    href="mailto:info@brickhillgroup.com" 
    className="hover:underline"
  >
    info@brickhillgroup.com
  </a>
</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#9fc5e9]/30 mt-10 pt-6 text-center text-sm text-white/70">
          © {currentYear} BHL Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}