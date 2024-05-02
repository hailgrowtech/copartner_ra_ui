import React, { useState } from "react";
import { closeIcon, dropdown } from "../assets";

const SubscriptionDialog = ({ closeDialog }) => {
  const [subscriptionType, setSubscriptionType] = useState(
    "Select Subscrption Type"
  );
  const [planType, setPlanType] = useState("Select Plan Type");
  const [durationType, setDurationType] = useState("Select Duration Type");
  const [keyPointsType, setKeyPointsType] = useState("Plan Key Points");

  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [isDuration, setIsDuration] = useState(false);
  const [isKeyPointsOpen, setIsKeyPointsOpen] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);

  const toggleKeyPointsDropdown = () => {
    setIsKeyPointsOpen(!isKeyPointsOpen);
    setIsSubscriptionOpen(false);
    setIsPlanOpen(false);
    setIsDuration(false);
  };

  const handleKeyPlanClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
    setIsKeyPointsOpen(false);
  };

  const handleSubClick = (option) => {
    setSubscriptionType(option);
    setIsSubscriptionOpen(false);
  };

  const handlePlanClick = (monthly) => {
    setPlanType(monthly);
    setIsPlanOpen(false);
  };

  const handleDurationClick = (month) => {
    setDurationType(month);
    setIsDuration(false);
  };

  const toggleSubscriptionDropdown = () => {
    setIsSubscriptionOpen(!isSubscriptionOpen);
    setIsPlanOpen(false);
    setIsDuration(false);
    setIsKeyPointsOpen(false);
  };

  const togglePlanDropdown = () => {
    setIsPlanOpen(!isPlanOpen);
    setIsSubscriptionOpen(false);
    setIsDuration(false);
    setIsKeyPointsOpen(false);
  };

  const toggleDurationDropdown = () => {
    setIsDuration(!isDuration);
    setIsSubscriptionOpen(false);
    setIsPlanOpen(false);
    setIsKeyPointsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center">
      <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg w-[1084px] h-full overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="h-[52px] font-inter font-[700] text-[30px] leading-[51px] text-new">
              Add New Subscription
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
            <span className="w-[184px] h-[23px] text-white text-[20px] font-inter font-[500] leading-[16px]">
              Upload Title Image
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

          <div className="flex flex-col mt-[2rem] gap-4 w-[1006px] h-[520px]">
            <div className="flex flex-row gap-12 mt-6">
              <div className="relative">
                <label
                  htmlFor="subscriptionType"
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                    w-[140px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  Subscription Type
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
              <div className="relative">
                <label
                  htmlFor="planType"
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                    w-[90px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  Plan Name
                </label>
                <div className="relative">
                  <div className="relative">
                    <input
                      id="planType"
                      type="text"
                      value={planType}
                      readOnly
                      onClick={togglePlanDropdown}
                      className="w-[482px] px-4 cursor-pointer py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                    />
                    <img
                      src={dropdown}
                      alt="DropDown"
                      className="absolute inset-y-0 right-3 w-[14px] h-[14px] top-[50%] transform -translate-y-1/2"
                    />
                  </div>
                  {isPlanOpen && (
                    <div className="absolute z-10 mt-2 w-[482px] rounded-md bg-white shadow-lg">
                      <ul className="py-1">
                        <li
                          onClick={() => handlePlanClick("Monthly")}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Montly
                        </li>
                        <li
                          onClick={() => handlePlanClick("Quarterly")}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Quarterly
                        </li>
                        <li
                          onClick={() => handlePlanClick("Half-Yearly")}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Half-Yearly
                        </li>
                        <li
                          onClick={() => handlePlanClick("Yearly")}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Yearly
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-12">
              <div className="relative">
                <label
                  htmlFor="durationType"
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[80px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  Duration
                </label>
                <div className="relative">
                  <div className="relative">
                    <input
                      id="durationType"
                      type="text"
                      value={durationType}
                      readOnly
                      onClick={toggleDurationDropdown}
                      className="w-[482px] px-4 py-2 cursor-pointer rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                    />
                    <img
                      src={dropdown}
                      alt="DropDown"
                      className="absolute inset-y-0 right-3 w-[14px] h-[14px] top-[50%] transform -translate-y-1/2"
                    />
                  </div>
                  {isDuration && (
                    <div className="absolute z-10 mt-2 w-[482px] rounded-md bg-white shadow-lg">
                      <ul className="py-1">
                        <li
                          onClick={() => handleDurationClick("1 Month")}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          1 Month
                        </li>
                        <li
                          onClick={() => handleDurationClick("3 Months")}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          3 Months
                        </li>
                        <li
                          onClick={() => handleDurationClick("6 Months")}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          6 Months
                        </li>
                        <li
                          onClick={() => handleDurationClick("12 Months")}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          12 Months
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
                  w-[70px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    id="default-input"
                    className="w-[482px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="keyPointsType"
                className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                    w-[140px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
              >
                Plan Key Points
              </label>
              <div className="relative">
                <div className="relative">
                  <input
                    id="keyPointsType"
                    type="text"
                    placeholder="Select your Key Points"
                    value={selectedItems.join(", ")}
                    readOnly
                    onClick={toggleKeyPointsDropdown}
                    className="w-[1012px] px-4 py-2 cursor-pointer rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                  />
                  {isKeyPointsOpen && (
                    <div className="absolute z-10 mt-2 w-[482px] rounded-md bg-white shadow-lg">
                      <ul className="py-1">
                        <li className="px-4 py-2 flex gap-4 text-sm text-gray-700 hover:bg-gray-100">
                          <input
                            type="checkbox"
                            id="expertInsights"
                            checked={selectedItems.includes("Expert Insights")}
                            onChange={() =>
                              handleKeyPlanClick("Expert Insights")
                            }
                          />
                          <label htmlFor="expertInsights">
                            Expert Insights
                          </label>
                        </li>
                        <li className="px-4 py-2 flex gap-4 text-sm text-gray-700 hover:bg-gray-100">
                          <input
                            type="checkbox"
                            id="performanceTracking"
                            checked={selectedItems.includes(
                              "Performance Tracking"
                            )}
                            onChange={() =>
                              handleKeyPlanClick("Performance Tracking")
                            }
                          />
                          <label htmlFor="performanceTracking">
                            Performance Tracking
                          </label>
                        </li>
                        <li className="px-4 py-2 flex gap-4 text-sm text-gray-700 hover:bg-gray-100">
                          <input
                            type="checkbox"
                            id="riskManagement"
                            checked={selectedItems.includes("Risk Management")}
                            onChange={() =>
                              handleKeyPlanClick("Risk Management")
                            }
                          />
                          <label htmlFor="riskManagement">
                            Risk Management
                          </label>
                        </li>
                        <li className="px-4 py-2 flex gap-4 text-sm text-gray-700 hover:bg-gray-100">
                          <input
                            type="checkbox"
                            id="marketsAlert"
                            checked={selectedItems.includes("Markets Alert")}
                            onChange={() => handleKeyPlanClick("Markets Alert")}
                          />
                          <label htmlFor="marketsAlert">Markets Alert</label>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="mb-0">
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
                  className="w-[1012px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>

            <div className="relative">
              <label
                className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[90px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
              >
                Description
              </label>
              <textarea
                id="des-input"
                rows="4"
                class="block p-2 rounded-md text-white border border-[#40495C] bg-[#282F3E] w-full"
                placeholder="Write something here"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={closeDialog}
              className="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={closeDialog}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDialog;
