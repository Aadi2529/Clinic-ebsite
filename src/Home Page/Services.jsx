// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";


// import service1 from "../imeges/dematrology_img.jpg";
// import service2 from "../imeges/dibeties_img.jpg";
// import service3 from "../imeges/cardimg3.jpg";

// const services = [
//   {
//     id: 1,
//     image: service1,
//     title: "Healthy Skin, Healthy Life",
//     description:
//       "Dermatology focuses on diagnosing and treating skin, hair, and nail conditions. From acne to eczema, expert care helps maintain clear, healthy skin and prevent long-term damage.",
//       Link: "/dermatology",
//   },
//   {
//     id: 2,
//     image: service2,
//     title: "Managing Diabetes for a Healthier Life",
//     description:
//       "Diabetes is a chronic condition that affects how your body processes blood sugar. Proper management through diet, exercise, and medication can help prevent complications and improve overall well-being.",
//       Link: "/dibeties",
//   },
//   {
//     id: 3,
//     image: service3,
//     title: "Orthodontic treatment",
//     description:
//       "No-commitment packages will give you peace of mind and an extra set of hands without the commitment.",
//       Link:"/dentis" ,
//   },
// ];

// const Services = () => {
//   return (
//     <section className=" py-10 bg-gray-100 rounded-lg">
//       <div className="max-w-6xl relative mx-auto px-6">
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden"
//               initial={{ opacity: 0, y: 60 }} // Initial state
//               whileInView={{ opacity: 1, y: 0 }} // Animation when in view
//               transition={{ duration: 0.6, delay: index * 0.5 }} // Delay effect
//               viewport={{ once: true }} // Animate only once
//             >
//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
//               />
//               <div className="p-6 text-center">
//                 <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//                 <Link to={service.Link} className="text-teal-500 font-semibold mt-4 inline-block">
//                   READ MORE →
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;






import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import service1 from "../imeges/dematrology_img.jpg";
import service2 from "../imeges/dibeties_img.jpg";
import service3 from "../imeges/cardimg3.jpg";
import { Heading } from "lucide-react";

const services = [
  {
    id: 1,
    image: service1,
    Heading: "Dermatologist",
    title: "Healthy Skin, Healthy Life",
    description:
      "Dermatology focuses on diagnosing and treating skin, hair, and nail conditions. From acne to eczema, expert care helps maintain clear, healthy skin and prevent long-term damage.",
      Link: "/dermatology",
  },
  {
    id: 2,
    image: service2,
    Heading: "Diabetologist",
    title: "Managing Diabetes for a Healthier Life",
    description:
      "Diabetes is a chronic condition that affects how your body processes blood sugar. Proper management through diet, exercise, and medication can help prevent complications and improve overall well-being.",
      Link: "/dibeties",
  },
  {
    id: 3,
    image: service3,
    Heading: "Dentis",
    title: "Orthodontic treatment",
    description:
      "No-commitment packages will give you peace of mind and an extra set of hands without the commitment.",
      Link:"/dentis" ,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-0 rounded-lg">
      <div className="max-w-6xl relative mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg  mb-2">{service.Heading}</h3>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <Link to={service.Link} className="text-teal-500 font-semibold mt-4 inline-block">
                  READ MORE →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;





