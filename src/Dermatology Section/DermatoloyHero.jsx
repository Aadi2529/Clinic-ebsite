import React, { useState } from "react";
// import hero from "./Dermatology_img/Dermatology_hero2.avif"; 
import hero from "./Dermatology_img/DermatologyHero.jpg"; 
import AppointmentForm from "../Home Page/AppointmentForm";
import { Link } from "react-router-dom";



const DermatologyHero = () => {


  const [service, setService] =useState("Dermatology")
  return (
<div className="relative   h-[80vh] w-full   bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center text-white text-center px-4">
    {/* <section className="relative h-[70vh] flex  justify-center  text-white text-center">
    */}
<Link to="/" >
<img src={hero} alt="Dental Care"   className="absolute inset-0   w-[100vw] h-[85vh] object-cover opacity-100" />
</Link>

       

     
      <div className="absolute inset-0  bg-opacity-20"></div>
      <div className="relative top-5 gap-9 right-72  z-10 max-w-3xl">
      <h1 className="text-8xl text-start font-extrabold leading-tight drop-shadow-lg">
          Taking Care <br /> Of Your <span className="">Skin</span>
        </h1>
        <ul className="mt-6 text-xl space-y-2  text-white font-bold">
          <li className="flex items-center gap-2">
            <span className="bg-green-400 h-5 w-5 rounded-full text-sm"><i className="fa-solid fa-check"></i></span> 
            <span>Preventive Checkups</span>
          </li>
          
          <li className="flex items-center gap-2">
            <span className="bg-green-400 h-5 w-5 rounded-full text-sm"><i className="fa-solid fa-check"></i></span> 
            <span>Available 24/7</span>
          </li>
        </ul>
        <AppointmentForm service={service} setService={setService}  />
      </div>
      
    </div>
      
    // </section>
  );
};

export default DermatologyHero;





















{/* <Slider {...settings}>
      {images.map((img,index) =>
              <div key={index}>
                <img src={img} alt={`Slide ${index +1}`} className="absolute inset-0   w-full h-[150vh] object-cover opacity-100" />
              </div>     
      )}
     </Slider> */}