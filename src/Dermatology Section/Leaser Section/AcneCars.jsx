
import { motion } from "framer-motion";
import { useState } from "react";
import acneCarsImg from "../Dermatology_img/acneCars.png"
import { ChevronRight } from "lucide-react";
import DermatologyHero from "../DermatoloyHero";
import DermatologyNav from "../DermatologyNav";
import DermatologyFooter from "../DermatologyFooter";

const AcneCars = () => {
  const infections = [
    { title: "Athlete's Foot", content: "Athlete's Foot (Tinea Pedis) is a fungal infection of the feet with itching, scaling and redness. It can be caused by a number of different fungi, including Trichophyton, Epidermophyton and Microsporum." },
    { title: "Ringworm", content: "Ringworm (Tinea Corporis) can appear in the form of a red or silver rash anywhere on the body. It is usually ring-shaped and is most commonly caused by the fungus Trichophyton rubrum." },
    { title: "Onychomycosis", content: "Onychomycosis is a fungal infection of the toenails or fingernails that can involve any component of the nail, including the matrix, bed or plate. It can cause pain, discomfort and disfigurement. Onychomycosis is caused by various fungal organisms, the most common being dermatophyte. Yeast and moulds also cause nail infections." },
    { title: "Tinea Versicolor", content: "Tinea Versicolor or pityriasis versicolor is a common condition that causes small patches of skin to become scaly and discoloured. They can be darker or lighter than the surrounding skin, or even red or pink. The condition is caused by a yeast called Malassezia, which lives on the skin of most people without causing any problems." },
    { title: "Cutaneous Candidiasis", content: "Cutaneous Candidiasis can involve almost any skin area of the body, but mostly occurs in warm, moist, creased areas such as the armpits and groin. Candida is the most common cause of nappy rash in infants. Candida is also common in people who are obese or have diabetes. Antibiotics, steroid therapy and chemotherapy increase the risk of cutaneous Candidiasis." },
  ];

  return (
    <div>
      <DermatologyNav />
        <DermatologyHero />
    
    <section className=" relative  flex   flex-col md:flex-row justify-between px-6 md:px-16 py-12 md:py-24 bg-white">
      {/* Text Content */}
      <motion.div  
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-left"
      >
        {/* <p className="text-sm text-amber-600 font-semibold">ABOUT US</p> */}
        <h1 className="text-4xl top-12 md:text-6xl font-bold leading-tight mt-6 mb-10">
        
        Acne Scars

        </h1>
        
        <p className="text-gray-600 text-xl mt-2">
        Acne scars can be quite disturbing. Acne scars can be treated effectively giving smoother appearance to facial skin. Laser resurfacing helps significantly to reduce the appearance of scars by creating ablative zones which remodel the skin.
        </p>
        <p className="text-gray-600 text-xl mt-2">
        Acne scars can be quite disturbing. Acne scars can be treated effectively giving smoother appearance to facial skin. Laser resurfacing helps significantly to reduce the appearance of scars by creating ablative zones which remodel the skin.
        </p>
  
   
        
        
        
      </motion.div>
      
      {/* Image Section */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="md:w-1/2 flex justify-end mt-10 md:mt-0 relative"
      >
        <div className="relative mb-36 w-full max-w-md">
          <img 
            src={acneCarsImg} 
            alt="Beauty Clinic" 
            className=" rounded-lg w-[50vw] h-[50vh] shadow-lg"
          />
          <div className="absolute bottom-0 right-0  bg-amber-100 -z-10"></div>
        </div>

      </motion.div>
    </section>
    <DermatologyFooter />
        
    </div>
  );
};



export default AcneCars;
