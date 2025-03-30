"use client";
// import ContactSection from "@/components/Contact";
import ExperienceEducationSection from "@/components/ExperienceEducation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/Projects"; 
import SkillsSection from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceEducationSection />
      <ProjectsSection />
      {/* <ContactSection /> */}
      <Footer />
    </>
  );
}
