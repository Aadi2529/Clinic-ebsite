import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import team1 from '../imeges/Doctor1.jpg'
import team2 from '../imeges/Doctor2.jpg'
import team3 from '../imeges/team2.jpg'
import { FaHandHoldingMedical, FaTooth } from 'react-icons/fa';
import {MdBloodtype} from 'react-icons/md';


const providers = [
  {
    name: 'Dr Pravin Kalyankar',
    specialty: 'Diabetologist',
    description: 'Aenean aliquam tincidunt nibh, at sollicitudin orci. Integer sed lacus ex.',
    image: team1,
    icon: <MdBloodtype size={40}/>
  },
  {
    name: 'Dr Priyanka Kalyankar',
    specialty: 'Dermatologist',
    description: 'Proin non nibh id massa accumsan bibendum in id magna.',
    image: team2,
    icon: <FaHandHoldingMedical size={40}/>
  },
  {
    name: 'Dr Ashwini Kalyankar',
    specialty: 'Maxilo Facial Surgeon',
    description: 'Integer vel nisl varius, finibus orci et, congue sapien.',
    image: team3,
    icon: <FaTooth size={40} />
  }
];

const OurProviders = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('providers-section');
      const position = section.getBoundingClientRect();
      if (position.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="providers-section" className="py-12 h-[70%]  bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Our Providers</h2>
      <div className=" w-10/12 h-auto ml-44 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {providers.map((provider, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={provider.image}
              alt={provider.name}
              className="w-full h-64 object-cover rounded-lg mb-4 p"
            />
            <div className="flex m-auto  items-center gap-4 mb-4">
              <span className="text-3xl">{provider.icon}</span>
              <div>
                <h3 className="text-lg font-semibold">{provider.name}</h3>
                <p className="text-sm text-teal-500">{provider.specialty}</p>
              </div>
            </div>
            <p className="text-gray-600">{provider.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurProviders;
