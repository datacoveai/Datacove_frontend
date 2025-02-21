import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Plus, X } from "lucide-react";
import { Search } from "lucide-react";
import brain from "../assets/Dashboard/brain.png";
import guide from "../assets/Dashboard/guide.png";
import gallery from "../assets/Dashboard/gallery.png";
import pin from "../assets/Dashboard/pin.png";
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

const SideBar = () => {
  const { name } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isHistoryOpen, setHistoryOpen] = useState(false);
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

  return (
    <div className="w-[22rem] fixed top-0 left-0 h-screen bg-[#1A114A] p-4 flex flex-col">
      {/* Logo */}
      <div className="bg-gradient-to-b from-[#F6F6F7] to-[#7E808F] bg-clip-text text-transparent font-bold text-2xl mb-8">
        DATACOVE AI
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 mb-8">
        <button className="w-full flex items-center gap-2 text-white/80 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors">
          <Plus className="w-5 h-5" /> New Chat
        </button>
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
          <div className="flex items-center gap-2 py-2 text-sm">
            <Link
              to={`/dashboard/${user?.name}/history/documents`}
              className="flex items-center gap-2 "
            >
              <FileClock className="h-5 w-5 text-blue-600" /> Docs History
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Logout Button */}
      <button className="flex items-center gap-2 text-white/80 hover:text-white border border-white/10 p-3 rounded-lg hover:bg-white/5 transition-colors mb-[1rem]">
        <MailPlus className="w-5 h-5 text-green-500" /> Invite
      </button>
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
