"use client";

import { useState, useEffect } from "react";
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

export default function Footer() {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    // Fetch JSON file
    fetch("/data/socialLinks.json")
      .then((res) => res.json())
      .then((data) => setSocialLinks(data))
      .catch((err) => console.error("Error loading social links:", err));
  }, []);

  return (
    <footer className="bg-[#101010] text-white py-6 px-4 sm:px-10 border-t border-white/20 backdrop-blur-lg">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Email Section */}
        <p className="text-sm sm:text-base mb-4 sm:mb-0 text-gray-300">
          Contact me:{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-white font-semibold hover:text-gray-400 transition"
          >
            your.email@example.com
          </a>
        </p>

        {/* Social Links */}
        <div className="flex space-x-4">
          {socialLinks.map(({ name, icon, href, color }, index) => {
            const IconComponent = iconMap[icon]; // Get the corresponding icon component
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
      </div>
    </footer>
  );
}
