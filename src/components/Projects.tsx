const projects = [
  {
    title: "Portfolio Site",
    description: "A modern portfolio site built with Next.js and Tailwind CSS.",
  },
  {
    title: "E-commerce App",
    description: "An online store using React and Laravel backend.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
