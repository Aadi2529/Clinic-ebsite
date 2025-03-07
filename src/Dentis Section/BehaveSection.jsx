import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import behave1 from "./Dental_img/behave1.avif"
import behave2 from "./Dental_img/behave2.JPG"
import behave3 from "./Dental_img/behave3.JPG"

const BehaveSection = () => {
  return (
    <div className="bg-[#fdf6f2] relative py-16 px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      {/* Image Section */}
      <motion.div
        className="felx flex-wrap justify-center items-center grid grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       {[behave1, behave2, behave3].map((img, index) => (
          <motion.div
            key={index}
            className={`w-[350px] h-[400px] overflow-hidden hexagon relative`}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={`${img}`}
              alt={`clinic ${index}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
        
    

      {/* Text Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold mb-4">Visit Our Beehive</h2>
        <p className="text-lg text-gray-600 mb-6">
          Conveniently book online or give us a call at{" "}
          <span className="font-bold">91-9504-211-211</span>. Same-day
          appointments and free parking available.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-primary text-lg" />
            <p>
            1st Floor, Vishwas Building, Plot No. 39, Chetak Ghoda Chowk, Jai Vishwa Bharti Colony, Sindhi Colony, Chhatrapati Sambhaji Nagar, Maharashtra 431001{" "}
              <span className="font-bold cursor-pointer hover:underline">
                Get Directions
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaClock className="text-primary text-lg" />
            <p>
              Monday - Thursday - Saturday: 9-5 <br />
              Tuesday - Wednesday - Friday: 9-7
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-primary text-lg" />
            <p>91-9504-211-211</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BehaveSection;
