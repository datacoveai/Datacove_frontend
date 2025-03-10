import { Check, X } from "lucide-react";
import React from "react";
import { useSearchParams } from "react-router-dom";

const AcceptClientInvitation = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const name = searchParams.get("inviterName");
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border border-violet-100">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-violet-900 mb-2">
              Confirmation Required
            </h2>
            <p className="text-violet-600 capitalize">
              {name} has invited you to join their organization.
            </p>
          </div>

          {/* <div className="bg-violet-50 rounded-lg p-4 border border-violet-100">
            <p className="text-violet-800 text-sm leading-relaxed">
              By accepting, you agree to our terms and conditions. This action
              cannot be undone.
            </p>
          </div> */}

          <div className="flex gap-4">
            <button
              onClick={() => console.log("Accepted")}
              className="flex-1 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              <Check size={20} />
              Accept
            </button>

            <button
              onClick={() => console.log("Declined")}
              className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-violet-50 text-violet-600 border-2 border-violet-200 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <X size={20} />
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptClientInvitation;
