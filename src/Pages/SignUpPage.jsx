import React, { useState } from "react";
import { SquareX } from "lucide-react";
import useAppStore from "../store/useAppStore";
const SignUpPage = () => {
  const { closeSignUp, indiSignUp, orgSignUp, login } = useAppStore();

  const [formData, setFormData] = useState({
    userType: "individual",
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    companyName: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle user type selection
  const handleUserType = (type) => {
    setFormData((prevData) => ({
      ...prevData,
      userType: type,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("DATA", formData);
    if (formData.userType === "individual") {
      indiSignUp({
        name: formData.name,
        email: formData.email,
        phone: formData.phoneNumber,
        password: formData.password,
      });
      closeSignUp();
    } else if (formData.userType === "company") {
      orgSignUp({
        name: formData.name,
        email: formData.email,
        phone: formData.phoneNumber,
        organizationName: formData.companyName,
        password: formData.password,
      });
      closeSignUp();
    } else {
      login({
        email: formData.email,
        password: formData.password,
      });
      closeSignUp();
    }
  };

  // console.log("USERTYPE:", formData.userType);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50  shadow-lg backdrop-blur-lg p-4">
      <div className="bg-[#150c46] border-[violet] border-[1px] ite max-w-3xl  p-6 rounded-lg shadow-lg md:flex md:flex-row  relative md:h-[30rem]">
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
                formData.userType === "individual"
                  ? "bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition text-white"
                  : "border border-gray-400 text-gray-700"
              }`}
              onClick={() => {
                handleUserType("individual");
                setFormData((prev) => ({
                  ...prev, // Keep userType unchanged
                  name: "",
                  email: "",
                  phoneNumber: "",
                  password: "",
                  companyName: "",
                }));
              }}
            >
              Individual
            </button>
            <button
              className={`w-full py-2 mb-3 text-lg font-semibold rounded-md ${
                formData.userType === "company"
                  ? "bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition text-white"
                  : "border border-gray-400 text-gray-700 "
              }`}
              onClick={() => {
                handleUserType("company");
                setFormData((prev) => ({
                  ...prev, // Keep userType unchanged
                  name: "",
                  email: "",
                  phoneNumber: "",
                  password: "",
                  companyName: "",
                }));
              }}
            >
              Company
            </button>
            <h2 className="text-xl text-white font-beVietnam font-bold mb-4">
              OR
            </h2>
            <button
              className={`w-full py-2 mb-3 text-lg font-semibold rounded-md ${
                formData.userType === "Login"
                  ? "bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition text-white"
                  : "border border-gray-400 text-gray-700 "
              }`}
              onClick={() => {
                handleUserType("Login");
                setFormData((prev) => ({
                  ...prev, // Keep userType unchanged
                  name: "",
                  email: "",
                  phoneNumber: "",
                  password: "",
                  companyName: "",
                }));
              }}
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
              {formData.userType === "individual"
                ? "Sign Up as an Individual"
                : "Sign Up as a Company"}
            </h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
              {/* For Individual */}
              {formData.userType === "individual" && (
                <>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                </>
              )}

              {/* For Company */}
              {formData.userType === "company" && (
                <>
                  <input
                    type="text"
                    placeholder="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                </>
              )}

              {/* For Login */}
              {formData.userType === "Login" && (
                <>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full p-2 border rounded-md bg-inherit focus:outline-none"
                  />
                </>
              )}

              {formData.userType === "individual" ||
              formData.userType === "company" ? (
                <button className="w-full bg-gradient-to-b from-[#CE9FFC] via-[#A582F7] to-[#7367F0] hover:opacity-90 transition text-white py-2 rounded-md">
                  Sign Up
                </button>
              ) : formData.userType === "Login" ? (
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
