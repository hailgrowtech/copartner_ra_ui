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
        <div className="bg-[#2E374B] rounded-lg md:w-[1084px] xl:h-[550px] md:h-full w-[378px] h-[600px] overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="md:h-[52px] font-inter font-[700] md:text-[30px] text-[26px] md:leading-[51px] text-new">
              Withdrawal
            </h2>
            <button onClick={closeDialog}>
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="md:w-[35px] w-[50px] md:h-[35px] h-[50px]"
              />
            </button>
          </div>
          <div className="flex flex-row items-center mt-6 justify-between">
            <span className="md:w-[184px] md:h-[23px] text-white md:text-[20px] text-[16px] font-inter font-[500] leading-[16px]">
              Select Your Bank
            </span>
            <button onClick={openAddBank} className="md:w-[100px] w-[70px] border-solid border-[1px] border-white md:h-[40px] h-[25px] rounded-[10px] border text-white font-[600] font-inter md:text-[12px] text-[10px]">
              +Add Bank
            </button>
            {isAddBankOpen && (
            <AddBankDialog onClose={closeAddBankDialog} isOpen={isAddBankOpen} />
          )}
          </div>

          <div className="flex md:flex-row flex-col md:gap-0 gap-2 items-center mt-6 justify-between">
            {withdrawalBank.map((wallet) => {
              return (
                <div
                  key={wallet.id}
                  className={`w-[310px] h-[76px] rounded-[16px] border border-[#40495C] p-2 ${wallet.id === 1 ? 'bg-[#282F3E]' : 'bg-transparent'}`}
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
            <span className="md:w-[184px] md:h-[23px] text-white md:text-[20px] text-[16px] font-inter font-[500] leading-[16px]">
              Select Your UPI ID
            </span>
            <button onClick={openUpiBank} className="md:w-[100px] w-[70px] border-solid border-[1px] border-white md:h-[40px] h-[25px] rounded-[10px] border text-white font-[600] font-inter md:text-[12px] text-[10px]">
              +Add UPI ID
            </button>
            {isUpiOpen && (
              <AddUpiDialog onClose={closeUpiDialog} isOpen={isUpiOpen} />
            )}
          </div>

          <div className="flex md:flex-row flex-col md:gap-0 gap-2 items-center mt-6 justify-between">
            {withdrawalBank.map((wallet) => {
              return (
                <div
                  key={wallet.id}
                  className={`w-[310px] h-[40px] rounded-[8px] border border-[#40495C] bg-transparent`}
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

          <div className="md:h-[50px] flex md:flex-row flex-col md:justify-center md:items-center mt-6">
            <span className="w-[82px] h-[27px] font-[500] text-[18px] leading-[27px] text-white">
              Amount:
            </span>
            <input
              type="number"
              id="wallet_withdrawal"
              className="md:w-[287px] h-[50px] border border-[#40495C] bg-[#282F3E] rounded-[16px] text-white px-2"
              placeholder="Your Withdrawal Balance: 3000"
            />
          </div>

          <div className="flex justify-center items-center mt-6">
            <button className="bg-white rounded-[10px] w-[147px] h-[40px] md:text-[18px] text-[14px]">
              Withdrawal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletWithdrawal;
