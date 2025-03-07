// import React from 'react'
// import DermatologyHero from "../DermatoloyHero";
// import DermatologyNav from "../DermatologyNav";
// import neckrejuvenationImg from "../Dermatology_img/neck-rejuvenation.jpg"

// import { ChevronRight } from "lucide-react";
// import { motion } from 'framer-motion';
// import DermatologyFooter from '../DermatologyFooter';

// const NeckRejuvenation = () => {
//   return (
//     <div>
//       <DermatologyNav />
//         <DermatologyHero />
    
//       <div className="min-h-screen">
      
    
//         {/* Main Content */}
//         <section className="relative h-[100vh] w-full flex flex-col items-center justify-start top-40 flex-1 p-4">
//           <h1 className="text-5xl mt-5 text-center  font-semibold">
//           Neck Rejuvenation</h1>
//           <div className="flex mt-6 justify-center items-center md:flex-row gap-4 my-8">
//             <img
//               src={neckrejuvenationImg}
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
         
          
//             <div className="w-[100vh] h-[180vh ]flex flex-col justify-center items-center">

//                 <p className="text-gray-600 leading-7 mt-4 text-lg">
//                 The neck area is a commonly requested area for rejuvenation, as the skin gets thinner and more slack with time. It’s an area of concern for patients as they want to look natural, and consistent with rejuvenation on the face.

//                 </p>
           

//                 <p className="text-gray-600 leading-7 mt-8 mb-40 text-lg">
//                 Neck skin is different than facial skin in that it has an underlying muscle of more dynamic movement, and there are less “stem” cells that can heal the skin after more aggressive treatment such as certain lasers. This is why expertise and experience is very important in addressing this area.

//                 </p>
               

//             </div>
      
            
            
            
            
//           </motion.div>
//           </div>
//           <DermatologyFooter/>
//           </section>
//           </div>
//     </div>
//   )
// }

// export default NeckRejuvenation



const bacterialData = {
  title: "Neck Rejuvenation",
  description: [
    

  
  ],
  image:  neckrejuvenationImg ,
  

  sections:[{
    heading: "What is Laser Skin Toning (Rejuvenation) ?",
    descriptions: [
      
      "The neck area is a commonly requested area for rejuvenation, as the skin gets thinner and more slack with time. It’s an area of concern for patients as they want to look natural, and consistent with rejuvenation on the face.",

       "Neck skin is different than facial skin in that it has an underlying muscle of more dynamic movement, and there are less “stem” cells that can heal the skin after more aggressive treatment such as certain lasers. This is why expertise and experience is very important in addressing this area",

        
        
      ],
  },
  




 
  ]

};

import Test3 from "../Test3";
import neckrejuvenationImg from "../Dermatology_img/neck-rejuvenation.jpg"


const NeckRejuvenation = () => {
  return <Test3 {...bacterialData} />;
};

export default NeckRejuvenation;
