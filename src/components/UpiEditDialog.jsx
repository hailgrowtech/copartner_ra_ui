import React from 'react';
import { closeIcon } from "../assets";

const UpiEditDialog = ({ isOpen, onClose }) => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center">
      <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg w-[1084px] h-[50%] overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="h-[52px] font-inter font-[700] text-[30px] leading-[51px] text-new">
            Edit UPI ID Details
            </h2>
            <button onClick={onClose}>
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="w-[45px] h-[45px]"
              />
            </button>
          </div>

          <div className="relative mt-8">
              <div class="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[76px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
                >
                  UPI ID
                </label>
                <input
                  type="link"
                  id="default-input"
                  placeholder="arunkumar@phonepay"
                  className="w-full py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>

          <div className="flex justify-center gap-4 items-center mt-6">
            <button className="bg-red-600 text-white rounded-[10px] w-[147px] h-[40px]">
              Delete
            </button>
            <button className="bg-blue-500 text-white rounded-[10px] w-[147px] h-[40px]">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpiEditDialog;