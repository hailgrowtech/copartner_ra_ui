import React, { useState } from "react";
import { filter, graph, graph1 } from "../assets";
import { transcationData, withdrawalData } from "../constants";
import WalletWithdrawal from "./WalletWithdrawal";
import EarningAnalysis from "./EarningAnalysis";
import UpiEditDialog from "./UpiEditDialog";
import RejectUpiOpen from "./RejectUpiOpen";

const Wallet = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showTransactions, setShowTransactions] = useState("transaction");
  const [isEditUpiOpen, setIsEditUpiOpen] = useState(false);

  const openEditUpiDialog = () => {
    setIsEditUpiOpen(true);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setIsEditUpiOpen(false);
  };

  const handleTab = (id) => {
    setShowTransactions(id);
  };

  return (
    <div className="pb-[5rem] xl:pl-[12rem] md:pl-[10rem] py-[6rem] bg-gradient min-h-screen">
      <div className="xl:w-[1520px] md:w-[1130px] flex justify-between">
        <span className="w-[176px] h-[27px] font-inter text-[22px] font-[600] leading-[27px] text-[#ffffff]">
          Wallet
        </span>
        <div className="flex justify-between items-center">
          <span className="w-[320px] h-[27px] text-white font-inter font-[600] text-[22px] leading-[27px]">
            Withdrawal Balance :{" "}
            <span className="text-white opacity-[40%]">₹30,000</span>
          </span>
          <button
            onClick={openDialog}
            className="w-[147px] h-[40px] rounded-[10px] border text-black bg-[#ffffff] font-[600] font-inter text-[12px]"
          >
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

      <EarningAnalysis />

      <div className="flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between">
          <div className="xl:w-[1420px] md:w-[1030px] flex flex-col gap-4 mt-4">
            <span className="text-white w-[210px] h-[27px] font-inter font-[600] text-[22px] leading-[27px]">
              Transaction History
            </span>
            <div className="flex flex-row gap-4">
              <button
                onClick={() => setShowTransactions("transaction")}
                className={`w-[95px] h-[40px] rounded-[10px] border text-black ${
                  showTransactions === "transaction"
                    ? "bg-[#ffffff] font-[600] font-inter text-[12px]"
                    : "bg-transparent text-white font-[600] font-inter text-[12px]"
                }`}
              >
                Transaction
              </button>
              <button
                onClick={() => setShowTransactions("withdrawal")}
                className={`w-[100px] h-[40px] rounded-[10px] border text-black ${
                  showTransactions === "withdrawal"
                    ? "bg-[#ffffff] font-[600] font-inter text-[12px]"
                    : "bg-transparent text-white font-[600] font-inter text-[12px]"
                }`}
              >
                Withdrawal
              </button>
              <button
                onClick={() => setShowTransactions("request")}
                className={`w-[140px] h-[40px] rounded-[10px] border text-black ${
                  showTransactions === "request"
                    ? "bg-[#ffffff] font-[600] font-inter text-[12px]"
                    : "bg-transparent text-white font-[600] font-inter text-[12px]"
                }`}
              >
                Withdrawal Request
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

        {showTransactions === "transaction" && (
          <table className="xl:w-[1520px] md:w-[1130px] h-[497px] px-[1rem] bg-[#29303F] rounded-[30px]">
            <thead className="text-dimWhite w-[1084px] h-[51px]">
              <tr>
                <th className="text-center">Transaction ID</th>
                <th className="text-start pl-[4rem]">Date</th>
                <th className="text-start">Subscription</th>
                <th className="text-end">Plan Name</th>
                <th className="text-center pl-[4rem]">Name</th>
                <th className="text-start pl-[4rem]">Amount</th>
                <th className="text-center">Invoice</th>
              </tr>
            </thead>
            <tbody className="text-lightWhite w-[1084px] h-[81px]">
              {transcationData.map((row, index) => {
                return (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-[#1E1E22]" : ""}
                  >
                    <td className="text-center font-[500] text-[16px] leading-[18px]">
                      {row.transcationId}
                    </td>
                    <td className="pl-[2rem] font-[500] text-[16px] leading-[18px]">
                      {row.date}
                    </td>
                    <td className="pl-[1rem] w-[143px] h-[36px] font-[500] text-[16px] leading-[18px]">
                      {row.subscription}
                    </td>
                    <td className="pl-[4rem] text-center w-[143px] h-[36px] font-[500] text-[16px] leading-[18px]">
                      {row.planName}
                    </td>
                    <td className="pl-[4rem] text-center font-[500] text-[16px] leading-[18px]">
                      {row.name}
                    </td>
                    <td className="pl-[4rem] w-[105px] h-[18px] font-[500] text-[16px] leading-[18px]">
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
        )}
        {showTransactions === "withdrawal" && (
          <table className="xl:w-[1520px] md:w-[1130px] h-[497px] px-[1rem] bg-[#29303F] rounded-[30px]">
            <thead className="text-dimWhite w-[1084px] h-[51px]">
              <tr>
                <th className="text-start pl-[4rem]">Transaction ID</th>
                <th className="text-start pl-[4rem]">Date</th>
                <th className="text-start pl-[4rem]">Bank</th>
                <th className="text-start pl-[4rem]">Account Number</th>
                <th className="text-start pl-[4rem]">Amount</th>
                <th className="text-start pl-[4rem]">Invoice</th>
              </tr>
            </thead>
            <tbody className="text-lightWhite w-[1084px] h-[81px]">
              {withdrawalData.map((row, index) => {
                return (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-[#1E1E22]" : ""}
                  >
                    <td className="pl-[4rem] font-[500] text-[16px] leading-[18px]">
                      {row.transcationId}
                    </td>
                    <td className="pl-[4rem] font-[500] text-[16px] leading-[18px]">
                      {row.date}
                    </td>
                    <td className="pl-[4rem] w-[143px] h-[36px] font-[500] text-[16px] leading-[18px]">
                      {row.withdrawal}
                    </td>
                    <td className="pl-[4rem] w-[143px] h-[36px] font-[500] text-[16px] leading-[18px]">
                      {row.accNum}
                    </td>
                    <td className="pl-[4rem] w-[105px] h-[18px] font-[500] text-[16px] leading-[18px]">
                      {row.amount}
                    </td>
                    <td className="pl-[5rem]">
                      <img
                        src={row.invoice}
                        alt=""
                        className="w-[21px] h-[21px] text-white"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        {showTransactions === "request" && (
          <table className="xl:w-[1520px] md:w-[1130px] h-[497px] px-[1rem] bg-[#29303F] rounded-[30px]">
            <thead className="text-dimWhite w-[1084px] h-[51px]">
              <tr>
                <th className="text-start pl-[4rem]">Transaction ID</th>
                <th className="text-start pl-[4rem]">Date</th>
                <th className="text-start">Bank</th>
                <th className="pl-[4rem] text-start">Account Number</th>
                <th className="text-start pl-[4rem]">Amount</th>
                <th className="text-start pl-[4rem]">Status</th>
              </tr>
            </thead>
            <tbody className="text-lightWhite w-[1084px] h-[81px]">
              {withdrawalData.map((row, index) => {
                return (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-[#1E1E22]" : ""}
                  >
                    <td className="pl-[4rem] font-[500] text-[16px] leading-[18px]">
                      {row.transcationId}
                    </td>
                    <td className="pl-[4rem] font-[500] text-[16px] leading-[18px]">
                      {row.date}
                    </td>
                    <td className="w-[143px] h-[36px] font-[500] text-[16px] leading-[18px]">
                      {row.withdrawal}
                    </td>
                    <td className="px-[4rem] w-[143px] h-[36px] font-[500] text-[16px] leading-[18px]">
                      {row.accNum}
                    </td>
                    <td className="pl-[4rem] w-[105px] h-[18px] font-[500] text-[16px] leading-[18px]">
                      {row.amount}
                    </td>
                    <td
                      className={`pl-[4rem] ${
                        row.status === "Pending"
                          ? "text-[#FB923C]"
                          : "text-[#E24966]"
                      }`}
                    >
                      {row.status === "Pending" ? (
                        <div>{row.status}</div>
                      ) : (
                        <button onClick={openEditUpiDialog}>
                          {row.status}
                        </button>
                      )}
                    </td>
                    {isEditUpiOpen && (
                      <RejectUpiOpen
                        isOpen={isEditUpiOpen}
                        onClose={closeDialog}
                      />
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Wallet;
