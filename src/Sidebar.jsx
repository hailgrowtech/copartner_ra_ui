import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { sideBar } from "./constants";
import { closeIcon, logo, menu } from "./assets";

const Sidebar = ({ activeTab, setActiveTab, setShowSidebar }) => {
  const location = useLocation();

  useEffect(() => {
    console.log("UseEffect is Working well...");
    const currentPath = location.pathname;

    const activeNav = sideBar.find(
      (side) =>
        `/${side.id}` === currentPath ||
        (side.id === "dashboard" && currentPath === "/")
    );

    if (activeNav) {
      setActiveTab(activeNav.title);
    } else {
      setActiveTab(null);
    }
  }, [location]);

  const handleClick = (title) => {
    console.log("HandleClicked is Triggered...");
    if (title === activeTab) {
      // If the clicked title is the active tab, toggle the sidebar
      setShowSidebar((prevState) => !prevState);
      setActiveTab("");
    } else {
      setActiveTab(title);
      setShowSidebar(false); // Close sidebar when a different tab is clicked
    }
  };

  const handleClose = () => {
    setShowSidebar(false);
    setActiveTab("");
  };

  return (
    <div
      className={`fixed flex flex-col bg-gradient md:w-[210px] h-[100%] ml-[-4rem] py-[2rem] mb-[1rem] z-[999] ${
        window.innerWidth < 768
          ? "w-[120%] flex justify-center items-center"
          : ""
      }`}
    >
      <button
        onClick={handleClose}
        className={`relative bottom-[2rem] left-[8rem] ${
          window.innerWidth < 786 ? "flex" : "hidden"
        }`}
      >
        <img src={closeIcon} alt="Close" className="w-[45px] h-[45px]" />
      </button>

      <Link to="/">
        <img
          src={logo}
          className="flex justify-center items-center md:w-[133px] w-[160px] md:h-[39px]"
        />
      </Link>
      <div className="flex gap-[1rem] flex-col mt-[2rem]">
        {sideBar.map((side) => (
          <Link
            to={side.path}
            key={side.id}
            onClick={() => handleClick(side.title)}
            className={`flex w-[260px] h-[74px] rounded-[16px] text-white flex-row 
            cursor-pointer ${
              window.innerWidth >= 768 ? "md:ml-[-4rem] xl:ml-[-4rem]" : ""
            } 
            ${
              window.innerWidth >= 768 &&
              (activeTab === side.title
                ? "tab-btn text-[#fff]"
                : "text-white opacity-[50%]")
            }`}
          >
            <div className="flex flex-row justify-center gap-4 items-center ml-[4rem]">
              <img
                src={
                  activeTab === side.title ? side.activeIcon : side.inactiveIcon
                }
                alt={side.title}
                className="md:w-[24px] w-[30px] md:h-[24px] h-[30px]"
              />
              <span className="font-[400] md:text-[16px] text-[18px]">
                {side.title}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <button className="w-[110px] h-[30px] bg-white text-black rounded-[5px] mt-[4rem]">
        Logout
      </button>
    </div>
  );
};

export default Sidebar;