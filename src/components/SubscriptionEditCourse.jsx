import React, { useState } from "react";
import { closeIcon, deleteIcon, dropdown } from "../assets";
import { toast } from "react-toastify";

const SubscriptionEditCourse = ({ closeDialog, addCourse }) => {
  const [courseName, setCourseName] = useState("");
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");
  const [des, setDes] = useState("");
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [titleName, setTitleName] = useState("");
  const [tagLine, setTagLine] = useState("");

  const handleError = (message) => {
    toast.error(message, {
      position: "top-right",
    });
  };

  const handleSubmit = () => {
    if (!courseName || !amount || !duration || !level) {
      handleError("Please fill all fields");
      return;
    }

    const newCourse = {
      date: new Date().toLocaleDateString(),
      courseName,
      amount,
      duration,
      level,
      activeUser: 0, // Assuming this is the default value
    };

    addCourse(newCourse);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg md:w-[1084px] w-[378px] h-[80%] overflow-y-auto p-8 relative">
          <div className="flex items-center justify-between mb-4">
            <h2 className="md:h-[52px] font-inter font-[700] md:text-[30px] text-[18px] md:leading-[51px] text-new md:ml-0 ml-[-0.8rem]">
              Edit Course
            </h2>
            <button onClick={closeDialog} className="md:mr-0 mr-[-1.4rem]">
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="md:w-[35px] w-[40px] md:h-[35px] h-[40px]"
              />
            </button>
          </div>

          <div className="flex flex-col gap-4 md:w-[1006px]">
            <div className="flex md:flex-row flex-col md:gap-12 gap-4 md:ml-0 ml-[-16px]">
              <div className="relative">
                <div className="mb-0">
                  <label
                    className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[110px] w-[100px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                  >
                    Course Name
                  </label>
                  <input
                    type="text"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                    id="default-input"
                    className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="mb-0">
                  <label
                    className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[70px] w-[68px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                  >
                    Amount
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    id="default-input"
                    className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                  />
                </div>
              </div>
            </div>

            <div className="flex md:flex-row flex-col md:gap-12 gap-4 md:ml-0 ml-[-16px]">
              <div className="relative">
                <div className="mb-0">
                  <label
                    className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[70px] w-[68px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                  >
                    Duration
                  </label>
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    id="default-input"
                    className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="mb-0">
                  <label
                    className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[70px] w-[68px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                  >
                    Level
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={level}
                      readOnly
                      onClick={() => setIsLevelOpen(!isLevelOpen)}
                      className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E] cursor-pointer"
                    />
                    <img
                      src={dropdown}
                      alt="DropDown"
                      className="absolute inset-y-0 md:right-3 right-[-6px] w-[14px] h-[14px] top-[50%] transform -translate-y-1/2"
                    />
                    {isLevelOpen && (
                      <div className="absolute z-10 mt-2 md:w-[482px] w-[345px] rounded-md bg-white shadow-lg">
                        <ul className="py-1">
                          <li
                            onClick={() => {
                              setLevel("Basic");
                              setIsLevelOpen(false);
                            }}
                            className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Basic
                          </li>
                          <li
                            onClick={() => {
                              setLevel("Medium");
                              setIsLevelOpen(false);
                            }}
                            className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Medium
                          </li>
                          <li
                            onClick={() => {
                              setLevel("Hard");
                              setIsLevelOpen(false);
                            }}
                            className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Hard
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative md:ml-0 ml-[-16px]">
              <label
                className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[182px] w-[160px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
              >
                Upload Sessions Video
              </label>

              <div className="border border-[#40495C] bg-[#282F3E] rounded-lg md:w-[1006px] w-[345px] md:h-[320px] h-[500px] overflow-auto flex md:flex-col flex-row items-center justify-center">
                <div className="flex md:flex-row flex-col border border-[#40495C] bg-[#282F3E] rounded-lg md:w-[926px] w-[320px] md:h-[250px]">
                  <div className="md:w-[404px] h-[180px] md:h-[209px] flex items-center justify-center">
                    <button className="text-white opacity-[30%] text-[16px]">
                      Select Video
                    </button>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="p-4 rounded-lg">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:w-[448px] h-[57px]">
                          <label
                            className="flex items-center justify-center bg-[#2E374A] text-white opacity-[50%]
                            md:w-[102px] w-[90px] md:h-[30px] h-[25px] p-1 rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                          >
                            Title Name
                          </label>
                          <input
                            type="text"
                            value={titleName}
                            onChange={(e) => setTitleName(e.target.value)}
                            className="py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                          />
                        </div>

                        <div className="flex flex-col md:w-[448px] h-[57px]">
                          <label
                            className="flex items-center justify-center bg-[#2E374A] text-white opacity-[50%]
                            md:w-[90px] w-[80px] md:h-[30px] h-[25px] p-1 rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                          >
                            Tag Line
                          </label>
                          <input
                            type="text"
                            value={tagLine}
                            onChange={(e) => setTagLine(e.target.value)}
                            className="py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                          />
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex flex-col md:w-[380px] h-[57px]">
                            <label
                              className="flex items-center justify-center bg-[#2E374A] text-white opacity-[50%]
                            md:w-[90px] w-[90px] md:h-[30px] h-[25px] p-1 rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                            >
                              Duration
                            </label>
                            <input
                              type="number"
                              value={duration}
                              onChange={(e) => setDuration(e.target.value)}
                              className="py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                            />
                          </div>
                          <button className="md:mt-6 mt-8">
                            <img
                              src={deleteIcon}
                              alt="Delete_Btn"
                              className="w-[22px] h-[22px]"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative md:ml-0 ml-[-16px]">
              <label
                className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  w-[90px] h-[26px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[13px] text-center"
              >
                Description
              </label>
              <textarea
                typeof="text"
                onChange={(e) => setDes(e.target.value)}
                id="des-input"
                value={des}
                rows="4"
                className="block p-2 rounded-md text-white border border-[#40495C] bg-[#282F3E] md:w-full w-[105%]"
                placeholder="Write something here"
              ></textarea>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-2 justify-end py-4">
            <button
              onClick={handleSubmit}
              className="px-4 w-full py-2 bg-blue-500 text-white md:text-[14px] text-[14px] rounded-lg hover:bg-blue-600"
            >
              Confirm
            </button>
            <button
              onClick={closeDialog}
              className="px-4 w-full py-2 bg-gray-300 md:text-[14px] text-[14px] text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionEditCourse;
