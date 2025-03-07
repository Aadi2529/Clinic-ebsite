// const Appointment_Section = () => {
//     return (
//       <section className="py-12 relative px-4 md:px-8">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
//           {/* Emergency Cases */}
//           <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold">Emergency Cases</h3>
//             <p className="mt-2 text-sm">
//               Need urgent medical care? Call us now for immediate assistance.
//             </p>
//             <p className="mt-4 text-lg font-bold">+ (123) 456 7890</p>
//           </div>
  
//           {/* Opening Hours */}
//           <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold">Opening Hours</h3>
//             <ul className="mt-3 space-y-2 text-sm">
//               <li className="flex justify-between">
//                 <span>Monday - Friday</span> <span>8:00 - 19:00</span>
//               </li>
//               <li className="flex justify-between">
//                 <span>Saturday</span> <span>10:00 - 17:00</span>
//               </li>
//               <li className="flex justify-between">
//                 <span>Sunday</span> <span>10:00 - 16:00</span>
//               </li>
//             </ul>
//           </div>
  
//           {/* Make an Appointment */}
//           <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-semibold">Make an Appointment</h3>
//             <form className="mt-4 space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input type="text" placeholder="Name" className="p-2 w-full bg-white text-black rounded"/>
//                 <input type="email" placeholder="Email" className="p-2 w-full bg-white text-black rounded"/>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input type="date" className="p-2 w-full bg-white text-black rounded"/>
//                 <input type="time" className="p-2 w-full bg-white text-black rounded"/>
//               </div>
//               <input type="tel" placeholder="Phone" className="p-2 w-full bg-white text-black rounded"/>
//               <button className="w-full bg-white text-blue-500 font-bold py-2 rounded hover:bg-gray-200">
//                 Book Appointment
//               </button>
//             </form>
//           </div>
  
//         </div>
//       </section>
//     );
//   };
  
//   export default Appointment_Section;
  




import React from "react";

const Appointment_Section = () => {
    return (
      <section className="py-16 top-8  px-4 md:px-8 w-full flex justify-center bg-[#FBFBFB]">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Emergency Cases */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Emergency Cases</h3>
            <p className="mt-5 text-xl">
              If you need urgent medical care, call us now for immediate assistance.
            </p>
            <p className="mt-4 text-lg font-bold">+ (123) 456 7890</p>
          </div>
  
          {/* Opening Hours */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Opening Hours</h3>
            <ul className="mt-3 space-y-2 text-xl">
              <li className="flex justify-between">
                <span>Monday - Friday</span> <span>8:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span> <span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span> <span>10:00 - 16:00</span>
              </li>
            </ul>
          </div>
  
          {/* Make an Appointment */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Make an Appointment</h3>
            <form className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="p-2 w-full bg-white text-black rounded"/>
                <input type="email" placeholder="Email" className="p-2 w-full bg-white text-black rounded"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="date" className="p-2 w-full bg-white text-black rounded"/>
                <input type="time" className="p-2 w-full bg-white text-black rounded"/>
              </div>
              <input type="tel" placeholder="Phone" className="p-2 w-full bg-white text-black rounded"/>
              <button className="w-full bg-white text-blue-500 font-bold py-2 rounded hover:bg-gray-200">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Appointment_Section;
  