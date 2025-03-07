import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import logoimg from "./Dermatology_img/logoimg.png"
import { Link } from 'react-router-dom';

export default function DermatologyFooter() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShowTopButton(window.scrollY > 300);
    });
  }, []);

  return (
    <footer className="bg-gray-100 text-gray-800 py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Appointment */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
        >
          {/* <Link to="/"> */}
          <img src={logoimg}
            height={"80px"} 
            width={"300px"}
             />
          {/* </Link> */}
          <p className="text-sm text-gray-500">SKIN, HAIR & LASER CLINIC CENTRE</p>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
            ⚡ <Link to="/appointment" >Book Appointment</Link>
          </button>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
          <p className="flex items-center gap-2"><i className="fa-solid fa-phone"></i>+91-9504-211-211, +91-9403-599-498 </p>
          <p className="flex items-center gap-2 mt-2"><FaMapMarkerAlt  />1st Floor, Vishwas Building, Plot No. 39, Chetak Ghoda Chowk, Jai Vishwa Bharti Colony, Sindhi Colony, Chhatrapati Sambhaji Nagar, Maharashtra 431001 </p>
          <p className="flex items-center gap-2 mt-2"><FaEnvelope /> kalyankarclinic@gmail.com</p>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
          <p className="text-sm text-gray-500 mb-3">Get the latest updates directly in your inbox.</p>
          <div className="flex">
            <input type="email" placeholder="Your e-mail..." className="px-4 py-2 border border-gray-300 rounded-l-lg w-full focus:outline-none" />
            <button className="px-4 py-2 bg-red-500 text-white rounded-r-lg hover:bg-red-600">SUBSCRIBE</button>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      {showTopButton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-28 bg-red-500 p-3 rounded-full text-white shadow-md hover:bg-red-600"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  );
}
