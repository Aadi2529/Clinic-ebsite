import React from "react";
import Hero from "../Home Page/Hero";
import Services from "../Home Page/Services";

import MedicalSection from "../Home Page/MedicalSection";
import PatientExperience from "../Home Page/PatientExperience";
import ContactSection from "../Home Page/ContactSection";
import Footer from "../Home Page/Footer";
import HomePageNav from "../Home Page/HomePageNav";
import ProvideSection from "../Home Page/OurProviders";
import AboutSection from "../Home Page/AboutSection";
import TopSection from "../Home Page/TopSection";

const Home = () => {
  return (
    <div>
      <TopSection />
      <HomePageNav />
      <Hero />
      <Services />
      <MedicalSection />
      <ProvideSection />
      {/* <PatientExperience /> */}
      <AboutSection />
      <ContactSection />
      <Footer /> 
    </div>
  );
};

export default Home;