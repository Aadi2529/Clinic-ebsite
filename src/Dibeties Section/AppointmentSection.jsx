import { motion } from "framer-motion";
import { useState } from "react";

const AppointmentSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [appointmentMessage, setAppointmentMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setAppointmentMessage("Someone has booked an appointment!");
    setTimeout(() => {
      setSubmitted(false);
      setAppointmentMessage("");
    }, 3000); // Reset after 3 sec
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center bg-gray-100 p-6 md:p-12 rounded-2xl shadow-lg max-w-5xl mx-auto"
    >
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
        <img
          src="/appointment-image.jpg" // Change this to your actual image path
          alt="Appointment"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-10 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Book Your Appointment</h2>
        {submitted ? (
          <p className="text-green-600 font-semibold">Appointment booked successfully!</p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="flex gap-4">
              <input
                type="tel"
                placeholder="+1 (547) 546 768"
                className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="email@example.com"
                className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex gap-4">
              <input
                type="date"
                className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="time"
                className="w-1/2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Book an Appointment
            </button>
          </form>
        )}
        {appointmentMessage && (
          <p className="mt-4 text-blue-600 font-semibold">{appointmentMessage}</p>
        )}
      </div>
    </motion.section>
  );
};

export default AppointmentSection;
