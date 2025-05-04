"use client";

import Image from "next/image";
import toast from "react-hot-toast";

const projects = [
  {
    title: "Anime Verce",
    description:
      "A Next.js app that uses a free, open-source API to display detailed information about anime, including characters, episodes, and ratings.",
    image: "/projects/anime-verce.png",
    link: "https://anime-verce.vercel.app",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
    image: "/projects/portfolio.png",
    link: "https://chirag-parmar.vercel.app",
  },
  {
    title: "Comic Verse",
    description:
      "A React.js application styled with Tailwind CSS that leverages the Marvel Developer API to showcase detailed information about Marvel comics, characters, series, and events.",
    image: "/projects/comic-verse.png",
    // link: "https://marvel-comic-verse.web.app",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-[#101010] text-white" id="projects">
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProjectCard({ project }: any) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (project.link === "#") {
      toast("Project is under development.", {
        icon: "🛠️",
      });
    } else {
      window.open(project.link, "_blank");
    }
  };
  return (
    <a
      href={project.link}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-transparent bg-opacity-10 backdrop-blur-lg p-6 rounded-xl border border-white/20 transition-transform hover:scale-105"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={500}
        height={300}
        className="rounded-lg mb-4 object-cover"
      />
      <h3 className="text-2xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-gray-300">{project.description}</p>
    </a>
  );
}
