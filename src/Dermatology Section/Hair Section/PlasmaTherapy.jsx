const bacterialData = {
    title: "Platelet Rich Plasma Therapy (PRP)",
    description:
        `
         PRP is an abbreviation for Platelet Rich Plasma. Platelets, contain growth factors which causes growth of the hair follicles by stimulating the stem cells and other cells in the micro environment of the hair follicle. These special Platelet cells promote healing, accelerates the rate and degree of tissue healing and regeneration, response to injury, and formation of new cellular growth. The primary purpose of using PRP in hair restoration is to stimulate inactive or newly implanted hair follicles into an active growth phase. Inside the Platelets are many intracellular structures such as glycogen, lysosomes and alpha granules. These granules within the PRP contain clotting and growth factors that are eventually released during the healing and repair process.It can be used for the treatment of hair loss and for the face as anti-aging treatment and facial rejuvenation.
        `,
    image: prpImg, 
    faqs: "Frequently asked questions",
    infections: [
      {
        title: "What is procedure?",
        content: "As with most procedures, there is a careful process involved in using PRP for hair regrowth, beginning with a standard blood draw from the patient's arm. The tube of blood is put into a machine called a centrifuge, which spins the blood tube to separate out the red blood cells from the plasma. The plasma, rich in platelets, is then injected directly into the scalp at the level of the hair follicles. The process is meticulous — with injections beginning across the scalp, approximately at every half inch over the area of thinning hair — but typically, the entire procedure takes less than a half hour.",
      },
      {
        title: "Risks involved.",
        content: "It might sound scary (blood draws and needles?!), but for the most part, there's no real risk associated with PRP. Most patients get injections without any numbing, as there is minimal discomfort. However, cool air or ice packs may be used to minimize pain. In the event there is any discomfort, Tylenol after the procedure is also recommended. Bruising can occur but usually resolves within a week or two. Minimal downtime, if any, is needed. This means going a day (or two) without your typical hair maintenance (coloring, processing, blow-drying, etc.).",
      },
      {
        title: "Who is works for",
        content: "Anyone experiencing hair loss is essentially a good candidate for PRP treatments, but those with early hair loss tend to respond best.PRP is best used for patients with androgenic alopecia, which is a genetically determined type of hair thinning that typically occurs along the top of the head.In women, this might look like a widening part with normal hair thickness at the back of the head.",
      },
      
    ],
  };
  
  import Test3 from "../Test3";
  // Passing the data to the Section component
  import prpImg from "../Dermatology_img/prp.jpg"
  
  const PlasmaTherapy = () => {
    return <Test3 {...bacterialData} />;
  };
  
  export default PlasmaTherapy;
  