import React from "react";

const PatientExperience = () => {
  const testimonials = [
    {
      name: "Michael Adesman",
      age: 67,
      location: "New York",
      image: "", // Replace with actual image URL
      quote:
        "Dr Ravi Assomull is a great doctor, very experienced and friendly. It's a pleasure to meet him and get seen by him. I look forward to seeing him again.",
    },
    {
      name: "Jennifer Murphy",
      age: 17,
      location: "Boston",
      image: "", // Replace with actual image URL
      quote:
        "Dr. Mittal explained everything he was going to do. I was petrified and nervous, and he put me at ease and made me feel comfortable. I most certainly recommend him.",
    },
    {
      name: "Stuart Garza",
      age: 10,
      location: "Houston",
      image: "", // Replace with actual image URL
      quote:
        "An excellent surgeon dedicated to his profession. I was his patient in 2014. I have no hesitation in recommending him.",
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h4 className="text-blue-600 text-sm font-semibold">Testimonials</h4>
        <h2 className="text-2xl lg:text-4xl font-bold mt-2 text-gray-800">
          Patient Experience
        </h2>

        {/* Scrollable Cards */}
        <div className="mt-10 flex overflow-x-auto space-x-4 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white shadow-md rounded-lg p-4 text-center flex-shrink-0"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto rounded-full mb-3"
              />
              <h3 className="font-semibold text-base text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">
                {testimonial.age}, {testimonial.location}
              </p>
              <p className="mt-3 text-gray-600 text-sm italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        {/* Dots for navigation */}
        <div className="mt-6 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2.5 h-2.5 bg-blue-500 rounded-full cursor-pointer"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientExperience;