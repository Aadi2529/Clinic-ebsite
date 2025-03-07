import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input className="block border p-2 w-72 mb-4" type="email" placeholder="Email" />
        <input className="block border p-2 w-72 mb-4" type="password" placeholder="Password" />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;