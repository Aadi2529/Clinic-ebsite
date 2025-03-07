// import React from 'react'
// import DrImg from "../imeges/Dr_img.jpg";
// import { Link } from 'react-router-dom';
// const AppointmentForm = ({service, setService}) => {
//   return (
//     <div>
//       <div className='mt-10 text-start  bg-white p-3 rounded-lg  flex items-center justify-stretch space-x-3'>
//         <div className='flex items-center space-x-4'>
//           <img src={DrImg} alt="Doctor" className='h-16 w-16 rounded-full' />
//         </div>
//         <div>
//         <label className="block text-2xl text-gray-900 text-start font-semibold">Make An Appointment For:</label>
//         <select className="bg-transparent text-xl border-collapse justify-stretch  text-black  focus:ring-0 " value={service} onChange={(e) =>setService(e.target.value)}>
//           <option className='text-black' value="Genral Dentictry">Genral Dentictry</option>
//           <option className='text-black' value="Orthodontics">Dematrology</option>
//           <option className='text-black' value="Teeth Whitening">Diabetes</option>
//         </select>
//         </div>
//         <button className='bg-teal-500 hover:bg-teal-600  p-4 rounded-md'> <i className="fa-regular fa-calendar-check"></i><Link to="/appointment" className="ml-auto bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600">  Make An Appointment </Link></button>
//       </div>
//     </div>
        
//   )
// }

// export default AppointmentForm





















// import React from 'react'

// const AppointmentForm = ({service, setService}) => {
//   return (
//     <div>
// <div className="mt-6 bg-white bg-opacity-50 backdrop-blur-md p-6 rounded-lg flex items-center space-x-6">
//       <div className="flex items-center space-x-4">
//         <img src="/doctor.png" alt="Doctor" className="h-16 w-16 rounded-full" />
//         </div>
//           <label className="block text-sm text-gray-900 font-semibold">MAKE AN APPOINTMENT FOR:</label>
//           <select className="bg-transparent text-black border-none focus:ring-0" value={service} onChange={(e) => setService(e.target.value)}>
//             <option  className="text-black" value="General Dentistry">General Dentistry</option>
//             <option className="text-black" value="Orthodontics">Orthodontics</option>
//             <option className="text-black" value="Teeth Whitening">Teeth Whitening</option>
//           </select>
//         </div>
//       </div>
//       <Button className="bg-teal-500 hover:bg-teal-600">Make An Appointment</Button>
//     </div>
//     </div>
//   )
// }

// export default AppointmentForm









import React from 'react'
import DrImg from "../imeges/Dr_img.jpg";
import { Link } from 'react-router-dom';

const AppointmentForm = ({ service, setService }) => {
  return (
    <div className='mt-10 px-4 sm:px-6 lg:px-8'>
      <div className='bg-white p-3 rounded-lg flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-3'>
        {/* Doctor Image */}
        <div className='flex items-center space-x-4'>
          <img src={DrImg} alt="Doctor" className='h-16 w-16 rounded-full' />
        </div>

        {/* Service Selection */}
        <div className='w-full md:w-auto'>
          <label className="block text-2xl text-gray-900 font-semibold">Make An Appointment For:</label>
          <select className="w-full bg-transparent text-xl border rounded-lg text-black focus:ring-0" value={service} onChange={(e) => setService(e.target.value)}>
            <option className='text-black' value="Genral Dentictry">Genral Dentictry</option>
            <option className='text-black' value="Dermatology">Dermatology</option>
            <option className='text-black' value="Diabetes">Diabetes</option>
          </select>
        </div>

        {/* Appointment Button */}
        <button className='bg-teal-500 hover:bg-teal-600 p-4 rounded-md w-full md:w-auto'>
          <i className="fa-regular fa-calendar-check"></i>
          <Link to="/appointment" className="ml-2 text-white">Make An Appointment</Link>
        </button>
      </div>
    </div>
  )
}

export default AppointmentForm
