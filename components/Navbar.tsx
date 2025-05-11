"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaInstagram,
} from "react-icons/fa";

interface SocialLink {
  name: string;
  icon: string;
  href: string;
  color: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: any = {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaInstagram,
};
interface NavbarProps {
  socialLinks: SocialLink[];
}

export default function Navbar({ socialLinks }: Readonly<NavbarProps>) {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience/Education", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full  bg-opacity-50 backdrop-blur-lg text-white py-4 px-6 flex justify-between items-center z-50 border-b border-white/20">
      {/* Left Section - Mobile Menu Button */}
      <div className="flex items-center md:hidden">
        <button
          className="text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[#101010] md:bg-transparent bg-opacity-90 backdrop-blur-lg md:flex md:space-x-6 md:p-0 p-6 transition-all duration-300 ${
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

      {/* Social Icons - Mobile & Desktop */}
      <div className="flex space-x-4 items-center">
        {socialLinks.map(({ name, icon, href, color }, index) => {
          const IconComponent = iconMap[icon];
          return IconComponent ? (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors duration-300 hover:text-[var(--icon-color)]"
              style={
                { ["--icon-color" as string]: color } as React.CSSProperties
              }
              aria-label={name}
            >
              <IconComponent />
            </a>
          ) : null;
        })}
      </div>
    </nav>
  );
}
