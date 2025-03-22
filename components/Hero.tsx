"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    gsap.from(".fadeup", {
      y: 20,
      duration: 1.2,
      ease: "power2.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="bg-[#101010] text-white min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 min-h-screen">
        {" "}
        {/* Left Content */}
        <section className="max-w-2xl">
          <h1
            className="text-lg text-purple-400 fadeup"
            style={{ transitionDelay: "100ms" }}
          >
            Hello, my name is
          </h1>
          <h2
            className="text-4xl md:text-6xl font-bold fadeup"
            style={{ transitionDelay: "200ms" }}
          >
            Chirag Parmar.
          </h2>
          <h3
            className="text-2xl md:text-3xl text-gray-300 fadeup"
            style={{ transitionDelay: "300ms" }}
          >
            I love exploring new things!
          </h3>
          <div
            className="mt-4 text-lg text-gray-400 fadeup"
            style={{ transitionDelay: "400ms" }}
          >
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
          <div className="mt-6 fadeup" style={{ transitionDelay: "500ms" }}>
            <a
              href="mailto:chirag@example.com"
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 transition rounded-lg text-white font-semibold shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </section>
        {/* Right Side SVG */}
        <div
          className="w-full md:w-1/3 flex justify-center fadeup"
          style={{ transitionDelay: "600ms" }}
        >
          <img
            src="/mainiconsdark.svg"
            alt="Hero Illustration"
            className="w-2/3 md:w-full h-auto drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
