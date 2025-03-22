"use client";

const experiences = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    date: "2022 - Present",
    description: "Developing web applications using Next.js and Tailwind CSS.",
  },
  {
    title: "Frontend Developer",
    company: "Startup XYZ",
    date: "2020 - 2022",
    description: "Worked on UI/UX improvements and performance optimization.",
  },
];

const education = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "XYZ University",
    date: "2016 - 2020",
  },
];

export default function ExperienceEducationSection() {
  return (
    <section className="py-16  bg-[#101010] text-white" id="experience">
      <div className="mt-18">
        <h2 className="text-4xl font-bold text-center mb-10">
          Experience & Education
        </h2>
        <div className="max-w-4xl mx-auto">
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
    <div className="relative pl-8 mb-8 border-l-2 border-gray-500">
      <div className="absolute w-4 h-4 bg-white rounded-full left-[-10px] top-2"></div>
      <h3 className="text-xl font-semibold">
        {isEducation ? data.degree : data.title}
      </h3>
      <p className="text-gray-400">
        {isEducation ? data.institution : data.company} • {data.date}
      </p>
      <p className="mt-2 text-gray-300">{data.description}</p>
    </div>
  );
}
