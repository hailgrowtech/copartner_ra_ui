import React, { useState, useEffect } from "react";
import styles from "./style";
import { searchIcon, logo, notification, dummyUser } from "./assets";

const Navbar = ({ activeTab }) => {
  console.log(activeTab);
  const [showTab, setShowTab] = useState("copartner");
  const [isScrolled, setIsScrolled] = useState(false);

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
      className={`fixed flex justify-center items-center md:py-[1rem] ${styles.boxWidth} ${styles.paddingX} z-[9] ${
        isScrolled ? styles.transparentNavbar : styles.scrolledNavbar
      }`}
    >
      <nav className="flex w-[600px] md:ml-[5rem] xl:ml-[20rem]">
        <div className="flex md:gap-20 xl:gap-40">
          <div className="w-[265px] h-[50px] rounded-[24px] overflow-hidden flex">
          {isDashboard && (
            <>
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
            </>
             )}
          </div>

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

            <img
              src={dummyUser}
              alt="LoginUser"
              className="w-[50px] h-[50px] rounded-full"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
