export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "MySQL",
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-600 px-4 py-2 rounded-full text-lg shadow-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
