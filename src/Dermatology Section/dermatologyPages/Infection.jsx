
const bacterialData = {
  title: "Fungal Infection",

  descriptions:[ 
    
  ],

  image: fungleImg, // Image import remains the same
  infections: [
    { title: "Athlete's Foot", content: "Athlete's Foot (Tinea Pedis) is a fungal infection of the feet with itching, scaling and redness. It can be caused by a number of different fungi, including Trichophyton, Epidermophyton and Microsporum." },
    { title: "Ringworm", content: "Ringworm (Tinea Corporis) can appear in the form of a red or silver rash anywhere on the body. It is usually ring-shaped and is most commonly caused by the fungus Trichophyton rubrum." },
    { title: "Onychomycosis", content: "Onychomycosis is a fungal infection of the toenails or fingernails that can involve any component of the nail, including the matrix, bed or plate. It can cause pain, discomfort and disfigurement. Onychomycosis is caused by various fungal organisms, the most common being dermatophyte. Yeast and moulds also cause nail infections." },
    { title: "Tinea Versicolor", content: "Tinea Versicolor or pityriasis versicolor is a common condition that causes small patches of skin to become scaly and discoloured. They can be darker or lighter than the surrounding skin, or even red or pink. The condition is caused by a yeast called Malassezia, which lives on the skin of most people without causing any problems." },
    { title: "Cutaneous Candidiasis", content: "Cutaneous Candidiasis can involve almost any skin area of the body, but mostly occurs in warm, moist, creased areas such as the armpits and groin. Candida is the most common cause of nappy rash in infants. Candida is also common in people who are obese or have diabetes. Antibiotics, steroid therapy and chemotherapy increase the risk of cutaneous Candidiasis." },
  ],
  sections:[
    {
    
    descriptions: [
      
      "A fungus is a germ that ranges from something tiny and barely visible all the way to something big like a mushroom. They are all around us and don't usually cause any problems.",
    "Sometimes they can cause itchy skin infections which are treated with creams or tablets."

        
        
      ],
  },
]
};

import Test3 from "../Test3";
import fungleImg from "../Dermatology_img/fungal.jpg"
// Passing the data to the Section component
import bactrialImg from "../Dermatology_img/bacterial.jpg"

const Infection = () => {
  return <Test3 {...bacterialData} />;
};

export default Infection;
