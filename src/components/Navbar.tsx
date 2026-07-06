import {
  Menu,
  X,
  Mail,
  CalendarDays,
  Users,
  Phone,
  Newspaper
} from "lucide-react";

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
    <header className="fixed top-0 left-0 w-full z-50">

      {/* ================= TOP BAR ================= */}
     <div className="bg-[#073762] hidden lg:block">
  <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-white">

    <div className="flex items-center gap-6 text-sm">
      <a
        href="mailto:info@brickhillgroup.com"
        className="flex items-center gap-2 text-white hover:text-[#9fc5e9]"
      >
        <Mail className="w-4 h-4 text-white" />
        info@brickhillgroup.com
      </a>

      <a
        href="tel:+919910729150"
        className="flex items-center gap-2 text-white hover:text-[#9fc5e9]"
      >
        <Phone className="w-4 h-4 text-white" />
        +91-9910729150
      </a>
    </div>

    <div className="flex items-center gap-6 text-sm font-medium">
      <Link to="/newsletter-card" className="flex items-center gap-2 text-white hover:text-[#9fc5e9]">
        <Mail size={15} className="text-white" />
        Newsletter
      </Link>

      <Link to="/webinar" className="flex items-center gap-2 text-white hover:text-[#9fc5e9]">
        <CalendarDays size={15} className="text-white" />
        Webinar
      </Link>

      <Link to="/group-buying" className="flex items-center gap-2 text-white hover:text-[#9fc5e9]">
        <Users size={15} className="text-white" />
        Group Buying
      </Link>
    </div>

  </div>
</div>
      {/* ================= MAIN NAVBAR ================= */}
      <nav className="bg-white shadow-lg border-b border-[#e5eef8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="flex items-center justify-between h-[78px]">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center"
            >
              <img
                src={logo}
                alt="BHL Group"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">

              {mainNav.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative font-semibold text-[15px] tracking-wide transition-all duration-300 ${isActive
                      ? "text-[#0b5394]"
                      : "text-[#073762] hover:text-[#3d85c5]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <div className="relative">
                      {item.name}

                      {isActive && (
                        <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#0b5394] rounded-full"></span>
                      )}
                    </div>
                  )}
                </NavLink>
              ))}

              {/* CTA */}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#073762] to-[#3d85c5] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#073762]"
            >
              {isOpen ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0"
            }`}
        >
          <div className="bg-white border-t border-[#edf3fa] shadow-xl">

            {/* Menu Links */}
            <div className="flex flex-col px-6 py-5">

              {mainNav.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `py-4 border-b border-[#edf3fa] font-semibold transition ${isActive
                      ? "text-[#0b5394]"
                      : "text-[#073762]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-gradient-to-r from-[#073762] to-[#3d85c5] text-white text-center py-3 rounded-full font-semibold"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Top Links */}
            <div className="border-t border-[#edf3fa] px-6 py-5 bg-[#f7fbff]">

              <div className="flex flex-col gap-4 text-sm">

                <a
                  href="mailto:info@brickhillgroup.com"
                  className="flex items-center gap-3 text-[#073762]"
                >
                  <Mail size={18} />
                  info@brickhillgroup.com
                </a>

                <a
                  href="tel:+919910729150"
                  className="flex items-center gap-3 text-[#073762]"
                >
                  <Phone size={18} />
                  +91-9910729150
                </a>

                <Link
                  to="/newsletter-card"
                  className="flex items-center gap-3 text-[#073762]"
                >
                  <Mail size={18} />
                  Newsletter
                </Link>

                <Link
                  to="/webinar"
                  className="flex items-center gap-3 text-[#073762]"
                >
                  <CalendarDays size={18} />
                  Webinar
                </Link>

                <Link
                  to="/group-buying"
                  className="flex items-center gap-3 text-[#073762]"
                >
                  <Users size={18} />
                  Group Buying
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}