// import React from 'react';

// function ContactInfo() {
//   return (
//     <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10 ml-20 items-center justify-center">
//       <h2 className="text-3xl font-bold mb-4 text-teal-600">Comprehensive Dental Care</h2>
//       <div className="mb-4">
//         <h3 className="font-semibold text-gray-700">Location</h3>
//         <p>New York 60 East 65th Street, NY 10065</p>
//       </div>
//       <div className="mb-4">
//         <h3 className="font-semibold text-gray-700">Hours</h3>
//         <p>Mon-Wed: 8am - 7pm</p>
//         <p>Thursday: 8am - 9pm</p>
//         <p>Friday: 8am - 5pm</p>
//       </div>
//       <div className="mb-4">
//         <h3 className="font-semibold text-gray-700">Social</h3>
//         <p>Facebook, Twitter, Instagram</p>
//       </div>
//       <div className="flex space-x-4 mt-4">
//         <a href="tel:88700600" className="text-white bg-teal-500 py-2 px-4 rounded hover:bg-teal-700">
//           Call: 88 700 600
//         </a>
//         <a href="#" className="text-white bg-teal-500 py-2 px-4 rounded hover:bg-teal-700">
//           Book here
//         </a>
//       </div>
//     </div>
//   );
// }

// export default ContactInfo;



import React from 'react';

function ContactInfo() {
  return (
    <div className="w-full md:w-1/2 px-6 py-10 md:py-0 md:pr-10 flex flex-col items-center md:items-start text-center md:text-left">
      {/* <h2 className="text-3xl font-bold mb-6 text-teal-600">Comprehensive Dental Care</h2> */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 text-lg">Location</h3>
        <p className="text-gray-600">1st Floor, Vishwas Building, Plot No. 39, Chetak Ghoda Chowk,<br /> Jai Vishwa Bharti Colony, Sindhi Colony, <br />Chhatrapati Sambhaji Nagar, Maharashtra 431001</p>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 text-lg">Hours</h3>
        <p className="text-gray-600">Mon-Wed: 8am - 7pm</p>
        <p className="text-gray-600">Thursday: 8am - 9pm</p>
        <p className="text-gray-600">Friday: 8am - 5pm</p>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 text-lg">Social</h3>
        <p className="text-gray-600">Facebook, Twitter, Instagram</p>
      </div>
      <div className="flex space-x-4 mt-6">
        <a href="tel:9504211211" className="text-white bg-teal-500 py-2 px-6 rounded-lg hover:bg-teal-700 transition">
         Call: +91-9504-211-211
        </a>
        <a href="#" className="text-white bg-teal-500 py-2 px-6 rounded-lg hover:bg-teal-700 transition">
          Book here
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
