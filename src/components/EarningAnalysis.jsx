import React from "react";
import PieCharts from "../graphs/PieCharts";
import Charts from "../graphs/Charts";

const EarningAnalysis = () => {
  return (
    <div className="flex flex-col py-8">
      <div className="flex md:gap-[22rem] xl:gap-[33rem] mb-2">
        <span className="text-xl font-semibold text-white">
          Earning analysis
        </span>
        <span className="text-xl font-semibold text-white md:mr-14 xl:mr-20 md:flex hidden">
          Earning Analysis Graph
        </span>
      </div>

      <div className="md:w-[1000px] xl:w-[1500px] w-[345px] xl:justify-around sm:w-[380px] md:flex-row flex-col md:gap-10 gap-8 flex md-ml-0 ml-[-6px]">
        <div className="flex flex-row bg_cards rounded-[10px] md:w-[100%] w-[358px] px-2">
          <PieCharts /> 
          <div className="flex flex-col item-center justify-center gap-6 md:w-[150px] w-[119px]">
            <div className="flex flex-col">
              <span className="text-white opacity-[50%] font-[500] md:text-[13px] text-[10px] md:leading-[16px] leading-[12px]">
                Total Earning:
              </span>
              <span className="text-white font-[600] md:text-[24px] text-[19px] md:leading-[29px] leading-[19px]">
                ₹63,000
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white opacity-[50%] font-[500] md:text-[13px] text-[10px] md:leading-[16px] leading-[12px]">
                Copartner Earning:
              </span>
              <span className="text-white font-[600] md:text-[24px] text-[19px] md:leading-[29px] leading-[19px]">
                ₹33,000
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white opacity-[50%] font-[500] md:text-[13px] text-[10px] md:leading-[16px] leading-[12px]">
                Personal Earning:
              </span>
              <span className="text-white font-[600] md:text-[24px] text-[19px] md:leading-[29px] leading-[19px]">
                ₹41,000
              </span>
            </div>
          </div>
        </div>

        <span className="text-xl font-semibold text-white md:mr-14 xl:mr-20 md:hidden flex mb-0 mb-[-24px]">
          Earning Analysis Graph
        </span>

        <div className="flex flex-row bg_cards rounded-[10px] md:w-[100%] md:h-[100%] w-[358px] h-[245px]">
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default EarningAnalysis;
