import React from "react";
import aboutimg from "../imeges/About.JPG"; 

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white py-12 px-6">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center animate_animated animate_slideInLeft">
        <img
          src={aboutimg}
          alt="Laser Treatment"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 text-center md:text-left p-6 animate_animated animate_fadeIn">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-4">About Us</h2>
        <p className="text-gray-600 text-xl leading-relaxed">
          We started our clinic, <b>Kalynkar Clinic</b>, situated at Chhatrapati 
          Sambhaji Nagar, Maharashtra with the aim to provide the best skin care.
          Our skin and hair treatments are carried out under the supervision of
          our trained doctors. Whether it is skin polishing or laser hair
          removal treatment, we ensure our patients leave with satisfactory
          results.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;