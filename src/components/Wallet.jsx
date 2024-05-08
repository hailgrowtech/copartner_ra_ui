import React, { useState, useEffect } from "react";
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
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
    <div className="pb-[5rem] xl:pl-[12rem] md:pl-[10rem] md:py-[6rem] pt-[8rem] bg-gradient min-h-screen">
      <div className="xl:w-[1520px] md:w-[1130px] w-[350px] flex md:flex-row flex-col justify-between">
        <span className="md:w-[176px] w-[58px] md:h-[27px] h-[28px] font-inter md:text-[22px] text-[20px] font-[600] leading-[27px] text-[#ffffff]">
          Wallet
        </span>
        <div className="flex flex-row justify-between items-center md:mr-4 mr-0">
          <span className="md:w-[320px] w-[233px] md:h-[27px] h-[19px] text-white font-inter font-[600] md:text-[22px] text-[16px] md:leading-[27px] leading-[19px]">
            Withdrawal Balance :{" "}
            <span className="text-white opacity-[40%]">₹30,000</span>
          </span>
          <button
            onClick={openDialog}
            className="md:w-[147px] w-[128px] md:h-[40px] h-[35px] rounded-[10px] border text-black bg-[#ffffff] font-[600] font-inter text-[12px]"
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
            <div className="flex justify-between items-center">
              <span className="text-white w-[210px] h-[27px] font-inter font-[600] text-[22px] leading-[27px]">
                Transaction History
              </span>
              <button className="border-solid border-[1px] border-white rounded-[8px] md:hidden block p-2">
                <img src={filter} alt="Filter" className="w-[20px] h-[20px]" />
              </button>
            </div>
            <div className="flex flex-row gap-4">
              <button
                onClick={() => setShowTransactions("transaction")}
                className={`w-[95px] h-[40px] rounded-[10px] border-solid border-[1px] border-white text-black ${
                  showTransactions === "transaction"
                    ? "bg-[#ffffff] font-[600] font-inter text-[12px]"
                    : "bg-transparent text-white font-[600] font-inter text-[12px]"
                }`}
              >
                Transaction
              </button>
              <button
                onClick={() => setShowTransactions("withdrawal")}
                className={`w-[100px] h-[40px] rounded-[10px] border-solid border-[1px] border-white text-black ${
                  showTransactions === "withdrawal"
                    ? "bg-[#ffffff] font-[600] font-inter text-[12px]"
                    : "bg-transparent text-white font-[600] font-inter text-[12px]"
                }`}
              >
                Withdrawal
              </button>
              <button
                onClick={() => setShowTransactions("request")}
                className={`w-[140px] h-[40px] rounded-[10px] border-solid border-[1px] border-white text-black ${
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
                className="w-[20px] h-[20px] mr-2 md:block hidden"
              />
              Filter
            </button>
          </div>
        </div>

        {showTransactions === "transaction" && (
          <>
            {smallScreen ? (
              <div className="flex mr-[12rem] flex-wrap justify-center items-center">
                {transcationData.slice(0, 5).map((row, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-around w-[361px] h-[248px] bg-[#18181B] bg-opacity-[50%] rounded-[30px] md:m-4 m-[10px] p-4 w-[90%] max-w-sm"
                  >
                    <div className="flex flex-row justify-between">
                      <p className="w-[173px] h-[26px] font-[600] text-[16px] leading-[25px] text-lightWhite">
                        {row.transcationId}
                      </p>
                      <img
                        src={row.invoice}
                        alt=""
                        className="w-[24px] h-[24px] text-white"
                      />
                    </div>
                    <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">DATE:</span> {row.date}
                    </span>
                    <span className="flex items-center justify-between sm:w-[305px] h-[34px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">SUBSCRIPTION:</span>{" "}
                      {row.subscription}
                    </span>
                    <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">PLAN NAME:</span>{" "}
                      {row.planName}
                    </span>
                    <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">NAME:</span> {row.name}
                    </span>
                    <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">AMOUNT:</span>{" "}
                      {row.amount}
                    </span>
                  </div>
                ))}
                <button className="md:w-[147px] md:h-[40px] md:flex items-center justify-center flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px]">
                  Show More
                </button>
              </div>
            ) : (
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
          </>
        )}

        {showTransactions === "withdrawal" && (
          <>
            {smallScreen ? (
              <div className="flex mr-[12rem] flex-wrap justify-center items-center">
                {withdrawalData.slice(0, 5).map((row, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-around w-[361px] h-[248px] bg-[#18181B] bg-opacity-[50%] rounded-[30px] md:m-4 m-[10px] p-4 w-[90%] max-w-sm"
                  >
                    <div className="flex flex-row justify-between">
                      <p className="w-[173px] h-[26px] font-[600] text-[16px] leading-[25px] text-lightWhite">
                        {row.transcationId}
                      </p>
                      <img
                        src={row.invoice}
                        alt=""
                        className="w-[24px] h-[24px] text-white"
                      />
                    </div>
                    <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">DATE:</span> {row.date}
                    </span>
                    <span className="flex items-center justify-between sm:w-[305px] h-[34px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">BANK:</span>{" "}
                      {row.withdrawal}
                    </span>
                    <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">ACCOUNT NUMBER:</span>{" "}
                      {row.accNum}
                    </span>
                    <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">AMOUNT:</span>{" "}
                      {row.amount}
                    </span>
                  </div>
                ))}
                <button className="md:w-[147px] md:h-[40px] md:flex items-center justify-center flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px]">
                  Show More
                </button>
              </div>
            ) : (
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
          </>
        )}

        {showTransactions === "request" && (
          <>
            {smallScreen ? (
              <div className="flex mr-[12rem] flex-wrap justify-center items-center">
                {withdrawalData.slice(0, 5).map((row, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-around w-[361px] h-[248px] bg-[#18181B] bg-opacity-[50%] rounded-[30px] md:m-4 m-[10px] p-4 w-[90%] max-w-sm"
                  >
                    <div className="flex flex-row justify-between">
                      <p className="w-[173px] h-[26px] font-[600] text-[16px] leading-[25px] text-lightWhite">
                        {row.transcationId}
                      </p>
                      <div
                        className="font-[600] text-[16px] leading-[25px] text-lightWhite pl-[4rem]"
                        style={{
                          color:
                            row.status === "Pending" ? "#FB923C" : "#E24966",
                        }}
                      >
                        {row.status === "Pending" ? (
                          <div>{row.status}</div>
                        ) : (
                          <button className="text-[16px]" onClick={openEditUpiDialog}>
                            {row.status}
                          </button>
                        )}
                        {isEditUpiOpen && (
                          <RejectUpiOpen
                            isOpen={isEditUpiOpen}
                            onClose={closeDialog}
                          />
                        )}
                      </div>
                    </div>
                    <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">DATE:</span> {row.date}
                    </span>
                    <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">BANK:</span>{" "}
                      {row.withdrawal}
                    </span>
                    <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">ACCOUNT NUMBER:</span>{" "}
                      {row.accNum}
                    </span>
                    <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                      <span className="text-dimWhite">AMOUNT:</span>{" "}
                      {row.amount}
                    </span>
                  </div>
                ))}
                <button className="md:w-[147px] md:h-[40px] md:flex items-center justify-center flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px]">
                  Show More
                </button>
              </div>
            ) : (
              <table className="xl:w-[1520px] md:w-[1130px] h-[497px] px-[1rem] bg-[#29303F] rounded-[30px]">
                <thead className="text-dimWhite w-[1084px] h-[51px]">
                  <tr>
                    <th className="text-start pl-[4rem]">Request ID</th>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Wallet;
