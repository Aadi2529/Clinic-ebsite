





import { motion } from "framer-motion";
import { useState } from "react";
import fungleImg from "../Dermatology_img/fungleImg.jpg"

import DermatologyHero from "../DermatoloyHero";
import DermatologyNav from "../DermatologyNav";
import DermatologyFooter from "../DermatologyFooter";

const Eczema = () => {
  const infections = [
    { title: "Allergic contact dermatitis", content: "This is a skin reaction following contact with a substance or allergen that the immune system recognizes as foreign." },
    { title: "Dyshildrotic eczma", content: "This is an irritation of the skin on the palms of the hands and the soles of the feet. It is characterized by blisters." },
    { title: "Neurodermatitis", content: "This forms scaly patches of skin on the head, forearms, wrists, and lower legs. It is caused by a localized itch, such as an insect bite." },
    { title: "Namular eczma", content: "These show as circular patches of irritated skin that can be crusted, scaly, and itchy." },
    {title: "Sebrrheic eczma", content:"This forms oily, scaly, yellowish patches of skin, usually on the scalp and face."}

  ];

  return (
    <div>
      <DermatologyNav />
        <DermatologyHero />
    
    <section className=" relative
     flex h-full  flex-col md:flex-row items-center justify-between px-6 md:px-16 mb-10 md:py-24 bg-white">
      {/* Text Content */}
      <motion.div  
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-left"
      >
        {/* <p className="text-sm text-amber-600 font-semibold">ABOUT US</p> */}
        <h1 className="text-4xl text-center md:text-6xl font-bold leading-tight mt-2">
        Eczema
        </h1>
        
        

        <p className="text-gray-600 text-xl mt-7">
        Atopic dermatitis usually develops in early childhood and is more common in people who have a family history of the condition. The main symptom is a rash that typically appears on the arms and behind the knees, but can also appear anywhere. Treatment includes avoiding soap and other irritants. Certain creams or ointments may also provide relief from the itching.


        </p>
        
        
      </motion.div>
      
      {/* Image Section */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="md:w-1/2 flex justify-end mt-10 md:mt-0 relative"
      >
        <div className="relative w-full max-w-md">
          <img 
            src={fungleImg} 
            alt="Beauty Clinic" 
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber-100 -z-10"></div>
        </div>

      </motion.div>
    </section>
        {/* Accordion Section */}
        <div className="mb-28 top-64 flex flex-col w-full   items-center" >
        <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-left"
      >
          <h2 className="text-xl md:text-2xl  font-semibold text-gray-800 mb-6">Types</h2>
          <div className="max-w-2xl text-xl w-full">
            {infections.map((infection, index) => (
              <Accordion key={index} title={infection.title} content={infection.content} />
            ))}
          </div>
        </motion.div>
        </div>
        <DermatologyFooter />
    </div>
  );
};

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-300">
      <button 
        className="w-full flex justify-between items-center p-4  text- font-semibold" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="p-4  text-gray-900"
        >
          {content}
        </motion.div>
      )}
    </div>
  );
};

export default Eczema ;
