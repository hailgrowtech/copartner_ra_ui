import React, { useState, useEffect } from "react";
import axios from "axios";
import { closeIcon, dropdown } from "../assets";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SubscriptionChatDiscountDialog = ({ closeDialog, addCourse }) => {
  const [planName, setPlanName] = useState("");
  const [discountPer, setDiscountPer] = useState("");
  const [planAmt, setPlanAmt] = useState("");
  const [discountedAmount, setdiscountedAmount] = useState("");
  const [isdiscountedAmountOpen, setIsdiscountedAmountOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [offersDuration, setOffersDuration] = useState("");
  const [duration, setDuration] = useState("");
  const [plans, setPlans] = useState([]);
  const [uniquePlanTypes, setUniquePlanTypes] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [subscriptionType, setSubscriptionType] = useState(null);
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState("Discount");

  const inputClassName =
    subscriptionType === null ? "text-[#9BA3AF]" : "text-white";

  const stackholderId = sessionStorage.getItem("stackholderId");

  const handleSelectChange = () => {};

  const handleSubmit = () => {};

  const handleDiscountChange = () => {};

  const getSubscriptionTypeLabel = (type) => {
    switch (type) {
      case 1:
        return "Commodity";
      case 2:
        return "Equity";
      case 3:
        return "Futures & Options";
      default:
        return "Select Subscription Type";
    }
  };

  const toggleSubscriptionDropdown = () => {
    setIsSubscriptionOpen(!isSubscriptionOpen);
  };

  const handleSubClick = (option) => {
    setSubscriptionType(option);
    setIsSubscriptionOpen(false);
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg md:w-[1084px] w-[378px] md:h-auto h-[60%] overflow-y-auto p-8 relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-6 gap-2">
              <h2 className="md:h-[52px] font-inter font-[700] md:text-[30px] text-[18px] md:leading-[51px] text-new md:ml-0 ml-[-0.8rem]">
                Chat Discount Offers
              </h2>
              <div className="flex md:flex-row flex-row md:ml-0 ml-[-12px]">
                <button
                  className={`md:w-[100px] w-[90px] md:h-[40px] h-[30px] rounded-[10px] text-black font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-4 mr-2 ${
                    selectedButton === "Free Time"
                      ? "bg-[#ffffff] font-[600] font-inter text-[12px]"
                      : "bg-transparent text-white font-[600] font-inter text-[12px]"
                  }`}
                  onClick={() => handleButtonClick("Free Time")}
                >
                  Free Time
                </button>
                <button
                  className={`md:w-[100px] w-[90px] md:h-[40px] h-[30px] rounded-[10px] text-black font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-4 mr-2 ${
                    selectedButton === "Discount"
                      ? "bg-[#ffffff] font-[600] font-inter text-[12px]"
                      : "bg-transparent text-white font-[600] font-inter text-[12px]"
                  }`}
                  onClick={() => handleButtonClick("Discount")}
                >
                  Discount
                </button>
              </div>
            </div>
            <button onClick={closeDialog} className="md:mr-0 mr-[-1.4rem]">
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="md:w-[35px] w-[40px] md:h-[35px] h-[40px]"
              />
            </button>
          </div>

          <div className="flex flex-col gap-4 md:w-[1006px]">
            {selectedButton === "Discount" && (
              <div className="flex md:flex-row flex-col md:gap-12 gap-4 md:ml-0 ml-[-16px]">
                <div className="relative">
                  <label
                    htmlFor="subscriptionType"
                    className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                    md:w-[140px] w-[134px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                  >
                    Subscription Type
                  </label>
                  <div className="relative">
                    <div className="relative">
                      <input
                        id="subscriptionType"
                        value={getSubscriptionTypeLabel(subscriptionType)}
                        onClick={toggleSubscriptionDropdown}
                        className={`md:w-[482px] w-[345px] md:px-4 px-2 py-2 cursor-pointer rounded-md border border-[#40495C] bg-[#282F3E] ${inputClassName}`}
                      />
                      <img
                        src={dropdown}
                        alt="DropDown"
                        className="absolute inset-y-0 md:right-3 right-[-6px] w-[14px] h-[14px] top-[50%] transform -translate-y-1/2"
                      />
                    </div>
                    {isSubscriptionOpen && (
                      <div className="absolute z-10 mt-2 md:w-[482px] w-[345px] rounded-md bg-white shadow-lg">
                        <ul className="py-1">
                          <li
                            onClick={() => handleSubClick(1)}
                            className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Commodity
                          </li>
                          <li
                            onClick={() => handleSubClick(2)}
                            className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Equity
                          </li>
                          <li
                            onClick={() => handleSubClick(3)}
                            className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Futures & Options
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <div className="mb-0">
                    <label
                      className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                      md:w-[110px] w-[100px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                    >
                      Plan Name
                    </label>
                    <input
                      type="text"
                      value={planName}
                      onChange={(e) => setPlanName(e.target.value)}
                      id="default-input"
                      className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                    />
                  </div>
                </div>
              </div>
            )}

            {selectedButton === "Discount" && (
              <div className="flex md:flex-row flex-col md:gap-12 gap-4 md:ml-0 ml-[-16px]">
                <div className="relative">
                  <label
                    className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                    md:w-[160px] w-[140px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                  >
                    Discount Percentage
                  </label>
                  <input
                    type="number"
                    value={discountPer}
                    onChange={handleDiscountChange}
                    id="default-input"
                    className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                  />
                  {errorMessage && (
                    <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
                  )}
                </div>
                <div className="relative">
                  <div className="mb-0">
                    <label
                      className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                      md:w-[140px] w-[100px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                    >
                      Discount Amount
                    </label>
                    <input
                      type="text"
                      value={discountedAmount}
                      onChange={(e) => setdiscountedAmount(e.target.value)}
                      id="default-input"
                      className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex md:flex-row flex-col md:gap-12 gap-4 md:ml-0 ml-[-16px]">
              <div className="relative">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[90px] w-[80px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Start Date
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
              <div className="relative">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[90px] w-[80px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  End Date
                </label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>

            <div className="flex md:flex-row flex-col md:gap-12 gap-4 md:ml-0 ml-[-16px]">
              <div className="relative">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                    md:w-[90px] w-[90px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Duration
                </label>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  id="default-input"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-2 justify-end py-4">
            <button
              onClick={handleSubmit}
              className="px-4 w-full py-2 bg-blue-500 text-white md:text-[14px] text-[14px] rounded-lg hover:bg-blue-600"
            >
              Confirm
            </button>
            <button
              onClick={closeDialog}
              className="px-4 w-full py-2 bg-gray-300 md:text-[14px] text-[14px] text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionChatDiscountDialog;
