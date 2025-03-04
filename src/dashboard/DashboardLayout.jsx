import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#0A0B1C]">
      {/* Sidebar should always be visible */}
      <SideBar />

      {/* Main Content Area */}
      <div className="flex-1 ml-[23rem] mr-[2rem] gap-8 flex flex-col my-[1rem] bg-[] ">
        <NavBar />

        {/* Outlet will dynamically render the respective dashboard page */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
