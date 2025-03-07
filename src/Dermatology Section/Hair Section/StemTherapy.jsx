const bacterialData = {
    title: "Stem Cell Therapy",
    description:
        `
        Any drug or product injected into a particular layer of the skin is called as mesotherpay.It can have many indications and could be in reference to the skin of face,body or scalp for hair.
        `,
    additionalinfo:
    "Mesotherapy can achieve multiple goals like skin tightening, hydration, glow, reduction of pigmentation, hair growth and reduction of hairfall.",
    image: mesotherapyImg, 
    faqs: "Frequently asked questions",
    infections: [
      {
        title: "How does the treatment last?",
        content: "The treatment is based upon individual patients, but you will need the therapy for about 4 months, once a week. Of course, once your body starts responding to the treatment, the duration and frequency of the treatment will reduce. But do complete the course for maximum results.",
      },
      {
        title: "Is mesotherpay better than hair grafting or other techiques?",
        content: "Mesotherapy wins over several other existing treatments because: It is completely safe There are minimal side-effects, like allergies or drug interaction You will not require anaesthesia (see, we told you it’s painless) Recovery is quick And yes, once again, it is virtually painless",
      },
      {
        title: "And what to you get with mesothrepy treatment",
        content: "Among the known benefits of mesotherapy, patients have noticed: Improved hair volume Reduced hair shedding and loss Stronger and lustrous hair Taking care of mesotherapy hair is easy. It is, after all, natural hair and you need to maintain and clean it just as you would do otherwise. We recommend using an enriching shampoo like Pantene Pro-V Daily Moisture Repair to keep the new hair nourished. And yes, follow a nutritious diet and maintain a healthy exercise regimen to keep toxins out of your body.",
      },
      
    ],
  };
  
  import Test3 from "../Test3";
  // Passing the data to the Section component
  import mesotherapyImg from "../Dermatology_img/mesotherapy.jpg"
  
  const StemTherapy = () => {
    return <Test3 {...bacterialData} />;
  };
  
  export default StemTherapy;
  