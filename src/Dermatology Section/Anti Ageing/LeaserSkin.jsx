
const bacterialData = {
  title: "Laser Skin Toning (Rejuvenation)",
  description: [
    

  
  ],
  image: acneImg,
  

  sections:[{
    heading: "What is Laser Skin Toning (Rejuvenation) ?",
    points: [
      
      "Laser skin toning (rejuvenation) works to firm the skin plus it smooths out the skin’s texture and imperfections. It does this by stimulating the regrowth of new and healthy collagen, which means it replaces old and damaged skin with fresh skin. It can also treat a number of skin imperfections.",

       "Cell turnover is where our skin produces new skin cells, which travel from the lowest layer of the epidermis to the top layer before we shed them. This happens every 28 days when we’re in our 20s, every 38 days in our 30s, every 48 days in our 40s and so on. As you can see, as we get a little wiser, our skin’s metabolism slows down and we don’t produce new and youthful skin as fast. This is why skin imperfections, such as blemishes and scars, linger around longer and why we notice the new and unexciting changes in our skin like laxity, lack of glow, fine lines and other pigmented lesions.",

        "While that information may seem a little daunting, there is a way to fight the aging process. Laser skin rejuvenation speeds up our skin’s metabolism and makes it act like a 20-year-old’s. This laser facial uses Nd: YAG laser technology for non-ablative skin rejuvenation. It’s the perfect “lunchtime pick-me-up” (a session takes 45 to 60 minutes for the whole face) and is ideal for all skin types from super fair to chocolate.",
        
      ],
  },
  
  {
    heading: "What Is Laser Skin Tightening ?",
    points: [
      
      "Laser skin tightening is a minimally invasive, non-surgical process that uses an infrared light source (a laser) to tighten skin by heating the collagen under the skin’s surface, causing the skin to contract (tighten).",

       "Facial skin tightening is noticeable immediately after the treatment, and there is no downtime, making this an increasingly popular procedure. Additional skin tightening occurs over the next few months, but optimal results usually require two or three treatments about a month apart.",

        "Laser skin tightening is an FDA approved method for the reduction of fine lines, wrinkles, and skin laxity. While laser skin tightening results may not be as dramatic as those of a face lift, patients enjoy moderate results with no downtime. An added benefit of laser skin tightening is that it is safe and effective for restoring a more firm, youthful appearance to skin all over the body.",
        
      ],
  },



 
  ]

};

import Test3 from "../Test3";
import acneImg from "../Dermatology_img/acne.jpg"


const LeaserSkin = () => {
  return <Test3 {...bacterialData} />;
};

export default LeaserSkin;
