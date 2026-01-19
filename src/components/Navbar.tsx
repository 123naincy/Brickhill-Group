import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Group Buying", path: "/group-buying" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#083a33] via-[#0f4b40] to-[#083a33] shadow-xl fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-20 items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Building2 className="h-10 w-10 text-[#fffbba]" />
            <span className="ml-3 text-2xl font-extrabold text-[#fffbba] tracking-wide">
              Brickhill Group
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-semibold tracking-wide transition ${
                    isActive
                      ? "text-[#fffbba] border-b-2 border-[#fffbba] pb-1"
                      : "text-[#fffbba]/80 hover:text-[#fffbba]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* CTA */}
            <Link
              to="/group-buying"
              className="ml-6 bg-[#fffbba] text-[#0f4b40] px-6 py-2 rounded-full font-bold hover:scale-105 transition"
            >
              Join Group Buying
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#fffbba]">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f4b40] border-t border-[#fffbba]/20">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded font-semibold ${
                    isActive
                      ? "bg-[#fffbba] text-[#0f4b40]"
                      : "text-[#fffbba]/80 hover:bg-[#fffbba]/10"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
