"use client";

import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
    image: "/projects/portfolio.png",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "E-commerce App",
    description: "A full-stack e-commerce platform with Stripe integration.",
    image: "/projects/ecommerce.png",
    link: "https://your-ecommerce-link.com",
  },
  {
    title: "Blog CMS",
    description: "A headless CMS-powered blog using Next.js and GraphQL.",
    image: "/projects/blog.png",
    link: "https://your-blog-link.com",
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
  return (
    <a
      href={project.link}
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
