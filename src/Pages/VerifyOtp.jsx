import React, { useState } from "react";
import { KeyRound, ArrowRight, RefreshCw } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAppStore from "../store/useAppStore";

const API_PRODUCTION_URL = "http://localhost:5000";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const { openSignUp } = useAppStore();
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [message, setMessage] = useState("");
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const otpFromUrl = searchParams.get("otp");
  const [otp, setOtp] = useState(otpFromUrl);

  const handleVerify = async () => {
    if (!otp) {
      setMessage("Please enter OTP.");
      return;
    }
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${API_PRODUCTION_URL}/api/v1/auth/verify-otp`,
        { email, otp }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        navigate("/");
        openSignUp();
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "OTP verification failed.";
      setMessage(errorMessage);
      toast.error(errorMessage); // 🔹 Show error in toast
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setIsResending(true);

    try {
      const response = await axios.post(
        `${API_PRODUCTION_URL}/api/v1/auth/resend-otp`,
        {
          email,
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message); // Show success message
      } else {
        toast.error(response.data.message); // Show error message (unlikely for 200 status)
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to resend OTP.";
      toast.error(errorMessage);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#060B27] px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-600/20 p-3 rounded-full">
              <KeyRound className="w-8 h-8 text-indigo-500" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center text-white mb-2">
            Verify OTP
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Please enter the verification code sent to your device
          </p>

          <div className="space-y-6">
            <div>
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-white text-center text-2xl tracking-widest focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                placeholder="Enter OTP"
              />
            </div>

            <button
              onClick={handleVerify}
              disabled={otp.length !== 6 || isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-3 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <span>Verify OTP</span>
              {isLoading ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={handleResend}
              disabled={isResending}
              className="w-full bg-transparent border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-gray-300 rounded-lg px-4 py-3 font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <span>Resend OTP</span>
              {isResending && <RefreshCw className="w-5 h-5 animate-spin" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
