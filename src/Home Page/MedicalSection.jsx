import React from "react";
import Medicalimg from "../imeges/medicalimg.jpg"
const MedicalSection = () => {
  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Left Section: Image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <img
            src={Medicalimg}
            alt="Medical Specialist"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section: Text and Cards */}
        <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
          {/* Title */}
          <h4 className="text-blue-600 text-sm font-semibold">
            Top-ranked team of medical specialists
          </h4>
          <h2 className="text-2xl lg:text-4xl font-bold mt-2 text-gray-800">
            We are dedicated to providing the highest level  medicine
            along with friendly, compassionate service.
          </h2>

          {/* Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="text-blue-600 text-4xl mb-4">💡</div>
              <h3 className="font-semibold text-lg text-gray-800">Experience</h3>
              <p className="text-sm text-gray-600 mt-2">
                A community in which our vision is to help all people achieve
                their full potential for health and well-being across the
                lifespan.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="text-blue-600 text-4xl mb-4">👨‍⚕</div>
              <h3 className="font-semibold text-lg text-gray-800">Providers</h3>
              <p className="text-sm text-gray-600 mt-2">
                We care for the whole person, see the complexity of each
                person’s life, and believe that addressing broad needs is best.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="text-blue-600 text-4xl mb-4">🔬</div>
              <h3 className="font-semibold text-lg text-gray-800">Technology</h3>
              <p className="text-sm text-gray-600 mt-2">
                Provide patient-centered healthcare with excellence in quality,
                service, and access. A community for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalSection;