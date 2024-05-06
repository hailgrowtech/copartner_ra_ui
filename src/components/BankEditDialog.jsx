import React from "react";
import { closeIcon } from "../assets";

const BankEditDialog = ({ closeDialog }) => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center">
      <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg w-[1084px] h-[460px] overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="h-[52px] font-inter font-[700] text-[30px] leading-[51px] text-new">
              Edit Bank Details
            </h2>
            <button onClick={closeDialog}>
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="w-[35px] h-[35px]"
              />
            </button>
          </div>

          <div className="flex justify-between mt-8">
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[140px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  Acoount Number
                </label>
                <input
                  type="number"
                  id="default-input"
                  placeholder="Enter Acoount Number Here"
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
                  Confirm Acoount Number
                </label>
                <input
                  type="number"
                  id="default-input"
                  placeholder="Enter Account Number Here"
                  className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[90px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  IFSC Code
                </label>
                <input
                  type="text"
                  id="default-input"
                  placeholder="Enter IFSC Code Here"
                  className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[100px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  Bank Name
                </label>
                <input
                  type="text"
                  id="default-input"
                  placeholder="Enter Bank Here"
                  className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="mt-6">
              <label
                className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[160px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
              >
                Account Holder Name
              </label>
              <input
                type="text"
                id="default-input"
                placeholder="Enter Name"
                className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
              />
            </div>
          </div>

          <div className="flex gap-6 justify-end items-center mt-6">
            <button className="bg-red-500 text-white rounded-[10px] w-[117px] h-[40px]">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankEditDialog;
