import React, { useState } from "react";
import { filter, graph, graph1 } from "../assets";
import { walletData } from "../constants";
import WalletWithdrawal from "./WalletWithdrawal";

const Wallet = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="pb-[5rem] xl:px-[18rem] md:px-[10rem] py-[6rem] bg-gradient min-h-screen">
      <div className="w-[1130px] flex justify-between">
        <span className="w-[176px] h-[27px] font-inter text-[22px] font-[600] leading-[27px] text-[#ffffff]">
          Wallet
        </span>
        <div className="flex justify-between items-center">
          <span className="w-[320px] h-[27px] text-white font-inter font-[600] text-[22px] leading-[27px]">
            Withdrawal Balance :{" "}
            <span className="text-white opacity-[40%]">₹30,000</span>
          </span>
          <button onClick={openDialog} className="w-[147px] h-[40px] rounded-[10px] border text-black bg-[#ffffff] font-[600] font-inter text-[12px]">
            Withdrawal
          </button>
          {isDialogOpen && (
          <WalletWithdrawal
            isDialogOpen={isDialogOpen}
            closeDialog={closeDialog}
          />
        )}
        </div>
      </div>

      <div className="w-[1184px] h-[297px] flex flex-row">
        <img
          src={graph}
          alt=""
          className="w-[454px] h-[297px] overflow-hidden contain"
        />
        <img src={graph1} alt="" className="w-[605px] h-[297px]" />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between">
          <div className="w-[1030px] flex flex-col gap-4 mt-4">
            <span className="text-white w-[210px] h-[27px] font-inter font-[600] text-[22px] leading-[27px]">
              Transaction History
            </span>
            <div className="flex flex-row gap-4">
              <button className="w-[95px] h-[40px] rounded-[10px] border text-black bg-[#ffffff] font-[600] font-inter text-[12px]">
                Transaction
              </button>
              <button className="w-[100px] h-[40px] rounded-[10px] border text-white font-[600] font-inter text-[12px]">
                Withdrawal
              </button>
            </div>
          </div>

          <div className="relative mr-[6rem]">
            <button className="flex items-center justify-center w-[100px] h-[40px] rounded-[10px] border text-white font-[600] font-inter text-[12px]">
              <img
                src={filter}
                alt="Filter-Icon"
                className="w-[20px] h-[20px] mr-2"
              />
              Filter
            </button>
          </div>
        </div>

        <table className="w-[1130px] h-[497px] px-[1rem] bg-[#29303F] rounded-[30px]">
          <thead className="text-dimWhite w-[1084px] h-[51px]">
            <tr>
              <th className="text-center">Transaction ID</th>
              <th className="text-center">Date</th>
              <th className="text-center">Subscription</th>
              <th className="text-center">Plan Name</th>
              <th className="text-center">Name</th>
              <th className="text-center">Amount</th>
              <th className="text-center">Invoice</th>
            </tr>
          </thead>
          <tbody className="text-lightWhite w-[1084px] h-[81px]">
            {walletData.map((row, index) => {
              return (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#1E1E22]" : ""}
                >
                  <td className="text-center font-[500] text-[16px] leading-[18px]">
                    {row.transcationId}
                  </td>
                  <td className="text-center font-[500] text-[16px] leading-[18px]">
                    {row.date}
                  </td>
                  <td className="text-center w-[143px] h-[36px] font-[500] text-[16px] leading-[18px]">
                    {row.subscription}
                  </td>
                  <td className="text-center w-[143px] h-[36px] font-[500] text-[16px] leading-[18px]">
                    {row.planName}
                  </td>
                  <td className="text-center font-[500] text-[16px] leading-[18px]">
                    {row.name}
                  </td>
                  <td className="text-center w-[105px] h-[18px] font-[500] text-[16px] leading-[18px]">
                    {row.amount}
                  </td>
                  <td className="py-2">
                    <img
                      src={row.invoice}
                      alt=""
                      className="w-[21px] h-[21px] text-white mx-auto"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;
