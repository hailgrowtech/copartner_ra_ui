import React, { useState } from "react";
import { expertise_data, withdrawalBank, upiBank } from "../constants";
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
    <div className="pb-[5rem] xl:pl-[12rem] md:pl-[10rem] pl-6 md:py-[6rem] pt-[8rem] bg-gradient min-h-screen">
      <div className="xl:w-[1530px] md:w-[1122px] md:h-[420px] xl-h-[480px] w-[361px] h-[470px] md:ml-0 ml-[-8px] bg_cards p-4 rounded-[24px]">
        {expertise_data.map((expert, index) => (
          <div className="flex flex-col" key={index}>
            <div className="flex flex-row">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <span className="md:w-[331px] w-[152px] md:h-[67px] h-[31px] font-inter font-[700] md:text-[57px] text-[26px] md:leading-[66px] leading-[30px] text-gradient">
                    {expert.name}
                  </span>
                  <span className="text-white font-inter font-[500] md:text-[17px] text-[12px] md:leading-[22px]">
                    {expert.title}
                  </span>
                </div>
                <div className="md:w-[278px] w-[176px] md:h-[53px] h-[25px] flex flex-row justify-between">
                  <div className="md:w-[84px] w-[54px] md:h-[53px] h-[25px] flex flex-col">
                    <span className="text-[#E4E4E7] opacity-[40%] font-[400] md:text-[14px] text-[10px] md:leading-[17px] leading-[12px] font-inter md:w-[83px] w-[56px] md:h-[17px]">
                      {expert.experience}
                    </span>
                    <span className="text-white md:w-[83px] w-[54px] md:h-[20] h-[12px] font-[600] md:text-[16px] text-[10px] text-center leading-[20px]">
                      {expert.totalExp}
                    </span>
                  </div>
                  <div className="bg-white w-[1px] md:h-[35px] h-[22px]"></div>
                  <div className="w-[84px] h-[53px] flex flex-col">
                    <span className="text-[#E4E4E7] opacity-[40%] font-[400] md:text-[14px] text-[10px] md:leading-[17px] leading-[12px] font-inter md:w-[83px] w-[56px] md:h-[17px]">
                      {expert.followers}
                    </span>
                    <span className="text-white md:w-[83px] w-[54px] md:h-[20] h-[12px] font-[600] md:text-[16px] text-[10px] text-center leading-[20px]">
                      {expert.totalFollowers}
                    </span>
                  </div>
                </div>

                <div className="flex md:flex-row flex-col md:gap-6 gap-0 justify-between md:pt-0 pt-[1rem]">
                  <div className="flex flex-row items-center gap-2">
                    <img
                      src={mail}
                      alt="Mail"
                      className="md:w-[24px] w-[16px] md:h-[24px] h-[16px]"
                    />
                    <span className="text-white opacity-[50%] font-inter font-[500] md:text-[16px] text-[12px] leading-[28px]">
                      Arunkumar@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <img
                      src={phone}
                      alt="Phone"
                      className="md:w-[24px] w-[16px] md:h-[24px] h-[16px]"
                    />
                    <span className="text-white opacity-[50%] font-inter font-[500] md:text-[16px] text-[12px] leading-[28px]">
                      9876545321
                    </span>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-2 md:py-3 py-2">
                  <img
                    src={sebi}
                    alt="SEDI_User"
                    className="md:w-[24px] w-[16px] md:h-[24px] h-[16px]"
                  />
                  <span className="text-white opacity-[50%] font-[500] font-inter md:text-[16px] text-[12px] leading-[28px]">
                    SEBI Registration Number
                  </span>
                </div>

                <div className="flex md:flex-row flex-col md:ml-0 ">
                  <div className="absolute flex md:flex-row z-[9] flex-col md:gap-4 justify-center md:items-center md:ml-0 ml-[-6px]">
                    <button className="md:w-[373px] w-[255px] md:h-[31px] h-[23px] flex items-center justify-center rounded-[21.5px] border-solid border-[1px] border-[#4e4e4ecc] mt-2 md:mt-0">
                      <button className="flex justify-center md:p-2 items-center gap-2">
                        <img
                          src={expert.telegram}
                          alt="Telegram"
                          className="md:w-[18.6px] w-[14px] h-[14px] md:h-[18.6px]"
                        />
                        <span className="md:w-[300px] h-[13px] md:h-[23px] text-white font-[400] md:text-[12px] text-[8px] md:leading-[22px] leading-[12px]">
                          {expert.greet}
                        </span>
                        <img
                          src={expert.arrowIcon}
                          alt="arrow"
                          className="md:w-[13px] w-[10px] h-[10px] md:h-[13px]"
                        />
                      </button>
                    </button>
                    <button className="md:w-[373px] w-[255px] md:h-[31px] h-[23px] flex items-center justify-center rounded-[21.5px] border-solid border-[1px] border-[#4e4e4ecc] mt-2 md:mt-0">
                      <button className="flex justify-center items-center gap-2">
                        <img
                          src={expert.telegram}
                          alt="Telegram"
                          className="md:w-[18.6px] w-[14px] h-[14px] md:h-[18.6px]"
                        />
                        <span className="md:w-[300px] h-[13px] md:h-[23px] text-white font-[400] md:text-[12px] text-[8px] md:leading-[22px] leading-[12px]">
                          {expert.greet}
                        </span>
                        <img
                          src={expert.arrowIcon}
                          alt="arrow"
                          className="md:w-[13px] w-[10px] h-[10px] md:h-[13px]"
                        />
                      </button>
                    </button>
                  </div>
                </div>

                <span className="text-white opacity-[50%] font-[500] font-inter md:text-[20px] text-[14px] md:leading-[25px] md:mt-[3rem] mt-[5rem]">
                  Your Relationship Manager
                </span>

                <div className="flex md:flex-row flex-col">
                  <div className="flex absolute md:gap-6 gap-3 md:flex-row flex-col mt-4">
                    <div className="flex flex-row items-center md:w-[245px] w-[147px] md:h-[50px] h-[30px]">
                      <span className="text-white opacity-[50%] font-inter font-[500] md:text-[16px] text-[10px] md:leading-[28px] leading-[17px] md:w-[55px] w-[33px] md:h-[28px] h-[17px]">
                        Name:
                      </span>
                      <span className="bg-[#22262F] md:w-[180px] w-[108px] md:ml-0 ml-2 md:h-[50px] h-[30px] rounded-[30px] text-white font-[500] md:text-[16px] text-[10px] md:leading-[28px] leading-[19px] md:p-2 p-1 text-center">
                        Aditya Kumar
                      </span>
                    </div>
                    <div className="flex flex-row items-center md:w-[317px] w-[192px] md:h-[50px] h-[30px]">
                      <span className="text-white opacity-[50%] font-inter font-[500] md:text-[16px] text-[10px] md:leading-[28px] leading-[17px] md:w-[127px] w-[90px] md:h-[28px] h-[17px]">
                        Mobile Number:
                      </span>
                      <span className="bg-[#22262F] md:w-[180px] w-[108px] md:h-[50px] h-[30px] rounded-[30px] text-white font-[500] md:text-[16px] text-[10px] md:leading-[28px] leading-[17px] p-2 text-center">
                        987612540
                      </span>
                    </div>
                    <div className="flex flex-row gap-1 items-center md:w-[330px] w-[198px] md:h-[50px] h-[30px]">
                      <span className="text-white opacity-[50%] font-inter font-[500] md:text-[16px] text-[10px] md:leading-[28px] leading-[17px] md:w-[62px] w-[37px] md:h-[28px] h-[17px]">
                        Mail ID:
                      </span>
                      <span className="bg-[#22262F] md:w-[258px] w-[155px] md:h-[50px] h-[30px] rounded-[30px] text-white font-[500] md:text-[16px] text-[10px] md:leading-[28px] leading-[28px] md:p-2 text-center">
                        Adityakumar@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:h-[344px] sm:h-[240px] md:max-h-[250px] max-h-[180px] md:right-0 right-[2rem] relative profile-image_1 mb-4">
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

              <div className="flex md:ml-[0rem] ml-[-6rem] flex-col md:justify-between md:gap-0 gap-[10rem]">
                <div className="flex flex-row gap-2 w-[70px] h-[32px]">
                  <img
                    src={expert.ratingIcon}
                    alt={expert.rating}
                    className="md:w-[25px] w-[14px] md:h-[25px] h-[14px]"
                  />
                  <span className="md:w-[38px] w-[22px] md:h-[32px] h-[19px] font-[600] md:text-[25px] text-[15px] md:leading-[31px] leading-[18px] text-[#E1E1E3]">
                    {expert.rating}
                  </span>
                </div>
                <div className="md:w-[93px] w-[46px] md:h-[32px] h-[20px] rounded-[36px] border border-[#fffff] flex justify-center items-center">
                  <button
                    onClick={openDialog}
                    className="flex flex-row items-center gap-2 justify-center items-center"
                  >
                    <img
                      src={edit}
                      alt="Edit"
                      className="md:w-[16px] w-[8px] md:h-[16px] h-[8px]"
                    />
                    <span className="text-white font-[400] md:text-[15px] text-[7.5px] md:leading-[28px] leading-[14px]">
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

      <div className="xl:w-[1520px] md:w-[1120px] md:h-[430px] w-[363px] h-full px-4 p-8 border-2 border-[#202F49] rounded-[30px] rounded-[30px] flex gap-4 flex-col md:mt-[4rem] mt-[2rem] md:ml-0 ml-[-0.5rem]">
        <div className="flex flex-row items-center justify-between">
          <span className="text-white font-inter font-[600] text-[22px] leading-[26px]">
            About
          </span>
          <div className="w-[93px] h-[32px] rounded-[36px] bg-gradient flex justify-center items-center md:mr-0 mr-[-8px]">
            {isEditing ? (
              <button
                className="flex flex-row items-center gap-2 justify-center items-center w-[64px] md:h-[32px] h-[22px] rounded-[36px] bg-blue-600"
                onClick={handleSaveClick}
              >
                <button className="text-white md:text-[16px] text-[10px] md:leading-[26px] leading-[20px]">
                  Save
                </button>
              </button>
            ) : (
              <button
                className="flex flex-row items-center md:w-[93px] w-[64px] md:h-[32px] h-[22px] rounded-[36px] border-solid border-[1px] border-white gap-2 justify-center items-center"
                onClick={handleEditClick}
              >
                <img
                  src={edit}
                  alt="Edit"
                  className="md:w-[16px] w-[12px] h-[12px] md:h-[16px]"
                />
                <button className="text-white md:text-[16px] text-[10px] md:leading-[26px] leading-[20px]">
                  Edit
                </button>
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
            <span className="md:text-[20px] md:leading-[26px] text-[14px] leading-[18px]">
              {aboutText}
            </span>
          )}
        </div>
      </div>

      <div className="xl:w-[1520px] md:w-[1120px] md:h-[352px] w-[360px] px-4 p-8 border-2 border-[#202F49] rounded-[30px] rounded-[30px] flex gap-4 flex-col md:mt-[4rem] mt-[2rem] md:ml-0 ml-[-0.5rem]">
        <div className="flex flex-row justify-between">
          <span className="text-white font-inter font-[600] text-[22px] leading-[26px]">
            Documents
          </span>
          <div className="md:w-[93px] w-[64px] md:h-[32px] h-[22px] rounded-[36px] border border-[#fffff] flex justify-center items-center">
            <button className="flex flex-row items-center gap-2 justify-center items-center">
              <img
                src={edit}
                alt="Edit"
                className="md:w-[16px] w-[12px] h-[12px] md:h-[16px]"
              />
              <span className="text-white md:text-[16px] text-[10px] md:leading-[26px] leading-[20px]">
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

      <div className="xl:w-[1520px] md:w-[1120px] md:h-[397px] w-[360px] px-4 p-8 border-2 border-[#202F49] rounded-[30px] rounded-[30px] flex gap-4 flex-col md:mt-[4rem] mt-[2rem] md:ml-0 ml-[-0.5rem]">
        <div className="flex flex-row justify-between">
          <span className="text-white font-inter font-[600] md:text-[22px] text-[18px] leading-[21px] md:leading-[26px]">
            Bank Details
          </span>
          <div className="md:w-[128px] w-[68px] h-[30px] md:h-[32p] rounded-[10px] border-2 border-dotted border-[#ffffff] flex justify-center items-center">
            <button
              onClick={openAddBankDialog}
              className="flex flex-row items-center gap-2 justify-center items-center"
            >
              <span className="text-white font-[400] md:text-[15px] text-[10.5px] leading-[5.7px] md:leading-[28px]">
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
          <span className="text-white font-inter font-[600] md:text-[22px] text-[18px] leading-[21px] md:leading-[26px]">
            UPI Details
          </span>
          <button
            onClick={openUpiDialog}
            className="md:w-[128px] w-[68px] md:h-[32px] h-[30px] border-2 border-dotted border-[#ffffff] rounded-[10px] border text-white font-[600] font-inter text-[12px]"
          >
            <span className="text-white font-[400] md:text-[15px] text-[10.5px] leading-[5.7px] md:leading-[28px]">
              +Add UPI
            </span>
          </button>
          {isAddUpiOpen && (
            <AddUpiDialog isOpen={isAddUpiOpen} onClose={closeDialog} />
          )}
        </div>

        <div className="flex flex-row items-center mt-2 justify-between">
          {upiBank.slice(0, 1).map((wallet) => {
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
