import React, { useState, useEffect } from "react";
import PieCharts from "../graphs/PieCharts";
import Charts from "../graphs/Charts";
import axios from "axios";

const EarningAnalysis = () => {
  const [earingAnalysis, setEaringAnalysis] = useState(null);
  const [userEarning, setUserEarning] = useState({
    copartnerEarning: 0,
    personalEarning: 0,
  });

  const stackholderId = sessionStorage.getItem("stackholderId");

  const EARNING_URL = `https://copartners.in:5135/api/Wallet/GetWalletWithdrawalBalance/${stackholderId}?userType=RA`;

  const USER_EARNING = `https://copartners.in:5132/api/RADashboard/GetDashboardRAListingData/${stackholderId}?page=1&pageSize=10`;

  useEffect(() => {
    const fetchWalletBalance = async () => {
      try {
        const response = await axios.get(EARNING_URL);
        setEaringAnalysis(response.data.data);
      } catch (error) {
        console.error("Error fetching the wallet balance:", error);
        setEaringAnalysis('Error');
      }
    };

    fetchWalletBalance();
  }, []);

  useEffect(() => {
    const fetchEarningBalance = async () => {
      try {
        const response = await axios.get(USER_EARNING);
        const data = response.data.data;

        // Calculate Copartner and Personal Earnings
        let copartnerEarning = 0;
        let personalEarning = 0;

        data.forEach((item) => {
          if (item.amount !== null && item.subscription !== "No Subscrption") {
            if (item.amount !== item.subscriptionAmount) {
              copartnerEarning += item.amount;
            } else {
              personalEarning += item.subscriptionAmount;
            }
          }
        });

        setUserEarning({
          copartnerEarning,
          personalEarning,
        });

        console.log('User Earning data is-', data);
      } catch (error) {
        console.error("Error fetching the earning balance:", error);
        setUserEarning('Error');
      }
    };

    fetchEarningBalance();
  }, []);

  return (
    <div className="flex flex-col py-8">
      <div className="flex md:gap-[28rem] xl:gap-[38rem] mb-2">
        <span className="text-xl font-semibold text-white">
          Earning analysis
        </span>
        <span className="text-xl font-semibold text-white md:mr-14 xl:mr-20 md:flex hidden">
          Earning Analysis Graph
        </span>
      </div>

      <div className="md:w-[1120px] xl:w-[1500px] w-[345px] xl:justify-around sm:w-[380px] md:flex-row flex-col md:gap-10 gap-8 flex xl:ml-[-2.6rem] md:ml-0 ml-[-6px]">
        <div className="flex flex-row bg_cards rounded-[10px] md:w-[100%] w-[358px] px-12">
          {/* <PieCharts />  */}
          <div className="grid grid-col-3 md:flex flex-col md:item-center item-start md:justify-center md:gap-10 gap-7 md:w-[360px] md:h-auto w-[219px] h-[190px] md:py-0 py-4">
            <div className="flex flex-col">
              <span className="text-white font-[500] md:text-[16px] text-[10px] md:leading-[24px] leading-[12px]">
                Total Earning:
              </span>
              <span className="text-gradient  text-white font-[600] md:text-[65px] text-[29px] md:leading-[55px] leading-[24px]">
                ₹{(Number(earingAnalysis?.walletBalance) || 0)}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-[500] md:text-[16px] text-[10px] md:leading-[24px] leading-[12px]">
                Copartner Earning:
              </span>
              <span className="text-gradient  text-white font-[600] md:text-[65px] text-[29px] md:leading-[55px] leading-[24px]">
                ₹{userEarning.copartnerEarning}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-[500] md:text-[16px] text-[10px] md:leading-[24px] leading-[12px]">
                Personal Earning:
              </span>
              <span className="text-gradient  text-white font-[600] md:text-[65px] text-[29px] md:leading-[55px] leading-[24px]">
                ₹{userEarning.personalEarning}
              </span>
            </div>
          </div>
        </div>

        <span className="text-xl font-semibold text-white md:mr-14 xl:mr-20 md:hidden flex mb-0 mb-[-24px]">
          Earning Analysis Graph
        </span>

        <div className="flex flex-row bg_cards rounded-[10px] md:w-[100%] md:h-[400px] w-[358px] h-[405px]">
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default EarningAnalysis;
