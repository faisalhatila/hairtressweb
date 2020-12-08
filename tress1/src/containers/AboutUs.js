import React from "react";
import { AboutHeader } from "../components/aboutus/AboutHeader";
import HowItWorks from "../components/aboutus/HowItWorks";
import OurTeam from "../components/aboutus/OurTeam";
import OurMentors from "../components/aboutus/OurMentors";

export const AboutUs = () => {
  return (
    <div>
      <AboutHeader />
      <HowItWorks />
      <OurTeam />
      <OurMentors />
    </div>
  );
};
