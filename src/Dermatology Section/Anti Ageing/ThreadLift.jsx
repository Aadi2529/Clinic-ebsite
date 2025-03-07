import React from 'react'
import DermatologyHero from "../DermatoloyHero";
import DermatologyNav from "../DermatologyNav";

import { motion } from 'framer-motion';
import { useState } from "react";

import threadliftImg from '../Dermatology_img/threadlift.jpg'

const ThreadLift = () => {
    const infections = [
        { title: "SURGICAL THREAD-LIFTING", content: "Surgical thread-lifting can be compared to a face lift and procedures fall into two categories.FREE FLOATING THREADS are inserted beneath the skin under a local anaesthetic and pulled into place, creating a lift that usually lasts between one to two years.FIXED THREADS, attached to the skin’s underlying structures, are capable of delivering a more radical, face-lift type result and are often combined with excess skin removal for best results. These last from two to four years.Recovery, for any swelling or bruising to go down, takes from 7 to 14 days, so if you do go ahead build in a week off." },
        { title: "NON-SURGICAL THREAD-LIFTING", content: "Non-surgical threads are the middle way. The discreet and subtle option best suited for 35 to 55-year-olds, they rev up collagen production, are less radical than the surgical option, but do have lifting benefits significant enough to make a noticeable difference.Again it is highly advisable the procedure is completed by a cosmetic surgeon, aesthetic doctor or qualified medical practitioner.Usually four to 16 threads are applied in a treatment, requiring a local anaesthetic, that can last from 20 minutes to an hour. Expect mild to moderate swelling, but recovery time is on average one to two days." 
        },
        { title: "BEAUTY THREADS", content: "This is the treatment becoming most widely available, and with the most potential for client confusion and disappointed expectationsHowever beauty threads do have benefits for younger skin and can make the most of other procedures.Getting good advice beforehand about what is being used is crucial, most materials have a similar effect so don’t be bamboozled into thinking one type is superior to another." },
   
   
      ]
  return (
    <div>
       <DermatologyNav />
         <DermatologyHero />
    
      <div className="min-h-screen">
      
    
        {/* Main Content */}
        <section className="relative h-[120vh] w-full flex flex-col items-center justify-start top-40 flex-1 p-4">
          <h1 className="text-5xl mt-5 text-center  font-semibold">Thread Lift</h1>
          <div className="flex mt-6 justify-center items-center md:flex-row gap-4 my-8">
            <img
              src={threadliftImg}
              alt="Psoriasis on scalp"
              className="w-full mt-6 md:w-1/2 rounded-lg shadow-lg"
            />
            
          </div>

          

            <div>
            <motion.div  
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-left"
          >
         
              <div className="w-[100vh] flex flex-col justify-start">
              <p className="text-gray-700 leading-7 mt-4 text-lg">
              Thread lifts are a minimally invasive skin rejuvenation and anti-aging technique which involves insertion of poly lactic polydioxanone threads into the skin along certain vector lines to create a pull, and new collagen formation over 3-4 months, resulting in a lift. The newer threads give immediate changes however optimal results are seen after 3-4months. Thread lifts can be used to create jaw line definition, face contouring, reduce neck laxity, reduce nasolabial fold depth, to create a brow lift.


            </p>


           
            
              </div>
            
            
            
          </motion.div>
          </div>
          </section>
          </div>
           {/* Accordion Section */}
                  <div className="mb-28 top-64 flex flex-col w-full   items-center" >
                  <motion.div 
                  initial={{ opacity: 0, x: -50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.8 }}
                  className="md:w-1/2 text-left"
                >
                    <h2 className="text-3xl md:text-2xl  font-semibold text-gray-800 mb-6">
                    Types of Thread Lifts</h2>
                    <div className="max-w-2xl text-2xl w-full">
                      {infections.map((infection, index) => (
                        <Accordion key={index} title={infection.title} content={infection.content} />
                      ))}
                    </div>
                  </motion.div>
                  </div>
    </div>
  )
}
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-300">
      <button 
        className="w-full flex justify-between items-center p-4  text- font-semibold" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="p-4  text-gray-900"
        >
          {content}
        </motion.div>
      )}
    </div>
  );
};
export default ThreadLift
