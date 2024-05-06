import React from "react";
import { closeIcon } from "../assets";

const AddBankDialog = ({ isOpen, onClose, isAddBankOpen }) => {
  // if (!isOpen) return null;
  // if (!isAddBankOpen return null);

  return (
    <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center">
      <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg w-[1084px] md:h-[90%] xl:h-[70%] overflow-auto p-8">
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
                  type="number"
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
                  type="number"
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
                  type="text"
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
                  type="text"
                  id="default-input"
                  placeholder="Enter Bank Name"
                  className="w-[480px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-8">
            <div className="relative mt-8">
              <div class="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[166px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
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

            <div class="flex items-center mt-[3rem]">
              <input id="link-checkbox" type="checkbox" value="" className="w-4 mb-9 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              By checking this box, I acknowledge that the bank/payment details provided are accurate and authorize Hailgro Tech Solutions Pvt. Ltd. to process transactions accordingly.
              </label>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8">
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
