import { motion } from "framer-motion";
import Image from "next/image";

// List of technologies/tools (Replace with your own)
const techLogos = [
  { name: "React", src: "/logos/react.svg" },
  { name: "Next.js", src: "/logos/nextjs.svg" },
  { name: "Node.js", src: "/logos/nodejs.svg" },
  { name: "Laravel", src: "/logos/laravel.svg" },
  { name: "Tailwind CSS", src: "/logos/tailwind.svg" },
  { name: "TypeScript", src: "/logos/typescript.svg" },
];

export default function TechMarquee() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Tech Stack I Use</h2>
      <div className="overflow-hidden relative">
        <motion.div
          className="flex space-x-10 animate-marquee"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {[...techLogos, ...techLogos].map((tech, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={tech.src}
                alt={tech.name}
                width={100}
                height={100}
                className="w-24 h-24 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
