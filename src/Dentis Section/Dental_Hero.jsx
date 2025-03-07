
// import React, { useState } from "react";
// import heroImg from "../imeges/hero_home_03.jpg"; 
// import AppointmentForm from "../Home Page/AppointmentForm";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import  heroImg1 from "../Sliding Images/slide-3.jpg"
// import  heroImg2 from "../Sliding Images/slide-4.jpg"
// import  heroImg3 from "../Sliding Images/slide-5.jpg"

// const Dental_Hero = () => {
//   const [service, setService] = useState("Genral Dentisitry");

//   const images = [heroImg1, heroImg2, heroImg3];
  
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 4000,
//         fade: true,
//       };
    
  
//   return (
//     <div className="relative  h-[120vh] w-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-white text-center px-4 md:h-[70vh] overflow-hidden">
//       <img src={heroImg} alt="Dental Care" className="absolute inset-0 w-full  h-[160vh] object-cover opacity-100" />
//       {/* <Slider {...settings} className="absolute inset-0 w-full h-full">
//                {images.map((img, index) => (
//                   <div key={index} className="w-full h-full">
//                     <img src={img} alt={`Slide ${index + 1}`} className="  w-[100vw] h-[80vh] object-cover" />
//                   </div>
//                 ))}
//                </Slider> */}

//       <div className="absolute inset-0 bg-opacity-20"></div>
//       <div className="relative top-5 gap-9 right-72  z-10 max-w-3xl md:right-10 lg:right-64">
//         <h1 className="text-4xl md:text-6xl lg:text-8xl text-start font-extrabold leading-tight drop-shadow-lg font-mullish">
//           Taking Care <br /> Of Your <span className="">Smile</span>
//         </h1>
//         <ul className="mt-6 space-y-2 text-base md:text-lg text-white font-bold">
//           <li className="flex items-center gap-2">
//             <span className="bg-green-400 h-5 w-5 rounded-full text-sm"><i className="fa-solid fa-check"></i></span> 
//             <span>Preventive Checkups</span>
//           </li>
//           <li className="flex items-center gap-2">
//             <span className="bg-green-400 h-5 w-5 rounded-full text-sm"><i className="fa-solid fa-check"></i></span> 
//             <span>Dentist Imaging and Testing</span>
//           </li>
//           <li className="flex items-center gap-2">
//             <span className="bg-green-400 h-5 w-5 rounded-full text-sm"><i className="fa-solid fa-check"></i></span> 
//             <span>Available 24/7</span>
//           </li>
//         </ul>
//         <AppointmentForm service={service} setService={setService} />
//       </div>
   
//     </div>
//   );
// };

// // export default Dental_Hero;
import React, { useState } from "react";
import heroImg from "../imeges/hero_home_03.jpg"; 
import AppointmentForm from "../Home Page/AppointmentForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImg1 from "../Sliding Images/slide-3.jpg";
import heroImg2 from "../Sliding Images/slide-4.jpg";
import heroImg3 from "../Sliding Images/slide-5.jpg";

const Dental_Hero = () => {
  const [service, setService] = useState("Genral Dentisitry");

  const images = [heroImg1, heroImg2, heroImg3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  return (
    <div className="relative h-[100vh] w-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-white text-center px-4 md:h-[70vh] sm:h-[60vh] lg:h-[90vh] overflow-hidden">
      <img
        src={heroImg}
        alt="Dental Care"
        className="absolute inset-0 w-full h-[160vh] sm:h-[100vh] lg:h-[90vh] object-cover opacity-100"
      />
      {/* <Slider {...settings} className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-[100vw] h-[80vh] sm:h-[60vh] lg:h-[90vh] object-cover"
            />
          </div>
        ))}
      </Slider> */}

      <div className="absolute inset-0 bg-opacity-20"></div>
      <div className="relative top-5 gap-9 right-72 z-10 max-w-3xl md:right-10 lg:right-64 sm:right-0">
        <h1 className="text-4xl md:text-6xl lg:text-8xl sm:text-5xl text-start font-extrabold leading-tight drop-shadow-lg font-mullish">
          Taking Care <br /> Of Your <span className="">Smile</span>
        </h1>
        <ul className="mt-6 space-y-2 text-base md:text-lg sm:text-sm text-white font-bold">
          <li className="flex items-center gap-2">
            <span className="bg-green-400 h-5 w-5 rounded-full text-sm">
              <i className="fa-solid fa-check"></i>
            </span>
            <span>Preventive Checkups</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="bg-green-400 h-5 w-5 rounded-full text-sm">
              <i className="fa-solid fa-check"></i>
            </span>
            <span>Dentist Imaging and Testing</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="bg-green-400 h-5 w-5 rounded-full text-sm">
              <i className="fa-solid fa-check"></i>
            </span>
            <span>Available 24/7</span>
          </li>
        </ul>
        <AppointmentForm service={service} setService={setService} />
      </div>
    </div>
  );
};

export default Dental_Hero;
