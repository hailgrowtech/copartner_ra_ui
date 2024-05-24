import React, { useState, useEffect } from "react";
import { filter, invoiceImg, notificationSlider } from "../assets";
import {
  subscriptionData,
  transcationData,
  withdrawalData,
} from "../constants";
import WalletWithdrawal from "./WalletWithdrawal";
import EarningAnalysis from "./EarningAnalysis";
import RejectUpiOpen from "./RejectUpiOpen";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Wallet = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showTransactions, setShowTransactions] = useState("transaction");
  const [isEditUpiOpen, setIsEditUpiOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [transactionTable, setTransactionTable] = useState("");
  const [withdrawalReq, setWithdrawalReq] = useState("");

  const stackholderId = sessionStorage.getItem("stackholderId");

  const WALLET_BALANCE_URL = `https://copartners.in:5135/api/Wallet/GetWalletWithdrawalBalance/${stackholderId}?userType=RA`;

  const TRANSACTION_API = `https://copartners.in:5132/api/RADashboard/GetDashboardRAListingData/${stackholderId}?page=1&pageSize=10`;

  const WITHDRAWAL_REQ_API = `https://copartners.in:5135/api/Withdrawal/GetWithdrawalByUserId/${stackholderId}?userType=RA&page=1&pageSize=10`;

  useEffect(() => {
    const fetchWalletBalance = async () => {
      try {
        const response = await axios.get(WALLET_BALANCE_URL);
        setWalletBalance(response.data.data);
      } catch (error) {
        console.error("Error fetching the wallet balance:", error);
        setWalletBalance("Error");
      }
    };

    fetchWalletBalance();
  }, []);

  useEffect(() => {
    const fetchWalletReqBalance = async () => {
      try {
        const response = await axios.get(WITHDRAWAL_REQ_API);
        setWithdrawalReq(response.data.data);
        console.log("My Withdrawal Req-", response.data);
      } catch (error) {
        console.error("Error fetching the wallet balance:", error);
        setWithdrawalReq("Error");
      }
    };

    fetchWalletReqBalance();
  }, []);

  useEffect(() => {
    const fetchTransactionTable = async () => {
      try {
        const response = await axios.get(TRANSACTION_API);
        console.log("Transaction Table-", response.data);
        setTransactionTable(response.data.data);
      } catch (error) {
        console.error("Error fetching the wallet balance:", error);
        setTransactionTable("Error");
      }
    };

    fetchTransactionTable();
  }, []);

  const handleOpenFilter = () => {
    console.log("Open Filer Is Working");
    setOpenFilter((cur) => !cur);
  };

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="pb-[5rem] xl:pl-[12rem] md:pl-[10rem] pl-6 md:py-[6rem] pt-[8rem] bg-gradient min-h-screen">
      <div className="xl:w-[1520px] md:w-[1130px] w-[350px] flex md:flex-row flex-col justify-between">
        <span className="md:w-[176px] w-[58px] md:h-[27px] h-[28px] font-inter md:text-[22px] text-[20px] font-[600] leading-[27px] text-[#ffffff]">
          Wallet
        </span>
        <div className="flex flex-row justify-between items-center md:mr-4 mr-0">
          <span className="md:w-[320px] w-[233px] md:h-[27px] h-[19px] text-white font-inter font-[600] md:text-[22px] text-[16px] md:leading-[27px] leading-[19px]">
            Withdrawal Balance :{" "}
            <span className="text-white opacity-[40%]">
              ₹{walletBalance?.withdrawalBalance}
            </span>
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
              walletBalance={walletBalance}
            />
          )}
        </div>
      </div>

      <EarningAnalysis stackholderId={stackholderId} />

      <div className="flex flex-col md:gap-6 gap-3">
        <div className="flex flex-row items-center justify-between md:ml-0 ml-[-8px]">
          <div className="xl:w-[1420px] md:w-[1030px] flex flex-col gap-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-white w-[210px] h-[27px] font-inter font-[600] text-[22px] leading-[27px]">
                Transaction History
              </span>

              <div className="relative md:mr-[-90px] ml-0 md:mb-[-4rem] mb-0">
                <button
                  onClick={handleOpenFilter}
                  className="flex items-center justify-center w-[40px] h-[40px] rounded-[10px] border-solid border-[1px] border-white font-[600] font-inter text-[12px] md:mr-0 mr-[8px]"
                >
                  <img
                    src={filter}
                    alt="Filter"
                    className="w-[20px] h-[20px]"
                  />
                </button>
                {openFilter && (
                  <div className="absolute top-full left-[-17rem] z-10 mt-2">
                    <div className="w-[312px] h-[289px] bg-[#2E374B] rounded-lg overflow-auto p-4 flex flex-col items-center gap-4 overflow-hidden">
                      <div className="w-[343px] flex items-center pl-[2rem]">
                        <button
                          className="text-white text-sm rounded hover:bg-gray-600"
                          onClick={handleOpenFilter}
                        >
                          {/* Add button content here */}
                        </button>
                        <h2 className="text-white text-2xl">Filter</h2>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-row gap-2">
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            placeholderText="Start Date"
                            className="w-[140px] p-2 rounded"
                          />
                          <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            placeholderText="End Date"
                            className="w-[140px] p-2 rounded"
                          />
                        </div>

                        <div className="flex flex-col items-start mr-[10rem] gap-2">
                          <h3 className="text-white text-lg">
                            Filter By Price
                          </h3>
                          <label className="text-white">
                            <input
                              type="radio"
                              name="priceFilter"
                              value="lowToHigh"
                              // checked={selectedPriceFilter === "lowToHigh"}
                              // onChange={handleRadioChange}
                              className="mr-2"
                            />
                            Low-To-High
                          </label>
                          <label className="text-white">
                            <input
                              type="radio"
                              name="priceFilter"
                              value="highToLow"
                              // checked={selectedPriceFilter === "highToLow"}
                              // onChange={handleRadioChange}
                              className="mr-2"
                            />
                            High-To-Low
                          </label>
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-white w-[147px] flex justify-center h-[40px] text-[14px] font-[500] text-black rounded-[10px] p-2">
                            Apply
                          </button>
                          <button className="border-solid border-[1px] border-white text-white w-[147px] flex justify-center h-[40px] text-[14px] font-[500] text-black rounded-[10px] p-2">
                            Clear
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
        </div>

        {showTransactions === "transaction" && (
          <>
            {smallScreen ? (
              <div className="flex flex-col pl-[5rem] flex-wrap justify-center items-center">
                {transactionTable &&
                  transactionTable.slice(0, 5).map((row, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-around w-[358px] ml-[-6rem] h-[248px] bg-[#18181B] bg-opacity-[50%] rounded-[30px] md:m-4 m-[10px] p-4"
                    >
                      <div className="flex flex-row justify-between">
                        <p className="w-[173px] h-[26px] font-[600] text-[16px] leading-[25px] text-lightWhite">
                          {row.transcationId}
                        </p>
                        <img
                          src={invoiceImg}
                          alt=""
                          className="w-[24px] h-[24px] text-white"
                        />
                      </div>
                      <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                        <span className="text-dimWhite">DATE:</span>{" "}
                        {formatDate(row.date)}
                      </span>
                      <span className="flex items-center justify-between sm:w-[305px] h-[34px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                        <span className="text-dimWhite">SUBSCRIPTION:</span>{" "}
                        {row.subscription}
                      </span>
                      <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                        <span className="text-dimWhite">PLAN NAME:</span>{" "}
                        {row.subscription}
                      </span>
                      <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                        <span className="text-dimWhite">User Number:</span>{" "}
                        {row.userMobileNo}
                      </span>
                      <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                        <span className="text-dimWhite">AMOUNT:</span>{" "}
                        {row.amount}
                      </span>
                    </div>
                  ))}
                <button className="items-center mr-[6rem] mt-2 justify-center flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite text-[10px] font-[500] leading-[12px]">
                  Show More
                </button>
              </div>
            ) : (
              <table className="xl:w-[1520px] md:w-[1130px] md:h-auto h-[497px] px-[1rem] bg-[#29303F] rounded-[30px]">
                <thead className="text-dimWhite w-[1084px] h-[51px]">
                  <tr>
                    <th className="text-center">Transaction ID</th>
                    <th className="text-start pl-[4rem]">Date</th>
                    <th className="text-start">Subscription</th>
                    <th className="text-end">Plan Name</th>
                    <th className="text-center pl-[4rem]">User Number</th>
                    <th className="text-start pl-[4rem]">Amount</th>
                    <th className="text-center">Invoice</th>
                  </tr>
                </thead>
                <tbody className="text-lightWhite w-[1084px] h-[81px]">
                  {transactionTable &&
                    transactionTable
                      .filter((row) => row.subscription !== "0")
                      .map((row, index) => {
                        return (
                          <tr
                            key={index}
                            className={index % 2 === 0 ? "bg-[#1E1E22]" : ""}
                          >
                            <td className="text-center font-[500] text-[16px] leading-[18px]">
                              {row.transcationId}
                            </td>
                            <td className="pl-[2rem] font-[500] text-[16px] leading-[18px]">
                              {formatDate(row.date)}
                            </td>
                            <td className="pl-[1rem] w-[143px] h-[36px] font-[500] text-[16px] leading-[18px]">
                              {row.subscription}
                            </td>
                            <td className="pl-[4rem] text-center w-[143px] h-[36px] font-[500] text-[16px] leading-[18px]">
                              {/* {row.subscription} */}
                            </td>
                            <td className="pl-[4rem] text-center font-[500] text-[16px] leading-[18px]">
                              {row.userMobileNo}
                            </td>
                            <td className="pl-[4rem] w-[105px] h-[18px] font-[500] text-[16px] leading-[18px]">
                              {row.amount}
                            </td>
                            <td className="py-2">
                              <img
                                src={invoiceImg}
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
              <div className="flex flex-col pl-[5rem] flex-wrap justify-center items-center">
                {withdrawalData.slice(0, 5).map((row, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-around w-[358px] ml-[-6rem] h-[248px] bg-[#18181B] bg-opacity-[50%] rounded-[30px] md:m-4 m-[10px] p-4"
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
                <button className="items-center mr-[6rem] mt-2 justify-center flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite text-[10px] font-[500] leading-[12px]">
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
                          {/* {row.transcationId} */}
                        </td>
                        <td className="pl-[4rem] font-[500] text-[16px] leading-[18px]">
                          {/* {row.date} */}
                        </td>
                        <td className="pl-[4rem] w-[143px] h-[36px] font-[500] text-[16px] leading-[18px]">
                          {row.paymentMode}
                        </td>
                        <td className="pl-[4rem] w-[143px] h-[36px] font-[500] text-[16px] leading-[18px]">
                          {/* {row.accountNumber} */}
                          {row.paymentMode === "Bank" ? row.accountNumber : row.upI_ID}
                        </td>
                        <td className="pl-[4rem] w-[105px] h-[18px] font-[500] text-[16px] leading-[18px]">
                          {row.amount}
                        </td>
                        <td className="pl-[5rem]">
                          <img
                            src={invoiceImg}
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
              <div className="flex flex-col pl-[5rem] flex-wrap justify-center items-center">
                {withdrawalData.slice(0, 5).map((row, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-around w-[358px] ml-[-6rem] ml- h-[248px] bg-[#18181B] bg-opacity-[50%] rounded-[30px] md:m-4 m-[10px] p-4"
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
                          <button
                            className="text-[16px]"
                            onClick={openEditUpiDialog}
                          >
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
                <button className="items-center mr-[6rem] mt-2 justify-center flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite text-[10px] font-[500] leading-[12px]">
                  Show More
                </button>
              </div>
            ) : (
              <table className="xl:w-[1520px] md:w-[1130px] md:h-auto h-[497px] px-[1rem] bg-[#29303F] rounded-[30px]">
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
                  {withdrawalReq &&
                    withdrawalReq.map((row, index) => {
                      return (
                        <tr
                          key={index}
                          className={index % 2 === 0 ? "bg-[#1E1E22]" : ""}
                        >
                          <td className="pl-[4rem] font-[500] text-[16px] leading-[18px]">
                            {/* {row.transcationId} */}
                          </td>
                          <td className="pl-[4rem] font-[500] text-[16px] leading-[18px]">
                            {formatDate(row.createdOn)}
                          </td>
                          <td className="w-[143px] h-[36px] font-[500] text-[16px] leading-[18px]">
                            {row.paymentMode}
                          </td>
                          <td className="px-[4rem] w-[143px] h-[36px] font-[500] text-[16px] leading-[18px]">
                            {/* {row.accountNumber} */}
                            {row.paymentMode === "Bank" ? row.accountNumber : row.upI_ID}
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
