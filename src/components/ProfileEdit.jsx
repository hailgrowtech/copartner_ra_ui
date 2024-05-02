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
        <div className="bg-[#2E374B] rounded-lg w-[1084px] h-full overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="h-[52px] font-inter font-[700] text-[30px] leading-[51px] text-new">
              Profile Edit
            </h2>
            <button onClick={closeDialog}>
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="w-[35px] h-[35px]"
              />
            </button>
          </div>
          <div className="flex flex-col mt-8 gap-2">
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

          <div className="flex flex-row justify-between mt-8">
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[80px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  Name
                </label>
                <input
                  onClick={closeSubscriptionDropdown}
                  type="text"
                  id="default-input"
                  placeholder="Arun Kumar"
                  className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[130px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  Mobile Number
                </label>
                <input
                  onClick={closeSubscriptionDropdown}
                  type="text"
                  id="default-input"
                  placeholder="Enter Mobile Number"
                  className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between mt-8">
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[80px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  MAIL ID
                </label>
                <input
                  onClick={closeSubscriptionDropdown}
                  type="email"
                  id="default-input"
                  placeholder="Enter your Mail ID"
                  className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="subscriptionType"
                className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                    w-[110px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
              >
                Expertise In
              </label>
              <div className="relative">
                <div className="relative">
                  <input
                    id="subscriptionType"
                    type="text"
                    value={subscriptionType}
                    readOnly
                    onClick={toggleSubscriptionDropdown}
                    className="w-[482px] px-4 py-2 cursor-pointer rounded-md text-white border border-[#40495C] bg-[#282F3E]"
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

          <div className="flex flex-row justify-between mt-8">
            <div className="relative">
              <label
                htmlFor="subscriptionType"
                className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                    w-[100px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
              >
                Experience
              </label>
              <div className="relative">
                <div className="relative">
                  <input
                    id="experienceType"
                    type="text"
                    value={experienceType}
                    readOnly
                    onClick={toggleExpDropdown}
                    className="w-[482px] px-4 py-2 cursor-pointer rounded-md text-white border border-[#40495C] bg-[#282F3E]"
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
                  w-[220px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  Free Telegram Channel Link
                </label>
                <input
                  onClick={closeSubscriptionDropdown}
                  type="link"
                  id="default-input"
                  placeholder="Enter your Mail ID"
                  className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between mt-8">
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[235px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  Members In Telegram Channel
                </label>
                <input
                  onClick={closeSubscriptionDropdown}
                  type="text"
                  id="default-input"
                  placeholder="Enter Members"
                  className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[200px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  SEBI Registration Number
                </label>
                <input
                  onClick={closeSubscriptionDropdown}
                  type="number"
                  id="default-input"
                  placeholder="Enter SEBI Registration Number"
                  className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="relative mt-6">
            <label
              className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[232px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
            >
              Premium Telegram Channel Link
            </label>
            <input
              type="link"
              id="default-input"
              placeholder="Paste Link"
              className="w-[1020px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
            />
          </div>
          <div className="flex justify-center items-center mt-6">
            <button className="bg-white rounded-[10px] w-[147px] h-[40px]">
              Change
            </button>
          </div>

          <div className="flex justify-center items-center mt-6 gap-4">
            <button className="text-white opacity-[50%] font-inter font-[400] text-[14px] leading-[26px]">
            Know More About Copartner Process
            </button>
            <button>
            <img src={arrowRight} alt="ArrowIcon" className="w-[12px] h-[12px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
