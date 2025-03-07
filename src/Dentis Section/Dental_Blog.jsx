import React from "react";
import Blog1 from "./Dental_img/Dental_Blog.jpg";
import Blog3 from "./Dental_img/Dental_Blog2.jpg";
import Blog2 from "./Dental_img/Dental_Blog3.jpg";


const Dental_Blog = () => {
  const posts = [
    {
      id: 1,
      image: Blog1,
      date: "Sep. 20, 2018",
      author: "Admin",
      comments: 3,
      text: "Even the all-powerful Pointing has no control about the blind texts",
    },
    {
      id: 2,
      image: Blog2,
      date: "Sep. 20, 2018",
      author: "Admin",
      comments: 3,
      text: "Even the all-powerful Pointing has no control about the blind texts",
    },
    {
      id: 3,
      image: Blog3,
      date: "Sep. 20, 2018",
      author: "Admin",
      comments: 3,
      text: "Even the all-powerful Pointing has no control about the blind texts",
    },
  ];

  return (
    <section className="w-full   px-6 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Latest Blog Posts</h2>
        <p className="text-gray-500 mt-2">Stay updated with our latest news and articles</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-7xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={post.image} alt="Blog" className="w-full h-55 object-cover" />
            <div className="p-6">
              <div className="text-gray-400 text-sm flex justify-between items-center">
                <span>{post.date}</span>
                <span>{post.author}  {post.comments} Comments</span>
              </div>
              <p className="text-xl font-semibold text-gray-800 mt-3">{post.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dental_Blog;



