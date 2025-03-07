





// import { motion } from "framer-motion";
// import { useState } from "react";
// import fungleImg from "../Dermatology_img/fungleImg.jpg"

// import DermatologyHero from "../DermatoloyHero";
// import DermatologyNav from "../DermatologyNav";
// import DermatologyFooter from "../DermatologyFooter";

// const FemailHairs = () => {
//   const infections = [
//     { title: "Androgenetic Alopecia", content: "The maority of women with androgenetic - also called androgenic - alopecia have diffuse thinning on all areas of the scalp. Androgenic alopecia in women is due to the action of androgens, male hormones that are typically present in only small amounts. Androgenic alopecia can be caused by a variety of factors tied to the actions of hormones, including some ovarian cysts, taking high androgen index birth control pills, pregnancy, and menopause." },
//     { title: "Telogen Effluvium", content: "When your body goes through something traumatic like child birth, malnutrition, a severe infection, major surgery, or extreme stress, it can impact your hair. Many of the 90% or so of hairs in the growing (anagen) or transitional (catagen) phases can actually shift all at once into the resting (telogen) phase." },
//     { title: "Anagen Effluvium", content: "When your body goes through something traumatic like child birth, malnutrition, a severe infection, major surgery, or extreme stress, it can impact your hair. Many of the 90% or so of hairs in the growing (anagen) or transitional (catagen) phases can actually shift all at once into the resting (telogen) phase." },

//   ];

//   return (
//     <div>
//       <DermatologyNav />
//         <DermatologyHero />
    
//     <section className=" relative
//      flex h-full  flex-col md:flex-row items-center justify-between px-6 md:px-16 mb-10 md:py-24 bg-white">
//       {/* Text Content */}
//       <motion.div  
//         initial={{ opacity: 0, x: -50 }} 
//         animate={{ opacity: 1, x: 0 }} 
//         transition={{ duration: 0.8 }}
//         className="md:w-1/2 text-left"
//       >
//         {/* <p className="text-sm text-amber-600 font-semibold">ABOUT US</p> */}
//         <h1 className="text-4xl text-center md:text-6xl font-bold leading-tight mt-2">
//         Female Androgenetic Alopecia

        

//         </h1>
//         <p className="text-gray-600 text-xl mt-7">
//         While the patterns of baldness for men and women differ, they both have a common genetic cause. With male pattern baldness, hair loss typically occurs on the top and front of the head. With female pattern baldness, thinning occurs on the top and crown of the head.
//         </p>
//         <p className="text-gray-600 text-xl mt-2">
//         This thinning in women often starts as a widening of the centre hair part that leaves the front hairline unaffected. Medication may prevent further hair loss. In some cases, surgeons can transplant hair or reduce the area of bald skin. Natural-looking wigs and hairpieces can help cover hair loss.
//         </p>
  
//       </motion.div>
      
//       {/* Image Section */}
//       <motion.div 
//         initial={{ opacity: 0, x: 50 }} 
//         animate={{ opacity: 1, x: 0 }} 
//         transition={{ duration: 0.8, delay: 0.3 }}
//         className="md:w-1/2 flex justify-end mt-10 md:mt-0 relative"
//       >
//         <div className="relative w-full max-w-md">
//           <img 
//             src={fungleImg} 
//             alt="Beauty Clinic" 
//             className="w-full rounded-lg shadow-lg"
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
//           <h2 className="text-xl md:text-2xl  font-semibold text-gray-800 mb-6">
//           Common Types</h2>
//           <div className="max-w-2xl text-xl w-full">
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

// export default FemailHairs;




const bacterialData = {
  title: "Female Androgenetic Alopecia",

  
  image: femaleImg,
  faqs:"Common Types", // Image import remains the same
  infections: [
    { title: "Androgenetic Alopecia", content: "The maority of women with androgenetic - also called androgenic - alopecia have diffuse thinning on all areas of the scalp. Androgenic alopecia in women is due to the action of androgens, male hormones that are typically present in only small amounts. Androgenic alopecia can be caused by a variety of factors tied to the actions of hormones, including some ovarian cysts, taking high androgen index birth control pills, pregnancy, and menopause." },
        { title: "Telogen Effluvium", content: "When your body goes through something traumatic like child birth, malnutrition, a severe infection, major surgery, or extreme stress, it can impact your hair. Many of the 90% or so of hairs in the growing (anagen) or transitional (catagen) phases can actually shift all at once into the resting (telogen) phase." },
        { title: "Anagen Effluvium", content: "When your body goes through something traumatic like child birth, malnutrition, a severe infection, major surgery, or extreme stress, it can impact your hair. Many of the 90% or so of hairs in the growing (anagen) or transitional (catagen) phases can actually shift all at once into the resting (telogen) phase." }
  ],

  sections:[
    {
  descriptions: [
      
    "While the patterns of baldness for men and women differ, they both have a common genetic cause. With male pattern baldness, hair loss typically occurs on the top and front of the head. With female pattern baldness, thinning occurs on the top and crown of the head.",
    
   "This thinning in women often starts as a widening of the centre hair part that leaves the front hairline unaffected. Medication may prevent further hair loss. In some cases, surgeons can transplant hair or reduce the area of bald skin. Natural-looking wigs and hairpieces can help cover hair loss.",
  
      
      
    ],
  }
]
};

import Test3 from "../Test3";
import femaleImg from "../Dermatology_img/female.jpg"
// Passing the data to the Section component
import bactrialImg from "../Dermatology_img/bacterial.jpg"

const FemailHairs = () => {
  return <Test3 {...bacterialData} />;
};

export default FemailHairs;