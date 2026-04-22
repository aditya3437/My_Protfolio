import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name */}
        <h2 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Aditya Kumar
        </h2>

        {/* Nav Links */}
        <ul className="flex gap-6 text-sm">
          <li>
            <Link to="/" className="hover:text-cyan-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-cyan-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/experience" className="hover:text-cyan-400 transition">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-cyan-400 transition">
              Skills
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5 text-lg">
          <a
            href="https://github.com/aditya3437"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-kumar-801515228/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} Aditya Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
