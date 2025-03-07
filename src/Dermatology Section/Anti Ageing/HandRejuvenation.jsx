
const bacterialData = {
  title: "Hand Rejuvenation",
  description: [
    "Hands are one of the first places where the telltale signs of aging become apparent. Even if you have taken steps to keep your face and neck looking youthful, sun-damaged, veiny, wrinkled hands can make you look older than you are. There are a number of effective techniques to rejuvenate your hands, improving the quality and texture of your skin, while decreasing the wrinkling and prominent veins."
  ],
    
    

  image: handrejuvenationImg,
  

  sections:[{
    heading: "When to Consider Hand Rejuvenation",
    points: [
      
      "If your hands have prominent veins and tendons because of volume loss",

      "If your hands are wrinkled and thin",

      "If your hands would benefit from improved skin tone and color",

      "If your hands have age spots",
        
      ],
  },
  
  {
    heading: "Hand Rejuvenation - Pros",
    points: [
      
      "A wide variety of options are available for rejuvenating your hands",

    "After rejuvenation your hands will be smoother and fuller and your veins will be far less prominent.",

    "Your hands will have a more youthful appearance",

       
        
      ],
  },

  {
    heading: "Hand Rejuvenation - Cons",
    points: [
      
      "Multiple procedures might be required to obtain the best results",

      "Hands may be swollen, bruised and stiff after treatment, which will limit activity",

      "If you have a history of impaired healing, such as diabetes, ongoing sun exposure and smoking (or exposure to secondhand smoke) you will see a less dramatic initial result and a shorter lasting result"
       
        
      ],
  },


 
  ]

};

import Test3 from "../Test3";
import handrejuvenationImg from "../Dermatology_img/hand-rejuvenation.jpg"

const HandRejuvenation = () => {
  return <Test3 {...bacterialData} />;
};

export default HandRejuvenation;
