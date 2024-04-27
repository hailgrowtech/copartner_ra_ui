import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { sideBar } from "./constants";
import { logo } from "./assets";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const location = useLocation();

  useEffect(() => {
    console.log('UseEffect is Working well...')
    const currentPath = location.pathname;

    const activeNav = sideBar.find(
      (side) =>
        `/${side.id}` === currentPath ||
        (side.id === "dashboard" && currentPath === "/")
    );

    if (activeNav) {
      setActiveTab(activeNav.title);
    } else {
      setActiveTab(null)
    }
  }, [location]);

  const handleClick = (title) => {
    console.log('HandleClicked is Triggered...')
    setActiveTab(title);
  };

  return (
    <div className="fixed bg-gradient w-[210px] h-[100%] ml-[-4rem] mt-[2rem]">
      <Link to="/">
        <img
          src={logo}
          className="flex justify-center items-center w-[133px] h-[39px]"
        />
      </Link>
      <div className="flex gap-[1rem] flex-col mt-[2rem]">
        {sideBar.map((side) => (
          <Link
            to={side.path}
            key={side.id}
            onClick={() => handleClick(side.title)}
            className={`flex w-[260px] h-[74px] rounded-[16px] text-white flex-row 
            cursor-pointer ml-[-4rem] ${activeTab === side.title ? "bg-gray-600" : ""}
            `}
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
