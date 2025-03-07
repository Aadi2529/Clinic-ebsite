





// import { motion } from "framer-motion";
// import { useState } from "react";
// import glutathioneImg from "../Dermatology_img/glutathione.jpg"
// import { ChevronRight } from "lucide-react";

// import DermatologyHero from "../DermatoloyHero";
// import DermatologyNav from "../DermatologyNav";
// import DermatologyFooter from "../DermatologyFooter";

// const Glutathione = () => {
//   const infections = [
//     { title: "What is Glutathione and what does it do?", content: "Your cells contain glutathione, which is a substance made from three amino acids: cysteine, glutamate, and glycine. Glutathione acts as an important antioxidant in your body. That means it helps combat free radicals. These are molecules that can damage your body's cells. Glutathione plays a role in many chemical reactions in your body. It also helps detoxify chemicals, including some that your body creates naturally, as well as pollutants and drugs." },
//     { title: "Can glutathione pils caues ance?", content: "Glutathione does not cause the acne breakouts. Acne are the results of several other causes like stress, hormonal imbalance, clogged pores, dead skin cells, accumulation of oil in the glands or pores etc." },
//     { title: "What does glutathione do for your skin ?", content: "Glutathione is the body's most powerful antioxidant, unknown by most. It is popular when used as a way to help whiten skin though. Glutathione skin whitening is growing in popularity, helping people achieve the skin pigmentation they desire with no harmful side effects when taken in proper dosages." },
   
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
//         Glutathione
        

//         </h1>
//         <p className="text-gray-600 text-xl mt-4">
//         Glutathione is a wonder drug for whole body whitening. Glutathione is an highly potent antioxidant primarily made of 3 amino acids namely cystein, glycine, and glutamic acid. The main purpose of glutathione is to protect the cells of the body from the harmful toxins and free radicals responsible for skin pigmentation and blemishes.
//         </p>
//         <p className="text-gray-600 text-xl mt-4">
//             This helps render a lighter tone of skin when     administered in accordance to one’s metabolic activity. Glutathione is available with us in different formulation. Patient will have a liberty to choose amongst tablets, sprays.
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
//             src={glutathioneImg} 
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

// export default Glutathione;








// import { motion } from "framer-motion";
// import { useState } from "react";
// import peelImg from "../Dermatology_img/peels.png"
// import { ChevronRight } from "lucide-react";

// import DermatologyHero from "../DermatoloyHero";
// import DermatologyNav from "../DermatologyNav";
// import DermatologyFooter from "../DermatologyFooter";

// const Peels = () => {
//   const infections = [
//     { title: "What is the most common skin desease?", content: "Acne, eczema, seborrheic dermatitis, skin cancer and psoriasis are the five most common skin disorders" },
//     { title: "What is the diagonsis for a fungal infection of the skin?", content: "To establish or confirm the diagnosis of a fungal infection, skin, hair and nail tissue is collected for microscopy and culture (mycology). Exposing the site to long wavelength ultraviolet radiation (Wood lamp) can help identify some fungal infections of hair (tinea capitis) because the infected hair fluoresces green" },
//     { title: "What are skin conditions?", content: "Anything that irritates, clogs, or inflames your skin can cause symptoms such as redness, swelling, burning, and itching. Allergies, irritants, your genetic makeup, and certain diseases and immune system problems can cause rashes, hives, and other skin conditions." },
//     { title: "What is a skin allergies?", content: "Skin Allergy Overview. Irritated skin can be caused by a variety of factors. ... When an allergen is responsible for triggering an immune system response, then it is an allergic skin condition. Atopic Dermatitis (Eczema) Eczema is the most common skin condition, especially in children." },
//   ]

//   return (
//     <div>
//       <DermatologyNav />
//         <DermatologyHero />
    
//     <section className=" relative h-[70vh]  flex   flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-24 bg-white">
//       {/* Text Content */}
//       <motion.div  
//         initial={{ opacity: 0, x: -50 }} 
//         animate={{ opacity: 1, x: 0 }} 
//         transition={{ duration: 0.8 }}
//         className="md:w-1/2 text-left"
//       >
        
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight top-40">
//          Peels
//         </h1>
        

        
      
  
//         <p className="text-gray-600 text-xl mt-10">
//         Peeling is application of a safe solution/gel that gently polishes and resurface, removes the top damaged skin layer , stimulates new cell growth and collagen production to reveal glowing and younger looking skin. It is an office procedure in which peel will be applied for particular period of time. Office procedure typically means patient can resume their work immediately with no down time After properly studying the skin type and its sensitivity, we decide on the type of peeling agent and their concentration.
//         </p>
        
//         <p className="text-gray-900 gap-5 text-xl mt-4">
//          Skin Peel Benefits :
//             <ul  className="pl-5 mt-2 space-y-2 top-3 gap-11">
//                     <li className="flex ">
//                     <ChevronRight className="text-red-400" />
//                     Reduce age spots, freckles, and dark patches (melasma) due to pregnancy or taking birth control pills, pigmentation.
//                     </li>

//                     <li className="flex ">
//                     <ChevronRight className="text-red-400" />
//                     Treat wrinkles caused by sun damage and aging
//                     </li>

//                     <li className="flex ">
//                     <ChevronRight className="text-red-400" />
//                     Treatment of Acne
//                     </li>

//                     <li className="flex ">
//                     <ChevronRight className="text-red-400" />
//                     Improve the look and feel of skin
//                     </li>
//                     <li className="flex ">
//                     <ChevronRight className="text-red-400" />
//                     Under eye pigmentation
//                     </li>
//             </ul>
//         </p>
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
//             src={peelImg} 
//             alt="Beauty Clinic" 
//             className="w-full h-[70vh] rounded-lg shadow-lg"
//           />
//           <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber-100 -z-10"></div>
//         </div>

//       </motion.div>
//     </section>

//   <DermatologyFooter />
//     </div>
//   );
// };


// export default Peels;
                  


                







                
        
        
        
const bacterialData = {
  title: "Glutathione",
  description: `Glutathione is a wonder drug for whole body whitening. Glutathione is an highly potent antioxidant primarily made of 3 amino acids namely cystein, glycine, and glutamic acid. The main purpose of glutathione is to protect the cells of the body from the harmful toxins and free radicals responsible for skin pigmentation and blemishes.`,
  
  
  image: glutathioneImg,
  faqs:"Frequently asked questions", // Image import remains the same
  infections: [
       { title: "What is Glutathione and what does it do?", content: "Your cells contain glutathione, which is a substance made from three amino acids: cysteine, glutamate, and glycine. Glutathione acts as an important antioxidant in your body. That means it helps combat free radicals. These are molecules that can damage your body's cells. Glutathione plays a role in many chemical reactions in your body. It also helps detoxify chemicals, including some that your body creates naturally, as well as pollutants and drugs." },
    { title: "Can glutathione pils caues ance?", content: "Glutathione does not cause the acne breakouts. Acne are the results of several other causes like stress, hormonal imbalance, clogged pores, dead skin cells, accumulation of oil in the glands or pores etc." },
    { title: "What does glutathione do for your skin ?", content: "Glutathione is the body's most powerful antioxidant, unknown by most. It is popular when used as a way to help whiten skin though. Glutathione skin whitening is growing in popularity, helping people achieve the skin pigmentation they desire with no harmful side effects when taken in proper dosages." },
  ],
  sections:[
    {
      descriptions:["This helps render a lighter tone of skin when administered in accordance to one’s metabolic activity. Glutathione is available with us in different formulation. Patient will have a liberty to choose amongst tablets, sprays."]
  },
  
 
  ]

};

import Test3 from "../Test3";
import glutathioneImg from "../Dermatology_img/glutathione.jpg"


const Glutathione = () => {
  return <Test3 {...bacterialData} />;
};

export default Glutathione;