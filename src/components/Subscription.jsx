import React from "react";
import { subscriptionData } from "../constants";

const Subscription = () => {
  return (
    <div className="pb-[5rem] px-[10rem] py-[6rem] bg-gradient min-h-screen">
      <div className="w-[1130px] flex justify-between">
        <span className="w-[176px] h-[27px] font-inter text-[22px] font-[600] leading-[27px] text-white">
          Service
        </span>
        <button className="w-[100px] h-[40px] rounded-[10px] border text-white font-[600] font-inter text-[12px]">
          +Add
        </button>
      </div>

      <div className="flex mt-[3rem]">
        <table className="w-[1130px] h-[230px] border border-[#29303F] rounded-[30px]">
          <thead className="text-[#BABABA] bg-gradient font-inter font-[600] text-[14px] leading-[20px] h-[51px]">
            <tr>
              <th className="text-center">DATE</th>
              <th className="text-center">SERVICE TYPE</th>
              <th className="text-center">PLAN NAME</th>
              <th className="text-center">DURATION</th>
              <th className="text-center">AMOUNT</th>
              <th className="text-center">ACTIVE USER</th>
              <th className="text-center">ACTIVE</th>
            </tr>
          </thead>
          <tbody className="text-lightWhite h-[81px]">
            {subscriptionData.map((row, index) => {
              return (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#29303F]" : "bg-gradient"}
                >
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.date}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.subType}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.plan}
                  </td>
                  <td className="py-2 text-center font-[500] text-[16px] leading-[18px]">
                    {row.duration}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.amount}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.activeUser}
                  </td>
                  <td className="flex flex-row items-center justify-center gap-2 py-[2rem]">
                    <button>
                    <img
                      src={row.activeEdit}
                      alt=""
                      className="w-[21px] h-[21px] mx-auto"
                    />
                    </button>
                    <button>
                    <img
                      src={row.activeDel}
                      alt=""
                      className="w-[21px] h-[21px] mx-auto"
                    />
                    </button>
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

export default Subscription;
