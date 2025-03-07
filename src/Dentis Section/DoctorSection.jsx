import { motion } from "framer-motion";
import DoctorImg from './Dental_img/Doctor.JPG'

const DoctorSection = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      {/* Doctor Image Section */}
      <motion.div
        className="overflow-hidden rounded-2xl shadow-lg"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={DoctorImg}
          alt="Doctor"
          className="w-full h-[400px] object-cover"
        />
      </motion.div>

      {/* Text Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-[#056D6D] mb-6">
          Meet Dr. Pravin Kalyankar, <br /> general dentist in Chhatrapati Sambhaji Nagar
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Dr. Pravin Kalyankar, your trusted  dentist, uses his skill to help
          patients achieve their healthiest and brightest smiles possible.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur magnam debitis laboriosam voluptates similique quibusdam suscipit repellat nihil officia incidunt, magni voluptatibus, illo corporis. Placeat voluptatibus dolorum libero eos mollitia.
        </p>

        <h3 className="italic text-[#056D6D] text-2xl mb-6">
          We can't wait to welcome you to our dental family!
        </h3>

        <motion.button
          className="bg-[#E2A63D] text-white px-6 py-3 rounded-full hover:bg-[#c28c2e] transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Learn More About Us
        </motion.button>
      </motion.div>
    </div>
  );
};

export default DoctorSection;
