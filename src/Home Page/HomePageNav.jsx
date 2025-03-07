// import React from "react";
// import logoimg from "../imeges/logoimg.png";
// import { Link } from "react-router-dom";
// const HomePageNav = () => {

// const clinicLocation = "https://maps.app.goo.gl/fBHQmvpcWYx1cQem7";
//   return (
//     <nav className= "fixed top-0 w-full bg-white bg-opacity-25  z-50 flex items-center justify-between px-6 py-3 shadow-md">
//       {/* Left Side - Logo */}
      
//       <div className="flex items-center gap-14">
//         <img src={logoimg}
//         height={"80px"} 
//         width={"300px"}
//         alt="" />
      
      

//       {/* Center - Menu Items */}
      
//       <ul className="hidden md:flex space-x-6">
//           <li className="relative group">
//             <span className="cursor-pointer group hover:text-gray-800">HOME
            
//             </span>
           
            
//             <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-0 z-20  ">
//               <ul className="py-2">
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to="/dermatology/*">Dermatology</Link></li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to="/dentis">Dentis</Link></li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-blue-500"><Link to="/dibeties">Daibeties</Link></li>
//                 {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">HOME 04</li> */}
//               </ul>
//             </div>
//           </li>
//           <li className="relative group">
//             <span className="cursor-pointer hover:text-gray-900" >About</span>
        
//             <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-0 z-20">
//               <ul className="py-2">
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Team</li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">DR CV</li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-blue-500">Services</li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Single Services</li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cost Calculator</li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Testimonials</li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</li>
//               </ul>
//             </div>
//           </li>
//           <li className="cursor-pointer hover:text-blue-500">PAGES</li>
//           <li className="cursor-pointer hover:text-blue-500">ELEMENTS</li>
//         </ul>
      
        
//       </div>
//       {/* Right Side - Buttons */}
//       <div className="flex items-center space-x-4">
//         <button className="text-white text-xl hover:opacity-80"><i className="fa-solid fa-magnifying-glass"></i></button>
//         <button className="text-white text-xl hover:opacity-80"><i className="fa-solid fa-location-dot" onClick={() => window.open(clinicLocation, "_blank")}></i></button>
//         <button className='bg-teal-500 hover:bg-teal-600  p-4 rounded-md'> <i className="fa-regular fa-calendar-check"></i><Link to="/appointment" className="ml-auto bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">  Make An Appointment </Link></button>
//       </div>
//     </nav>
//   );
// };

// export default HomePageNav;




import React, { useState } from "react";
import logoimg from "../imeges/logoimg.png";
import { Link } from "react-router-dom";

const HomePageNav = () => {
  const reloadPage = () => {
    window.location.reload();
    };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const clinicLocation = "https://maps.app.goo.gl/SbHMyWW79ohLswQo7";

  return (
    <nav className="fixed   top-16 w-full bg-white bg-opacity-25 z-50 flex items-center justify-between px-6 py-3 shadow-md">
      {/* Left Side - Logo */}
      <div className="flex items-center gap-14">
        <img src={logoimg} height={"80px"} width={"300px"} alt="logo" />

        {/* Center - Menu Items */}
        <ul className="hidden text-2xl md:flex space-x-6">
          <li className="relative group">
            <span className="cursor-pointer group hover:text-gray-800">Home</span>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-0 z-20">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to="/dermatology" >Dermatology</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to="/dentis" >Dentist</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer "><Link to="/diabetes" >Diabetes</Link></li>
              </ul>
            </div>
          </li>
          <li className="relative group">
            <span className="cursor-pointer hover:text-gray-900">About</span>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-0 z-20">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Team</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">DR CV</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-blue-500">Services</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Single Services</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Cost Calculator</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Testimonials</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</li>
              </ul>
            </div>
          </li>
          {/* <li className="cursor-pointer hover:text-blue-500">Pages</li>
          <li className="cursor-pointer hover:text-blue-500">ELEMENTS</li> */}
          <li className=" cursor-pointer hover:text-gray-800">
            <Link to="/dermatology" >Dermatology</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-800">
            <Link to="/dentis" >Dentist</Link>
          </li>
          <li className=" cursor-pointer ">
            <Link to="/diabetes" >Diabetes</Link>
          </li>
        </ul>
      </div>

      {/* Right Side - Buttons */}
      <div className="flex items-center space-x-4">
        <button className="text-white text-xl hover:opacity-80"><i className="fa-solid fa-magnifying-glass"></i></button>
        <button className="text-white text-xl hover:opacity-80" onClick={() => window.open(clinicLocation, "_blank")}>
          <i className="fa-solid fa-location-dot"></i>
        </button>
        <button className='bg-teal-500 hover:bg-teal-600 p-4 rounded-md'>
          <i className="fa-regular fa-calendar-check"></i>
          <Link to="/appointment" className="ml-auto text-white px-4 py-2 rounded-lg hover:bg-teal-600"> Make An Appointment </Link>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-white text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-md md:hidden">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to="/dermatology">Dermatology</Link></li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"><Link to="/dentis">Dentist</Link></li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-blue-500"><Link to="/diabetes">Diabetes</Link></li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Team</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">DR CV</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Services</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default HomePageNav;
