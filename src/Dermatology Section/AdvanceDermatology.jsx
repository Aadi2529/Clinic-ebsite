import React from 'react'
import DermatologyVideo from './DermatologyVideos/Dermatology_Video.mov'
import { motion } from 'framer-motion';

const AdvanceDermatology = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={DermatologyVideo} type="video/mp4" />
      </video>

      {/* Info Box */}
      <div className="absolute top-0 left-0 w-full h-full bg-black  bg-opacity-50 flex items-center justify-start">
        <motion.div 
          className="bg-black  p-8 rounded-2xl shadow-2xl max-w-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
            <div className=' flex  justify-center font-bold items-center flex-col ml-8 left-9'>

           
          <h2 className="text-3xl font-bold text-gray-800 mb-4  md:text-4xl">MICRONEEDLING FOR ACNE SCARS</h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
          Microneedling is big news among celebrities in Bollywood, where perfect skin is a must-have. To treat acne scars, the designated treatment area is penetrated with a microneedling device to trigger pinpoint bleeding and stimulate new collagen production.
          Microneedling with platelet-rich plasma (PRP) and helps to speed up the healing process and is an effective complement to laser treatments and topical therapies. Both stem cells and PRP can build and repair damaged areas, allowing for a natural improvement over time.
          </p>
          {/* <h2 className="text-3xl font-bold text-gray-800 mb-4  md:text-4xl">InMode Fractional RF</h2> */}
          <p className="text-gray-600 mb-6 text-sm md:text-base">This highly effective treatment can be done frequently, with minimal pain and downtime, and is a core part of the monthly skin protocols that Dr. Gujjar designs for his patients.

          </p>
          </div>
          <motion.button 
            className="bg-blue-500 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
    </div>
  )
}

export default AdvanceDermatology
