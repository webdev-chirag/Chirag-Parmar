const experiences = [
  {
    title: "Php Developer",
    company: "Consumer Sketch",
    date: "May 2023 - Present",
    // description: "Learned React and Next.js while working on Laravel and React/Next.js projects.",
    description:
      "Worked on full-stack projects using Laravel, React, and Next.js. Gained hands-on experience in building dynamic web applications while enhancing performance and scalability.",
  },
  {
    title: "Laravel Developer Intern",
    company: "Optic Computers",
    date: "November 2022 - March 2023",
    // description:
    //   "Developed projects using Laravel, deepened understanding of backend development, and explored the basics of Figma for UI/UX design.",
    description: "Gained hands-on experience with Laravel by working on projects and collaborating in a team environment.",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Parul University",
    date: "June 2020 - March 2023",
  },
];

export default function ExperienceEducationSection() {
  return (
    <section className="py-16 bg-[#101010] text-white" id="experience">
      <div className="mt-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
            Experience & Education
          </h2>

          {experiences.map((exp, index) => (
            <TimelineItem key={index} data={exp} />
          ))}
          {education.map((edu, index) => (
            <TimelineItem key={index} data={edu} isEducation />
          ))}
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TimelineItem({ data, isEducation = false }: any) {
  return (
    <div className="relative pl-6 sm:pl-8 mb-8 border-l-2 border-gray-500">
      {/* Timeline Circle */}
      <div className="absolute w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white rounded-full left-[-7px] sm:left-[-10px] top-2"></div>

      <h3 className="text-lg sm:text-xl font-semibold">
        {isEducation ? data.degree : data.title}
      </h3>
      <p className="text-gray-400 text-sm sm:text-base">
        {isEducation ? data.institution : data.company} • {data.date}
      </p>
      {data.description && (
        <p className="mt-2 text-gray-300 text-sm sm:text-base">
          {data.description}
        </p>
      )}
    </div>
  );
}
