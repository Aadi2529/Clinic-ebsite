import { motion } from "framer-motion";
import Dermatologyimg from "./Dermatology_img/dermatology_Home.JPG"


const ApproachSection = () => {
  return (
    // bg-[#ebf4bd]
    <section className="flex relative flex-col lg:flex-row items-center justify-between gap-8 px-6 lg:px-20 py-12">
      {/* Left Side - Image with Animation */}
      <motion.div
        initial={{ opacity: 0, x: -100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative w-full lg:w-1/2"
      >
        <img
          src={Dermatologyimg}
          alt="Dermatologyimg"
          className="rounded-lg shadow-lg w-full h-full mt-4 object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
        >
          <h3 className="text-lg font-semibold">
            Get a Free Estimate or Schedule an Appointment With Us
          </h3>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-2 text-blue-600 font-semibold hover:underline"
          >
            Get Started →
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full lg:w-1/2 space-y-6"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-yellow-500 font-semibold"
        >
          Our Approach
        </motion.h2>

        <h1 className="text-3xl font-bold text-gray-900">
          The Procedure for a Plastic Surgery at Quinnie
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Steps with Custom Animations */}
        <div className="space-y-4">
          {[
            { title: "Make Appointment", icon: "📅" },
            { title: "Meet With Our Doctor", icon: "👨‍⚕" },
            { title: "General Body Check", icon: "🩺" },
            { title: "Get a New version of About You", icon: "✨" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}
              className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer transition-transform"
            >
              <motion.span
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 10 }}
                className="text-2xl"
              >
                {item.icon}
              </motion.span>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ApproachSection;