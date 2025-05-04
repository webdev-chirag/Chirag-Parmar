"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type TechLogo = {
  name: string;
  src: string;
  glow: string;
  link: string;
};

type Section = {
  title: string;
  items: TechLogo[];
};

export const skillSections: Section[] = [
  {
    title: "Frontend",
    items: [
      {
        name: "HTML",
        src: "/icons/html.svg",
        glow: "#e34f26",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        src: "/icons/css.svg",
        glow: "#1572b6",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        src: "/icons/javascript.svg",
        glow: "#f7df1e",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        src: "/icons/typescript.svg",
        glow: "#3178c6",
        link: "https://www.typescriptlang.org",
      },
      {
        name: "React.js",
        src: "/icons/react.svg",
        glow: "#61dafb",
        link: "https://react.dev",
      },
      {
        name: "Next.js",
        src: "/icons/next-js.svg",
        glow: "#ffffff",
        link: "https://nextjs.org",
      },
      {
        name: "Tailwind CSS",
        src: "/icons/tailwind-css.svg",
        glow: "#38bdf8",
        link: "https://tailwindcss.com",
      },
      {
        name: "Bootstrap",
        src: "/icons/bootstrap.svg",
        glow: "#7952B3",
        link: "https://getbootstrap.com",
      },
      {
        name: "jQuery",
        src: "/icons/jquery.svg",
        glow: "#0769ad",
        link: "https://jquery.com",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "PHP",
        src: "/icons/php.svg",
        glow: "#777bb4",
        link: "https://www.php.net",
      },
      {
        name: "Laravel",
        src: "/icons/laravel.svg",
        glow: "#ff2d20",
        link: "https://laravel.com",
      },
      {
        name: "Node.js",
        src: "/icons/nodejs.svg",
        glow: "#8cc84b",
        link: "https://nodejs.org",
      },
    ],
  },
  {
    title: "Other Tools",
    items: [
      {
        name: "MySQL",
        src: "/icons/mysql.svg",
        glow: "#00758f",
        link: "https://www.mysql.com",
      },
      {
        name: "MongoDB",
        src: "/icons/mongodb.svg",
        glow: "#47a248",
        link: "https://www.mongodb.com",
      },
      {
        name: "GitHub",
        src: "/icons/github.svg",
        glow: "#ffffff",
        link: "https://github.com",
      },
    ],
  },
];

export default function SkillsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-10 bg-[#101010] text-white" id="skills">
      <div className="mt-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>
        <div className="space-y-8 px-4 max-w-6xl mx-auto ">
          {skillSections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              <div
                className={`
              ${isMobile ? "grid grid-cols-1 gap-4 justify-items-center" : ""}
              md:flex md:gap-4 md:cursor-grab
            `}
              >
                <motion.div
                  drag={isMobile ? false : "x"}
                  dragConstraints={
                    isMobile ? undefined : { left: -300, right: 0 }
                  }
                  className={`grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9`}
                >
                  {section.items.map((skill, idx) => (
                    <motion.a
                      key={idx}
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-[100px] md:min-w-[120px] shadow-md rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-xl transition"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Image
                        src={skill.src}
                        alt={skill.name}
                        className="w-8 h-8 md:w-10 md:h-10"
                        width={80}
                        height={80}
                        style={{ filter: `drop-shadow(0 0 4px ${skill.glow})` }}
                      />
                      <p className="mt-2 text-xs md:text-sm font-semibold text-center">
                        {skill.name}
                      </p>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
