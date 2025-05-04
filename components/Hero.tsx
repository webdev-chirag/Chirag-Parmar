"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="bg-[#101010] text-white md:min-h-screen min-h-full pt-20 flex items-center justify-center px-4 sm:px-8 md:px-16">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl">
        {/* Left Content */}
        <section className="w-full md:w-1/2 text-left pt-20">
          <h1 className="text-lg text-purple-400 fadeup">Hello, my name is</h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold fadeup">
            Chirag Parmar.
          </h2>
          <h3 className="text-2xl sm:text-3xl text-purple-300 h-10 mt-2 fadeup">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Tech Enthusiast",
                // "Problem Solver",
                "Next.js | Laravel | MySQL",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
          <div className="mt-4 text-lg text-gray-400 fadeup">
            <p>
              I&apos;m a passionate developer who enjoys building impactful
              digital solutions using modern technologies like Next.js,
              React.js, Laravel, and Tailwind CSS.
            </p>
            <p>
              Constantly learning, adapting, and striving to turn ideas into
              clean, efficient, and scalable applications.
            </p>
          </div>
        </section>

        {/* Right Side SVG */}
        <div className="w-full md:w-1/3 flex justify-center fadeup pb-5 md:pb-0">
          <Image
            src="/mainIconsdark.svg"
            alt="Hero Illustration"
            width={400}
            height={400}
            className="w-3/4 md:w-full h-auto drop-shadow-lg"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
