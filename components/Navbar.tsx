"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience/Education", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Connect", href: "#contact" },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourprofile",
    color: "#0077B5",
  },
  { icon: FaGithub, href: "https://github.com/yourprofile", color: "#ffffff" },
  {
    icon: FaStackOverflow,
    href: "https://stackoverflow.com/users/yourprofile",
    color: "#F48024",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/yourprofile",
    color: "#E1306C",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#101010] bg-opacity-50 backdrop-blur-lg text-white py-4 px-6 flex justify-between items-center z-50 border-b border-white/20">
      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Navigation Links */}
      <div
        className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[#101010] bg-opacity-90 backdrop-blur-lg md:flex md:space-x-6 md:p-0 p-6 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block md:inline-block text-lg font-medium hover:text-gray-300 transition py-2"
            onClick={handleNavClick}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Social Icons & Resume Button */}
      <div className="hidden md:flex space-x-4 items-center">
        {socialLinks.map(({ icon: Icon, href, color }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-colors duration-300 hover:text-[var(--icon-color)]"
            style={{ ["--icon-color" as string]: color } as React.CSSProperties}
          >
            <Icon />
          </a>
        ))}
        <a
          href="/resume.pdf" // Update with actual resume path
          download
          className="ml-4 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}
