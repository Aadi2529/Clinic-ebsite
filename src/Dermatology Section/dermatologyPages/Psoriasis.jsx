





import { motion } from "framer-motion";
import { useState } from "react";
import fungleImg from "../Dermatology_img/fungleImg.jpg"

import DermatologyHero from "../DermatoloyHero";
import DermatologyNav from "../DermatologyNav";
import DermatologyFooter from "../DermatologyFooter";

const Psoriasis = () => {
  const infections = [
    { title: "What are psoriasis causes and risk factors?", content: "The exact cause remains unknown. A combination of elements, including genetic predisposition and environmental factors, are involved. It is common for psoriasis to be found in members of the same family. Defects in immune regulation and the control of inflammation are thought to play major roles. Certain medications like beta-blockers have been linked to psoriasis. Despite research over the past 30 years, the master switch that turns on psoriasis is still a mystery." },
    { title: "Can psoriasis affect mt joints ?", content: "Yes, psoriasis is associated with inflamed joints in about one-third of those affected. In fact, sometimes joint pains may be the only sign of the disorder, with completely clear skin. The joint disease associated with psoriasis is referred to as psoriatic arthritis. Patients may have inflammation of any joints (arthritis), although the joints of the hands, knees, and ankles tend to be most commonly affected. Psoriatic arthritis is an inflammatory, destructive form of arthritis and needs to be treated with medications in order to stop the disease progression. The average age for onset of psoriatic arthritis is 30-40 years of age. Usually, the skin symptoms and signs precede the onset of the arthritis." },
    { title: "Can pasoriasis affect my nails?", content: "Yes, psoriasis may involve solely the nails in a limited number of patients. Usually, the nail signs accompany the skin and arthritis symptoms and signs. Nail psoriasis is typically very difficult to treat. Treatment options are somewhat limited and include potent topical steroids applied at the nail-base cuticle, injection of steroids at the nail-base cuticle, and oral or systemic medications as described below for the treatment of psoriasis." },
   

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
        Psoriasis

        </h1>
        
        

        <p className="text-gray-600 text-xl mt-7">
        Psoriasis is thought to be an immune system problem. Triggers include infections, stress and cold. The most common symptom is a rash on the skin, but sometimes the rash involves the nails or joints. Treatment aims to remove scales and stop skin cells from growing so quickly. Topical ointments, light therapy and medication can offer relief.
        </p>
        <p className="text-gray-600 text-xl mt-7">
        The most common symptom is a rash on the skin, but sometimes the rash involves the nails or joints. People also may experience Pain in the joints, Skin rashes, dryness, fissures, flakiness, peeling, small bump, thickness, or redness.


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
          <h2 className="text-xl md:text-2xl  font-semibold text-gray-800 mb-6">Frequently asked questions</h2>
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

export default Psoriasis ;
