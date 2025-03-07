import React from "react";


export default function Dental_Doctor_Section() {
    const doctors = [
      {
        name: "Dr. abc",
        specialty: "DENTIST",
        description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
        image: "", // Replace with actual image URL
      },
      {
        name: "Dr. abc",
        specialty: "DENTIST",
        description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
        image: "",
      },
      {
        name: "Dr. abc",
        specialty: "DENTIST",
        description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
        image: "",
      },
      {
        name: "Dr. abc",
        specialty: "DENTIST",
        description: "I am an ambitious workaholic, but apart from that, pretty simple person.",
        image: "",
      },
    ];
  
    return (
      <section className="py-16 bg-[#FFF2F2]">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-gray-500 uppercase">Doctors</h3>
          <h2 className="text-4xl font-bold text-gray-800">Our Qualified Doctors</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
          </p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{doctor.name}</h3>
              <p className="text-sm text-gray-500">{doctor.specialty}</p>
              <p className="text-gray-600 mt-2">{doctor.description}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href="#" className="text-blue-500 text-lg"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-green-500 text-lg"><i className="fab fa-facebook"></i></a>
                <a href="#" className="text-yellow-500 text-lg"><i className="fab fa-google"></i></a>
                <a href="#" className="text-pink-500 text-lg"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  