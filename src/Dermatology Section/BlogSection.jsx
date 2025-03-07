import React from "react";
import blog1  from "./Dermatology_img/blog1.jpg"
import blog2  from "./Dermatology_img/blog2.jpg"
import blog3  from "./Dermatology_img/blog3.jpg"
import blog4  from "./Dermatology_img/blog4.jpg"

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: blog1, // Replace with actual image URL
      title: "Most Popular Breast Implant Surgeon in United States",
      date: "September 4, 2024",
      description:
        "Lorem ipsum dolor sit amet elit sed magnis dis consectetur adipiscing...",
    },
    {
      id: 2,
      image: blog2,
      title: "Illegal Injections Risk and Warning You Must Know",
      date: "August 30, 2024",
      description:
        "Lorem ipsum dolor sit amet elit sed magnis dis consectetur adipiscing...",
    },
    {
      id: 3,
      image: blog3,
      title: "Medical Surgery Has Marked as One of The Most Popular",
      date: "August 30, 2024",
      description:
        "Lorem ipsum dolor sit amet elit sed magnis dis consectetur adipiscing...",
    },
    {
      id: 4,
      image: blog4,
      title: "10 Things You Must Know About Plastic Surgery",
      date: "August 30, 2024",
      description:
        "Lorem ipsum dolor sit amet elit sed magnis dis consectetur adipiscing...",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <p className="text-yellow-500 font-medium uppercase">Our Blog</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Latest Blog & Articles
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Blog Cards - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col md:flex-row gap-4 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full md:w-40 h-40 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm">{blog.date}</p>
                <p className="text-gray-600 mt-2 text-sm">{blog.description}</p>
                <a
                  href="#"
                  className="text-yellow-500 mt-3 font-medium hover:underline transition-colors duration-200"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;