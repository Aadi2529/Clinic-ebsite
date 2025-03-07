// import logoImg from "./Dermatology_img/logoimg.png"
// import { Link } from "react-router-dom";

// const DermatologyNav = () => {

//   return (
//     <nav className="fixed top-0 w-full bg-white bg-opacity-25 z-50 flex items-center justify-between px-6 py-3 shadow-md"> {/* Navbar साठी z-index */}
//       {/* <div className="container mx-auto flex justify-between items-center"> */}
        
//         <div className="flex items-center gap-14">
//           <Link to="/">
//           <img src={logoImg}
//             height={"80px"} 
//             width={"300px"}
//              />
//           </Link>

//           <ul className="hidden md:flex space-x-6">
//             <li className="relative group text-xl ">  
//               <Link to="/">
//               Home
//               </Link>
//               <div className="absolute w-48 left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-0 z-20">
//                 <ul className="py-2">
//                   <div className="absolute bg-white shadow-md mt-2 rounded w-48 z-50"> 
//                     <li>
//                       <Link to="/dermatology/about" className="block px-4 py-2 hover:bg-gray-200">
//                         About Us
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/dermatology/events" className="block px-4 py-2 hover:bg-gray-200">
//                         Events
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/dermatology/blog" className="block px-4 py-2 hover:bg-gray-200">
//                         Blog
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/dermatology/galary" className="block px-4 py-2   hover:bg-gray-200">
//                         Video Gallery
//                       </Link>
//                     </li>
                  
//                   </div>
//                 </ul>
//               </div>
//             </li>
//             <li className="group relative">
//               <button className="px-4  text-xl">Clinical Dermatology </button>
              
//               {/* Dropdown Menu */}
//               <div className="absolute left-0  hidden w-[600px] bg-white text-black shadow-lg group-hover:flex p-6 space-x-8 z-10">
                
//                 {/* Infection Section */}
//                 <div>
//                   <h3 className="text-gray-700 font-bold">INFECTION</h3>
//                   <hr className="my-2" />
//                   <Link to="/infection" className="block  hover:underline">Fungal</Link>
//                   <Link to="/bacteria" className="block  hover:underline">Bacterial</Link>
//                   <Link to="/viral" className="block  hover:underline">Viral</Link>
//                 </div>

//                 {/* Hair Section */}
//                 <div>
//                   <h3 className="text-gray-700 font-bold">HAIR</h3>
//                   <hr className="my-2" />
//                   <Link to="/hair/female" className="block  hover:underline">Female Androgenetic Alopecia</Link>
//                   <Link to="/hair/male" className="block  hover:underline">Male Androgenetic Alopecia</Link>
//                   <Link to="/hair" className="block  hover:underline">Alopecia Areata</Link>
//                 </div>

//                 {/* Other Conditions Section */}
//                 <div>
//                   <h3 className="text-gray-700 font-bold">OTHER CONDITIONS</h3>
//                   <hr className="my-2" />
//                   <Link to="/other" className="block  hover:underline">Acne & Acne Scars</Link>
//                   <Link to="/other/Rosacea" className="block  hover:underline">Rosacea</Link>
//                   <Link to="/other/psoriasis" className="block  hover:underline">Psoriasis</Link>
//                   <Link to="/other/vitiligo" className="block  hover:underline">Vitiligo</Link>
//                   <Link to="/other/eczema" className="block  hover:underline">Eczema</Link>
//                   <Link to="/other/melasma" className="block  hover:underline">Melasma</Link>
//                 </div>

//               </div>
//             </li>

//               <li className="group relative">
//                           <button className="px-4  text-xl ">
//                       Skin Care 
//                     </button>

//                     {/* Dropdown Menu */}
//                     <div className="absolute left-0 hidden w-[600px] bg-white text-black shadow-lg group-hover:flex p-6 space-x-8 z-10">
                      
//                       {/* Skin Treatments Section */}
//                       <div>
//                         <h3 className="text-gray-700 font-bold">SKIN TREATMENTS & DISEASES</h3>
//                         <hr className="my-2" />
//                         <Link to="/skin/nail-diseases" className="block  hover:underline">Skin And Nail Diseases</Link>
//                         <Link to="/skin/acne" className="block  hover:underline">Acne/Pimples Treatment</Link>
//                         <Link to="/skin/fungal-infection" className="block  hover:underline">Ringworm/Fungal Infection</Link>
//                         <Link to="/skin/psoriasis" className="block  hover:underline">Psoriasis Treatments</Link>
//                         <Link to="/skin/pigmentation" className="block  hover:underline">Pigmentation Diseases</Link>
//                       </div>

//                       {/* Skin Lightening Section */}
//                       <div>
//                         <h3 className="text-gray-700 font-bold">SKIN LIGHTENING</h3>
//                         <hr className="my-2" />
//                         <Link to="/lightening/peels" className="block  hover:underline">Peels</Link>
//                         <Link to="/lightening/glutathione" className="block  hover:underline">Glutathione</Link>
//                         <Link to="/lightening/ultrasonic" className="block  hover:underline">Ultrasonic Cavitation Peel</Link>
//                         <Link to="/lightening/microdermabrasion" className="block  hover:underline">Microdermabrasion (Skin Polishing)</Link>
//                         <Link to="/lightening/oxybrasion" className="block  hover:underline">Oxybrasion</Link>
//                         <Link to="/lightening/mesoglow" className="block  hover:underline">Mesoglow</Link>
//                       </div>
//                     </div>
//                   </li>
            
//           </ul>
//         </div>
//     </nav>
//   );
// };

// export default DermatologyNav;








import logoImg from "./Dermatology_img/logoimg.png"
import { Link } from "react-router-dom";

const DermatologyNav = () => {

  return (
    <nav className="fixed top-16 text-xl w-full bg-white bg-opacity-25 z-50 flex items-center justify-between px-6 py-3 shadow-md">
      <div className="flex items-center gap-4 md:gap-14">
        {/* <Link to="/">
          <img src={logoImg}
            height={"80px"} 
            width={"150px"} 
            className="w-32 md:w-72" 
          />
        </Link> */}

        <ul className="hidden text-2xl md:flex space-x-2">
          <li className="relative group text-xl">  
            <Link to="/" className="px-4  text-2xl">
              Home
            </Link>
            <div className="absolute w-48 left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-0 z-20">
              <ul className="py-2">
                <div className="absolute bg-white shadow-md mt-2 rounded w-48 z-50"> 
                  <li>
                    <Link to="/dermatology/about" className="block px-4 py-2 hover:bg-gray-200">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/dermatology/events" className="block px-4 py-2 hover:bg-gray-200">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link to="/dermatology/blog" className="block px-4 py-2 hover:bg-gray-200">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/dermatology/galary" className="block px-4 py-2 hover:bg-gray-200">
                      Video Gallery
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </li>

          <li className="group relative">
            <button className="px-4  text-2xl">Clinical Dermatology</button>
            <div className="absolute left-0 justify-between  hidden w-full md:w-[600px] bg-white text-black shadow-lg group-hover:flex flex-col md:flex-row p-6 space-x-1 md:space-x-8 z-10">
              <div >
                <h3 className="text-gray-700 font-bold">INFECTION</h3>
                <hr className="my-2" />
                <Link to="/infection" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Fungal</Link>
                <Link to="/bacteria" className="block  mt-2 transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Bacterial</Link>
                <Link to="/viral" className="block  mt-2 hover:underline transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Viral</Link>
              </div>
             
                <div>
          <h3  className="text-gray-700 font-bold">Other Conditions</h3>
          {/* <div className="absolute   left-0 hidden flex-row w-full md:w-[600px] bg-transparent text-black shadow-lg group-hover:flex md:flex-row p-6 space-x-0 md:space-x-8 z-10"> */}

          <hr className="my-2" />
                <Link to="/other" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Acne & Acne Scars</Link>
                <Link to="/other/Rosacea" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Rosacea</Link>
                <Link to="/other/psoriasis" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Psoriasis</Link>
            
                <Link to="/other/vitiligo" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Vitiligo</Link>
                <Link to="/other/eczema" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Eczema</Link>
                <Link to="/other/melasma" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Melasma</Link>
          </div>
                </div>
          
              
        
            {/* </div> */}
          </li>

          <li className="group relative">
            <button className="px-4  text-2xl">Leasers</button>
            <div className="absolute left-0 justify-between  hidden w-full md:w-[600px] bg-white text-black shadow-lg group-hover:flex flex-col md:flex-row p-6 space-x-0 md:space-x-8 z-10">
              <div>
                {/* <h3 className="text-gray-700 font-bold">Aesthetic & Anti-Ageing</h3> */}
                {/* <hr className="my-2" /> */}
                <Link to="/leaser/hair-reduction" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Leaser for hair Reduction</Link>
                <Link to="/leaser/pigmentation" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Leaser for Pigmentation(Q-Switch)</Link>
                <Link to="/leaser/tatto-removel" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Leaser Tatto Removel</Link>
                <Link to="/leaser/ance-scars" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Ance Scars</Link>
                
              </div>

            </div>
          </li>

          <li className="group relative">
            <button className="px-4  text-2xl">Hair</button>
            <div className="absolute left-0 justify-between  hidden w-full md:w-[600px] bg-white text-black shadow-lg group-hover:flex flex-col md:flex-row p-6 space-x-0 md:space-x-8 z-10">
              <div>
                {/* <h3 className="text-gray-700 font-bold">Aesthetic & Anti-Ageing</h3> */}
                {/* <hr className="my-2" /> */}
                <Link to="/hair/hair-transplant" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Hair Transplant(FUE)</Link>
                <Link to="/hair/plasma-therapy" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Platelet Rich Plasma Therapy (PRP)</Link>
                <Link to="/hair/stem-cell-therapy" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Stem Cell Therapy</Link>
                
              </div>
              <div>
                <h3 className="text-gray-700 font-bold">HAIR</h3>
                <hr className="my-2" />
                <Link to="/hair/female" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Female Androgenetic Alopecia</Link>
                <Link to="/hair/male" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Male Androgenetic Alopecia</Link>
                <Link to="/hair/areata" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Alopecia Areata</Link>
              </div>

            </div>
          </li>

          <li className="group relative">
            <button className="px-4  text-2xl">Anti Ageing</button>
            <div className="absolute left-0 justify-between w-48  hidden  md:w-[600px] bg-white text-black shadow-lg group-hover:flex flex-col md:flex-row p-6 space-x-0 md:space-x-8 z-10">
              <div>
                <h3 className="text-gray-700 font-bold">Aesthetic & Anti-Ageing</h3>
                <hr className="my-2" />
                <Link to="/antiagein/botoxfillers" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Botox/Fillers</Link>
                <Link to="/antiagein/vampirefacial" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Vampire Facial(PRP)</Link>
                <Link to="/antiagein/radiofrequency" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">RadioFrequency</Link>
                <Link to="/antiagein/threadlift" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Thread Lift</Link>
              </div>
              <div>
                <h3 className="text-gray-700 font-bold">Skin Rejuvenation</h3>
                <hr className="my-2" />
                <Link to="/skin/leaserskin" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Laser Skin Rejuvenation</Link>
                <Link to="/skin/hand-rejuvenation" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Hand Rejuvenation</Link>
                <Link to="/skin/neck-rejuvenation" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Neck Rejuvenation</Link>
                <Link to="/skin/chemical-peels" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Chemical Peels</Link>
              </div>
              
    

            </div>
          </li>

          <li className="group relative">
            <button className="px-4 text-2xl">Advance Skin Care</button>
            <div className="absolute left-0 hidden w-full md:w-[600px] bg-white text-black shadow-lg group-hover:flex flex-col md:flex-row p-6 space-x-0 md:space-x-8 z-10">
              <div>
                <h3 className="text-gray-700 font-bold">SKIN TREATMENTS & DISEASES</h3>
                <hr className="my-2" />
                <Link to="/skincare/skinnail" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Skin And Nail Diseases</Link>
                <Link to="/skin/acne" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Acne/Pimples Treatment</Link>
                <Link to="/skin/fungal-infection" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Ringworm/Fungal Infection</Link>
                <Link to="/skin/psoriasis" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Psoriasis Treatments</Link>
              
              </div>
              <div>
                <h3 className="text-gray-700 font-bold">SKIN LIGHTENING</h3>
                <hr className="my-2" />
                <Link to="/lightening/peels" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Peels</Link>
           
                <Link to="/lightening/glutathione" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Glutathione</Link>
                <Link to="/lightening/CavitationPeel" className="block mt-2  transform transition duration-500 ease-in-out hover:scale-105 hover:translate-x-9">Cavitation Peel</Link>
              </div>
            </div>
          </li>

         

         
       
 

       



        </ul>
      </div>
    </nav>
  );
};

export default DermatologyNav;
