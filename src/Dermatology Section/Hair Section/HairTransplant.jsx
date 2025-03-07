const bacterialData = {
    title: "Hair Transplant Data",
    description: `Hair transplantation is a minor out-patient surgery that requires 4–12 hours and is performed under local anesthesia. No admission is required. We perform the procedure by Follicular Unit Extraction(FUE) technique which involves direct removal of individual follicular units (each contains 1-4 hair) with the help of specialized equipment. As no cutting and suturing is required in this method, the cosmetic results are excellent in the donor area with no visible scarring. ]`,
    additionalInfo: `These small grafts are then meticulously planted into the bald or thinning area of the scalp (recipient area) maintaining same angle as the other hair present.`,
    image: transplantImg, 
    faqs: "Frequently asked questions",
    infections: [
      {
        title: "Cellulitis",
        content: "Cellulitis causes a painful, red infection that is usually warm to the touch. Cellulitis occurs most often on the legs, but it can appear anywhere on the body.",
      },
      {
        title: "Folliculitis",
        content: "Folliculitis is an infection of the hair follicles that causes red, swollen bumps that look like pimples. Improperly treated pools or hot tubs can harbor bacteria that cause folliculitis.",
      },
      {
        title: "Impetigo",
        content: "Impetigo causes oozing sores, usually in preschool-aged children. The bullous form of impetigo causes large blisters while the non-bullous form has a yellow, crusted appearance.",
      },
      {
        title: "Tinea Versicolor",
        content: "Tinea Versicolor or pityriasis versicolor is a common condition that causes small patches of skin to become scaly and discoloured. They can be darker or lighter than the surrounding skin, or even red or pink. The condition is caused by a yeast called Malassezia, which lives on the skin of most people without causing any problems.",
      },
      {
        title: "Boils",
        content: "Boils are deep skin infections that start in hair follicles. Boils are firm, red, tender bumps that progress until pus accumulates underneath the skin.",
      },
    ],
  };
  
  import Test3 from "../Test3";
  // Passing the data to the Section component
  import transplantImg from "../Dermatology_img/transplant.jpg"
  
  const HairTransplant = () => {
    return <Test3 {...bacterialData} />;
  };
  
  export default HairTransplant;
  