
import { motion } from "framer-motion";
import { useState } from "react";
import hairreductionImg from "../Dermatology_img/hair-reduction.png"
import { ChevronRight } from "lucide-react";
import DermatologyHero from "../DermatoloyHero";
import DermatologyNav from "../DermatologyNav";
import DermatologyFooter from "../DermatologyFooter";

const HairReduction = () => {


  return (
    <div>
      <DermatologyNav />
        <DermatologyHero />
    
    <section className=" relative  flex   flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-24 bg-white">
      {/* Text Content */}
      <motion.div  
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-left"
      >
        {/* <p className="text-sm text-amber-600 font-semibold">ABOUT US</p> */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-2">
        
          Laser Hair Reduction

        </h1>
        <h1 className="text-gray-900 text-2xl mt-8">
        How does laser work ?
        </h1>
        <p className="text-gray-600 text-xl mt-2">
        Hair reduction laser is a device which targets melanin pigment in the hair which gives the black colour to it. Therefore, it works best on black dark and thick hair which have more melanin content. These treatments work over a number of sittings at regular intervals. The approximate number of sittings that will be required will be discussed with you during consultation. We use only latest FDA approved lasers which is called DIODE.
        </p>
        <h1 className="text-gray-900 text-2xl mt-8">When do you see the results ?</h1>
        <ul  className="pl-5 text-lg mt-4 space-y-2 top-3 gap-11">
                <li className="flex  ">
                  <ChevronRight className="text-red-400 w-11" />
                  In 4 to 6 sittings, you will see good visible results. But the best results are achieved in 8 to 12 sittings. Please keep in mind, this is laser hair reduction and not laser hair removal .
                </li>
        </ul>
        <h1 className="text-gray-900 text-2xl mt-8">What post treatment care is required ?</h1>
        <ul  className="pl-5 text-lg mt-4 space-y-2 top-3 gap-11">
                <li className="flex ">
                  <ChevronRight className="text-red-400 w-11" />
                  Make sure you avoid the sun for at least the next 2 days. Be liberal with your moisturisers and sunscreens.
                </li>
        </ul>
        <h1 className="text-gray-900 text-2xl mt-8">What do you do in between the laser sittings ?</h1>
        <ul  className="pl-5 text-lg space-y-2 top-3 mt-4 gap-11">
                <li className="flex ">
                  <ChevronRight className="text-red-400 w-24" />
                  In between your hair reduction laser sessions you could use any mode of hair removal, yes even waxing for the initial 15 days. The latter half of the month however, you are only allowed to shave. Please do not hesitate to call us if you see any unusual change in your skin post laser like pigmentation, burning or redness.
                </li>
        </ul>
        
        
      </motion.div>
      
      {/* Image Section */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="md:w-1/2 flex justify-end mt-10 md:mt-0 relative"
      >
        <div className="relative mb-36 w-full max-w-md">
          <img 
            src={hairreductionImg} 
            alt="Beauty Clinic" 
            className=" rounded-lg w-[50vw] h-[50vh] shadow-lg"
          />
          <div className="absolute bottom-0 right-0  bg-amber-100 -z-10"></div>
        </div>

      </motion.div>
    </section>
    <DermatologyFooter />
        
    </div>
  );
};



export default HairReduction;
