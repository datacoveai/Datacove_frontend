import React, { useState } from "react";
import { Mail, ArrowRight, KeyRound } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const ForgetPassword = () => {
  const [email, setEmail] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/forget-password",
        { email },
        { withCredentials: true }
      );
      console.log("response from forget password", response);
      if (response.status === 200) {
        toast.success("reset link sent");
      }
    } catch (error) {
      console.log("ERROR", error);
      toast.error(error.response.data.message || "Can't reset password");
    }
  };
  return (
    <div className="min-h-screen bg-[#060b27] flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <KeyRound className="h-12 w-12 text-indigo-400" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            Forgot your password?
          </h2>
          <p className="mt-2 text-sm text-indigo-200">
            No worries! Enter your email and we'll send you reset instructions.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-400" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none rounded-lg relative block w-full px-12 py-3 border border-indigo-700 bg-[#0a1138] placeholder-indigo-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <ArrowRight className="h-5 w-5 text-indigo-400 group-hover:text-indigo-300" />
              </span>
              Send Reset Instructions
            </button>
          </div>
        </form>

        <div className="text-center">
          <Link
            to={"/"}
            className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
          >
            Return to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
