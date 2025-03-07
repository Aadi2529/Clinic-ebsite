
const bacterialData = {
    title: " Alopecia Areata",
   
    
    image: areataImg,
    faqs:"Frequently asked questions", // Image import remains the same
    infections: [
      { title: "What are the sings and symptoms of the differen pattrens of alopecia areata?", content: "The most common pattern is one or more well-defined spots of hair loss on the scalp. If alopecia occurs in an ophiasis pattern (hair loss involving the temporal and posterior scalp) or if large areas of the scalp are involved for long periods of time, the prognosis is worse. A more generalized form of hair loss is referred to as diffuse alopecia areata where there is widespread dramatic thinning of the scalp hair. Occasionally, all of the scalp hair is entirely lost, a condition referred to as alopecia totalis. Less frequently, the loss of all of the hairs on the entire body, called alopecia universalis, occurs" },
          { title: "Who is affected by alopecia areata?", content: "Alopecia areata tends to occur most often in adults 30 to 60 years of age. However, it can also affect older individuals and, rarely, young children. Alopecia areata is not contagious. It should be distinguished from hair shedding that may occur following the discontinuation of hormonal estrogen and progesterone therapies for birth control or the hair shedding associated with the end of pregnancy. There are a number of treatable conditions that could be confused with alopecia areata." },
          { title: "How do helath care professionals diagnose alopecia areata ", content: "The characteristic finding of alopecia areata is one or more well-circumscribed areas of otherwise normal, hairless skin in hair-bearing areas. Occasionally, it may be necessary to biopsy the scalp to confirm the diagnosis. Other findings that may be helpful are the appearance of short hairs that presumably represent fractured hairs, short thin hairs, and gray hair growing in a bald area. Other causes of hair loss are generally excluded from the consideration by history and clinical evaluation" },
         
    ],
  
    sections:[
      {
    descriptions: [
        
      "Alopecia areata, also known as spot baldness, is a condition in which hair is lost from some or all areas of the body. Often it results in a few bald spots on the scalp, each about the size of a coin. Psychological stress may result. People are generally otherwise healthy. In a few, all the hair on the scalp or all body hair is lost and loss can be permanent.",
      
     "Treatment may address any underlying conditions and includes topical scalp medication. Alopecia areata is believed to be an autoimmune disease. Risk factors include a family history of the condition.",
    

        
      ],
    }
  ]
  };
  
  import Test3 from "../Test3";
  import areataImg from "../Dermatology_img/areata.jpg"
  
  
  
  const AlopeciaAreata = () => {
    return <Test3 {...bacterialData} />;
  };
  
  export default AlopeciaAreata;