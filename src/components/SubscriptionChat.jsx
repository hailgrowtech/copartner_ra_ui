import React, { useState, useEffect } from "react";
import { deleteIcon } from "../assets";
import SubscriptionChatDialog from './SubscriptionChatDialog';
import SubscriptionChatDiscount from "./SubscriptionChatDiscount";

const SubscriptionChat = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [chat, setChat] = useState([]);

  useEffect(() => {
    const storedChat = JSON.parse(localStorage.getItem("chatData")) || [];
    setChat(storedChat);
  }, []);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const addCourse = (newCourse) => {
    const updatedChat = [...chat, newCourse];
    setChat(updatedChat);
    localStorage.setItem("chatData", JSON.stringify(updatedChat));
    closeDialog();
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="bg-gradient md:pt-[5rem] py-[4rem]">
      <div className="xl:w-[1520px] md:w-[1130px] w-[350px] flex items-center justify-between">
        <span className="w-[176px] h-[27px] font-inter text-[22px] font-[600] leading-[27px] text-white md:ml-0 ml-2">
          Chat Service
        </span>
        <button
          onClick={openDialog}
          className="md:w-[100px] w-[70px] md:h-[40px] h-[30px] rounded-[10px] text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-4 mr-2"
        >
          +Add
        </button>
        {isDialogOpen && (
          <SubscriptionChatDialog
            addCourse={addCourse}
            closeDialog={closeDialog}
          />
        )}
      </div>

      <div className="flex md:mt-[2rem] mt-1">
        {smallScreen ? (
          <div className="flex flex-wrap justify-center items-center ml-[-22px]">
            {chat.map((row, index) => (
              <div
                key={index}
                className="flex flex-col justify-around h-[248px] bg-[#18181B] bg-opacity-[50%] rounded-[30px] md:m-4 m-[10px] p-4 w-[90%] max-w-sm"
              >
                <div className="flex flex-row justify-between">
                  <p className="w-[173px] h-[26px] font-[600] text-[14px] leading-[25px] text-lightWhite">
                    {row.planName}
                  </p>
                  <div className="flex gap-3">
                    <button>
                      <img
                        src={deleteIcon}
                        alt=""
                        className="w-[24px] h-[24px] text-white"
                      />
                    </button>
                  </div>
                </div>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">DATE:</span> {row.date}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[34px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">DURATION:</span> {row.duration}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">AMOUNT:</span> {row.amount}
                </span>
              </div>
            ))}
            <button className="mt-6 md:w-[147px] md:h-[40px] md:flex items-center justify-center flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px]">
              Show More
            </button>
          </div>
        ) : (
          <table className="xl:w-[1520px] md:w-[1130px] h-[230px] bg-[#29303F] rounded-[30px]">
            <thead className="text-[#BABABA] font-inter font-[600] text-[14px] leading-[20px] h-[51px]">
              <tr>
                <th className="text-center">DATE</th>
                <th className="text-center">PLAN NAME</th>
                <th className="text-center">DURATION</th>
                <th className="text-center">AMOUNT</th>
                <th className="text-center">ACTION</th>
              </tr>
            </thead>
            <tbody className="text-lightWhite h-[81px]">
              {chat.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-[#1E1E22]" : ""}>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.date}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.planName}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.duration}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.amount}
                  </td>
                  <td className="flex flex-row items-center justify-center gap-2 py-[2rem]">
                    <button>
                      <img
                        src={deleteIcon}
                        alt=""
                        className="w-[21px] h-[21px] mx-auto flex items-center justify-center"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <SubscriptionChatDiscount />
    </div>
  );
};

export default SubscriptionChat;
