import { motion } from "framer-motion";

const treatments = [
  {
    title: "Gynaecology",
    description:
      "With our team of expert gynaecologists, we ensure that you get unparalleled treatment for your care.",
    image: "/gynaecology.jpg",
  },
  {
    title: "Diabetologist",
    description:
      "Diabetes clinic gives you the chance to meet medical experts who can check that you're well and give you highly specialized advice on how to look after your diabetes.",
    image: "/diabetologist.jpg",
  },
  {
    title: "Gastroenterologists",
    description:
      "Our leading doctors are specialized in the surgery of the liver, pancreas and biliary system. Contact us without further delay.",
    image: "/gastro.jpg",
  },
  {
    title: "General Surgeons",
    description:
      "Conditions related to the colon sometimes require surgery. Trust our doctors to take care of your health.",
    image: "/surgery.jpg",
  },
];

export default function TreatmentSection() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold mb-10"
      >
        Treatments
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-12">
        {treatments.map((treatment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <motion.img
              src={treatment.image}
              alt={treatment.title}
              className="w-40 h-40 object-cover rounded-full shadow-md"
              whileHover={{ scale: 1.1 }}
            />
            <h3 className="text-xl font-semibold mt-4">{treatment.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{treatment.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
