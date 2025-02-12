import React from "react";
import left from "../assets/Dashboard/board-1.png";
import right from "../assets/Dashboard/board-2.png";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  return (
    <div className="relative bg-[#060b27] h-screen w-full flex">
      {/* Right Image */}
      <img
        src={right}
        alt="Right Board"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 "
      />
      {/* Left Image */}
      <img
        src={left}
        alt="Left Board"
        className="absolute right-0 top-1/2 transform -translate-y-1/2"
      />
      <SideBar />
      <div className="flex-grow">
        <NavBar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
