import React, { useState } from "react";
import { expertise_data, withdrawalBank } from "../constants";
import { edit, mail, phone, sebi, addDoc } from "../assets";
import ProfileEdit from "./ProfileEdit";
import BankEditDialog from "./BankEditDialog";
import AddBankDialog from "./AddBankDialog";
import AddUpiDialog from "./AddUpiDialog";
import UpiEditDialog from "./UpiEditDialog";

const handleFileChange = (event) => {
  const file = event.target.files[0];
};

const Setting = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditBankOpen, setIsEditBankOpen] = useState(false);
  const [isEditUpiOpen, setIsEditUpiOpen] = useState(false);
  const [isAddBankOpen, setIsAddBankOpen] = useState(false);
  const [isAddUpiOpen, setIsAddUpiOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const [aboutText, setAboutText] = useState(
    "Lorem ipsum dolor sit amet consectetur. Et fames faucibus sed porttitor. In amet at et sit donec. Eleifend dui rhoncus sit non nunc vitae faucibus lectus molestie. Rhoncus mattis commodo ac lectus at egestas ipsum mi volutpat. Orci nisi vestibulum eu orci. Elit orci pellentesque ornare suscipit. Et quis placerat etiam nunc sed risus erat volutpat."
  );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setAboutText(event.target.value);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const openEditBankDialog = () => {
    setIsEditBankOpen(true);
  };

  const openEditUpiDialog = () => {
    setIsEditUpiOpen(true);
  };

  const openAddBankDialog = () => {
    setIsAddBankOpen(true);
  };

  const openUpiDialog = () => {
    setIsAddUpiOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setIsEditBankOpen(false);
    setIsEditUpiOpen(false);
    setIsAddBankOpen(false);
    setIsAddUpiOpen(false);
  };

  return (
    <div className="pb-[5rem] xl:pl-[12rem] md:pl-[10rem] py-[6rem] bg-gradient min-h-screen"> 
      <div className="xl:w-[1520px] md:w-[1120px] h-[460px] bg_cards p-4 rounded-[24px]">
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
                  <button
                    onClick={openDialog}
                    className="flex flex-row items-center gap-2 justify-center items-center"
                  >
                    <img src={edit} alt="Edit" className="w-[16px] h-[16px]" />
                    <span className="text-white font-[400] text-[15px] leading-[28px]">
                      Edit
                    </span>
                  </button>
                  {isDialogOpen && (
                    <ProfileEdit
                      isDialogOpen={isDialogOpen}
                      closeDialog={closeDialog}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="xl:w-[1520px] md:w-[1120px] h-[430px] px-4 p-8 border-2 border-[#202F49] rounded-[30px] rounded-[30px] flex gap-4 flex-col mt-[4rem]">
        <div className="flex flex-row justify-between">
          <span className="text-white font-inter font-[600] text-[22px] leading-[26px]">
            About
          </span>
          <div className="w-[93px] h-[32px] rounded-[36px] bg-gradient flex justify-center items-center">
            {isEditing ? (
              <button
                className="flex flex-row items-center gap-2 justify-center items-center w-[93px] rounded-[36px] h-[32px] bg-blue-600"
                onClick={handleSaveClick}
              >
                <button className="text-white">Save</button>
              </button>
            ) : (
              <button
                className="flex flex-row items-center w-[93px] h-[32px] rounded-[36px] border border-white gap-2 justify-center items-center"
                onClick={handleEditClick}
              >
                <img src={edit} alt="Edit" className="w-[16px] h-[16px]" />
                <button className="text-white">Edit</button>
              </button>
            )}
          </div>
        </div>
        <div className="text-white opacity-[50%] flex flex-col">
          {isEditing ? (
            <textarea
              value={aboutText}
              onChange={handleInputChange}
              className="bg-transparent border-none resize-y outline-none text-white"
              style={{ height: "320px" }}
            />
          ) : (
            <span>{aboutText}</span>
          )}
        </div>
      </div>

      <div className="xl:w-[1520px] md:w-[1120px] h-[352px] px-4 p-8 border-2 border-[#202F49] rounded-[30px] rounded-[30px] flex gap-4 flex-col mt-[4rem]">
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

      <div className="xl:w-[1520px] md:w-[1120px] h-[397px] px-4 p-8 border-2 border-[#202F49] rounded-[30px] rounded-[30px] flex gap-4 flex-col mt-[4rem]">
        <div className="flex flex-row justify-between">
          <span className="text-white font-inter font-[600] text-[22px] leading-[26px]">
            Bank Details
          </span>
          <div className="w-[128px] h-[32p] rounded-[10px] border-2 border-dotted border-[#ffffff] flex justify-center items-center">
            <button
              onClick={openAddBankDialog}
              className="flex flex-row items-center gap-2 justify-center items-center"
            >
              <span className="text-white font-[400] text-[15px] leading-[28px]">
                +Add Bank
              </span>
            </button>
            {isAddBankOpen && (
              <AddBankDialog
                isAddBankOpen={isAddBankOpen}
                onClose={closeDialog}
              />
            )}
          </div>
        </div>

        <div className="flex flex-row items-center mt-4 justify-between">
          {withdrawalBank.slice(0, 1).map((wallet) => {
            return (
              <button
                onClick={openEditBankDialog}
                key={wallet.id}
                className="w-[310px] h-[76px] rounded-[16px] border border-[#40495C] bg-[#282F3E] p-2"
              >
                <div className="flex flex-row items-center gap-2">
                  <img src={wallet.bankImg} className="w-[74px] h-[59px]" />
                  <div className="flex flex-col gap-2">
                    <span className="font-[500] text-[18px] leading-[21px] text-white">
                      {wallet.bankName}
                    </span>
                    <span className="font-[400] text-[14px] leading-[16px] text-white opacity-[50%]">
                      {wallet.accNum}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
          {isEditBankOpen && (
            <BankEditDialog
              isEditBankOpen={isEditBankOpen}
              closeDialog={closeDialog}
            />
          )}
        </div>

        <hr className="bg-white opacity-[50%] mt-6" />

        <div className="flex flex-row items-center mt-6 justify-between">
          <span className="h-[27px] text-white text-[20px] font-inter font-[500] leading-[16px]">
            UPI Details
          </span>
          <button
            onClick={openUpiDialog}
            className="w-[128px] h-[32p] border-2 border-dotted border-[#ffffff] rounded-[10px] border text-white font-[600] font-inter text-[12px]"
          >
            <span className="text-white font-[400] text-[15px] leading-[28px]">
                +Add UPI
              </span>
          </button>
          {isAddUpiOpen && (
            <AddUpiDialog isOpen={isAddUpiOpen} onClose={closeDialog} />
          )}
        </div>

        <div className="flex flex-row items-center mt-2 justify-between">
          {withdrawalBank.slice(0, 1).map((wallet) => {
            return (
              <button
                onClick={openEditUpiDialog}
                key={wallet.id}
                className="w-[310px] h-[40px] rounded-[8px] border border-[#40495C] bg-[#282F3E]"
              >
                <div className="flex flex-row items-center gap-2 p-1">
                  <img src={wallet.upiImg} className="w-[32px] h-[28px]" />
                  <span className="font-[500] text-[18px] leading-[21px] text-white">
                    {wallet.upiId}
                  </span>
                </div>
              </button>
            );
          })}
          {isEditUpiOpen && (
            <UpiEditDialog isOpen={isEditUpiOpen} onClose={closeDialog} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Setting;
