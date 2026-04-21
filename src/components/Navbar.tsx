import { Menu, X, Mail, CalendarDays, Users, Phone } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const mainNav = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 shadow-xl">
      {/* ================= TOP BAR ================= */}
      <div className="bg-[#073762] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-12">

          {/* Left Animated Icons */}
          <div className="flex items-center gap-6">

            {/* Email */}
            <div className="flex items-center gap-2 group cursor-pointer">
  <Mail className="w-4 h-4 animate-pulse group-hover:scale-110 transition" />
  
  <a 
    href="mailto:info@brickhillgroup.com"
    className="text-white"
  >
    info@brickhillgroup.com
  </a>
</div>
         {/* Phone */}
<div className="flex items-center gap-2 group cursor-pointer number">
  <Phone className="w-4 h-4 animate-bounce group-hover:scale-110 transition" />
  
  <a 
    href="tel:83959945524" 
    className="text-white"
  >
    +91-83959 945524
  </a>
</div>

          </div>

          {/* Right Important Links */}
          <div className="flex items-center gap-6 font-medium">

            <Link
              to="/newsletter-card"
              className="flex items-center gap-2 text-white hover:text-[#9fc5e9] transition"
            >
              <Mail size={16} />
              Newsletter
            </Link>

            <Link
              to="/webinar"
              className="flex items-center gap-2 text-white hover:text-[#9fc5e9] transition"
            >
              <CalendarDays size={16} />
              Join  Webinar
            </Link>

            <Link
              to="/group-buying"
              className="flex items-center gap-2 text-white hover:text-[#9fc5e9] transition"
            >
              <Users size={16} />
              Group Buying
            </Link>

          </div>
        </div>
      </div>
      {/* ================= MAIN NAVBAR ================= */}
      <nav className="bg-white border-b border-[#0b5394]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link to="/" className="logo">
              <img src={logo} alt="Brickhill-group" className="img-fluid" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {mainNav.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-semibold tracking-wide transition ${isActive
                      ? "text-[#0b5394] border-b-2 border-[#0b5394] pb-1"
                      : "text-[#073762] hover:text-[#3d85c5]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* CTA */}
              <Link
                to="/contact"
                className="ml-6 bg-gradient-to-r from-[#0b5394] to-[#3d85c5] text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#0b5394]"
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}