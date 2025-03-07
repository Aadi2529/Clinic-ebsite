





import { motion } from "framer-motion";
import { useState } from "react";
import fungleImg from "../Dermatology_img/fungleImg.jpg"

import DermatologyHero from "../DermatoloyHero";
import DermatologyNav from "../DermatologyNav";
import DermatologyFooter from "../DermatologyFooter";

const Viral = () => {
  const infections = [
    { title: "What are the role of PUVA in Vitiligio", content: "PUVA therapy enhances skin re-pigmentation. An oral psoralen compound is given to the patient. Two hours later , the de-pigmented patch on his body is exposed to ultraviolet-A (UVA) rays, for a fixed time duration. This should be supervised by a medical personnel. If UVA is not available then the patch is exposed to sun rays. The latter is known as PUVA SOL therapy.Treatment with UVB rays is another option. The most recent modality is treatment with Excimer laser." },
    { title: "What is the patient fit for surgury", content: "When the de-pigmented patch does not increase in size for a period of two years, it is said to be stable. This is the right time to perform vitiligo surgery. If the patch is growing or is in an active phase, it needs treatment with medicines and / or PUVA till it stops growing." },
    { title: "What are the surgical procedure availiable in vitiligio?", content: "All types of surgical treatment aim to transfer melanocytes (pigment-producing cells) from normal skin (the donor site) to the skin affected by vitiligo." },
    // { title: "Tinea Versicolor", content: "Tinea Versicolor or pityriasis versicolor is a common condition that causes small patches of skin to become scaly and discoloured. They can be darker or lighter than the surrounding skin, or even red or pink. The condition is caused by a yeast called Malassezia, which lives on the skin of most people without causing any problems." },
    // { title: "Cutaneous Candidiasis", content: "Cutaneous Candidiasis can involve almost any skin area of the body, but mostly occurs in warm, moist, creased areas such as the armpits and groin. Candida is the most common cause of nappy rash in infants. Candida is also common in people who are obese or have diabetes. Antibiotics, steroid therapy and chemotherapy increase the risk of cutaneous Candidiasis." },
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
        Vitiligo
        

        </h1>
        <p className="text-gray-600 text-xl mt-7">
        Vitiligo is a chronic skin disorder that causes areas of skin to lose colour. It presents as depigmented (white) patches. Exposed body sites, such as the face, elbows, knees, hands and feet, are often involved, resulting in significant cosmetic concerns. Vitiligo is usually treated with creams and tablets, or by phototherapy. Vitiligo may fail to improve or clear with these treatments. Surgical treatment options can be considered in patients with stable vitiligo.
        </p>
        <p className="text-gray-600 text-xl mt-2">
        Vitiligo is also known as ‘leucoderma’. In India , it is called ‘safed kod’ or ‘safed dag’ and is considered as a social stigma. Vitiligo is appearance of single or multiple depigmented patches on any part of the body.These patches gradually increase in size & cause lot of psychological stress in the patient. It is an auto-immune condition and may have a genetic predisposition. Treatment of vitiligo usually takes a long time. Medical treatment helps arrest the spread of depigmentation and in some cases, may bring back the pigmentation.
        </p>
        <p className="text-gray-600 text-xl mt-2">In majority of the cases, medical therapy only achieves stabilization of the vitiligo patch but fails to cause repigmentation. However, repigmentation in cases of ‘stable vitiligo’ can be achieved by various dermatosurgical techniques.</p>

        {/* <p className="text-gray-700 font-semibold text-2xl mt-5">The best way to avoid viral skin infections is to avoid skin-to-skin contact (especially areas that have a rash or sores) with an infected individual. Some viral skin infections, such as varicella-zoster virus, are also transmitted by an airborne route. Communal showers, swimming pools, and contaminated towels can also potentially harbor certain viruses.</p> */}
        {/* <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all"
        >
          LEARN MORE
        </motion.button>
         */}
        
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

export default Viral;
