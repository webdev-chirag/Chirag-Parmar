"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type TechLogo = {
  name: string;
  src: string;
  glow: string;
  link: string;
};

const techLogos: TechLogo[] = [
  {
    name: "Laravel",
    src: "/icons/laravel.svg",
    glow: "#ff2d20",
    link: "https://laravel.com",
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
    name: "Node.js",
    src: "/icons/nodejs.svg",
    glow: "#8cc84b",
    link: "https://nodejs.org",
  },
  {
    name: "Tailwind CSS",
    src: "/icons/tailwind-css.svg",
    glow: "#38bdf8",
    link: "https://tailwindcss.com",
  },
  {
    name: "GitHub",
    src: "/icons/github.svg",
    glow: "#ffffff",
    link: "https://github.com",
  },
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
    name: "TypeScript",
    src: "/icons/typescript.svg",
    glow: "#3178c6",
    link: "https://www.typescriptlang.org",
  },
  {
    name: "JavaScript",
    src: "/icons/javascript.svg",
    glow: "#f7df1e",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "jQuery",
    src: "/icons/jquery.svg",
    glow: "#0769ad",
    link: "https://jquery.com",
  },
  {
    name: "PHP",
    src: "/icons/php.svg",
    glow: "#777bb4",
    link: "https://www.php.net",
  },
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
    name: "Bootstrap",
    src: "/icons/bootstrap.svg",
    glow: "#7952B3",
    link: "https://getbootstrap.com",
  },
];

export default function SkillsMobileSection() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [rows, setRows] = useState<any>([]);

  useEffect(() => {
    const updateRows = () => {
      let columns = 5; // Default for large screens
      if (window.innerWidth < 1024) columns = 4; // Tablets
      if (window.innerWidth < 768) columns = 3; // Mobile

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const structuredRows: any = [];
      for (let i = 0; i < techLogos.length; i += columns) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const row: any = techLogos.slice(i, i + columns);
        while (row.length < columns) row.push(null); // Fill remaining spaces with blank cards
        structuredRows.push(row);
      }

      setRows(structuredRows);
    };

    updateRows();
    window.addEventListener("resize", updateRows);
    return () => window.removeEventListener("resize", updateRows);
  }, []);

  return (
    <section className="py-10 bg-[#101010] text-white">
      <div className="mt-24">
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Skills & Technologies
        </h3>

        <div className="flex flex-col items-center gap-2 sm:gap-4">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            rows.map((row: any, rowIndex: number) => (
              <div
                key={rowIndex}
                className={`flex gap-2 sm:gap-4 ${
                  rowIndex % 2 === 0 ? "ml-0" : "ml-4 sm:ml-6 md:ml-8"
                }`}
              >
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  row.map((tech: any, index: number) =>
                    tech ? (
                      <SkillCard key={index} tech={tech} />
                    ) : (
                      <BlankCard key={index} />
                    )
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

function SkillCard({ tech }: { tech: TechLogo }) {
  return (
    <a
      href={tech.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-transparent bg-opacity-10 backdrop-blur-lg p-2 sm:p-3 md:p-4 rounded-xl transition-all duration-700 hover:shadow-[0_0_20px_var(--glow-color)] border border-[#262626] flex items-center justify-center"
      style={{ "--glow-color": tech.glow } as React.CSSProperties}
    >
      <Image
        src={tech.src}
        alt={tech.name}
        width={80}
        height={80}
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain opacity-80 hover:opacity-100 transition-all duration-500"
      />
    </a>
  );
}

function BlankCard() {
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-transparent bg-opacity-10 backdrop-blur-lg border border-[#262626] rounded-xl" />
  );
}
