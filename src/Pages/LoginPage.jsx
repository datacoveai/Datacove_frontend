import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <h2 className="text-xl text-white font-beVietnam font-bold mb-4">
        Login
      </h2>
      <form className="space-y-3">
        <input
          type="text"
          placeholder="Company Name"
          className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
        />

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
        />

        <button className="w-full bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition text-white py-2 rounded-md">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
