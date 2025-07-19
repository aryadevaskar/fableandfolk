"use client";
import { useState } from "react";

import HeroSection from "./components/Hero/hero";
import AboutSection from "./components/About/About";
import ProjectSection from "./components/Projects/projectSection";
import ClientSection from "./components/Client/Client";

function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ClientSection/>
    </div>
  );
}

export default App;
