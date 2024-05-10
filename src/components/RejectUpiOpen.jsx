import React from "react";
import { closeIcon } from "../assets";

const RejectUpiOpen = ({ isOpen, onClose }) => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center">
      <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg md:w-[1084px] xl:h-[40%] md:h-[55%] w-[345px] overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="md:h-[52px] font-inter font-[700] md:text-[30px] text-[18px] md:leading-[51px] text-new">
              Withdrawal Request is Rejected
            </h2>
            <button onClick={onClose} className="mt-[-1rem]">
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="md:w-[45px] w-[45px] md:h-[45px] h-[45px]"
              />
            </button>
          </div>

          <div className="relative md:mt-8 mt-6">
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
            <button className="bg-white md:text-[16px] text-[12px] text-black rounded-[10px] w-[147px] h-[40px]">
              Okey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectUpiOpen;
