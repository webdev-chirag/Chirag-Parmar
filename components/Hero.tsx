"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#101010] text-white md:min-h-screen min-h-full pt-20 flex items-center justify-center px-4 sm:px-8 md:px-16">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl">
        {/* Left Content */}
        <section className="w-full md:w-1/2 text-center md:text-left ">
          <h1 className="text-lg text-purple-400 fadeup">Hello, my name is</h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold fadeup">
            Chirag Parmar.
          </h2>
          <h3 className="text-2xl sm:text-3xl text-gray-300 fadeup">
            I love exploring new things!
          </h3>
          <div className="mt-4 text-lg text-gray-400 fadeup">
            <p>
              I&apos;m a passionate Web Developer specializing in Next.js,
              TypeScript, and Tailwind CSS. Always eager to learn new
              technologies and bring ideas to life.
            </p>
            <p>
              I enjoy learning new skills and implementing them in real-world
              projects!
            </p>
          </div>
        </section>

        {/* Right Side SVG */}
        <div className="w-full md:w-1/3  flex justify-center fadeup pb-5 md:pb-0">
          <Image
            src="/mainIconsdark.svg"
            alt="Hero Illustration"
            width={400}
            height={400}
            className="w-3/4 md:w-full h-auto drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
