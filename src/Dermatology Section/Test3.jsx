





import { motion } from "framer-motion";
import { useState } from "react";
import DermatologyHero from "./DermatologyNav";
import DermatologyNav from "./DermatoloyHero";
import DermatologyFooter from "./DermatologyFooter";
import { ChevronRight } from "lucide-react";
import TopSection from "../Home Page/TopSection";
// import DermatologyFooter from "./DermatologyFooter";

const Test3 = ({ title, description,  image, infections=[],faqs=[],sections=[] }) => {
  return (
    <div>
      <TopSection />
      <DermatologyNav />
      <DermatologyHero />

      <section className="relative h-auto flex flex-col md:flex-row  justify-between px-6 md:px-16 py-12 md:py-24 bg-[#FBFBFB]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left"
        >
          <h1 className="text-3xl md:text-6xl font-bold top-72 leading-tight mt-2">{title}</h1>

          
          <p className="text-gray-900 text-xl mt-4">{description}</p>
       

          <div>

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h1 className=" text-slate-900 leading-7 mt-8 text-2xl">{section.mainheading}</h1>
          {section.descriptions && section.descriptions.length > 0 && (
            <div className="descriptions">
              {section.descriptions.map((desc, descIndex) => (
                <p key={descIndex} className="text-gray-800 text-xl mt-4">{desc}</p>
              ))}
            </div>
          )}
          {section.points && section.points.length > 0 && (
            <div className="points">
              <h1 className="text-gray-950 leading-7 mt-8 text-2xl">{section.heading}</h1>
              <ul className="mb-24 space-y-3 text-lg text-start">
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex} className=" flex text-xl  mt-4">
                    <ChevronRight className="text-red-400   max-h-full max-w-full text-left" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>




        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 flex justify-end mt-10 md:mt-0 relative"
        >
          <div className="relative max-w-md">
            <img src={image} alt={title} className="w-[100vw] h-[60vh] rounded-lg shadow-lg" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber-100 -z-10"></div>
          </div>
        </motion.div>
      </section>

      <div className="mb-28 flex flex-col w-full items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-left"
        >
          <h2 className="text-3xl md:text-2xl font-semibold text-gray-800 mb-6">{faqs}</h2>
          <div className="max-w-2xl bg-[#727D73] gap-2 rounded-lg text-2xl w-full">
            {infections.map((infection, index) => (
              <Accordion key={index} title={infection.title} content={infection.content}  />
            ))}
          </div>
     

        </motion.div>
      </div>
      <DermatologyFooter />
    </div>
  );
};

const Accordion = ({ title, content, }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-300">
      <button
        className="w-full flex justify-between items-center p-4 font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="p-4 text-gray-900"
        >
          {content}
        </motion.div>
      )}
     
    </div>
  );
};

export default Test3;