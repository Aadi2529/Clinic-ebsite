import React from 'react';
import { motion } from 'framer-motion';
import service1 from './Dermatology_img/service1.jpg'
import service2 from './Dermatology_img/service2.jpg'
import service3 from './Dermatology_img/service3.png'
import service4 from './Dermatology_img/service4.jpg'
import service5 from './Dermatology_img/service5.jpg'
import service6 from './Dermatology_img/service6.jpg'

const services = [
  { name: 'COSMETIC LASER', image: service1 },
  { name: 'SKIN LIGHTENING', image:service2  },
  { name: 'HAIR TRANSPLANT', image: service3 },
  { name: 'BOTOX & FILLERS', image: service4 },
  { name: 'ACNE & SCAR REMOVAL', image: service5 },
  { name: 'ANTI - AGEING', image:service6  }
];

const ServicesSection = ({ onAppointmentClick }) => {
  return (
    <div className=" h-full w-full flex justify-between top-80">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="relative cursor-pointer group overflow-hidden  shadow-lg"
          whileHover={{ scale: 1.05 }}
          onClick={onAppointmentClick}
        >
          <img
            src={service.image}
            alt={service.name}
            className=" w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute bottom-0 w-full bg-red-500 text-white text-center py-2">
            {service.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesSection;
