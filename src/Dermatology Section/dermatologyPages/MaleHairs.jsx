
const bacterialData = {
  title: " Male Androgenetic Alopecia",
 
  
  image: maleImg,
  faqs:"Frequently asked questions", // Image import remains the same
  infections: [
    { title: "What cause pattern balding?", content: "Male pattern hair loss is an inherited condition, caused by a genetically determined sensitivity to the effects of dihydrotestosterone, or DHT in some areas of the scalp. DHT is believed to shorten the growth, or anagen, phase of the hair cycle, from a usual duration of 3–6 years to just weeks or months. This occurs together with miniaturisation of the follicles, and progressively produces fewer and finer hairs. The production of DHT is regulated by an enzyme called 5-alpha reductase." },
        { title: "What is normal hair growth cycle?", content: "All hair follicles are replaced at different rates by the normal process of hair cycling. Hair growth alternates between phases of activity and rest. The growth period, called the anagen phase, lasts for two to six years. During this time, the follicle is long and deep, and produces thick, well-pigmented hair. About 90% of all scalp hairs are in the anagen phase at a given time." },
        { title: "What is DHT found in the body ", content: "VDHT is found in several tissues in the body including the prostate gland and skin." },
        { title: "What role does heredity/genetics play in the male pattern hair loss?", content: "Male pattern hair loss occurs in men who are genetically predisposed to be more sensitive to the effects of DHT. Researchers now believe that the condition can be inherited from either side of the family." },
        { title: "How common is male pattern hair loss?", content: "Male pattern hair loss affects nearly all men at some point in their lives. It affects different populations at different rates, probably because of genetics." },
  ],

  sections:[
    {
  descriptions: [
      
    "Male pattern hair loss is the most common cause of balding. The pathogenesis involves androgen, and in particular dihydrotestosterone, binding to androgen receptors in the dermal papilla of sensitive hair follicles. Hair follicle sensitivity is genetically determined and shows regional specificity. Androgen stimulation of scalp dermal papilla cells induces transforming growth factor beta (TGF-B) and results in cyclical miniaturization of the entire hair follicle. The resulting hair produced from that follicle is shorter and finer and provides less complete scalp coverage.",
    
   "In contrast androgen stimulation of beard dermal papilla cells produces insulin growth factor -2 (IGF-2) and results in cyclical enlargement of the entire hair follicle. The resulting hair produced from that follicle is longer and thicker and provides more complete facial skin coverage. Some degree of androgenetic alopecia is universal among ageing men, especially bitemporally, however less than half become bald in the Hippocratic sense. Although scalp hair coverage has little functional importance, it has cosmetic significance.",
  
      "Baldness changes the facial appearance of affected men. When that change is perceived as adverse it has the potential to produce emotional morbidity."
      
    ],
  }
]
};

import Test3 from "../Test3";
import maleImg from "../Dermatology_img/male.jpg"



const MaleHairs = () => {
  return <Test3 {...bacterialData} />;
};

export default MaleHairs;