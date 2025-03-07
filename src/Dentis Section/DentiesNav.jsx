import React, { useState } from 'react';
import logoimg from "../imeges/logoimg.png";
import { Link } from "react-router-dom";
import nav1 from "./Dental_img/nav1.jpg"
import nav2 from "./Dental_img/nav2.jpg"

const DentiesNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-25 z-30 flex items-center justify-between px-6 py-3 shadow-md">
      {/* Left Side - Logo */}
      <div className="flex items-center text-2xl gap-6">
        <Link to="/">
          <img
            src={logoimg}
            height={"60px"}
            width={"180px"}
            alt="Logo"
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Center - Menu Items */}
      <div className="hidden text-3xl  md:flex space-x-6">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <div className="flex justify-around">
       
        <div className="relative group">
          <a href="#" className="hover:text-gray-400">Treatments</a>
          <div className="fixed text-xl left-0 w-screen h-5/6 hidden group-hover:flex    font-bold    rounded-lg shadow-lg z-10">
            <div className="flex mt-10 bg-opacity-90 justify-between w-full">
              <div className="w-1/3  mt-10 p-4">
              <p className='block px-4 py-5' >What are you Lookin for?</p>
              
                <a href="#" className="block px-4 py-3 transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9 ">Root Canal Treatment</a>
                <a href="#" className="block px-4 py-3 transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9 ">Cosmetic Dentistry</a>
                <a href="#" className="block px-4 py-3 transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9 ">Dental Implants</a>
                <a href="#" className="block px-4 py-3 transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9 ">Braces Treatment</a>
                <a href="#" className="block px-4 py-3 transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9 ">Routine Treatments</a>
                <a href="#" className="block px-4 py-3 transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9 ">Gum Treatment</a>
              </div>
              <div className="w-2/4 p-4 grid grid-col-2 gap-2">
              <div className='flex h-52 text-center gap-10 top-4 '>
                <p>
                  Invisible Braces
                  <img src={nav1} alt="Invisible Braces" className="w-60 mt-4 h-full object-cover" />
                </p>
                <p>
                  Dental Implants
                  <img src={nav2} alt="Dental Implants" className="w-60 mt-4 h-full object-cover" />
                </p>
              </div>
              </div>
              <div className="w-1/3  mt-52 p-4">
              <p className='block px-4 py-5' >What are you Lookin for?</p>
                <a href="#" className="block px-4 py-2 transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9 ">Full Mouth Reconstruction</a>
                <hr />
                <a href="#" className="block px-4 py-2 transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9 ">Dentures & Repair</a>
                <hr />
                <a href="#" className="block px-4 py-2 transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9 ">Children's Dentistry</a>
                <hr />
                <a href="#" className="block px-4 py-2 transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9 ">Sleep Apnoea</a>
                <hr />
                <a href="#" className="block px-4 py-2 transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9 ">Cracked Tooth Treatment</a>
                <hr />
                <a href="#" className="block px-4 py-2 transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9 ">Gum Treatment</a>
                <hr />
              </div>
              {/* <div className="w-1/3 mt-10 p-4">
                <p className='block px-4 py-5'>Treatments</p>
                <a href="#" className="block px-4 py-3 ">Full Mouth Reconstruction</a>
                <a href="#" className="block px-4 py-3 ">Dentures & Repair</a>
                <a href="#" className="block px-4 py-3 ">Children's Dentistry</a>
                <a href="#" className="block px-4 py-3 ">Sleep Apnoea</a>
                <a href="#" className="block px-4 py-3 ">Cracked Tooth Treatment</a>
              </div> */}
            </div>
          </div>
        </div>
      
      </div>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      {/* Right Side - Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-xl hover:opacity-80">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button className="text-xl hover:opacity-80">
          <i className="fa-solid fa-location-dot"></i>
        </button>
        <Link
          to="/appointment"
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg"
        >
          <i className="fa-regular fa-calendar-check"></i> Make An Appointment
        </Link>
      </div>
    </nav>
  );
};

export default DentiesNav;
