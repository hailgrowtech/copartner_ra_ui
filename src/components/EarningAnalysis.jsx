import React from "react";
import PieCharts from "../graphs/PieCharts";
import Charts from "../graphs/Charts";

const EarningAnalysis = () => {
  return (
    <div className="flex flex-col py-8">
      <div className="flex md:gap-[20rem] xl:gap-[33rem] mb-4">
        <span className="text-xl font-semibold text-white">
          Earning analysis
        </span>
        <span className="text-xl font-semibold text-white md:mr-14 xl:mr-20">
          Earning Analysis Graph
        </span>
      </div>

      <div className="md:w-[1000px] xl:w-[1500px] xl:justify-around gap-4 flex">
        <div className="flex flex-row bg_cards rounded-[10px]">
          <PieCharts /> 
          <div className="flex flex-col item-center justify-center gap-6 w-[150px]">
            <div className="flex flex-col">
              <span className="text-white opacity-[50%] font-[500] text-[13px] leading-[16px]">
                Total Earning:
              </span>
              <span className="text-white font-[600] text-[24px] leading-[29px]">
                ₹63,000
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white opacity-[50%] font-[500] text-[13px] leading-[16px]">
                Copartner Earning:
              </span>
              <span className="text-white font-[600] text-[24px] leading-[29px]">
                ₹63,000
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white opacity-[50%] font-[500] text-[13px] leading-[16px]">
                Personal Earning:
              </span>
              <span className="text-white font-[600] text-[24px] leading-[29px]">
                ₹63,000
              </span>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default EarningAnalysis;
