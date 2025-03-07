import React from "react";

const Dental_Pricing = () => {
  const plans = [
    { name: "Basic", price: 24.5 },
    { name: "Standard", price: 34.5 },
    { name: "Premium", price: 54.5 },
    { name: "Platinum", price: 89.5 },
  ];

  return (
    <div className="py-12 bg-[#E8F9FF] top-3/4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">Our Pricing</h2>
        <p className="text-gray-600 mt-2">
          Choose a plan that suits your needs best.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-gray-700">{plan.name}</h3>
            <p className="text-4xl font-bold text-blue-500 my-4">
              ${plan.price.toFixed(2)}
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>Diagnostic Services</li>
              <li>Professional Consultation</li>
              <li>Tooth Implants</li>
              <li>Surgical Extractions</li>
              <li>Teeth Whitening</li>
            </ul>
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Get Offer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dental_Pricing;
