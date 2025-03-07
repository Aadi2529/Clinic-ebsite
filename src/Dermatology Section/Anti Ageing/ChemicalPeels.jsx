
const bacterialData = {
  title: "Chemical Peels",
  description: [
    "A peel is said to be a safe chemical solution. Contrary to the popular belief that peels are a cosmetic procedure, chemical peeling is a well-established dermatological procedure having numerous indications."
  ],
    
    

  image:chemicalpeelImg ,
  

  sections:[{
    heading: "How is it done ?",
    points: [
      
      "Following cleansing or washing of the skin, a gel or solution is applied and allowed to rest on the skin for some time. The contact time may be different depending on the indication and the type of peel following which the peel is neutralized.",
        
      ],
  },
  
  {
    heading: "What are the indications ?",
    points: [
      
      "Pigmentation disorders such as melasma.",

      "Active acne and post acne marks/scars.",

      "Anti-aging and removal of blemishes.",

     " Skin rejuvenation for events such as marriage.",

      "Reduction of tan."

       
        
      ],
  },

  {
    heading: "What are the precautions to be taken ?",
    points: [
      
      "Direct sunlight is to be completely avoided post peels for several days.",

      "Application of sunscreen is of utmost importance.",

      "Moisturizer may be required depending on the amount of peeling achieved"
       
        
      ],
  },


 
  ]

};

import Test3 from "../Test3";
import chemicalpeelImg from "../Dermatology_img/chemicalpeel.jpg"

const ChemicalPeels = () => {
  return <Test3 {...bacterialData} />;
};

export default ChemicalPeels;
