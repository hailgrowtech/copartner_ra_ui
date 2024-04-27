import React from "react";
import { userAnalysis, expertise_data } from "../constants";
import { graph, graph1 } from "../assets";

const Dashboard = () => {
  return (
    <div className="pb-[5rem] px-[10rem] py-[6rem]">
      <div className="flex items-center">
        <span className="w-[176px] h-[27px] font-inter text-[22px] font-[600] leading-[27px] text-white">
          User Analysis
        </span>
        <div className="flex ml-[38rem] gap-[2rem]">
          <button className="w-[85px] h-[40px] rounded-[10px] bg-white text-black font-[600] font-inter text-[12px]">
            Weekly
          </button>
          <button className="w-[100px] h-[40px] rounded-[10px] border text-white font-[600] font-inter text-[12px]">
            Monthly
          </button>
          <button className="w-[100px] h-[40px] rounded-[10px] border text-white font-[600] font-inter text-[12px]">
            Custom
          </button>
        </div>
      </div>

      <div className="flex flex-row mt-8 gap-6 py-8">
        {userAnalysis.map((user) => (
          <div
            className="flex flex-col justify-between w-[268px] h-[269px] rounded-[25px] bg_cards p-4"
            key={user.id}
          >
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-2">
                <img
                  src={user.telegramIcon}
                  alt={user.telegram}
                  className="w-[54px] h-[54px]"
                />
                <span className="text-white">{user.telegram}</span>
              </div>
              <span className="text-[#E4E4E7] font-[400] font-inter text-[14px] leading-[16px] opacity-[40%]">
                {user.joined}
              </span>
            </div>

            <div className="flex flex-col gap-[1rem] mb-[2rem]">
              <div className="flex flex-row justify-between w-[232px] h-[20px]">
                <span className="text-[#E4E4E7] opacity-[40%]">
                  {user.totalVisit}
                </span>
                <span className="text-[#E4E4E7] opacity-[40%]">
                  {user.totalVisitIs}
                </span>
              </div>
              <div className="flex flex-row justify-between w-[232px] h-[20px]">
                <span className="text-[#E4E4E7] opacity-[40%]">
                  {user.user}
                </span>
                <span className="text-[#25A2DE]">{user.totalUser}</span>
              </div>
              <div className="flex flex-row justify-between w-[232px] h-[20px]">
                <span className="text-[#E4E4E7] opacity-[40%]">
                  {user.noInterested}
                </span>
                <span className="text-[#D0667A]">{user.noInterestedIs}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col py-8">
        <div className="flex gap-[18rem]">
          <span className="w-[174px] h-[27px] text-[22px] font-inter font-[600] leading-[27px] text-white">
            Earning analysis
          </span>
          <span className="w-[248px] h-[27px] text-[22px] font-inter font-[600] leading-[27px] text-white">
            Earning Analysis Graph
          </span>
        </div>

        <div className="w-[1184px] h-[297px] flex flex-row">
          <img src={graph} alt="" className="w-[854px] h-[397px]" />
          <img src={graph1} alt="" className="w-[905px] h-[397px]" />
        </div>
      </div>

      <div className="py-12 flex flex-col gap-4">
        <span className="font-inter font-[600] text-[22px] leading-[27px] w-[246px] h-[27px] text-white">
          Subscription : Services
        </span>

        <div className="w-[1082px] h-[460px] bg_cards p-4 pl-8 rounded-[24px]">
          {expertise_data.map((expert) => (
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className="flex flex-col gap-4">
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
                  <span className="text-white w-[187px] h-[22px] font-inter font-[500] text-[14px] leading-[22px]">
                    {expert.content}
                  </span>
                  <button className="w-[373px] h-[31px] flex items-center justify-center rounded-[21.5px] border-[1.5px] border-[#4e4e4ecc] mt-2 md:mt-0">
                    <button className="flex justify-center items-center gap-2">
                      <img
                        src={expert.telegram}
                        alt="Telegram"
                        className="w-[18.6px] h-[18.6px]"
                      />
                      <button className="w-[300px] h-[23px] text-white font-[400] text-[12px] leading-[22px]">
                        {expert.greet}
                      </button>
                      <img
                        src={expert.arrowIcon}
                        alt="arrow"
                        className="w-[13px] h-[13px]"
                      />
                    </button>
                  </button>
                </div>

                <div className="h-[344px] relative profile-image_1 mb-4">
                  <img
                    src={expert.icon}
                    alt="background"
                    className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
                  />
                  <img
                    src={expert.userImg}
                    alt="User"
                    className="absolute top-0 left-0 w-full h-full object-contain rounded-t-[11px]"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-row gap-2 w-[70px] h-[32px]">
                    <img src={expert.ratingIcon} alt={expert.rating} className="w-[25px] h-[25px]" />
                    <span className="w-[38px] h-[32px] font-[600] text-[25px] leading-[31px] text-[#E1E1E3]">{expert.rating}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-[3rem] px-[2rem] mt-[2rem]">
                <div className="w-[165px] flex flex-col">
                  <span className="text-gradient-2 w-[89px] h-[32px] font-inter font-[700] text-[23px]">
                    Monthly
                  </span>
                  <div className="w-[135px] h-[67px] flex flex-col">
                    <span className="text-white w-[120px] font-poppins font-[700] text-[36px]">
                      ₹1,999
                    </span>
                    <span className="text-[#E4E4E7] opacity-[40%] w-[108px] font-inter font-[500] text-[14.5px]">
                      {expert.access}
                    </span>
                  </div>
                  <div className="flex flex-row w-[184px] h-[22px] gap-2 font-[500] text-[17px] mt-2">
                    <span className="text-[#E4E4E7] opacity-[40%]">
                      {expert.activeUser}
                    </span>
                    <span className="text-white">{expert.valueActiveUser}</span>
                  </div>
                </div>
                <div className="bg-white w-[2px] h-[130px]"></div>
                <div className="w-[165px] flex flex-col">
                  <span className="text-gradient-2 w-[110px] h-[32px] font-inter font-[700] text-[23px]">
                    Quarterly
                  </span>
                  <div className="w-[135px] h-[67px] flex flex-col">
                    <span className="text-white w-[120px] font-poppins font-[700] text-[36px]">
                      ₹3,999
                    </span>
                    <span className="text-[#E4E4E7] opacity-[40%] w-[108px] font-inter font-[500] text-[14.5px]">
                      {expert.access}
                    </span>
                  </div>
                  <div className="flex flex-row w-[184px] h-[22px] gap-2 font-[500] text-[17px] mt-2">
                    <span className="text-[#E4E4E7] opacity-[40%]">
                      {expert.activeUser}
                    </span>
                    <span className="text-white">{expert.valueActiveUser}</span>
                  </div>
                </div>
                <div className="bg-white w-[2px] h-[130px]"></div>
                <div className="w-[165px] flex flex-col">
                  <span className="text-gradient-2 w-[160px] h-[32px] font-inter font-[700] text-[23px]">
                    Half-Yealy
                  </span>
                  <div className="w-[135px] h-[67px] flex flex-col">
                    <span className="text-white w-[120px] font-poppins font-[700] text-[36px]">
                      ₹5,999
                    </span>
                    <span className="text-[#E4E4E7] opacity-[40%] w-[108px] font-inter font-[500] text-[14.5px]">
                      {expert.access}
                    </span>
                  </div>
                  <div className="flex flex-row w-[184px] h-[22px] gap-2 font-[500] text-[17px] mt-2">
                    <span className="text-[#E4E4E7] opacity-[40%]">
                      {expert.activeUser}
                    </span>
                    <span className="text-white">{expert.valueActiveUser}</span>
                  </div>
                </div>
                <div className="bg-white w-[2px] h-[130px]"></div>
                <div className="w-[165px] flex flex-col">
                  <span className="text-gradient-2 w-[110px] h-[32px] font-inter font-[700] text-[23px]">
                    Yearly
                  </span>
                  <div className="w-[135px] h-[67px] flex flex-col">
                    <span className="text-white w-[120px] font-poppins font-[700] text-[36px]">
                      ₹7,999
                    </span>
                    <span className="text-[#E4E4E7] opacity-[40%] w-[108px] font-inter font-[500] text-[14.5px]">
                      {expert.access}
                    </span>
                  </div>
                  <div className="flex flex-row w-[184px] h-[22px] gap-2 font-[500] text-[17px] mt-2">
                    <span className="text-[#E4E4E7] opacity-[40%]">
                      {expert.activeUser}
                    </span>
                    <span className="text-white">{expert.valueActiveUser}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
