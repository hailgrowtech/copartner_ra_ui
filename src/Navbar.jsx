import React, { useState, useEffect } from "react";
import styles from "./style";
import { searchIcon, logo, notification, dummyUser, menu } from "./assets";
import { Link } from "react-router-dom";

const Navbar = ({ activeTab, toggleSidebar }) => {
  const [showTab, setShowTab] = useState("copartner");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = (tab) => {
    setShowTab(tab);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDashboard = activeTab === "Dashboard";

  return (
    <div
      className={`fixed flex justify-center items-center py-[1rem] ${
        styles.boxWidth
      } ${styles.paddingX} z-[9] ${
        isScrolled ? styles.transparentNavbar : styles.scrolledNavbar
      }`}
    >
      <nav className="flex md:w-[600px] md:ml-[5rem] xl:ml-[20rem]">
        <div className="flex md:flex-row flex-col items-center sm:flex-col gap-[4px] md:gap-20 xl:gap-40">
          {isSmallScreen ? (
            <div className="flex gap-12 items-center w-[360px] h-[50px]">
              <Link to='/setting'>
                <img
                src={dummyUser}
                alt="LoginUser"
                className="w-[40px] h-[40px] rounded-full"
              />
              </Link>
              <div className="w-[159px] h-[30px] rounded-[24px] overflow-hidden flex">
                <button
                  className={`w-1/2  py-2 font-inter font-[600] text-[11px] leading-[10px] text-center ${
                    showTab === "copartner"
                      ? "bg-gray-200 text-[#282F3E]"
                      : "bg-btn text-gray-500"
                  }`}
                  onClick={() => handleTabClick("copartner")}
                >
                  Copartner
                </button>
                <button
                  className={`w-1/2 py-2 font-inter font-[600] text-[11px] leading-[10px] text-center ${
                    showTab === "personal"
                      ? "bg-gray-200 text-[#282F3E]"
                      : "bg-btn text-gray-500"
                  }`}
                  onClick={() => handleTabClick("personal")}
                >
                  Personal
                </button>
              </div>
              <button onClick={toggleSidebar}>
                <img
                  src={menu}
                  alt="Menu"
                  className="w-[40px] h-[40px] rounded-full"
                />
              </button>
            </div>
          ) : (
            // isDashboard && (
              <div className="w-[265px] h-[50px] rounded-[24px] overflow-hidden flex">
                <button
                  className={`w-1/2 py-2 font-inter font-[600] text-[16px] leading-[19px] text-center ${
                    showTab === "copartner"
                      ? "bg-gray-200 text-[#282F3E]"
                      : "bg-btn text-gray-500"
                  }`}
                  onClick={() => handleTabClick("copartner")}
                >
                  Copartner
                </button>
                <button
                  className={`w-1/2 py-2 font-inter font-[600] text-[16px] leading-[19px] text-center ${
                    showTab === "personal"
                      ? "bg-gray-200 text-[#282F3E]"
                      : "bg-btn text-gray-500"
                  }`}
                  onClick={() => handleTabClick("personal")}
                >
                  Personal
                </button>
              </div>
            // )
          )}

          {isSmallScreen ? (
            <div className="flex pr-8 gap-[1rem]">
              <div className="relative">
                <img
                  src={searchIcon}
                  alt=""
                  className="cursor-pointer absolute top-1/2 left-2 transform -translate-y-1/2 w-[16px] h-[16px]"
                />
                <input
                  type="text"
                  placeholder="Search for something"
                  className="pl-8 bg-[#2E323C] w-[292px] h-[40px] text-white rounded-[10px]"
                />
              </div>

              <div className="flex items-center justify-center w-[36px] h-[40px] border-2 border-[#282F3E] p-1 rounded-[10px]">
                <img
                  src={notification}
                  alt="Notification Icon"
                  className="w-[16px] h-[16px] cursor-pointer"
                />
              </div>
            </div>
          ) : (
            <div className="flex w-[540px] ml-[4rem] gap-[2rem]">
              <div className="relative">
                <img
                  src={searchIcon}
                  alt=""
                  className="cursor-pointer absolute top-1/2 left-4 transform -translate-y-1/2 w-[19px] h-[19px]"
                />
                <input
                  type="text"
                  placeholder="Search for something"
                  className="pl-10 pr-4 bg-[#2E323C] w-[252px] h-[55px] text-white rounded-[10px]"
                />
              </div>

              <div className="flex items-center justify-center w-[46px] h-[50px] border-2 border-[#282F3E] p-1 rounded-[10px]">
                <img
                  src={notification}
                  alt="Notification Icon"
                  className="w-[21px] h-[21px] cursor-pointer"
                />
              </div>

              <Link to='/setting'>
              <img
                src={dummyUser}
                alt="LoginUser"
                className="w-[50px] h-[50px] rounded-full"
              />
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
