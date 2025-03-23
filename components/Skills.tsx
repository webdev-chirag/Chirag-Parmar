"use client";

import SkillsMobileSection from "./SkillsMobile";
import SkillsPcSection from "./SkillsPcScreen";

export default function SkillsSection() {
  return (
    <div id="skills">
      <div className="block md:hidden">
        <SkillsMobileSection />
      </div>
      <div className="hidden md:block">
        <SkillsPcSection />
      </div>
    </div>
  );
}
