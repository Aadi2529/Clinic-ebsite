





import { motion } from "framer-motion";
import { useState } from "react";
import fungleImg from "../Dermatology_img/fungleImg.jpg"

import DermatologyHero from "../DermatoloyHero";
import DermatologyNav from "../DermatologyNav";
import DermatologyFooter from "../DermatologyFooter";

const Melasma = () => {
  const infections = [
    { title: "What are the causes and risk factor of melasma?", content: "It isn’t totally clear what causes melasma. Darker-skinned individuals are more at risk than those with fair skin. Estrogen and progesterone sensitivity are also associated with the condition. This means birth control pills, pregnancy, and hormone therapy can all trigger melasma. Stress and thyroid disease are also thought to be causes of melasma. Additionally, sun exposure can cause melasma because ultraviolet rays affect the cells that control pigment (melanocytes)." },
    { title: "How is melsma diagnosed", content: "A visual exam of the affected area is often enough to diagnose melasma. To rule out specific causes, your healthcare professional might also perform some tests. One testing technique is a Wood’s lamp examination. This is a special kind of light that’s held up to your skin. It allows your healthcare professional to check for bacterial and fungal infections and determine how many layers of skin the melasma affects. To check for any serious skin conditions, they might also perform a biopsy. This involves removing a small piece of the affected skin for testing." },
    { title: "Is melasma is treatable", content: "For some women, melasma disappears on its own. This typically occurs when it’s caused by pregnancy or birth control pills. There are creams your healthcare professional can prescribe that can lighten the skin. They might also prescribe topical depigmenting cream is given to help lighten the affected areas. If these don’t work, chemical peels, dermabrasion, and microdermabrasion are possible options. These treatments strip away the top layers of skin and may help lighten dark patches." },
    { title: "Can melsma trun into cancer", content: "Melasma usually becomes more noticeable in the summer and improves during the winter months.It is not an infection; therefore, it is not contagious, and it is not due to an allergy. It is not cancerous and will not develop into skin cancer." },

  ];

  return (
    <div>
      <DermatologyNav />
        <DermatologyHero />
    
    <section className=" relative
     flex h-full  flex-col md:flex-row items-center justify-between px-6 md:px-16 mb-10 md:py-24 bg-white">
      {/* Text Content */}
      <motion.div  
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-left"
      >
        {/* <p className="text-sm text-amber-600 font-semibold">ABOUT US</p> */}
        <h1 className="text-4xl text-center md:text-6xl font-bold leading-tight mt-2">
        Melasma
        </h1>
        
        

        <p className="text-gray-600 text-xl mt-7">
        Melasma can be due to hormonal changes during pregnancy or from sun exposure. Women are much more likely than men to develop this condition. The brown or grey-brown patches of melasma appear most often on the cheeks, forehead, nose and chin.
        </p>
        <p className="text-gray-600 text-xl mt-7">In women, melasma often fades on its own after pregnancy or after an affected woman stops taking contraceptive pills. Skin lightening creams can help lasting melasma.

</p>
        
        
      </motion.div>
      
      {/* Image Section */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="md:w-1/2 flex justify-end mt-10 md:mt-0 relative"
      >
        <div className="relative w-full max-w-md">
          <img 
            src={fungleImg} 
            alt="Beauty Clinic" 
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber-100 -z-10"></div>
        </div>

      </motion.div>
    </section>
        {/* Accordion Section */}
        <div className="mb-28 top-64 flex flex-col w-full   items-center" >
        <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-left"
      >
          <h2 className="text-xl md:text-2xl  font-semibold text-gray-800 mb-6">Frequently asked questions</h2>
          <div className="max-w-2xl text-xl w-full">
            {infections.map((infection, index) => (
              <Accordion key={index} title={infection.title} content={infection.content} />
            ))}
          </div>
        </motion.div>
        </div>
        <DermatologyFooter />
    </div>
  );
};

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-300">
      <button 
        className="w-full flex justify-between items-center p-4  text- font-semibold" 
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
          className="p-4  text-gray-900"
        >
          {content}
        </motion.div>
      )}
    </div>
  );
};

export default Melasma;
