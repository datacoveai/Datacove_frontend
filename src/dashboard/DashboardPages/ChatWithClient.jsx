import React, { useContext, useState } from "react";

import { MailPlus, Send } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import useAppStore from "../../store/useAppStore";
import toast from "react-hot-toast";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import ClientsTable from "../Table/ClientsTable";
import InvitationsTable from "../Table/InvitationsTable";
const ChatWithClient = () => {
  const { user } = useAppStore();
  const { userDocs } = useContext(AppContext);

  if (user.userType !== "client") {
    var clients =
      user &&
      user.invitations.filter((invitation) => invitation.status === "accepted");
    var invitations =
      user &&
      user.invitations.filter((invitation) => invitation.status === "pending");
  }

  // console.log("client", clients);
  // console.log("invitations", invitations);

  const messages = [
    {
      type: "bot",
      content: "Hello There!",
    },
    {
      type: "user",
      content: "Hi, how are you?",
    },
  ];

  console.log("Component re-rendered");

  return (
    <div className="min-h-screen bg-[#0A0B1C] p-6">
      <h2 className="font-[500] text-2xl sm:text-3xl md:text-4xl text-[#9DA1B3] mb-6">
        Client Dashboard
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Left side - Tables */}
        {user && user.userType !== "client" && (
          <div className="w-full lg:w-full   space-y-6">
            {/* Clients Table */}
            <div className="bg-[#170C4B] rounded-2xl p-6 shadow-lg">
              <h3 className="font-[500] text-xl text-[#9DA1B3] mb-4 pb-2 border-b border-violet-500/40">
                Your Clients
              </h3>

              <ClientsTable data={clients} />
            </div>

            {/* Invitations Table */}
            <div className="bg-[#170C4B] rounded-2xl p-6 shadow-lg">
              <h3 className="font-[500] text-xl text-[#9DA1B3] mb-4 pb-2 border-b border-violet-500/40">
                Pending Invitations
              </h3>

              <InvitationsTable data={invitations} />

              {/* Invite Form */}
            </div>
          </div>
        )}

        {/* Right side - Chat Box */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#170C4B] rounded-2xl p-6 shadow-lg h-full flex flex-col">
            <h3 className="font-[500] text-xl text-[#9DA1B3] mb-4 pb-2 border-b border-violet-500/40">
              Chat with Client: <span className="text-white">John Doe</span>
            </h3>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
              {messages.map((message, index) =>
                message.type === "bot" ? (
                  // Bot/Client Message
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-8 h-8 flex-shrink-0 bg-[#251761] rounded-full flex items-center justify-center">
                      <CircleUserRound className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="bg-[#1A114A]/50 rounded-2xl p-2 max-w-[80%]">
                      <p className="text-gray-200 text-sm">{message.content}</p>
                    </div>
                  </div>
                ) : (
                  // User Message
                  <div
                    key={index}
                    className="flex items-start gap-4 flex-row-reverse"
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-[#251761] flex items-center justify-center">
                      <CircleUserRound className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="bg-[#251761] rounded-2xl p-2 max-w-[80%]">
                      <p className="text-gray-200 text-sm">{message.content}</p>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Input Section */}
            <div className="mt-auto">
              <div className="bg-[#0A0B1C] rounded-xl p-2 flex items-center gap-2 border border-[#251761]">
                <input
                  type="text"
                  placeholder="Type your message here..."
                  className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none px-4 py-2"
                />
                <button className="bg-[#00DFA2] hover:bg-[#00c78f] text-[#0A0B1C] p-2 rounded-lg transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Table for clients */}

        {user.userType === "client" && (
          <div className="w-full lg:w-full space-y-6">
            {/* Invitations Table */}
            <div className="bg-[#170C4B] rounded-2xl p-6 shadow-lg">
              <h3 className="font-[500] text-xl text-[#9DA1B3] mb-4 pb-2 border-b border-violet-500/40">
                Files shared by user
              </h3>

              {userDocs &&
                userDocs.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-[#1E154B] p-4 rounded-lg mt-2"
                  >
                    <span className="text-white">{file.Name}</span>
                    <a
                      href={file.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline"
                    >
                      Download
                    </a>
                  </div>
                ))}
            </div>

            {/* Docs share by client to the user */}
            <div className="bg-[#170C4B] rounded-2xl p-6 shadow-lg">
              <h3 className="font-[500] text-xl text-[#9DA1B3] mb-4 pb-2 border-b border-violet-500/40">
                Files shared by you
              </h3>

              {user.docs.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-[#1E154B] p-4 rounded-lg mt-2"
                >
                  <span className="text-white">{file.Name}</span>
                  <a
                    href={file.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatWithClient;
