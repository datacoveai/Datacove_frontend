import React from "react";
import logo from "../assets/logo.png";
import { Plus } from "lucide-react";
import { Search } from "lucide-react";
import brain from "../assets/Dashboard/brain.png";
import guide from "../assets/Dashboard/guide.png";
import gallery from "../assets/Dashboard/gallery.png";
import pin from "../assets/Dashboard/pin.png";
import useAppStore from "../store/useAppStore";
import { LogOut } from "lucide-react";
const SideBar = () => {
  const { user, logout } = useAppStore();
  return (
    <div className="w-72 fixed top-0 left-0 h-screen bg-[#1A114A] p-8 flex flex-col">
      {/* Logo */}
      <div className="text-white text-xl font-bold mb-8">DATACOVE AI</div>

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
      <div className="flex-1 space-y-3">
        {[
          { title: "AI Assistance", icon: brain },
          { title: "Practical Guidance", icon: guide },
          { title: "Brief Analysis", icon: gallery },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-white/80 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <img src={item.icon} alt={item.title} className="w-6 h-6" />{" "}
              {/* Use <img> tag to display the icon */}
              <span className="text-sm">{item.title}</span>
            </div>
            <span>
              <img src={pin} alt="" />
            </span>
          </div>
        ))}
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
