import React from 'react';
import { motion } from 'framer-motion';
import video from './Dental_videos/video.mov'

const Dental_AnimatedSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Info Box */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4  md:text-4xl">Advanced Dental Care</h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Our dental services ensure top-notch oral health with state-of-the-art equipment and
            experienced professionals. Experience painless, efficient treatments designed to bring out
            your best smile.
          </p>
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
  );
};

export default Dental_AnimatedSection;
