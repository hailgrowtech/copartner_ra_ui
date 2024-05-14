import React from "react";
import { closeIcon } from "../assets";

const AddBankDialog = ({ isOpen, onClose, isAddBankOpen }) => {
  // if (!isOpen) return null;
  // if (!isAddBankOpen return null);

  return (
    <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center">
      <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg md:w-[1084px] md:h-[90%] xl:h-[70%] w-[378px] h-[600px] overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="md:h-[52px] font-inter font-[700] md:text-[30px] md:text-[24px] text-[18px] md:leading-[51px] text-new md:ml-0 ml-[-0.8rem]">
              Add Bank Details
            </h2>
            <button onClick={onClose} className="md:mr-0 mr-[-1.4rem]">
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="md:w-[45px] w-[40px] md:h-[45px] h-[40px]"
              />
            </button>
          </div>

          <div className="flex md:flex-row flex-col justify-between md:ml-0 ml-[-1rem] md:mt-8 mt-4 md:gap-0 gap-4">
            <div className="relative">
              <div class="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[132px] w-[120px] h-[26px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Account Number
                </label>
                <input
                  type="number"
                  id="default-input"
                  placeholder="Enter Account Number Here"
                  className="md:w-[480px] w-[345px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <div class="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[189px] h-[26px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Confirm Account Number
                </label>
                <input
                  type="number"
                  id="default-input"
                  placeholder="Enter again Account Number Here"
                  className="md:w-[480px] w-[345px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between md:ml-0 ml-[-1rem] md:gap-0 gap-4 md:mt-8 mt-4">
            <div className="relative">
              <div class="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[91px] h-[26px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  IFSC Code
                </label>
                <input
                  type="text"
                  id="default-input"
                  placeholder="Enter IFSC Code Here"
                  className="md:w-[480px] w-[345px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <div class="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[91px] h-[26px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Bank Name
                </label>
                <input
                  type="text"
                  id="default-input"
                  placeholder="Enter Bank Name"
                  className="md:w-[480px] w-[345px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="flex md:flex-row md:ml-0 ml-[-1rem] flex-col md:gap-8">
            <div className="relative md:mt-8 mt-4">
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
                  className="md:w-[480px] w-[345px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>

            <div class="flex items-center md:mt-[3rem] mt-3">
              <input id="link-checkbox" type="checkbox" value="" className="w-4 md:mb-9 mb-[60px] h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="link-checkbox" className="ms-2 text-[14px] font-medium text-white">
              By checking this box, I acknowledge that the bank/payment details provided are accurate and authorize Hailgro Tech Solutions Pvt. Ltd. to process transactions accordingly.
              </label>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8">
            <button className="bg-white rounded-[10px] md:text-[18px] text-[14px] w-[147px] h-[40px]">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBankDialog;
