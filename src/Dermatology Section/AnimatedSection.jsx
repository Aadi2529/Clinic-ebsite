import { motion } from "framer-motion";
import Img1 from "./Dermatology_img/Sergury1.png";
import Img2 from "./Dermatology_img/Sergury2.png";
import Img3 from "./Dermatology_img/Sergury3.png";



const AnimatedSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-10 py-20">
      {/* Left Side Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:w-1/2"
      >
        <h2 className="text-3xl font-bold">
          We Provide The Best Plastic Surgery Since 2006
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>

        {/* Features List */}
        <div className="mt-6 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <div className="p-4 bg-gray-100 rounded-lg">
              <span>🔬</span>
            </div>
            <div>
              <h4 className="font-semibold">Modern Technology</h4>
              <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4"
          >
            <div className="p-4 bg-orange-300 rounded-lg">
              <span>💰</span>
            </div>
            <div>
              <h4 className="font-semibold">Affordable Pricing</h4>
              <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side Images */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:w-1/2 grid grid-cols-2 gap-2 mt-10 lg:mt-0"
      >
        <motion.img
          src={Img1}
          alt="Surgery"
          className="rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.img
          src={Img2}
          alt="Doctor"
          className="rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        />
        <motion.img
          src={Img3}
          alt="Patient"
          className="rounded-lg col-span-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </section>
  );
};

export default AnimatedSection;