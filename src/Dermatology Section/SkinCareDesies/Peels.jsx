

        
const bacterialData = {
  title: "Peels",
  description: `Peeling is application of a safe solution/gel that gently polishes and resurface, removes the top damaged skin layer , stimulates new cell growth and collagen production to reveal glowing and younger looking skin. It is an office procedure in which peel will be applied for particular period of time. Office procedure typically means patient can resume their work immediately with no down time After properly studying the skin type and its sensitivity, we decide on the type of peeling agent and their concentration.`,
  
  
  image: peelImg,
  faqs:"Frequently asked questions", // Image import remains the same
  infections: [
    { title: "What is the most common skin desease?", content: "Acne, eczema, seborrheic dermatitis, skin cancer and psoriasis are the five most common skin disorders" },
    { title: "What is the diagonsis for a fungal infection of the skin?", content: "To establish or confirm the diagnosis of a fungal infection, skin, hair and nail tissue is collected for microscopy and culture (mycology). Exposing the site to long wavelength ultraviolet radiation (Wood lamp) can help identify some fungal infections of hair (tinea capitis) because the infected hair fluoresces green" },
    { title: "What are skin conditions?", content: "Anything that irritates, clogs, or inflames your skin can cause symptoms such as redness, swelling, burning, and itching. Allergies, irritants, your genetic makeup, and certain diseases and immune system problems can cause rashes, hives, and other skin conditions." },
    { title: "What is a skin allergies?", content: "Skin Allergy Overview. Irritated skin can be caused by a variety of factors. ... When an allergen is responsible for triggering an immune system response, then it is an allergic skin condition. Atopic Dermatitis (Eczema) Eczema is the most common skin condition, especially in children." },
  ],
  sections:[
    {
    heading: "Skin Peel Benefits :",
    points: [
      "Reduce age spots, freckles, and dark patches (melasma) due to pregnancy or taking birth control pills, pigmentation.",

       "Treat wrinkles caused by sun damage and aging",

        "Improve the appearance of mild scars",

        "Treatment of Acne",

        "Improve the look and feel of skin",

        "Under eye pigmentation",

        
      ],
  },
  
 
  ]

};

import Test3 from "../Test3";
import peelImg from "../Dermatology_img/peels.png"


const Peels = () => {
  return <Test3 {...bacterialData} />;
};

export default Peels;


                
        
        
        
