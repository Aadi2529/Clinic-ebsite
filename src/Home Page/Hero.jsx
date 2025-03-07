
// import React, { useState } from "react";
// import heroImg from "../imeges/hero_home_03.jpg"; 
// import AppointmentForm from "../Home Page/AppointmentForm";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import  heroImg1 from "../Sliding Images/slide-3.jpg"
// import  heroImg2 from "../Sliding Images/slide-4.jpg"
// import  heroImg3 from "../Sliding Images/slide-5.jpg"

// const Hero = () => {
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
//     <div className="relative  h-[100vh] w-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-white text-center px-4 md:h-[70vh]">
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

// export default Hero;


















import React, { useState } from "react";
import heroImg from "../imeges/hero_home_03.jpg"; 
import AppointmentForm from "../Home Page/AppointmentForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  heroImg1 from "../Sliding Images/DermatologyHero.jpg"
import  heroImg2 from "../Sliding Images/download.jpg"
import  heroImg3 from "../Sliding Images/DermatologyHero.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Hero = () => {
  const [service, setService] = useState("Genral Dentisitry");

  const images = [heroImg1, heroImg2, heroImg3];
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        fade: true,
      };
      const slides = [
        {
          title: 'Dermatology Care You Can Trust',
          description: 'Expert skin care treatments for healthy and glowing skin.',
          image: heroImg1
        },
        {
          title: 'Complete Dental Solutions',
          description: 'Achieve a perfect smile with our advanced dental treatments.',
          image:heroImg2
        },
        {
          title: 'Diabetes Management',
          description: 'Effective solutions to manage and control diabetes.',
          image: heroImg3
        }
      ];
  
  return (
    <div className="relative  overflow-x-hidden  h-screen w-full bg-gradient-to-r from-teal-500 to-blue-500 flex flex-grow items-stretch justify-stretch text-white text-center  md:h-[70vh]">
      {/* <img src={heroImg} alt="Dental Care" className="absolute inset-0 w-full  h-[160vh] object-cover opacity-100" /> */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        className="h-full "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full  h-full object-cover">
            <img
              src={slide.image}
              alt={slide.title}
                   className="hidden md:block w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white p-6 md:p-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">{slide.description}</p>
              <AppointmentForm className="relative" service={service} setService={setService}  />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

   
    </div>
  );
};

export default Hero;





















