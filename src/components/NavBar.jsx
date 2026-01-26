import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  FolderGit2,
  Brain,
  Briefcase,
  Award,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: User },
  { to: "/projects", label: "Projects", icon: FolderGit2 },
  { to: "/skills", label: "Skills", icon: Brain },
  { to: "/experiance", label: "Experience", icon: Briefcase },
  { to: "/certificates", label: "Certificates", icon: Award },
  { to: "/contact", label: "Contact", icon: Phone },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b1220]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="font-mono text-cyan-400 text-xl tracking-wide hover:text-cyan-300 transition"
        >
          &lt;/&gt; Aditya.dev
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to}>
              {({ isActive }) => (
                <div
                  className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all
                  ${
                    isActive
                      ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/40"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </div>
              )}
            </NavLink>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-cyan-400"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
        ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="px-6 pb-6 pt-2 space-y-2 bg-[#0b1220]/95 border-t border-white/10">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)}>
              {({ isActive }) => (
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
                  ${
                    isActive
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </div>
              )}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
}
