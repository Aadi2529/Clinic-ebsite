





// import { motion } from "framer-motion";
// import { useState } from "react";
// import skinnailImg from "../Dermatology_img/skinnailImg.jpg"
// import { ChevronRight } from "lucide-react";

// import DermatologyHero from "../DermatoloyHero";
// import DermatologyNav from "../DermatologyNav";
// import DermatologyFooter from "../DermatologyFooter";

// const SkinNail = () => {
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
//         Management Of Skin & Nail Diseases
        

//         </h1>
//         <p className="text-gray-600 text-xl mt-4">
//         Topical therapy employs a vehicle (ointments, creams, lotions, gels) to deliver an active ingredient to the skin, to provide a protective barrier, or to hydrate and moisturize the skin.
//         </p>
//         <p className="text-gray-600 gap-5 text-xl mt-2">
//         There are many types of topical treatments, including:
//         <ul  className="pl-5 space-y-2 top-3 gap-11">
//                 <li className="flex ">
//                   <ChevronRight className="text-red-400" />
//                   Antipruritics, e.g. calamine, are used to relieve itching
//                 </li>
                
//                 <li className="flex ">
//                   <ChevronRight className="text-red-400" />
//                   Keratolytics, e.g. salicylic acid, urea, are used to remove hyperkeratotic skin
//                 </li>

//                 <li className="flex ">
//                   <ChevronRight className="text-red-400" />
//                   Tars act by reducing the thickness of the epidermis
//                 </li>

//                 <li className="flex ">
//                   <ChevronRight className="text-red-400" />
//                   Corticosteroids have anti-inflammatory and immunosuppressive effects that are useful in treating many skin disorders
//                 </li>

//                 <li className="flex ">
//                   <ChevronRight className="text-red-400" />
//                   Calcipotriol (an analogue of 1,25-dihydroxycholecalciferol) reduces epidermal proliferation and is used in local treatment of plaque psoriasis
//                 </li>

//                 <li className="flex ">
//                   <ChevronRight className="text-red-400" />
//                   Retinoids influence immune function and have some anti-inflammatory activity and are used in acne
//                 </li>

//                 <li className="flex ">
//                   <ChevronRight className="text-red-400" />
//                   Sunscreens
//                 </li>

//                 <li className="flex ">
//                   <ChevronRight className="text-red-400" />
//                   Antiseptics, e.g. benzoyl peroxide, chlorhexidine
//                 </li>

//                 <li className="flex ">
//                   <ChevronRight className="text-red-400" />
//                   Antifungal agents
//                 </li>
                  

//         </ul>
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
//             src={skinnailImg} 
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

// export default SkinNail;


const bacterialData = {
  title: "Management Of Skin & Nail Diseases",
  description: `Topical therapy employs a vehicle (ointments, creams, lotions, gels) to deliver an active ingredient to the skin, to provide a protective barrier, or to hydrate and moisturize the skin.`,
  
  
  image: skinnailImg,
  faqs:"Frequently asked questions", // Image import remains the same
  infections: [
    { title: "What is the most common skin desease?", content: "Acne, eczema, seborrheic dermatitis, skin cancer and psoriasis are the five most common skin disorders" },
    { title: "What is the diagonsis for a fungal infection of the skin?", content: "To establish or confirm the diagnosis of a fungal infection, skin, hair and nail tissue is collected for microscopy and culture (mycology). Exposing the site to long wavelength ultraviolet radiation (Wood lamp) can help identify some fungal infections of hair (tinea capitis) because the infected hair fluoresces green" },
    { title: "What are skin conditions?", content: "Anything that irritates, clogs, or inflames your skin can cause symptoms such as redness, swelling, burning, and itching. Allergies, irritants, your genetic makeup, and certain diseases and immune system problems can cause rashes, hives, and other skin conditions." },
    { title: "What is a skin allergies?", content: "Skin Allergy Overview. Irritated skin can be caused by a variety of factors. ... When an allergen is responsible for triggering an immune system response, then it is an allergic skin condition. Atopic Dermatitis (Eczema) Eczema is the most common skin condition, especially in children." },
  ],
  sections:[
    {
    heading: "There are many types of topical treatments, including:",
    points: [
      "Antipruritics, e.g. calamine, are used to relieve itching",

       "Keratolytics, e.g. salicylic acid, urea, are used to remove hyperkeratotic skin",

        "Tars act by reducing the thickness of the epidermis",

        "Corticosteroids have anti-inflammatory and immunosuppressive effects that are useful in treating many skin disorders",

        "Calcipotriol (an analogue of 1,25-dihydroxycholecalciferol) reduces epidermal proliferation and is used in local treatment of plaque psoriasis",

        "Retinoids influence immune function and have some anti-inflammatory activity and are used in acne",

        "Sunscreens",

        "Antiseptics, e.g. benzoyl peroxide, chlorhexidine",

        "Antifungal agents",

        "Anaesthetics/analgesics"
      ],
  },
  
 
  ]

};

import Test3 from "../Test3";
import skinnailImg from "../Dermatology_img/skinnailImg.jpg"


const SkinNail = () => {
  return <Test3 {...bacterialData} />;
};

export default SkinNail;