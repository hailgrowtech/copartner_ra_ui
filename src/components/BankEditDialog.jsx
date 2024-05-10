import React from "react";
import { closeIcon } from "../assets";

const BankEditDialog = ({ closeDialog }) => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center">
      <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg md:w-[1084px] w-[378px] md:h-[500px] h-[600px] overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="md:h-[52px] font-inter font-[700] md:text-[30px] text-[24px] md:leading-[51px] text-new">
              Edit Bank Details
            </h2>
            <button onClick={closeDialog}>
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="md:w-[35px] w-[50px] md:h-[35px] h-[50px]"
              />
            </button>
          </div>

          <div className="flex md:flex-row flex-col md:ml-0 ml-[-16px] justify-between md:mt-8 mt-4 md:gap-0 gap-4">
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[140px] w-[120px] h-[25px] md:h-[26px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Acoount Number
                </label>
                <input
                  type="number"
                  id="default-input"
                  placeholder="Enter Acoount Number Here"
                  className="md:w-[482px] w-[345px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[200px] w-[170px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Confirm Acoount Number
                </label>
                <input
                  type="number"
                  id="default-input"
                  placeholder="Enter Account Number Here"
                  className="md:w-[482px] w-[345px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:ml-0 ml-[-16px] justify-between md:mt-8 mt-4 md:gap-0 gap-4">
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[90px] w-[80px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  IFSC Code
                </label>
                <input
                  type="text"
                  id="default-input"
                  placeholder="Enter IFSC Code Here"
                  className="md:w-[482px] w-[345px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[100px] w-[90px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] leading-[16px] text-center"
                >
                  Bank Name
                </label>
                <input
                  type="text"
                  id="default-input"
                  placeholder="Enter Bank Here"
                  className="md:w-[482px] w-[345px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="relative md:ml-0 ml-[-16px]">
            <div className="md:mt-6 mt-4">
              <label
                className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[160px] w-[150px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
              >
                Account Holder Name
              </label>
              <input
                type="text"
                id="default-input"
                placeholder="Enter Name"
                className="md:w-[482px] w-[345px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
              />
            </div>
          </div>

          <div className="flex gap-6 justify-center items-center mt-6">
            <button className="bg-red-500 text-white rounded-[10px] text-[14px] w-[117px] h-[40px]">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankEditDialog;
