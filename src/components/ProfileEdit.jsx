import React, { useState } from "react";
import { closeIcon, dropdown, arrowRight } from "../assets";

const ProfileEdit = ({ closeDialog }) => {
  const [subscriptionType, setSubscriptionType] = useState("Select");
  const [experienceType, setExperienceType] = useState("Total Experience");

  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);

  const handleSubClick = (option) => {
    setSubscriptionType(option);
    setIsSubscriptionOpen(false);
  };

  const handleExpClick = (year) => {
    setExperienceType(year);
    setIsExperienceOpen(false);
  };

  const toggleSubscriptionDropdown = () => {
    setIsSubscriptionOpen(!isSubscriptionOpen);
  };

  const toggleExpDropdown = () => {
    setIsExperienceOpen(!isExperienceOpen);
  };

  const closeSubscriptionDropdown = () => {
    setIsSubscriptionOpen(false);
    setIsExperienceOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center">
      <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg md:w-[1084px] w-[378px] md:h-full h-[600px] overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="md:h-[52px] font-inter font-[700] md:text-[30px] text-[24px] md:leading-[51px] text-new">
              Profile Edit
            </h2>
            <button onClick={closeDialog}>
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="md:w-[35px] w-[50px] md:h-[35px] h-[50px]"
              />
            </button>
          </div>
          <div className="flex flex-col mt-8 gap-2 md:flex hidden">
            <span className="h-[23px] text-white text-[20px] font-inter font-[500] leading-[16px]">
              Upload Profile Image
            </span>
            <label
              htmlFor="fileInput"
              className="relative w-[482px] h-[142px] border-2 border-dotted border-[#ffffff] opacity-[50%] rounded-[10px] cursor-pointer"
            >
              <input
                id="fileInput"
                type="file"
                className="absolute inset-0 opacity-0 w-full h-full"
              />
              <span className="flex items-center justify-center py-14 font-inter font-[400] text-[13px] leading-[16px] text-white opacity-[50%]">
                Select
              </span>
            </label>
          </div>

          <div className="flex md:flex-row flex-col md:justify-between md:mt-8 mt-4 md:ml-0 ml-[-16px] md:gap-0 gap-4">
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[80px] w-[60px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Name
                </label>
                <input
                  onClick={closeSubscriptionDropdown}
                  type="text"
                  id="default-input"
                  placeholder="Arun Kumar"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[130px] w-[110px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Mobile Number
                </label>
                <input
                  onClick={closeSubscriptionDropdown}
                  type="number"
                  id="default-input"
                  placeholder="Enter Mobile Number"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between md:mt-8 mt-4 md:ml-0 ml-[-16px] md:gap-0 gap-4">
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[80px] w-[70px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  MAIL ID
                </label>
                <input
                  onClick={closeSubscriptionDropdown}
                  type="email"
                  id="default-input"
                  placeholder="Enter your Mail ID"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="subscriptionType"
                className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                    md:w-[110px] w-[90px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
              >
                Expertise In
              </label>
              <div className="relative">
                <div className="relative">
                  <input
                    id="subscriptionType"
                    value={subscriptionType}
                    readOnly
                    onClick={toggleSubscriptionDropdown}
                    className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                  />
                  <img
                    src={dropdown}
                    alt="DropDown"
                    className="absolute inset-y-0 right-3 w-[14px] h-[14px] top-[50%] transform -translate-y-1/2"
                  />
                </div>
                {isSubscriptionOpen && (
                  <div className="absolute z-10 mt-2 w-[482px] rounded-md bg-white shadow-lg">
                    <ul className="py-1">
                      <li
                        onClick={() => handleSubClick("Option")}
                        className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Option
                      </li>
                      <li
                        onClick={() => handleSubClick("Commodity")}
                        className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Commodity
                      </li>
                      <li
                        onClick={() => handleSubClick("Equity")}
                        className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Equity
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:justify-between md:mt-8 mt-4 md:ml-0 ml-[-16px] md:gap-0 gap-4">
            <div className="relative">
              <label
                htmlFor="subscriptionType"
                className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                    md:w-[100px] w-[80px] h-[26px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
              >
                Experience
              </label>
              <div className="relative">
                <div className="relative">
                  <input
                    id="experienceType"
                    value={experienceType}
                    readOnly
                    onClick={toggleExpDropdown}
                    className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                  />
                  <img
                    src={dropdown}
                    alt="DropDown"
                    className="absolute inset-y-0 right-3 w-[14px] h-[14px] top-[50%] transform -translate-y-1/2"
                  />
                </div>
                {isExperienceOpen && (
                  <div className="absolute z-10 mt-2 w-[482px] rounded-md bg-white shadow-lg">
                    <ul className="py-1">
                      <li
                        onClick={() => handleExpClick("1+ Year")}
                        className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        1+ Year
                      </li>
                      <li
                        onClick={() => handleExpClick("2+ Years")}
                        className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        2+ Year
                      </li>
                      <li
                        onClick={() => handleExpClick("3+ Years")}
                        className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        3+ Year
                      </li>
                      <li
                        onClick={() => handleExpClick("3+ Years")}
                        className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        4+ Year
                      </li>
                      <li
                        onClick={() => handleExpClick("3+ Years")}
                        className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        5+ Year
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <div class="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[220px] w-[190px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Free Telegram Channel Link
                </label>
                <input
                  onClick={closeSubscriptionDropdown}
                  type="link"
                  id="default-input"
                  placeholder="Enter your Mail ID"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between md:mt-8 mt-4 md:ml-0 ml-[-16px] md:gap-0 gap-4">
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[235px] w-[210px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Members In Telegram Channel
                </label>
                <input
                  onClick={closeSubscriptionDropdown}
                  type="text"
                  id="default-input"
                  placeholder="Enter Members"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[200px] w-[180px] h-[26px] rounded-[8px] font-[400] text-[14px] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  SEBI Registration Number
                </label>
                <input
                  onClick={closeSubscriptionDropdown}
                  type="number"
                  id="default-input"
                  placeholder="Enter SEBI Registration Number"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="relative md:ml-0 ml-[-16px] md:mt-8 mt-4">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[232px] w-[210px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Premium Telegram Channel Link
                </label>
                <input
                  type="link"
                  id="default-input"
                  placeholder="Paste Link"
                  className="md:w-[1012px] w-[345px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          <div className="flex justify-center items-center mt-6">
            <button className="bg-white rounded-[10px] text-[14px] w-[147px] h-[40px]">
              Change
            </button>
          </div>

          {/* <div className="flex justify-center items-center mt-6 gap-4">
            <button className="text-white opacity-[50%] font-inter font-[400] text-[14px] leading-[26px]">
            Know More About Copartner Process
            </button>
            <button>
            <img src={arrowRight} alt="ArrowIcon" className="w-[12px] h-[12px]" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
