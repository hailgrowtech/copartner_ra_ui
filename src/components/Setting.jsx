import React from "react";
import { expertise_data } from "../constants";
import { edit, mail, phone, sebi, addDoc } from "../assets";

const handleFileChange = (event) => {
  const file = event.target.files[0];
};

const Setting = () => {
  return (
    <div className="min-h-screen pb-[5rem] xl:px-[18rem] md:px-[10rem] py-[6rem]">
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
                    <span className="text-white font-[400] text-[15px] leading-[28px]">
                      Edit
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[1140px] h-[430px] px-4 p-8 border-2 border-[#202F49] rounded-[30px] rounded-[30px] flex gap-4 flex-col mt-[4rem]">
        <div className="flex flex-row justify-between">
          <span className="text-white font-inter font-[600] text-[22px] leading-[26px]">
            About
          </span>
          <div className="w-[93px] h-[32p] rounded-[36px] border border-[#fffff] flex justify-center items-center">
            <button className="flex flex-row items-center gap-2 justify-center items-center">
              <img src={edit} alt="Edit" className="w-[16px] h-[16px]" />
              <span className="text-white font-[400] text-[15px] leading-[28px]">
                Edit
              </span>
            </button>
          </div>
        </div>
        <div className="text-white opacity-[50%] flex flex-col">
          <span>
            Lorem ipsum dolor sit amet consectetur. Et fames faucibus sed
            porttitor. In amet at et sit donec. Eleifend dui rhoncus sit non
            nunc vitae faucibus lectus molestie. Rhoncus mattis commodo ac
            lectus at egestas ipsum mi volutpat. Orci nisi vestibulum eu orci.
            Elit orci pellentesque ornare suscipit. Et quis placerat etiam nunc
            sed risus erat volutpat.
          </span>
          <br />
          <span>
            Lorem ipsum dolor sit amet consectetur. Nibh lectus aliquam sagittis
            nisl faucibus. Sed adipiscing condimentum volutpat cursus in risus
            sed sit. Ipsum aliquam urna porttitor eu. Volutpat ac sit at semper
            tortor vulputate. Purus pulvinar vestibulum cras odio. Congue amet
            sagittis dui pellentesque consectetur pellentesque et fermentum.
            Arcu elementum tempor nulla quis aenean fusce ut vulputate. A quam
            vitae magna pellentesque. Ut volutpat adipiscing purus faucibus duis
            orci. Accumsan venenatis eu vitae interdum dolor. Nunc at nibh
            habitant condimentum vitae. Semper luctus vulputate lacinia sit diam
            tellus id vitae. Morbi aliquet bibendum scelerisque vestibulum
            aliquet venenatis eu et. Proin bibendum eget lectus consequat id
            vitae. Eu hendrerit lobortis turpis quam ornare egestas tincidunt
            donec nulla. Justo nisi ac diam mauris cursus turpis lacus.
            Vulputate cras sem nec id eget. Cras lectus vestibulum dictum enim.
            Mauris ultrices etiam ac facilisis malesuada. Odio accumsan
            fringilla malesuada faucibus fusce pellentesque. Non nunc cursus
            nisl odio. Pellentesque laoreet molestie proin tincidunt cursus.
            Integer non odio turpis ac sem aliquam in ante congue. Erat pharetra
            sed semper duis duis penatibus. Ut congue interdum cras convallis eu
            nibh quis. Arcu at accumsan neque ultricies tellus massa leo nulla
            sed.
          </span>
        </div>
      </div>

      <div className="w-[1140px] h-[352px] px-4 p-8 border-2 border-[#202F49] rounded-[30px] rounded-[30px] flex gap-4 flex-col mt-[4rem]">
        <div className="flex flex-row justify-between">
          <span className="text-white font-inter font-[600] text-[22px] leading-[26px]">
            Documents
          </span>
          <div className="w-[93px] h-[32p] rounded-[36px] border border-[#fffff] flex justify-center items-center">
            <button className="flex flex-row items-center gap-2 justify-center items-center">
              <img src={edit} alt="Edit" className="w-[16px] h-[16px]" />
              <span className="text-white font-[400] text-[15px] leading-[28px]">
                Edit
              </span>
            </button>
          </div>
        </div>

        <label
          htmlFor="fileInput"
          className="relative w-[236px] h-[238px] border-2 border-dotted border-[#ffffff] cursor-pointer"
        >
          <input
            id="fileInput"
            type="file"
            className="absolute inset-0 opacity-0 w-full h-full"
            onChange={handleFileChange}
          />

          <img
            src={addDoc}
            alt="Add_Doc"
            className="w-[95px] h-[95px] ml-16 mt-[2rem]"
          />
          <span className="absolute bottom-4 left-0 right-0 text-center w-full font-inter font-[400] text-[13px] leading-[16px] text-white opacity-[50%] mb-[2rem]">
            Upload Documents
          </span>
        </label>
      </div>

      <div className="w-[1140px] h-[397px] px-4 p-8 border-2 border-[#202F49] rounded-[30px] rounded-[30px] flex gap-4 flex-col mt-[4rem]">
        <div className="flex flex-row justify-between">
          <span className="text-white font-inter font-[600] text-[22px] leading-[26px]">
            Bank Details
          </span>
          <div className="w-[93px] h-[32p] rounded-[36px] border border-[#fffff] flex justify-center items-center">
            <button className="flex flex-row items-center gap-2 justify-center items-center">
              <img src={edit} alt="Edit" className="w-[16px] h-[16px]" />
              <span className="text-white font-[400] text-[15px] leading-[28px]">
                Edit
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex gap-12 flex-row mt-2">
            <div className="flex flex-row items-center w-[245px] h-[50px]">
              <span className="text-white opacity-[50%] font-inter font-[500] text-[16px] leading-[28px] w-[140px] h-[28px]">
                Bank Name:
              </span>
              <span className="bg-[#202F49] w-[180px] h-[50px] rounded-[30px] text-white font-[500] text-[16px] leading-[28px] p-2 text-center">
                HDFC Bank
              </span>
            </div>
            <div className="flex flex-row items-center w-[331px] h-[50px]">
              <span className="text-white opacity-[50%] font-inter font-[500] text-[16px] leading-[28px] w-[147px] h-[28px]">
                Account Number:
              </span>
              <span className="bg-[#202F49] w-[180px] h-[50px] rounded-[30px] text-white font-[500] text-[16px] leading-[28px] p-2 text-center">
                987612541000
              </span>
            </div>
            <div className="flex flex-row items-center w-[330px] h-[50px]">
              <span className="text-white opacity-[50%] font-inter font-[500] text-[16px] leading-[28px] w-[100px] h-[28px]">
                IFSC Code:
              </span>
              <span className="bg-[#202F49] w-[258px] h-[50px] rounded-[30px] text-white font-[500] text-[16px] leading-[28px] p-2 text-center">
                XYZ12100SXI0
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center w-[372px] h-[50px]">
                <span className="text-white opacity-[50%] w-[182px] h-[28px] font-[600] text-[16px] leading-[28px]">Account Holder Name:</span>
                <span className="bg-[#202F49] w-[180px] h-[50px] rounded-[30px] text-white font-[500] text-[16px] leading-[28px] p-2 text-center">
                Arun Kumar
                </span>
            </div>
            <button className="w-[98px] h-[38px] border-2 text-white opacity-[50%] rounded-[20px] border-dotted">+Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
