import React from "react";
import { closeIcon } from "../assets";

const AddBankDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center">
      <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg w-[1084px] h-[90%] overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="h-[52px] font-inter font-[700] text-[30px] leading-[51px] text-new">
              Add Bank Details
            </h2>
            <button onClick={onClose}>
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="w-[45px] h-[45px]"
              />
            </button>
          </div>

          <div className="flex flex-row justify-between mt-8">
            <div className="relative">
              <div class="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[132px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  Account Number
                </label>
                <input
                  type="link"
                  id="default-input"
                  placeholder="Enter Account Number Here"
                  className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <div class="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[189px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  Confirm Account Number
                </label>
                <input
                  type="link"
                  id="default-input"
                  placeholder="Enter again Account Number Here"
                  className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between mt-8">
            <div className="relative">
              <div class="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[91px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  IFSC Code
                </label>
                <input
                  type="link"
                  id="default-input"
                  placeholder="Enter IFSC Code Here"
                  className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <div class="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[91px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  Bank Name
                </label>
                <input
                  type="link"
                  id="default-input"
                  placeholder="Enter Bank Name"
                  className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="relative mt-8">
              <div class="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[166px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  Account Holder Name
                </label>
                <input
                  type="link"
                  id="default-input"
                  placeholder="Enter Name"
                  className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>

          <div className="flex justify-center items-center mt-6">
            <button className="bg-white rounded-[10px] w-[147px] h-[40px]">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBankDialog;
