import { motion } from 'framer-motion';
import Serviceimg from './Dental_img/Serviceimg.jpg';

const services = [
  { title: 'General Dentistry', description: 'Integer vel nisl varius, finibus orci et, congue sapien fusce.', icon: '🦷' },
  { title: 'Pediatric Dentistry', description: 'Nam at varius ut dignissim lorem, in condimentum leo.', icon: '👶' },
  { title: 'Braces & Orthodontics', description: 'Donec risus elit, facilisis at vel vulputate at amet.', icon: '🦷' },
  { title: 'Cosmetic Dentistry', description: 'Suspendisse magna nisi, varius et risus in, porta aliquet nunc.', icon: '💎' },
  { title: 'Oral Surgery', description: 'Sed vel odio sapien. Vivamus feugiat faucibus enim dapibus.', icon: '🛠️' },
  { title: 'Dental Implants', description: 'Fusce ac nulla diam. Donec accumsan est nec laoreet.', icon: '🦷' },
  { title: 'Dentures', description: 'Etiam augue leo, ultrices. Suspendisse magna nisi.', icon: '🦷' },
  { title: 'Periodontics', description: 'Etiam metus, tempor quis, sollicitudin est magna cursus vehicula.', icon: '🌱' },
  { title: 'Root Canals', description: 'Vivamus feugiat faucibus enim dapibus.', icon: '🌀' }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const ServiceSection = () => {
  return (
    <div className="bg-blue-50 py-12 px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInLeft}
        className="rounded-2xl overflow-hidden shadow-lg mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
      >
        <img src={Serviceimg} alt="Dental Care" className="w-full h-auto object-cover" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-white p-6 rounded-2xl shadow-md text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceSection;
