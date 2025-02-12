import React from "react";
import logo from "../assets/logo.png";
import { Plus } from "lucide-react";
import { Search } from "lucide-react";
import brain from "../assets/Dashboard/brain.png";
import guide from "../assets/Dashboard/guide.png";
import gallery from "../assets/Dashboard/gallery.png";
import pin from "../assets/Dashboard/pin.png";
const SideBar = () => {
  return (
    <div className="max-w-[52rem] py-[4rem] px-[3rem]">
      <img src={logo} alt="" />
      <div className="space-y-3">
        <div className="flex mt-[2rem] items-center bg-[#1A114A] p-3 gap-2">
          <Plus size={18} /> <p>New Chat</p>
        </div>
        <div className="border border-white border-opacity-5 flex p-3 gap-2 items-center">
          <Search size={18} /> <p>Search</p>
        </div>
      </div>
      <div className="mt-[2rem] space-y-3 text-start">
        <div className="flex justify-between align-middle">
          <div className="flex gap-4">
            <img src={brain} alt="" /> <p className="text-sm">AI Assistance</p>
          </div>

          <img src={pin} alt="" />
        </div>
        <div className="flex justify-between align-middle">
          <div className="flex gap-4">
            <img src={guide} alt="" />{" "}
            <p className="text-sm">Practical Guidance</p>{" "}
          </div>

          <img src={pin} alt="" />
        </div>
        <div className="flex justify-between align-middle">
          <div className="flex gap-4">
            <img src={gallery} alt="" />{" "}
            <p className="text-sm">Brief Analysis</p>
          </div>

          <img src={pin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
