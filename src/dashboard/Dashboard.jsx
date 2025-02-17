import React from "react";
import left from "../assets/Dashboard/board-1.png";
import right from "../assets/Dashboard/board-2.png";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#060b27]">
      {/* Fixed Sidebar */}
      <SideBar />

      {/* Main Content Area */}
      <div className="flex-1 ml-[20rem] flex flex-col  bg-[#060b27]">
        <NavBar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
