





// import { motion } from "framer-motion";
// import { useState } from "react";
// import ultrasonicpeelImg from "../Dermatology_img/ultrasonicpeel.jpg"
// import { ChevronRight } from "lucide-react";

// import DermatologyHero from "../DermatoloyHero";
// import DermatologyNav from "../DermatologyNav";
// import DermatologyFooter from "../DermatologyFooter";

// const CavitationPeel = () => {
//   const infections = [
//     { title: "What is an ultrasonic peel?", content: "Ultrasonic peel is skin cleansing procedure using a special device that creates ultrasonic waves and high-frequency vibration providing dead skin cells removal and rejuvenation of the outer layer of skin." },
//     { title: "What is cavitation peeling?", content: "Cavitation peeling is a skin treatment, performed by using ultrasound. It is a modern method and is an alternative to the traditional cleaning of the skin. It immediately releases the pores from dead cells, excessive sebum, bacteria, toxic substances and cosmetic residues, leaving the skin clean and smooth." },
//     { title: "What is an ultrasonic facial treatment ?", content: "During an ultrasonic facial, high level sound wave technology is used to penetrate deep below the surface of the skin promoting cellular renewal and repair, toning muscles, increasing blood circulation, encouraging lymphatic drainage, combating puffiness and swelling and improving skin care product penetration." },
   
//   ]

//   return (
//     <div>
//       <DermatologyNav />
//         <DermatologyHero />
    
//     <section className=" relative h-[60vh]  flex   flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-24 bg-white">
//       {/* Text Content */}
//       <motion.div  
//         initial={{ opacity: 0, x: -50 }} 
//         animate={{ opacity: 1, x: 0 }} 
//         transition={{ duration: 0.8 }}
//         className="md:w-1/2 text-left"
//       >
//         {/* <p className="text-sm text-amber-600 font-semibold">ABOUT US</p> */}
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-2">
//         Ultrasonic Cavitation Peel
        

//         </h1>
//         <p className="text-gray-600 text-xl mt-8">
//         Modern method of cleansing the skin. With our caviation probe imported from Poland. It is a one of a kind treatment for non invasive skin rejuvenation working in following pattern
//         </p>
//         <p className="text-gray-600 text-xl mt-4">
//         Ultrasonic Cavitation Peel Benefits :

//         <ul  className="pl-5 mt-2 space-y-2 top-3 gap-11">
//                     <li className="flex ">
//                     <ChevronRight className="text-red-400" />
//                     Painlessly removes dead skin cells
//                     </li>

//                     <li className="flex ">
//                     <ChevronRight className="text-red-400" />
//                     Leaves an extremely youthful, refreshed and revitalized skin.
//                     </li>

//                     <li className="flex ">
//                     <ChevronRight className="text-red-400" />
//                     Accelerates the blood circulation.
//                     </li>

//                     <li className="flex ">
//                     <ChevronRight className="text-red-400" />
//                     Deeply moisturizes
//                     </li>
//                     <li className="flex ">
//                     <ChevronRight className="text-red-400" />
//                     Improves skin elasticity
//                     </li>
//                     <li className="flex ">
//                     <ChevronRight className="text-red-400" />
//                     Gets rid of excess sebum, reduces open pores.
//                     </li>
//             </ul>
//         </p>






        
//         {/* <motion.button 
//           whileHover={{ scale: 1.1 }} 
//           whileTap={{ scale: 0.95 }}
//           className="mt-6 bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all"
//         >
//           LEARN MORE
//         </motion.button> */}
        
        
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
//             src={ultrasonicpeelImg} 
//             alt="Beauty Clinic" 
//             className="w-full h-[50vh] rounded-lg shadow-lg"
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
//           <h2 className="text-3xl md:text-2xl  font-semibold text-gray-800 mb-6">Frequently asked questions</h2>
//           <div className="max-w-2xl text-2xl w-full">
//             {infections.map((infection, index) => (
//               <Accordion key={index} title={infection.title} content={infection.content} />
//             ))}
//           </div>
//         </motion.div>
//         </div>
//         <DermatologyFooter />
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

// export default CavitationPeel;




        
const bacterialData = {
  title: "Ultrasonic Cavitation Peel",
  description: `Modern method of cleansing the skin. With our caviation probe imported from Poland. It is a one of a kind treatment for non invasive skin rejuvenation working in following pattern`,
  
  
  image: ultrasonicpeelImg,
  faqs:"Frequently asked questions", // Image import remains the same
  infections: [
    { title: "What is an ultrasonic peel?", content: "Ultrasonic peel is skin cleansing procedure using a special device that creates ultrasonic waves and high-frequency vibration providing dead skin cells removal and rejuvenation of the outer layer of skin." },
        { title: "What is cavitation peeling?", content: "Cavitation peeling is a skin treatment, performed by using ultrasound. It is a modern method and is an alternative to the traditional cleaning of the skin. It immediately releases the pores from dead cells, excessive sebum, bacteria, toxic substances and cosmetic residues, leaving the skin clean and smooth." },
        { title: "What is an ultrasonic facial treatment ?", content: "During an ultrasonic facial, high level sound wave technology is used to penetrate deep below the surface of the skin promoting cellular renewal and repair, toning muscles, increasing blood circulation, encouraging lymphatic drainage, combating puffiness and swelling and improving skin care product penetration." },
  ],
  sections:[
    {
    heading: "Ultrasonic Cavitation Peel Benefits :",
    points: [
      "Painlessly removes dead skin cells",

      "Leaves an extremely youthful, refreshed and revitalized skin.",

       "Gets rid of excess sebum, reduces open pores.",

       "Accelerates the blood circulation.",

       "Deeply moisturizes",

       "Improves skin elasticity",
      ],
  },
  
 
  ]

};

import Test3 from "../Test3";
import ultrasonicpeelImg from "../Dermatology_img/ultrasonicpeel.jpg"


const CavitationPeel = () => {
  return <Test3 {...bacterialData} />;
};

export default CavitationPeel;




        



                
        
        
        
