import React, { useState } from "react";
import { SquareX } from "lucide-react";
import useAppStore from "../store/useAppStore";
const SignUpPage = () => {
  const { closeSignUp } = useAppStore();
  const [userType, setUserType] = useState("individual");

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50  shadow-lg backdrop-blur-lg p-4">
      <div className="bg-[#150c46] border-[violet] border-[1px]  max-w-3xl p-6 rounded-lg shadow-lg md:flex md:flex-row  relative">
        {/* Button in the top-right corner */}
        <div className="absolute top-4 right-4">
          <SquareX color="red" onClick={closeSignUp} />
        </div>

        <div className="md:flex mt-7">
          {" "}
          {/* Left Side */}
          <div className="flex flex-col items-center w-full md:w-1/2 p-4">
            <h2 className="text-xl text-white font-beVietnam font-bold mb-4">
              Sign Up As
            </h2>
            <button
              className={`w-full py-2 mb-3 text-lg font-semibold rounded-md ${
                userType === "individual"
                  ? "bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition text-white"
                  : "border border-gray-400 text-gray-700"
              }`}
              onClick={() => setUserType("individual")}
            >
              Individual
            </button>
            <button
              className={`w-full py-2 mb-3 text-lg font-semibold rounded-md ${
                userType === "company"
                  ? "bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition text-white"
                  : "border border-gray-400 text-gray-700 "
              }`}
              onClick={() => setUserType("company")}
            >
              Company
            </button>
            <h2 className="text-xl text-white font-beVietnam font-bold mb-4">
              OR
            </h2>
            <button
              className={`w-full py-2 mb-3 text-lg font-semibold rounded-md ${
                userType === "Login"
                  ? "bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition text-white"
                  : "border border-gray-400 text-gray-700 "
              }`}
              onClick={() => setUserType("Login")}
            >
              Login
            </button>

            {/* <p className="text-sm text-gray-600 mt-2">
              Are you new here?{" "}
              <span className="text-blue-500 cursor-pointer">Sign Up</span>
            </p> */}
          </div>
          {/* Vertical Divider */}
          <div className="hidden md:block w-[1px] bg-gray-300"></div>
          {/* Right Side (Form) */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-xl text-white font-beVietnam font-bold mb-4">
              {userType === "individual"
                ? "Sign Up as an Individual"
                : "Sign Up as a Company"}
            </h2>
            <form className="space-y-3">
              {/* For Individual */}
              {userType === "individual" && (
                <>
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
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                </>
              )}

              {/* For Company */}
              {userType === "company" && (
                <>
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
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                </>
              )}

              {/* For Login */}
              {userType === "Login" && (
                <>
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
                </>
              )}

              {userType === "individual" || userType === "company" ? (
                <button className="w-full bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition text-white py-2 rounded-md">
                  Sign Up
                </button>
              ) : userType === "Login" ? (
                <button className="w-full bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition text-white py-2 rounded-md">
                  Login
                </button>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
