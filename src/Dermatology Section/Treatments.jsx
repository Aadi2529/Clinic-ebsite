import React from "react";
import { motion } from "framer-motion";
import treatment1 from "./Dermatology_img/Treatment1.avif";
import treatment2 from "./Dermatology_img/Treatment2.avif";
import treatment3 from "./Dermatology_img/Treatment3.jpg";
import treatment4 from "./Dermatology_img/Treatment4.jpg";


const treatments = [
  {
    title: "Chin Implant Treatment",
    description:
      "It is a surgical procedure to reshape or enhance the size of the chin, reshaping your bones or adding an implant.",
     image: treatment1,
  },
  {
    title: "Face Lift",
    description:
      "We reduce the appearance of facial wrinkles and signs of ageing, by improving the overall appearance of the face and jaw.",
    image: treatment2,
  },
  {
    title: "Hair Loss Treatment",
    description:
      "Our hair treatment varies and ranges from cosmetic wigs to medication and hair transplant procedures.",
    image: treatment3,
  },
  {
    title: "Scars Reduction",
    description:
      "Reduce those scars and marks which may hamper your appearance and get your confidence back.",
    image: treatment4,
  },
];

const Treatments = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Treatments
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {treatment.title}
              </h3>
              <p className="text-gray-600 mb-4">{treatment.description}</p>
              <motion.button
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enquire Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;