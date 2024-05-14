import React, { useState, useEffect } from "react";
import { subscriptionData } from "../constants";
import SubscriptionDialog from "./SubsciptionDialog";
import { dropdown } from "../assets";
import SubscriptionEditService from "./SubscriptionEditService";

const Subscription = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const openEditDialog = () => {
    setIsEditDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setIsEditDialogOpen(false);
  };

  return (
    <div className="pb-[5rem] xl:pl-[12rem] md:pl-[10rem] pl-6 md:py-[6rem] pt-[8rem] bg-gradient min-h-screen">
      <div className="xl:w-[1520px] md:w-[1130px] w-[350px] flex items-center justify-between">
        <span className="w-[176px] h-[27px] font-inter text-[22px] font-[600] leading-[27px] text-white md:ml-0 ml-2">
          Service
        </span>
        <button
          onClick={openDialog}
          className="md:w-[100px] w-[70px] md:h-[40px] h-[30px] rounded-[10px] text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-4 mr-2"
        >
          +Add
        </button>
        {isDialogOpen && (
          <SubscriptionDialog
            isDialogOpen={isDialogOpen}
            closeDialog={closeDialog}
          />
        )}
      </div>

      <div className="flex md:mt-[3rem] mt-1">
        {smallScreen ? (
          <div className="flex flex-wrap justify-center items-center ml-[-22px]">
            {subscriptionData.map((row, index) => (
              <div
                key={index}
                className="flex flex-col justify-around w-[361px] h-[248px] bg-[#18181B] bg-opacity-[50%] rounded-[30px] md:m-4 m-[10px] p-4 w-[90%] max-w-sm"
              >
                <div className="flex flex-row justify-between">
                  <p className="w-[173px] h-[26px] font-[600] text-[16px] leading-[25px] text-lightWhite">
                    {row.subType}
                  </p>
                  <div className="flex gap-3">
                    <button>
                      <img
                        src={row.activeEdit}
                        onClick={openEditDialog}
                        alt=""
                        className="w-[24px] h-[24px] text-white"
                      />
                    </button>
                    {isEditDialogOpen && (
                      <SubscriptionEditService
                        isEditDialogOpen={isEditDialogOpen}
                        closeDialog={closeDialog}
                      />
                    )}
                    <img
                      src={row.activeDel}
                      alt=""
                      className="w-[24px] h-[24px] text-white"
                    />
                  </div>
                </div>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">DATE:</span> {row.date}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[34px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">SERVICE TYPE:</span>{" "}
                  {row.subType}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">PLAN NAME:</span> {row.plan}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">DURATION:</span> {row.amount}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">AMOUNT:</span> {row.amount}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">ACTIVE USER:</span>{" "}
                  {row.amount}
                </span>
              </div>
            ))}

            <button className="mt-6 md:w-[147px] w-[95px] h-[20px] md:h-[40px] md:flex items-center justify-center flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px]">
              Show More
            </button>
          </div>
        ) : (
          <table className="xl:w-[1520px] md:w-[1130px] h-[230px] bg-[#29303F] rounded-[30px]">
            <thead className="text-[#BABABA] font-inter font-[600] text-[14px] leading-[20px] h-[51px]">
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
                    className={index % 2 === 0 ? "bg-[#1E1E22]" : ""}
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
                          onClick={openEditDialog}
                          alt=""
                          className="w-[21px] h-[21px] mx-auto"
                        />
                      </button>
                      {isEditDialogOpen && (
                        <SubscriptionEditService
                          isEditDialogOpen={isEditDialogOpen}
                          closeDialog={closeDialog}
                        />
                      )}
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
        )}
      </div>
    </div>
  );
};

export default Subscription;
