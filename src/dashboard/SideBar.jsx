import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Plus, X } from "lucide-react";
import { Search } from "lucide-react";

import useAppStore from "../store/useAppStore";
import { LogOut } from "lucide-react";
import { ChevronDown } from "lucide-react";
import building from "../assets/Dashboard/building.png";
import research from "../assets/Dashboard/research.png";
import edit from "../assets/Dashboard/edit.png";
import vector from "../assets/Vector.png";
import { motion, AnimatePresence } from "framer-motion";
import { MailPlus } from "lucide-react";
import { FileClock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { NotebookPen } from "lucide-react";
import { FolderOpenDot } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";

const API_PRODUCTION_URL = "https://datacove-backend.onrender.com";

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHistoryOpen, setHistoryOpen] = useState(false);
  const [email, setEmail] = useState("");

  const { user, logout } = useAppStore();

  const items = [
    {
      title: "AI Assistance",
      icon: vector,
      data: ["Analysis Law", "Legislative", "RAW document upload"],
    },
    { title: "Legal Research", icon: building },
    { title: "Practical Guidance", icon: edit },
    { title: "Brief Analysis", icon: research },
  ];
  const handleToggle = (index) => {
    // Toggle the active state between null and the clicked index
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInvite = async () => {
    if (!email) {
      toast.error("Please enter an email.");
      return;
    }

    if (email === user.email) {
      toast.error("You cannot invite yourself!");
      return;
    }

    try {
      const response = await axios.post(
        `${API_PRODUCTION_URL}/api/v1/dashboard/invite-client`,
        {
          userId: user._id,
          email: email,
        },
        { withCredentials: true }
      );

      // Display the message from the backend response
      toast.success(response.data.message);
      setEmail(""); // Clear the input field
    } catch (error) {
      if (error.response) {
        // Handle different status codes and show the appropriate message
        toast.error(error.response.data.message || "Something went wrong.");
      } else {
        // Handle cases where there's no response from the server
        toast.error("Network error or server is unreachable.");
      }
    }
  };

  return (
    <div className="w-[22rem] fixed top-0 left-0 h-screen bg-[#1A114A] p-4 flex flex-col">
      {/* Logo */}
      <div className="bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent font-bold text-2xl mb-8">
        <Link to={`/dashboard/${user.name}`}>DATACOVE AI</Link>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 mb-8">
        <Link>
          <button className="w-full flex items-center gap-2 text-white/80 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors">
            <Plus className="w-5 h-5" /> New Chat
          </button>
        </Link>
        <div className="flex items-center gap-2 text-white/80 border border-white/10 p-3 rounded-lg">
          <Search className="w-5 h-5" /> Search
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between text-white/80 p-2 rounded-lg cursor-pointer transition-colors ${
              activeIndex === index
                ? "bg-gradient-to-r from-[#43187D] to-[#1D0D56]"
                : "hover:bg-gradient-to-r hover:from-[#43187D] hover:to-[#1D0D56]"
            }`}
            onClick={() => handleToggle(index)}
          >
            <div className="flex flex-col w-full justify-between">
              <div className="flex items-center gap-2 w-full justify-between p-2">
                <div className="flex items-center gap-4 ">
                  <img src={item.icon} alt={item.title} className="w-8 h-8" />
                  <span className="text-sm">{item.title}</span>
                </div>

                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <X onClick={() => handleToggle(index)} />
                  ) : (
                    <ChevronDown onClick={() => handleToggle(index)} />
                  )}
                </motion.span>
              </div>
              <AnimatePresence>
                {activeIndex === index && item.data && (
                  <motion.div
                    className="pl-6 space-y-3 flex flex-col mt-4 text-white/70 overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {item.data.map((dataItem, idx) => (
                      <p key={idx} className="text-[13px] ml-4 hover:underline">
                        {dataItem}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>

      {/* invite client */}
      {user && user.userType !== "client" && (
        <div className="mt-6 flex items-center gap-2 mb-4">
          <input
            type="email"
            placeholder="Enter client email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log("Updated email:", e.target.value);
            }}
            className="w-full py-2 px-3 border border-violet-400/20 rounded-md bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:border-violet-400/40 focus:ring-1 focus:ring-violet-400/40 transition-all duration-200"
          />
          <button
            onClick={handleInvite}
            className="p-2 bg-[#251761] hover:bg-[#2f1d7a] rounded-xl transition-colors"
          >
            <MailPlus className="w-5 h-5 text-green-500" />
          </button>
        </div>
      )}

      {user.userType !== "client" && (
        <div className="flex items-center gap-2 text-white/80 hover:text-white border border-white/10 p-3 rounded-lg hover:bg-white/5 transition-colors mb-4">
          <Link to={`/dashboard/${user?.name}/project/projects`}>
            <button className="flex items-center gap-2 ">
              Projects <FolderOpenDot className="w-5 h-5 text-yellow-400" />
            </button>
          </Link>
        </div>
      )}

      {/* History Section */}
      <div className="flex flex-col gap-2 text-white/80 hover:text-white border border-white/10 p-3 rounded-lg hover:bg-white/5 transition-colors mb-[1rem]">
        {/* Header with Animated Icon */}
        <div
          className="flex items-center justify-between py-1 cursor-pointer"
          onClick={() => setHistoryOpen(!isHistoryOpen)}
        >
          <h2 className="text-lg">History</h2>
          <motion.span
            animate={{ rotate: isHistoryOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isHistoryOpen ? <X /> : <ChevronDown />}
          </motion.span>
        </div>

        {/* Dropdown Animation */}
        <motion.div
          initial={false}
          animate={{
            height: isHistoryOpen ? "auto" : 0,
            opacity: isHistoryOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          {user.userType !== "client" && (
            <div className="flex items-center gap-2 py-2 text-sm">
              <Link
                to={`/dashboard/${user?.name}/history/documents`}
                className="flex items-center gap-2 "
              >
                <FileClock className="h-5 w-5 text-blue-600" /> Docs History
              </Link>
            </div>
          )}

          <div className="flex items-center gap-2 py-2 text-sm">
            <Link
              to={`/dashboard/${user?.name}/history/notes`}
              className="flex items-center gap-2 "
            >
              <NotebookPen className="h-5 w-5 text-blue-600" /> Notes History
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Logout Button */}

      <button
        className="flex items-center gap-2 text-white/80 hover:text-white border border-white/10 p-3 rounded-lg hover:bg-white/5 transition-colors"
        onClick={logout}
      >
        <LogOut className="w-5 h-5 text-red-500" /> Log Out
      </button>
    </div>
  );
};

export default SideBar;
