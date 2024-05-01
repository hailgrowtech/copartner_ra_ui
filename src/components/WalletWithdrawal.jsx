import React, { useState } from "react";
import { closeIcon, dropdown } from "../assets";
import { withdrawalBank } from "../constants";
import AddBankDialog from "./AddBankDialog";
import AddUpiDialog from "./AddUpiDialog";

const WalletWithdrawal = ({ closeDialog }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAddBankOpen, setIsAddBankOpen] = useState(false);
  const [isUpiOpen, setUpiOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const openUpiBank = () => {
    setUpiOpen(true);
  };

  const closeUpiDialog = () => {
    setUpiOpen(false);
  }

  const openAddBank = () => {
    setIsAddBankOpen(true);
  };

  const closeAddBankDialog = () => {
    setIsAddBankOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center">
      <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg w-[1084px] h-full overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="h-[52px] font-inter font-[700] text-[30px] leading-[51px] text-new">
              Withdrawal
            </h2>
            <button onClick={closeDialog}>
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="w-[45px] h-[45px]"
              />
            </button>
          </div>
          <div className="flex flex-row items-center mt-6 justify-between">
            <span className="w-[184px] h-[23px] text-white text-[20px] font-inter font-[500] leading-[16px]">
              Select Your Bank
            </span>
            <button onClick={openAddBank} className="w-[100px] h-[40px] rounded-[10px] border text-white font-[600] font-inter text-[12px]">
              +Add Bank
            </button>
            {isAddBankOpen && (
            <AddBankDialog onClose={closeAddBankDialog} isOpen={isAddBankOpen} />
          )}
          </div>

          <div className="flex flex-row items-center mt-6 justify-between">
            {withdrawalBank.map((wallet) => {
              return (
                <div
                  key={wallet.id}
                  className="w-[310px] h-[76px] rounded-[16px] border border-[#40495C] bg-[#282F3E] p-2"
                >
                  <div className="flex flex-row items-center gap-2">
                    <img src={wallet.bankImg} className="w-[74px] h-[59px]" />
                    <div className="flex flex-col gap-2">
                      <span className="font-[500] text-[18px] leading-[21px] text-white">
                        {wallet.bankName}
                      </span>
                      <span className="font-[400] text-[14px] leading-[16px] text-white opacity-[50%]">
                        {wallet.accNum}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-row items-center mt-6 justify-between">
            <span className="w-[184px] h-[23px] text-white text-[20px] font-inter font-[500] leading-[16px]">
              Select Your UPI ID
            </span>
            <button onClick={openUpiBank} className="w-[100px] h-[40px] rounded-[10px] border text-white font-[600] font-inter text-[12px]">
              +Add UPI ID
            </button>
            {isUpiOpen && (
              <AddUpiDialog onClose={closeUpiDialog} isOpen={isUpiOpen} />
            )}
          </div>

          <div className="flex flex-row items-center mt-6 justify-between">
            {withdrawalBank.map((wallet) => {
              return (
                <div
                  key={wallet.id}
                  className="w-[310px] h-[40px] rounded-[8px] border border-[#40495C] bg-[#282F3E]"
                >
                  <div className="flex flex-row items-center gap-2 p-1">
                    <img src={wallet.upiImg} className="w-[32px] h-[28px]" />
                    <span className="font-[500] text-[18px] leading-[21px] text-white">
                      {wallet.upiId}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="h-[50px] flex justify-center items-center mt-6">
            <span className="w-[82px] h-[27px] font-[500] text-[18px] leading-[27px] text-white">
              Amount:
            </span>
            <input
              type="number"
              id="wallet_withdrawal"
              className="w-[287px] h-[50px] border border-[#40495C] bg-[#282F3E] rounded-[16px] text-white px-2"
              placeholder="Your Withdrawal Balance: 3000"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button className="bg-white rounded-[10px] w-[147px] h-[40px]">
              Withdrawal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletWithdrawal;
