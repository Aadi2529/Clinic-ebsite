import React from "react";


const services = [
    { title: "Dental Implants", icon: "🦷" },
    { title: "Cosmetic Dentistry", icon: "💉" },
    { title: "Dental Care", icon: "🪥" },
    { title: "Teeth Whitening", icon: "✨" },
    { title: "Dental Calculus", icon: "🦷" },
    { title: "Periodontics", icon: "🩺" },
    { title: "Clip & Braces", icon: "😁" },
    { title: "Root Canal", icon: "🦷" }
  ];
  
  const Dental_Card = () => {
    return (
      <section className="py-14  relative px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full">
                <span className="text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-500 mt-2 text-xl font-medium">
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Dental_Card;
  