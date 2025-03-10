import axios from "axios";
import { ArrowRight, CheckCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useAppStore from "../store/useAppStore";

const Success = () => {
  const { user } = useAppStore();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id"); // Get session_id from URL
  console.log("session Id", sessionId);
  const [sessionDetails, setSessionDetails] = useState(null);

  useEffect(() => {
    const fetchSessionDetails = async () => {
      if (!sessionId) return;

      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/v1/membership/get-session-details?sessionId=${sessionId}`
        );
        console.log("DATA", data);
        setSessionDetails(data);
      } catch (error) {
        console.error("Error fetching session details:", error);
      }
    };

    fetchSessionDetails();
  }, [sessionId]);
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-violet-100 p-3 rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-violet-600" />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Payment Successful!
          </h2>

          <div className="space-y-4 w-full">
            <div className="bg-violet-50 rounded-lg p-4 mt-6">
              <p className="text-violet-900 font-medium">
                Thank you for subscribing to the{" "}
                <span className="font-bold text-violet-700">
                  {sessionDetails && sessionDetails.metadata?.planName}
                </span>{" "}
                plan
              </p>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <p className="text-gray-600 mb-2">
                Your subscription is now active
              </p>
              <p className="text-lg font-semibold text-violet-700">
                {sessionDetails && sessionDetails.metadata?.amount}
              </p>
            </div>

            <button
              onClick={() => (window.location.href = `/dashboard/${user.name}`)}
              className="w-full bg-violet-600 text-white py-3 px-6 rounded-lg font-medium 
                       hover:bg-violet-700 transition-colors duration-200 flex items-center justify-center gap-2 group"
            >
              Go to Dashboard
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
