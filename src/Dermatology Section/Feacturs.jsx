import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "Effective Solution", icon: "💊" },
  { title: "Personalize Care", icon: "🪞" },
  { title: "Modern Technology", icon: "🔬" },
  { title: "Expert Professional", icon: "👩‍⚕" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Feacturs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="text-center p-6 bg-white shadow-lg rounded-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="text-4xl">{item.icon}</div>
            <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
            <p className="text-gray-600 mt-1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feacturs;