import React from 'react'
import logoimg from "../imeges/logoimg.png";


const TopSection = () => {

      const clinicLocation = "https://maps.app.goo.gl/SbHMyWW79ohLswQo7";


  return (
    <div className=' mb w-full h-13 bg-[#c3fffa8c]'>
        <div className='w-10/12 m-auto   flex items-center justify-between '>
            <a  className="flex items-center  font-bold text-xl mt-2  gap-3 pl-2">
                {/* <div className='flex  flex-col gap-2 justify-center items-center'> */}

                <i className="fa-solid fa-phone gap-2 px-5 h-4 w-4 bg-transparent rounded-lg"></i>
                <i class="fa-brands fa-whatsapp "></i>
                
                +91-9504-211-211
                 
            </a>

            <div>
                <img src={logoimg} 
                className='h-16'/>
            </div>
            
            <div className='flex   gap-2 mr-4'>
                <button className="  hover:opacity-80" onClick={() => window.open(clinicLocation, "_blank")}>
                    <i className="fa-solid fa-location-dot"></i>
                </button>
                <a  className="text-start text-sm " onClick={() => window.open(clinicLocation, "_blank")}>
                    1st Floor, Vishwas Building,<br /> Plot No. 39, Chetak Ghoda Chowk,<br />Chhatrapati Sambhaji Nagar
                </a>
            </div>
      
        </div>
    </div>
  )
}

export default TopSection
