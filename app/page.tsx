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
      <Navbar />
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 3000,
          style: { zIndex: 9999 },
        }}
        reverseOrder={false}
        containerStyle={{
          marginBottom: "60px",
        }}
      />

      <HeroSection />
      <SkillsSection />
      <ExperienceEducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
