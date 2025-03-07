import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


import service1 from "./Dental_img/Dental_Section.avif";
// import service2 from "./Dental_img/Dental_Section2.avif";
import service3 from "./Dental_img/Dental_Section3.avif";


const services = [
  {
    id: 1,
    image: service1,
    title: "Advanced Dental Care",
    description:
      "We provide world-class dental treatments, from routine checkups to advanced cosmetic dentistry.",
      
  },
  {
    id: 2,
    image: service3,
    title: "Modern Clinics",
    description:
      "Our clinics are equipped with the latest technology and highly trained professionals for your comfort and care.",
      
  },
  {
    id: 3,
    image: service3,
    title: "Emergency Services",
    description:
      "We are available 24/7 for dental emergencies, ensuring immediate pain relief and expert treatment.",
      
  },
];

const Dental_Section = () => {
  return (
    <section className=" py-10 overflow-hidden bg-gray-100 rounded-lg overflow-x-hidden">
      <div className="max-w-6xl relative mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 60 }} // Initial state
              whileInView={{ opacity: 1, y: 0 }} // Animation when in view
              transition={{ duration: 0.6, delay: index * 0.5 }} // Delay effect
              viewport={{ once: true, amount: 0.2 }} // Animate only once
             >
              <img
                src={service.image}
                alt={service.title}
                className=" object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <Link to={service.Link} className="text-teal-500 font-semibold mt-4 inline-block">
                  READ MORE →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dental_Section;
