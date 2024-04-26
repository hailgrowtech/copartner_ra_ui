import React from "react";
import { Link } from "react-router-dom";
import { sideBar } from "./constants";

const Sidebar = () => {
  return (
    <div className="bg-gradient h-[100%] ml-[-4rem]">
      <div className="flex gap-[1rem] flex-col ">
        {sideBar.map((side) => (
          <Link
            to={side.path}
            key={side.id}
            className="flex w-[220px] h-[74px] rounded-[16px] text-white flex-row 
                hover:bg-[#18181B] hover:opacity[10%] transition duration-150 ease-in-out cursor-pointer ml-[-4rem]"
          >
            <div className="flex flex-row justify-center gap-4 items-center ml-[4rem]">
              <img
                src={side.icon}
                alt={side.title}
                className="w-[24px] h-[24px]"
              />
              <span className="font-[400] text-[16px]">{side.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
