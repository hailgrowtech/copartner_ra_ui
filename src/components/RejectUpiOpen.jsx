import React from "react";
import { closeIcon } from "../assets";

const RejectUpiOpen = ({ isOpen, onClose }) => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center">
      <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg w-[1084px] xl:h-[40%] md:h-[55%] overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="h-[52px] font-inter font-[700] text-[30px] leading-[51px] text-new">
              Your Withdrawal Request is Rejected
            </h2>
            <button onClick={onClose} className="mt-[-1rem]">
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="w-[45px] h-[45px]"
              />
            </button>
          </div>

          <div className="relative mt-8">
            <label
              className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[76px] h-[26px] rounded-[8px] font-[400] text-[14px] leading-[16px] text-center"
            >
              REASON
            </label>
            <div className="border border-[#40495C] bg-[#282F3E] p-2 rounded-[16px]">
            <span className="text-white">
              We prioritize the security of our users' accounts and financial
              transactions. In cases where withdrawals are declined, it may be
              due to potential security concerns or discrepancies that need to
              be addressed to safeguard your account.
            </span>
            </div>
          </div>

          <div className="flex justify-center gap-4 items-center mt-6">
            <button className="bg-white text-black rounded-[10px] w-[147px] h-[40px]">
              Okey
            </button>
            <button className="bg-red-500 text-white rounded-[10px] w-[147px] h-[40px]">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectUpiOpen;
