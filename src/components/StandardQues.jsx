import React, { useState, useEffect } from "react";
import StandardQuesDialog from "./StandardQuesDialog";

const StandardQues = () => {
  const [standardQuesData, setStandardQuesData] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const stackholderId = sessionStorage.getItem("stackholderId");

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleAddQuestion = (question, answer) => {
    setStandardQuesData([...standardQuesData, { question, answer }]);
    setIsDialogOpen(false);
  };

  return (
    <div className="pb-[5rem] xl:pl-[12rem] md:pl-[10rem] pl-6 md:py-[6rem] pt-[8rem] bg-gradient min-h-screen">
      <div className="xl:w-[1520px] md:w-[1130px] w-[350px] flex items-center justify-between">
        <span className="md:w-[206px] w-[168px] md:h-[27px] h-[28px] font-inter md:text-[22px] text-[20px] font-[600] leading-[27px] text-[#ffffff]">
          Standard Questions
        </span>
        <button
          onClick={openDialog}
          className="md:w-[100px] w-[70px] md:h-[40px] h-[30px] rounded-[10px] text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-4 mr-2"
        >
          +Add
        </button>
        {isDialogOpen && (
          <StandardQuesDialog
            isDialogOpen={isDialogOpen}
            closeDialog={closeDialog}
            handleAddQuestion={handleAddQuestion}
          />
        )}
      </div>

      {standardQuesData.length === 0 ? (
        <div className="text-white opacity-[50%] font-[600] text-[28px] text-center mt-6">
          No Data Found, Please Add Your Queries
        </div>
      ) : (
        <div className="grid grid-cols-1 md:flex flex-col gap-4 md:mt-[4rem] mt-[3rem] items-center justify-center md:ml-0 ml-[-0.6rem]">
          {standardQuesData.map((data, index) => (
            <div
              key={index}
              className="border-2 border-[#202F49] rounded-[30px] md:w-[1120px] w-[360px] md:h-auto flex flex-col gap-4 p-6"
            >
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <label
                    className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                      w-[80px] h-[26px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[13px] text-center"
                  >
                    Question
                  </label>
                  <textarea
                    typeof="text"
                    value={data.question}
                    readOnly
                    rows="4"
                    className="block p-2 rounded-md text-white opacity-[50%] border border-[#40495C] bg-transparent md:w-full h-[90px] w-[105%]"
                  ></textarea>
                </div>

                <div className="relative">
                  <label
                    className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                      w-[60px] h-[26px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[13px] text-center"
                  >
                    Answer
                  </label>
                  <textarea
                    typeof="text"
                    value={data.answer}
                    readOnly
                    rows="4"
                    className="block p-2 rounded-md text-white opacity-[50%] border border-[#40495C] bg-transparent md:w-full w-[105%]"
                  ></textarea>
                </div>

                <div className="flex flex-row gap-4 items-right">
                  <div className="flex items-center justify-center bg-white border border-white rounded-[8px] w-[100px] h-[40px]">
                    <button className="text-[14px]">Edit</button>
                  </div>

                  <div className="flex items-center justify-center bg-transparent border border-[#D0667A] text-[#D0667A] rounded-[8px] w-[100px] h-[40px]">
                    <button className="text-[14px]">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StandardQues;
