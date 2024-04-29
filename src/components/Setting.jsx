import React from "react";
import { expertise_data } from "../constants";
import { edit, mail, phone, sebi } from "../assets";

const Setting = () => {
  return (
    <div className="min-h-screen pb-[5rem] px-[10rem] py-[6rem]">
      <div className="w-[1142px] h-[460px] bg_cards p-4 rounded-[24px]">
        {expertise_data.map((expert, index) => (
          <div className="flex flex-col" key={index}>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <span className="w-[331px] h-[67px] font-inter font-[700] text-[57px] leading-[66px] text-gradient">
                    {expert.name}
                  </span>
                  <span className="text-[#E4E4E7] opacity-[40%] font-inter font-[500] text-[17px] leading-[22px]">
                    {expert.title}
                  </span>
                </div>
                <div className="w-[278px] h-[53px] flex flex-row justify-between">
                  <div className="w-[84px] h-[53px] flex flex-col">
                    <span className="text-[#E4E4E7] opacity-[40%] font-[400] text-[14px] leading-[17px] font-inter w-[83px] h-[17px]">
                      {expert.experience}
                    </span>
                    <span className="text-white w-[83px] h-[20] font-[600] text-[16px] text-center leading-[20px]">
                      {expert.totalExp}
                    </span>
                  </div>
                  <div className="bg-white w-[1px] h-[35px]"></div>
                  <div className="w-[84px] h-[53px] flex flex-col">
                    <span className="text-[#E4E4E7] opacity-[40%] font-[400] text-[14px] leading-[17px] font-inter w-[83px] h-[17px]">
                      {expert.followers}
                    </span>
                    <span className="text-white w-[83px] h-[20] font-[600] text-[16px] ml-4 leading-[20px]">
                      {expert.totalFollowers}
                    </span>
                  </div>
                </div>
                <span className="w-[457px] h-[51px] font-[500] text-inter text-[16px] leading-[25px] text-white">
                  Take your team up a level with easy-to-use tools, effortless
                  templates and efficient workflows.
                </span>
                <div className="flex flex-row mt-4">
                  <div className="absolute flex flex-row gap-4 justify-center items-center">
                    <button className="w-[373px] h-[31px] flex items-center justify-center rounded-[21.5px] border-[1.5px] border-[#4e4e4ecc] mt-2 md:mt-0">
                      <button className="flex justify-center items-center gap-2">
                        <img
                          src={expert.telegram}
                          alt="Telegram"
                          className="w-[18.6px] h-[18.6px]"
                        />
                        <span className="w-[300px] h-[23px] text-white font-[400] text-[12px] leading-[22px]">
                          {expert.greet}
                        </span>
                        <img
                          src={expert.arrowIcon}
                          alt="arrow"
                          className="w-[13px] h-[13px]"
                        />
                      </button>
                    </button>
                    <button className="w-[373px] h-[31px] flex items-center justify-center rounded-[21.5px] border-[1.5px] border-[#4e4e4ecc] mt-2 md:mt-0">
                      <button className="flex justify-center items-center gap-2">
                        <img
                          src={expert.telegram}
                          alt="Telegram"
                          className="w-[18.6px] h-[18.6px]"
                        />
                        <span className="w-[300px] h-[23px] text-white font-[400] text-[12px] leading-[22px]">
                          {expert.greet}
                        </span>
                        <img
                          src={expert.arrowIcon}
                          alt="arrow"
                          className="w-[13px] h-[13px]"
                        />
                      </button>
                    </button>
                  </div>
                </div>
                <div className="flex flex-row justify-between mt-[3rem]">
                  <div className="flex flex-row items-center gap-2">
                    <img src={mail} alt="Mail" className="w-[24px] h-[24px]" />
                    <span className="text-white opacity-[50%] font-inter font-[500] text-[16px] leading-[28px]">
                      Arunkumar@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <img
                      src={phone}
                      alt="Phone"
                      className="w-[24px] h-[24px]"
                    />
                    <span className="text-white opacity-[50%] font-inter font-[500] text-[16px] leading-[28px]">
                      9876545321
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2 mt-2">
                  <img
                    src={sebi}
                    alt="SEDI_User"
                    className="w-[24px] h-[24px]"
                  />
                  <span className="text-white opacity-[50%] font-[500] font-inter text-[16px] leading-[28px]">
                    SEBI Registration Number
                  </span>
                </div>
                <span className="text-white opacity-[50%] font-[500] font-inter text-[20px] leading-[25px] mt-3">
                  Your Relationship Manager
                </span>

                <div className="flex flex-row">
                  <div className="flex absolute gap-6 flex-row mt-4">
                    <div className="flex flex-row items-center w-[245px] h-[50px]">
                      <span className="text-white opacity-[50%] font-inter font-[500] text-[16px] leading-[28px] w-[55px] h-[28px]">
                        Name:
                      </span>
                      <span className="bg-[#22262F] w-[180px] h-[50px] rounded-[30px] text-white font-[500] text-[16px] leading-[28px] p-2 text-center">
                        Aditya Kumar
                      </span>
                    </div>
                    <div className="flex flex-row items-center w-[317px] h-[50px]">
                      <span className="text-white opacity-[50%] font-inter font-[500] text-[16px] leading-[28px] w-[127px] h-[28px]">
                        Mobile Number:
                      </span>
                      <span className="bg-[#22262F] w-[180px] h-[50px] rounded-[30px] text-white font-[500] text-[16px] leading-[28px] p-2 text-center">
                        987612540
                      </span>
                    </div>
                    <div className="flex flex-row items-center w-[330px] h-[50px]">
                      <span className="text-white opacity-[50%] font-inter font-[500] text-[16px] leading-[28px] w-[62px] h-[28px]">
                        Mail ID:
                      </span>
                      <span className="bg-[#22262F] w-[258px] h-[50px] rounded-[30px] text-white font-[500] text-[16px] leading-[28px] p-2 text-center">
                        Adityakumar@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[344px] relative profile-image_1 mb-4 z-7">
                <img
                  src={expert.icon}
                  alt="background"
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
                <img
                  src={expert.userImg}
                  alt="User"
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-row gap-2 w-[70px] h-[32px]">
                  <img
                    src={expert.ratingIcon}
                    alt={expert.rating}
                    className="w-[25px] h-[25px]"
                  />
                  <span className="w-[38px] h-[32px] font-[600] text-[25px] leading-[31px] text-[#E1E1E3]">
                    {expert.rating}
                  </span>
                </div>
                <div className="w-[93px] h-[32p] rounded-[36px] border border-[#fffff] flex justify-center items-center">
                    <button className="flex flex-row items-center gap-2 justify-center items-center">
                    <img src={edit} alt="Edit" className="w-[16px] h-[16px]" />
                    <span className="text-white font-[400] text-[15px] leading-[28px]">Edit</span>
                    </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Setting;
