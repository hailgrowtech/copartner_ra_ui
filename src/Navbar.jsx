import React, { useState, useEffect } from "react";
import styles from "./style";
import { searchIcon, notificationSlider, notification, dummyUser, menu } from "./assets";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = ({ activeTab, toggleSidebar }) => {
  const [showTab, setShowTab] = useState("copartner");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [openNotification, setOpenNotification] = useState(false);

  const [myCard, setMyCard] = useState(null);

  const stackholderId = sessionStorage.getItem('stackholderId')

  useEffect(() => {
    stackholderId && axios.get(`https://copartners.in:5132/api/Experts/${stackholderId}`)
    .then((res) => {
      setMyCard(res.data.data);
    })
  }, [])

  const handleOpenNotification = () => setOpenNotification((cur) => !cur);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
      } z-[99] ${isScrolled ? styles.transparentNavbar : styles.scrolledNavbar}`}
    >
      <nav className="flex md:w-[600px] md:ml-[5rem] xl:ml-[20rem] ml-8">
        <div onClick={scrollToTop}  className="flex md:flex-row flex-col items-center sm:flex-col gap-[4px] md:gap-20 xl:gap-40">
          {isSmallScreen ? (
            <div className="flex gap-12 items-center md:w-[360px] w-[380px] h-[50px]">
              <Link to="/setting">
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
              <button onClick={toggleSidebar} className="md:ml-0 ml-[20px]">
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
            <div className="flex md:mr-8 mr-10 gap-[1rem]">
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

              {/* <div className="relative">
                <button
                  onClick={handleOpenNotification}
                  className="flex items-center justify-center w-[36px] h-[40px] border-solid border-[1px] border-white p-1 rounded-[10px] md-mr-0 mr-[-8px]"
                >
                  <img
                    src={notification}
                    alt="Notification Icon"
                    className="w-[16px] h-[16px] cursor-pointer"
                  />
                </button>
                {openNotification && (
                  <div className="absolute top-full right-[0.1rem] z-10 mt-2">
                    <div className="flex flex-col gap-4 w-[322px] h-[472px] bg-[#2E374B] rounded-lg overflow-auto md:p-4 p-4 overflow-hidden">
                      <div className="w-[332px] flex items-center gap-4">
                        <button
                          className="text-white text-sm rounded hover:bg-gray-600"
                          onClick={handleOpenNotification}
                        >
                          <img src={notificationSlider} alt="" className="w-[20px] h-[20px]" />
                        </button>
                        <h2 className="text-white text-2xl">Notifications</h2>
                      </div>
                      <p className="text-gray-300">
                        Notification message goes here...
                      </p>
                    </div>
                  </div>
                )}
              </div> */}
            </div>
          ) : (
            <div className="flex w-[540px] ml-[8rem] gap-[2rem]">
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

              {/* <div className="relative">
                <button
                  className="flex items-center justify-center w-[46px] h-[50px]  border-solid border-[1px] border-white p-1 rounded-[10px]"
                  onClick={handleOpenNotification}
                >
                  <img
                    src={notification}
                    alt="Notification Icon"
                    className="w-[21px] h-[21px] cursor-pointer"
                  />
                </button>
                {openNotification && (
                  <div className="absolute top-full left-[-12rem] z-10 mt-2">
                    <div className="w-[343px] h-[652px] bg-[#2E374B] rounded-lg overflow-auto p-4 flex flex-col gap-4">
                      <div className="w-[343px] flex items-center gap-4">
                        <button
                          className="text-white text-sm rounded hover:bg-gray-600"
                          onClick={handleOpenNotification}
                        >
                          <img src={notificationSlider} alt="" className="w-[28px] h-[28px]" />
                        </button>
                        <h2 className="text-white text-2xl">Notifications</h2>
                      </div>
                      <p className="text-gray-300">
                        Notification message goes here...
                      </p>
                    </div>
                  </div>
                )}
              </div> */}

              <Link to="/setting">
                <img
                  src={myCard && myCard.expertImagePath}
                  alt="LoginUser"
                  className="bg-black flex items-center justify-center w-[50px] h-[50px] rounded-full"
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
