import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { Menu } from "lucide-react";
import Heroimg from "./Diabetesimg/Hero_img1.jpg";

export default function DaibetesHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center px-6 md:px-12 lg:px-24"
      
    >
        <img src={Heroimg} className="absolute inset-0   w-full h-[90vh] object-cover opacity-100" />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative flex flex-col items-center text-center text-white max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Keeping Your Health as the First Priority!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl mb-6"
        >
          Book an appointment with top doctors today.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 text-lg rounded-xl shadow-lg"
        >
          Book Appointment
        </motion.button>
      </div>
      {isMobile && (
        <div className="absolute top-6 right-6">
          {/* <Menu className="text-white w-8 h-8" /> */}
        </div>
      )}
    </div>
  );
}
