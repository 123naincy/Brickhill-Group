import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/footer-logo.png";
export default function Footer() {
  const currentYear = new Date().getFullYear();
const socialLinks = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=100088910250148",
    label: "Facebook",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/@goboundry",
    label: "YouTube",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/brickhill__/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/company/bhlgroups/",
    label: "LinkedIn",
  },
];
  return (
    <footer className="bg-gradient-to-r from-[#073762] via-[#0b5394] to-[#073762] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="logo mb-2">
              <Link to="/" className="logo">
                <img src={Logo} alt="Brickhill Group" className="img-fluid" />
              </Link>
            </div>

            <p className="text-white/80 mb-5">
              Building dreams, creating landmarks. Your trusted partner in premium real estate investments.
            </p>

           <div className="flex space-x-5">
  {socialLinks.map(({ icon: Icon, url, label }) => (
    <a
      key={label}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
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
              <li><Link to="/about" className="hover:text-[#9fc5e9] transition">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-[#9fc5e9] transition">Projects</Link></li>
              <li><Link to="/group-buying" className="hover:text-[#9fc5e9] transition">Group Buying</Link></li>
              <li><Link to="/blog" className="hover:text-[#9fc5e9] transition">Blog</Link></li>
              <li><Link to="/newsletter" className="hover:text-[#9fc5e9] transition">Newsletter</Link></li>
              <li><Link to="/contact" className="hover:text-[#9fc5e9] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Project Types */}
          <div>
            <h3 className="font-bold mb-5 text-lg text-[#9fc5e9]">
              Featured Projects
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://kbdlandcorp.in/eden-street"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#9fc5e9] transition"
                >
                  Eden street
                </a>
              </li>

              <li>
                <a
                  href="https://kbdlandcorp.in/bridal-shopping-commercial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#9fc5e9] transition"
                >
                  Bridal Square
                </a>
              </li>

              <li>
                <a
                  href="https://panipatindustrialplots.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#9fc5e9] transition"
                >
                  Panipat Industrial Plots
                </a>
              </li>

              <li>
                <a
                  href="https://thelogiprime.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#9fc5e9] transition"
                >
                  Warehouse
                </a>
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
    href="mailto:sales@brickhillgroup.com" 
    className="hover:underline"
  >
    sales@brickhillgroup.com
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