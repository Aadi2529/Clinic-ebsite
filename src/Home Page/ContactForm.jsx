// import React from 'react';

// function ContactForm() {
//   return (
//     <div className="md:w-1/2  bg-blue-50 p-6 rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
//       <form className="space-y-3">
//         <div>
//           <label className="block font-medium mb-1" htmlFor="name">First and Last Name*</label>
//           <input
//             id="name"
//             type="text"
//             className="w-full p-2 border rounded-md focus:ring-teal-500"
//             placeholder="Enter your full name"
//           />
//         </div>
//         <div>
//           <label className="block font-medium mb-1" htmlFor="email">Email Address*</label>
//           <input
//             id="email"
//             type="email"
//             className="w-full p-3 border rounded-md focus:ring-teal-500"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div>
//           <label className="block font-medium mb-1" htmlFor="service">Service</label>
//           <select
//             id="service"
//             className="w-full p-3 border rounded-md focus:ring-teal-500"
//           >
//             <option>Choose service</option>
//             <option>Teeth Cleaning</option>
//             <option>Root Canal</option>
//             <option>Braces Consultation</option>
//           </select>
//         </div>
//         <div>
//           <label className="block font-medium mb-1" htmlFor="notes">Additional Notes</label>
//           <textarea
//             id="notes"
//             className="w-full p-3 border rounded-md focus:ring-teal-500"
//             placeholder="Enter additional notes"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700"
//         >
//           Send Your Message
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;












import React from 'react';

function ContactForm() {
  return (
    <div className="w-full md:w-1/2 bg-blue-50 p-6 rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Send us a message</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium mb-1" htmlFor="name">First and Last Name*</label>
          <input
            id="name"
            type="text"
            className="w-full p-2 border rounded-md focus:ring-teal-500 focus:outline-none"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="email">Email Address*</label>
          <input
            id="email"
            type="email"
            className="w-full p-2 border rounded-md focus:ring-teal-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="service">Service</label>
          <select
            id="service"
            className="w-full p-2 border rounded-md focus:ring-teal-500 focus:outline-none"
          >
            <option>Choose service</option>
            <option>Teeth Cleaning</option>
            <option>Root Canal</option>
            <option>Braces Consultation</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="notes">Additional Notes</label>
          <textarea
            id="notes"
            className="w-full p-2 border rounded-md focus:ring-teal-500 focus:outline-none"
            placeholder="Enter additional notes"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition duration-300"
        >
          Send Your Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
