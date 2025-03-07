// import React from 'react'
// import DermatologyHero from "../DermatoloyHero";
// import DermatologyNav from "../DermatologyNav";

// import { motion } from 'framer-motion';
// import { useState } from "react";

// import radiofrequencyImg from '../Dermatology_img/radiofrequency.jpg'

// const Radiofrequency = () => {
//     const infections = [
//         { title: "Diminishes or Removes Cellulites", content: "Given how women’s skin vary from men, part of their uniqueness to men is the affliction of cellulite being gender-selective to them -- Only women get cellulites while men never do. Cellulites is a women-only skin issue commonly found around the buttocks and at the back of the thighs where we generally store our body fats. Thanks to the RF treatment, however, gone are those days when we have to suffer from the skin bulging problems caused by cellulite. With the adipose tissue and fats as the cause of cellulite, the heat coming from the RF treatment diminishes the bulging of excess fatty tissues." },
//         { title: "Reduction of Body Fats", content: "Acne occurs when the pores on your skin become blocked with oil, dead skin, or bacteria. Each pore on your skin is the opening to a follicle. The follicle is made up of a hair and a sebaceous (oil) gland. The oil gland releases sebum (oil), which travels up the hair, out of the pore, and onto your skin." 
//         },
//         { title: "Tightening of the Skin", content: "Partly what makes skin wrinkles so obvious sometimes are the clear lines that are creased over an elderly person’s skin often as a natural result of the aging process throughout the years.Others whose skin problems are not limited to wrinkles simply have excessively lumpy and stretched skin, possibly as a result of sudden change in weight." },
//         { title: "Post-operative Liposuction Smoothing", content: "Not all who go through the process of liposuction always have a 100% smooth finish to the affected area. Others who did not end up as so notice bumps on the area where body fats are surgically removed, often a not-so-pretty sight in comparison to well-toned and proportional skin tissues, muscles, and some fats.Although there are existing measures that address this issue among post-operative liposuction patients, RF treatment can also be employed for a bout of non-surgical treatment for the issue of bulging and sagging skin.." },
   
//       ]
//   return (
//     <div>
//        <DermatologyNav />
//          <DermatologyHero />
    
//       <div className="min-h-screen">
      
    
//         {/* Main Content */}
//         <section className="relative h-[120vh] w-full flex flex-col items-center justify-start top-40 flex-1 p-4">
//           <h1 className="text-5xl mt-5 text-center  font-semibold">Radiofrequencys</h1>
//           <div className="flex mt-6 justify-center items-center md:flex-row gap-4 my-8">
//             <img
//               src={radiofrequencyImg}
//               alt="Psoriasis on scalp"
//               className="w-full mt-6 md:w-1/2 rounded-lg shadow-lg"
//             />
            
//           </div>

          

//             <div>
//             <motion.div  
//             initial={{ opacity: 0, x: -50 }} 
//             animate={{ opacity: 1, x: 0 }} 
//             transition={{ duration: 0.8 }}
//             className="md:w-1/2 text-left"
//           >
         
//               <div className="w-[100vh] flex flex-col justify-start">
//               <p className="text-gray-700 leading-7 mt-4 text-lg">
//               It is painless non-invasive anti-aging treatment in which radiofrequency is used to tighten the skin and reduce fine line and wrinkles on face, neck and body. It also helps with tightening post pregnancy saggy abdomen. The patients can be treated quicker than ever before, with no need for anesthesia, no downtime and best of all no pain!, provides fast and effective wrinkle reduction with visible results often after the first session.
//             </p>

//             <p className="text-gray-700 leading-7 mt-4 text-lg">
//             It delivers long lasting and measurable results through non-surgical aesthetic system. All areas can be easily treated and improved. It also complements pre and post treatment in Lipolysis procedure.

//             </p>

           
            
//               </div>
            
            
            
//           </motion.div>
//           </div>
//           </section>
//           </div>
//            {/* Accordion Section */}
//                   <div className="mb-28 top-64 flex flex-col w-full   items-center" >
//                   <motion.div 
//                   initial={{ opacity: 0, x: -50 }} 
//                   animate={{ opacity: 1, x: 0 }} 
//                   transition={{ duration: 0.8 }}
//                   className="md:w-1/2 text-left"
//                 >
//                     <h2 className="text-3xl md:text-2xl  font-semibold text-gray-800 mb-6">
//                     Benefits</h2>
//                     <div className="max-w-2xl text-2xl w-full">
//                       {infections.map((infection, index) => (
//                         <Accordion key={index} title={infection.title} content={infection.content} />
//                       ))}
//                     </div>
//                   </motion.div>
//                   </div>
//     </div>
//   )
// }
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
// export default Radiofrequency
















       
const bacterialData = {
  title: "Radiofrequency",
  
  image: botoxImg,

  faqs:"Benefits", // Image import remains the same
  infections: [
    { title: "Diminishes or Removes Cellulites", content: "Given how women’s skin vary from men, part of their uniqueness to men is the affliction of cellulite being gender-selective to them -- Only women get cellulites while men never do. Cellulites is a women-only skin issue commonly found around the buttocks and at the back of the thighs where we generally store our body fats. Thanks to the RF treatment, however, gone are those days when we have to suffer from the skin bulging problems caused by cellulite. With the adipose tissue and fats as the cause of cellulite, the heat coming from the RF treatment diminishes the bulging of excess fatty tissues." },
    { title: "Reduction of Body Fats", content: "Acne occurs when the pores on your skin become blocked with oil, dead skin, or bacteria. Each pore on your skin is the opening to a follicle. The follicle is made up of a hair and a sebaceous (oil) gland. The oil gland releases sebum (oil), which travels up the hair, out of the pore, and onto your skin." 
            },
    { title: "Tightening of the Skin", content: "Partly what makes skin wrinkles so obvious sometimes are the clear lines that are creased over an elderly person’s skin often as a natural result of the aging process throughout the years.Others whose skin problems are not limited to wrinkles simply have excessively lumpy and stretched skin, possibly as a result of sudden change in weight." },
    { title: "Post-operative Liposuction Smoothing", content: "Not all who go through the process of liposuction always have a 100% smooth finish to the affected area. Others who did not end up as so notice bumps on the area where body fats are surgically removed, often a not-so-pretty sight in comparison to well-toned and proportional skin tissues, muscles, and some fats.Although there are existing measures that address this issue among post-operative liposuction patients, RF treatment can also be employed for a bout of non-surgical treatment for the issue of bulging and sagging skin.." },
  ],
  
  sections:[
    {
  
    descriptions:[
      "It is painless non-invasive anti-aging treatment in which radiofrequency is used to tighten the skin and reduce fine line and wrinkles on face, neck and body. It also helps with tightening post pregnancy saggy abdomen. The patients can be treated quicker than ever before, with no need for anesthesia, no downtime and best of all no pain!, provides fast and effective wrinkle reduction with visible results often after the first session.",
      "It delivers long lasting and measurable results through non-surgical aesthetic system. All areas can be easily treated and improved. It also complements pre and post treatment in Lipolysis procedure."
    ]
  },
  
 
  ],


  
  
  
};
 
  

import Test3 from "../Test3";
import botoxImg from "../Dermatology_img/botox.jpg"


const Radiofrequency = () => {
  return <Test3 {...bacterialData} />;
};

export default Radiofrequency;


                
        
        
        





