





// import { motion } from "framer-motion";
// import { useState } from "react";
// import bactrialImg from "../Dermatology_img/bacterial.jpg"

// import DermatologyHero from "../DermatoloyHero";
// import DermatologyNav from "../DermatologyNav";

// const Bactira = () => {
//   const infections = [
//     { title: "Cellulitis", content: "Cellulitis causes a painful, red infection that is usually warm to the touch. Cellulitis occurs most often on the legs, but it can appear anywhere on the body." },
//     { title: "Folliculitis", content: "Folliculitis is an infection of the hair follicles that causes red, swollen bumps that look like pimples. Improperly treated pools or hot tubs can harbor bacteria that cause folliculitis." },
//     { title: "Impetigo", content: "Impetigo causes oozing sores, usually in preschool-aged children. The bullous form of impetigo causes large blisters while the non-bullous form has a yellow, crusted appearance." },
//     { title: "Tinea Versicolor", content: "Tinea Versicolor or pityriasis versicolor is a common condition that causes small patches of skin to become scaly and discoloured. They can be darker or lighter than the surrounding skin, or even red or pink. The condition is caused by a yeast called Malassezia, which lives on the skin of most people without causing any problems." },
//     { title: "Boils", content: "Boils are deep skin infections that start in hair follicles. Boils are firm, red, tender bumps that progress until pus accumulates underneath the skin." },
//   ];

//   return (
//     <div>
//       <DermatologyNav />
//         <DermatologyHero />
    
//     <section className=" relative h-[100vh]  flex   flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-24 bg-white">
//       {/* Text Content */}
//       <motion.div  
//         initial={{ opacity: 0, x: -50 }} 
//         animate={{ opacity: 1, x: 0 }} 
//         transition={{ duration: 0.8 }}
//         className="md:w-1/2 text-left"
//       >
//         {/* <p className="text-sm text-amber-600 font-semibold">ABOUT US</p> */}
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-2">
//             Bacterial Infection
        

//         </h1>
//         <p className="text-gray-600 text-xl mt-4">
//         Bacteria can infect any area of the body. Pneumonia, meningitis, and food poisoning are just a few illnesses that may be caused by harmful bacteria. Bacteria come in three basic shapes: rod-shaped (bacilli), spherical (cocci), or helical (spirilla). Bacteria may also be classified as gram-positive or gram-negative. This refers to the type of cell wall the bacteria have. Gram-positive bacteria have a thick cell wall, while gram-negative bacteria have a thin cell wall. The cell wall is important because it helps protect the bacteria from the environment.
//         </p>
//         <p className="text-gray-600 text-xl mt-2">
//         Gram staining, bacterial culture with antibiotic sensitivity determination, and other tests are used to identify bacterial strains and help determine the appropriate course of treatment. Bacterial infections can be treated with antibiotics, which work by either killing the bacteria or stopping them from multiplying. Antibiotics are only effective against bacterial infections and are not effective against viral infections.
//         </p>
//         <motion.button 
//           whileHover={{ scale: 1.1 }} 
//           whileTap={{ scale: 0.95 }}
//           className="mt-6 bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all"
//         >
//           LEARN MORE
//         </motion.button>
        
        
//       </motion.div>
      
//       {/* Image Section */}
//       <motion.div 
//         initial={{ opacity: 0, x: 50 }} 
//         animate={{ opacity: 1, x: 0 }} 
//         transition={{ duration: 0.8, delay: 0.3 }}
//         className="md:w-1/2 flex justify-end mt-10 md:mt-0 relative"
//       >
//         <div className="relative  max-w-md">
//           <img 
//             src={bactrialImg} 
//             alt="Beauty Clinic" 
//             className="w-full h-[70vh] rounded-lg shadow-lg"
//           />
//           <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber-100 -z-10"></div>
//         </div>

//       </motion.div>
//     </section>
//         {/* Accordion Section */}
//         <div className="mb-28 top-64 flex flex-col w-full   items-center" >
//         <motion.div 
//         initial={{ opacity: 0, x: -50 }} 
//         animate={{ opacity: 1, x: 0 }} 
//         transition={{ duration: 0.8 }}
//         className="md:w-1/2 text-left"
//       >
//           <h2 className="text-3xl md:text-2xl  font-semibold text-gray-800 mb-6">COMMON BACTRIAL INFECTIONS</h2>
//           <div className="max-w-2xl text-2xl w-full">
//             {infections.map((infection, index) => (
//               <Accordion key={index} title={infection.title} content={infection.content} />
//             ))}
//           </div>
//         </motion.div>
//         </div>
//     </div>
//   );
// };

// const Accordion = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="border-b border-gray-300">
//       <button 
//         className="w-full flex justify-between items-center p-4  text- font-semibold" 
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {title}
//         <span>{isOpen ? "−" : "+"}</span>
//       </button>
//       {isOpen && (
//         <motion.div 
//           initial={{ opacity: 0, height: 0 }} 
//           animate={{ opacity: 1, height: "auto" }}
//           transition={{ duration: 0.3 }}
//           className="p-4  text-gray-900"
//         >
//           {content}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Bactira;









// Data for Bacterial Infections Section
const bacterialData = {
  title: "Bacterial Infection",

  image: bactrialImg, // Image import remains the same
  infections: [
    {
      title: "Cellulitis",
      content: "Cellulitis causes a painful, red infection that is usually warm to the touch. Cellulitis occurs most often on the legs, but it can appear anywhere on the body.",
    },
    {
      title: "Folliculitis",
      content: "Folliculitis is an infection of the hair follicles that causes red, swollen bumps that look like pimples. Improperly treated pools or hot tubs can harbor bacteria that cause folliculitis.",
    },
    {
      title: "Impetigo",
      content: "Impetigo causes oozing sores, usually in preschool-aged children. The bullous form of impetigo causes large blisters while the non-bullous form has a yellow, crusted appearance.",
    },
    {
      title: "Tinea Versicolor",
      content: "Tinea Versicolor or pityriasis versicolor is a common condition that causes small patches of skin to become scaly and discoloured. They can be darker or lighter than the surrounding skin, or even red or pink. The condition is caused by a yeast called Malassezia, which lives on the skin of most people without causing any problems.",
    },
    {
      title: "Boils",
      content: "Boils are deep skin infections that start in hair follicles. Boils are firm, red, tender bumps that progress until pus accumulates underneath the skin.",
    },
  ],
  sections:[
    {
    
    descriptions: [
      
      "Bacteria can infect any area of the body. Pneumonia, meningitis, and food poisoning are just a few illnesses that may be caused by harmful bacteria. Bacteria come in three basic shapes: rod-shaped (bacilli), spherical (cocci), or helical (spirilla). Bacteria may also be classified as gram-positive or gram-negative. This refers to the type of cell wall the bacteria have. Gram-positive bacteria have a thick cell wall, while gram-negative bacteria have a thin cell wall. The cell wall is important because it helps protect the bacteria from the environment.",

    "Gram staining, bacterial culture with antibiotic sensitivity determination, and other tests are used to identify bacterial strains and help determine the appropriate course of treatment. Bacterial infections can be treated with antibiotics, which work by either killing the bacteria or stopping them from multiplying. Antibiotics are only effective against bacterial infections and are not effective against viral infections."

        
        
      ],
  },
]
};

import Test3 from "../Test3";
// Passing the data to the Section component
import bactrialImg from "../Dermatology_img/bacterial.jpg"

const Bactira = () => {
  return <Test3 {...bacterialData} />;
};

export default Bactira;
