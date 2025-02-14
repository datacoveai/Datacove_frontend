import React from "react";
import dp from "../assets/Dashboard/dp.png";
import useAppStore from "../store/useAppStore";

const NavBar = () => {
  const { user } = useAppStore();
  return (
    <div className="py-[2rem]  flex justify-end px-[6rem] gap-6 ">
      <div className="flex justify-end gap-6 p-2 items-center">
        <p className="text-[#8F9BB7] text-sm">Privacy Policies</p>
        <p className="text-[#8F9BB7] text-sm">Terms and conditions</p>

        <div className="flex gap-2">
          <img src={dp} alt="" />
          <p className="font-beVietnam">{user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
