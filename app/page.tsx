"use client";
import ContactSection from "@/components/Contact";
import ExperienceEducationSection from "@/components/ExperienceEducation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/Projects";
import SkillsSection from "@/components/Skills";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceEducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
