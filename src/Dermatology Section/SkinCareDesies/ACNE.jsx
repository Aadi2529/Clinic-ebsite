





// import { motion } from "framer-motion";
// import { useState } from "react";
// import acneImg from "../Dermatology_img/acne.jpg"
// import { ChevronRight } from "lucide-react";

// import DermatologyHero from "../DermatoloyHero";
// import DermatologyNav from "../DermatologyNav";

// const ACNE= () => {
//   const infections = [
//     { title: "Is there a difference between acne and pimples?", content: "Pimples and Acne are related with each other significantly but it should be known that one cannot be confused or replaced by the other.                                                                                           Acne is a skin disease whereas Pimple is one of the symptoms for the same.                          The onset of Acne is brought by clogging of the skin pores often due to excessive release of oil in the body or from the dust in the atmosphere. Naturally it leads to the formation of the plugged pores called as blackheads, nodules, whiteheads, cysts, or pimples. Usually it appears on the face, but it could also be found on chest, neck, shoulders, back, and arms.                                                                                           Pimples are red, inflamed and infected plugged oil glands, sometimes filled with pus. This is the most common form of Acne and thus has gained a synonym for itself. However the bacterial growth inside these clogged pores are reasons for its red color and eventually we can see a white fluid accumulate on the surface." },
//     { title: "What causes ance and pimples?", content: "Acne occurs when the pores on your skin become blocked with oil, dead skin, or bacteria. Each pore on your skin is the opening to a follicle. The follicle is made up of a hair and a sebaceous (oil) gland. The oil gland releases sebum (oil), which travels up the hair, out of the pore, and onto your skin." 
//     },
//     { title: "Can you be cured of ance?", content: "Acne Can't Be Prevented or Cured, But It Can Be Treated Effectively. ... There's no way to prevent acne, there's no cure and today's over-the-counter remedies contain the same basic ingredients as those on drugstore shelves decades ago. And acne won't just go away: Not treating it can actually make things worse." },
//     { title: "Can acne scars go away?", content: "Acne is one thing, scars are another. Acne will eventually go away (really, it will). Scars, on the other hand, are a bit tougher to deal with. Doing things like picking at and popping pimples can definitely damage your skin and cause scarring. But sometimes, even if you're really careful with your skin, scars can still develop. Severe blemishes, those that are very inflamed, are more likely to scar. And for some people, even minor blemishes cause scarring." },
//     {title:"Is acne in genetics?", content:"It’s a question we get all the time: “Is acne genetic?” The one-word answer is yes, acne is far more genetic than environmental. Acne genetics determine how your immune system responds to p. acnes bacteria; one person may develop only minor blackheads while another develops explosive red and tender nodules. Genetics also play a role in how easily your pores clog. For example, you may have a hereditary tendency to overproduce dead skin cells, and then shed them in a way that clogs your pores. When this leads to breakouts, you can think of it as genetic acne. Not your fault!"

//     }
//   ]

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
//         Acne/Pimples Treatment
        

//         </h1>
//         <p className="text-gray-600 text-xl mt-4">
//         Acne or pimples can start around adolescence,an age of around 14 and last till the age of 30 yrs in some.
//         </p>
//         <p className="text-gray-600 text-xl mt-4">For pimples, after detailed 
//             investigation, investigations, patient is put on the package of 6 months to 9 mths, which includes consultations, medications, procedures.
//         </p>

//         <p className="text-gray-600 text-xl mt-4">Acne and Acne Scars are commonly seen problems in teenagers and young adults. But some people have the unfortunate hormonal constitution of facing acne related problems throughout their life. A recurring acne problem not only instigates irreparable damage to the skin but also to the mental condition of the sufferer.</p>
            
//         <p className="text-gray-600 gap-5 text-xl mt-2">
//         Some of the most commonly faced problems related to acne are :
//         <ul  className="pl-5 space-y-2 top-3 gap-11">
//                 <li className="flex ">
//                   <ChevronRight className="text-red-400" />
//                   A Recurrent acne outburst on face and other areas of the body like chest and back
//                 </li>
                
//                 <li className="flex ">
//                   <ChevronRight className="text-red-400" />
//                   Atrophic scars – superficial scars in the infected and surrounding area; formed after acne heals
//                 </li>

//                 <li className="flex ">
//                   <ChevronRight className="text-red-400" />
//                   Ice-pick scars – Very deep rooted scars formed after acne heals
//                 </li>

//                 <li className="flex ">
//                   <ChevronRight className="text-red-400" />
//                   Redness and skin inflammation due to acne
//                 </li>

//                 <li className="flex ">
//                   <ChevronRight className="text-red-400" />
//                   Deformation and disfigurement of tissue surrounding acne
//                 </li>

                
                  

//         </ul>
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
//             src={acneImg} 
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
//           <h2 className="text-3xl md:text-2xl  font-semibold text-gray-800 mb-6">Frequently asked questions</h2>
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

// export default ACNE;




const bacterialData = {
  title: "Acne/Pimples Treatment",
 
  image: acneImg,
  
  faqs:"Frequently asked questions", // Image import remains the same
  infections: [
    { title: "Is there a difference between acne and pimples?", content: "Pimples and Acne are related with each other significantly but it should be known that one cannot be confused or replaced by the other.                                                                                           Acne is a skin disease whereas Pimple is one of the symptoms for the same.                          The onset of Acne is brought by clogging of the skin pores often due to excessive release of oil in the body or from the dust in the atmosphere. Naturally it leads to the formation of the plugged pores called as blackheads, nodules, whiteheads, cysts, or pimples. Usually it appears on the face, but it could also be found on chest, neck, shoulders, back, and arms.                                                                                           Pimples are red, inflamed and infected plugged oil glands, sometimes filled with pus. This is the most common form of Acne and thus has gained a synonym for itself. However the bacterial growth inside these clogged pores are reasons for its red color and eventually we can see a white fluid accumulate on the surface." },
        { title: "What causes ance and pimples?", content: "Acne occurs when the pores on your skin become blocked with oil, dead skin, or bacteria. Each pore on your skin is the opening to a follicle. The follicle is made up of a hair and a sebaceous (oil) gland. The oil gland releases sebum (oil), which travels up the hair, out of the pore, and onto your skin." 
        },
        { title: "Can you be cured of ance?", content: "Acne Can't Be Prevented or Cured, But It Can Be Treated Effectively. ... There's no way to prevent acne, there's no cure and today's over-the-counter remedies contain the same basic ingredients as those on drugstore shelves decades ago. And acne won't just go away: Not treating it can actually make things worse." },
        { title: "Can acne scars go away?", content: "Acne is one thing, scars are another. Acne will eventually go away (really, it will). Scars, on the other hand, are a bit tougher to deal with. Doing things like picking at and popping pimples can definitely damage your skin and cause scarring. But sometimes, even if you're really careful with your skin, scars can still develop. Severe blemishes, those that are very inflamed, are more likely to scar. And for some people, even minor blemishes cause scarring." },
        {title:"Is acne in genetics?", content:"It’s a question we get all the time: “Is acne genetic?” The one-word answer is yes, acne is far more genetic than environmental. Acne genetics determine how your immune system responds to p. acnes bacteria; one person may develop only minor blackheads while another develops explosive red and tender nodules. Genetics also play a role in how easily your pores clog. For example, you may have a hereditary tendency to overproduce dead skin cells, and then shed them in a way that clogs your pores. When this leads to breakouts, you can think of it as genetic acne. Not your fault!"
    
        }
  ],
  sections:[
    {
      descriptions: [
        `Acne or pimples can start around adolescence,an age of around 14 and last till the age of 30 yrs in some.`,
        "For pimples, after detailed investigation, investigations, patient is put on the package of 6 months to 9 mths, which includes consultations, medications, procedures."
    
      
      ],
    heading: "Some of the most commonly faced problems related to acne are :",
    points: [
      
      "A Recurrent acne outburst on face and other areas of the body like chest and bac",

       "Atrophic scars – superficial scars in the infected and surrounding area; formed after acne heals",

        "Ice-pick scars – Very deep rooted scars formed after acne heals",

        "Redness and skin inflammation due to acne",

        "Deformation and disfigurement of tissue surrounding acne",

        
      ],
  },
  
 
  ]

};

import Test3 from "../Test3";
import acneImg from "../Dermatology_img/acne.jpg"


const ACNE = () => {
  return <Test3 {...bacterialData} />;
};

export default ACNE;