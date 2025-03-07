import { motion } from 'framer-motion';

const cardData = [
  { title: 'Teeth Whitening', description: 'Brighten your smile with our advanced whitening treatments.', icon: '💎' },
  { title: 'Dental Checkup', description: 'Comprehensive dental exams to maintain your oral health.', icon: '🦷' },
  { title: 'Emergency Care', description: 'Quick and reliable dental solutions in emergencies.', icon: '⚡' },
  { title: 'Cosmetic Dentistry', description: 'Enhance your smile with our cosmetic dental services.', icon: '💄' }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } }
};

const CardsSection = () => {
  return (
    <div className="bg-blue-50 py-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
        >
          <div className="text-5xl mb-4">{card.icon}</div>
          <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default CardsSection;
