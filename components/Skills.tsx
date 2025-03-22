"use client";

import Image from "next/image";

const techLogos = [
  {
    name: "React",
    src: "/logos/react.svg",
    glow: "#61dafb",
    link: "https://react.dev",
  },
  {
    name: "Next.js",
    src: "/logos/nextjs.svg",
    glow: "#ffffff",
    link: "https://nextjs.org",
  },
  {
    name: "Node.js",
    src: "/logos/nodejs.svg",
    glow: "#8cc84b",
    link: "https://nodejs.org",
  },
  {
    name: "Express.js",
    src: "/logos/express.svg",
    glow: "#ffffff",
    link: "https://expressjs.com",
  },
  {
    name: "Laravel",
    src: "/logos/laravel.svg",
    glow: "#ff2d20",
    link: "https://laravel.com",
  },
  {
    name: "PHP",
    src: "/logos/php.svg",
    glow: "#777bb4",
    link: "https://www.php.net",
  },
  {
    name: "MongoDB",
    src: "/logos/mongodb.svg",
    glow: "#47a248",
    link: "https://www.mongodb.com",
  },
  {
    name: "MySQL",
    src: "/logos/mysql.svg",
    glow: "#00758f",
    link: "https://www.mysql.com",
  },
  {
    name: "Tailwind CSS",
    src: "/logos/tailwind.svg",
    glow: "#38bdf8",
    link: "https://tailwindcss.com",
  },
  {
    name: "TypeScript",
    src: "/logos/typescript.svg",
    glow: "#3178c6",
    link: "https://www.typescriptlang.org",
  },
  {
    name: "HTML",
    src: "/logos/html.svg",
    glow: "#e34f26",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    src: "/logos/css.svg",
    glow: "#1572b6",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    src: "/logos/javascript.svg",
    glow: "#f7df1e",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "jQuery",
    src: "/logos/jquery.svg",
    glow: "#0769ad",
    link: "https://jquery.com",
  },
];

export default function SkillsSection() {
  const structuredRows = [
    [...techLogos.slice(0, 5), {}, {}], // Row 1: 5 items + 2 blank
    [{}, ...techLogos.slice(5, 11), {}], // Row 2: 6 items + 1 blank
    [{}, {}, ...techLogos.slice(11, 14)], // Row 3: 3 items + 2 blank
  ];

  return (
    <section className="py-10 bg-[#101010] text-white" id="skills">
      <div className="mt-24">
        <h2 className="text-4xl font-bold text-center mb-6">
          Skills & Technologies
        </h2>
        <div className="flex flex-col items-center gap-4">
          {structuredRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-4">
              {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                row.map((tech: any, index) =>
                  tech.name ? (
                    <SkillCard key={index} tech={tech} />
                  ) : (
                    <BlankCard key={index} />
                  )
                )
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SkillCard({ tech }: any) {
  return (
    <a
      href={tech.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-24 h-24 bg-transparent bg-opacity-10 backdrop-blur-lg p-4 rounded-xl transition-all duration-500 hover:shadow-[0_0_20px_var(--glow-color)] border border-[#262626] flex items-center justify-center"
      style={{ "--glow-color": tech.glow } as React.CSSProperties}
    >
      <Image
        src={tech.src}
        alt={tech.name}
        width={100}
        height={100}
        className="w-20 h-20 object-contain opacity-80 hover:opacity-100 transition-all duration-500"
      />
    </a>
  );
}

function BlankCard() {
  return (
    <div className="w-24 h-24 bg-transparent bg-opacity-10 backdrop-blur-lg border border-[#262626] rounded-xl" />
  );
}
