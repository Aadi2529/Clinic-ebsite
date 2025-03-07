





import { motion } from "framer-motion";
import { useState } from "react";
import fungleImg from "../Dermatology_img/fungleImg.jpg"

import DermatologyHero from "../DermatoloyHero";
import DermatologyNav from "../DermatologyNav";
import DermatologyFooter from "../DermatologyFooter";

const OtherConditions = () => {
  const infections = [
    { title: "Molluscum Contagiosum", content: "Molluscum contagiosum causes small, flesh-colored bumps most often in children ages 1 to 10 years old; however, people of any age can acquire the virus. The bumps usually disappear without treatment, usually in 6 to 12 months." },
    { title: "Herpes", content: "Herpes simplex virus-1 (HSV-1) is the common virus that causes cold sores. It's transmitted through saliva by kissing or sharing food or drink with an infected individual. Sometimes, HSV-1 causes genital herpes. An estimated 85% of people in the US have HSV-1 by the time they are in their 60s." },
    { title: "Varicella-zoster virus (VZV)", content: "Varicella-zoster virus (VZV) causes itchy, oozing blisters, fatigue, and high fever characteristic of chickenpox. The chickenpox vaccine is 98% effective at preventing infection. People who have had chickenpox (or in extremely rare instances, people who have received the chickenpox vaccine) are at risk for developing shingles, an illness caused by the same virus. Shingles can occur at any age, but it occurs most often in people age 60 or older." },
    // { title: "Tinea Versicolor", content: "Tinea Versicolor or pityriasis versicolor is a common condition that causes small patches of skin to become scaly and discoloured. They can be darker or lighter than the surrounding skin, or even red or pink. The condition is caused by a yeast called Malassezia, which lives on the skin of most people without causing any problems." },
    // { title: "Cutaneous Candidiasis", content: "Cutaneous Candidiasis can involve almost any skin area of the body, but mostly occurs in warm, moist, creased areas such as the armpits and groin. Candida is the most common cause of nappy rash in infants. Candida is also common in people who are obese or have diabetes. Antibiotics, steroid therapy and chemotherapy increase the risk of cutaneous Candidiasis." },
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
        Acne & Acne Scars
        

        </h1>
        <p className="text-gray-600 text-xl mt-7">
        Acne, also known as acne vulgaris, is a long-term skin disease that occurs when hair follicles are clogged with dead skin cells and oil from the skin. It is characterized by blackheads or whiteheads, pimples, oily skin, and possible scarring. It primarily affects areas of the skin with a relatively high number of oil glands, including the face, upper part of the chest, and back. The resulting appearance can lead to anxiety, reduced self-esteem and, in extreme cases, depression or thoughts of suicide.
        </p>
        <p className="text-gray-600 text-xl mt-2">
        Genetics is thought to be the primary cause of acne in 80% of cases. The role of diet and cigarette smoking is unclear, and neither cleanliness nor exposure to sunlight appear to play a part. During puberty, in both sexes, acne is often brought on by an increase in hormones such as testosterone. A frequent factor is excessive growth of the bacterium Propionibacterium acnes, which is normally present on the skin.
        </p>
        <p className="text-gray-600 text-xl mt-2">Many treatment options for acne are available, including lifestyle changes, medications, and medical procedures. Eating fewer simple carbohydrates such as sugar may help. Treatments applied directly to the affected skin, such as azelaic acid, benzoyl peroxide, and salicylic acid, are commonly used.</p>

        <p className="text-gray-700 font-semibold text-2xl mt-5">The best way to avoid viral skin infections is to avoid skin-to-skin contact (especially areas that have a rash or sores) with an infected individual. Some viral skin infections, such as varicella-zoster virus, are also transmitted by an airborne route. Communal showers, swimming pools, and contaminated towels can also potentially harbor certain viruses.</p>
        {/* <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all"
        >
          LEARN MORE
        </motion.button>
         */}
        
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
          <h2 className="text-xl md:text-2xl  font-semibold text-gray-800 mb-6">COMMON FUNGAL INFECTIONS</h2>
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

export default OtherConditions;
