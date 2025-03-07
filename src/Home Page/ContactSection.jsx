// import React from 'react';
// import bgImg from "../imeges/background_home_03-06.jpg";

// import ContactInfo from './Contactinfo';
// import ContactForm from './ContactForm';

// const ContactSection = () => {
//   return (
//     <div className='w-10/12 h-[100vh] flex justify-center  items-center m-auto p-5'>

//       <img src={bgImg} className="w-full absolute top-auto  object-cover opacity-30 " />
//       <ContactInfo />
//       <ContactForm />
//     </div>
//   )
// }

// export default ContactSection
import React from 'react';
import bgImg from "../imeges/background_home_03-06.jpg";
import ContactInfo from './Contactinfo';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <div className='relative w-11/12 min-h-screen flex flex-col md:flex-row justify-center items-center m-auto p-5 space-y-6 md:space-y-0 md:space-x-6'>

      <img 
        src={bgImg} 
        className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10" 
        alt="Background" 
      />
      
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default ContactSection;
