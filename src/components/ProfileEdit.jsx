import React, { useState, useEffect } from "react";
import { closeIcon, dropdown } from "../assets";
import axios from "axios";

const ProfileEdit = ({ closeDialog, stackholderId, myCard, fetchDetails }) => {
  const [expertTypeId, setExpertTypeId] = useState("");
  const [experienceType, setExperienceType] = useState("");
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [freeTelegramLink, setFreeTelegramLink] = useState("");
  const [membersInTelegram, setMembersInTelegram] = useState("");
  const [chatId, setChatId] = useState("");
  const [premiumTelegramLink, setPremiumTelegramLink] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [sebiRegNo, setSebiRegNo] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [originalData, setOriginalData] = useState({});

  const expertTypeOptions = ["Option", "Commodity", "Equity"];
  const experienceOptions = ["1+ Year", "2+ Years", "3+ Years", "4+ Years", "5+ Years"];

  useEffect(() => {
    if (myCard) {
      setName(myCard.name);
      setMobileNumber(myCard.mobileNumber);
      setEmail(myCard.email);
      setFreeTelegramLink(myCard.telegramChannel);
      setMembersInTelegram(myCard.telegramFollower);
      setChatId(myCard.chatId);
      setPremiumTelegramLink(myCard.premiumTelegramChannel);
      setImagePath(myCard.expertImagePath);
      setSebiRegNo(myCard.sebiRegNo);
      setExpertTypeId(myCard.expertTypeId);
      setExperienceType(myCard.experience || "");

      setOriginalData({
        name: myCard.name,
        mobileNumber: myCard.mobileNumber,
        email: myCard.email,
        freeTelegramLink: myCard.telegramChannel,
        membersInTelegram: myCard.telegramFollower,
        chatId: myCard.chatId,
        premiumTelegramLink: myCard.premiumTelegramChannel,
        imagePath: myCard.expertImagePath,
        sebiRegNo: myCard.sebiRegNo,
        expertTypeId: myCard.expertTypeId,
        experienceType: myCard.experience || "",
      });
    }
  }, [myCard]);

  const generatePatchOperations = (original, updated) => {
    const operations = [];
    for (const key in updated) {
      if (original[key] !== updated[key]) {
        operations.push({
          op: "replace",
          path: `/${key}`,
          value: updated[key],
        });
      }
    }
    return operations;
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("https://copartners.in:5134/api/AWSStorage?prefix=expertImagePath", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.fileUrl; // Assuming the response contains the URL of the uploaded image
    } catch (error) {
      console.error("Image upload failed:", error);
      throw new Error("Image upload failed");
    }
  };

  const handleChange = async () => {
    const EDIT_PROFILE = `https://copartners.in:5132/api/Experts?Id=${stackholderId}`;

    let uploadedImagePath = imagePath;

    if (typeof imagePath === "object") {
      try {
        uploadedImagePath = await uploadImage(imagePath);
      } catch (error) {
        setError("An error occurred while uploading the image.");
        return;
      }
    }

    const updatedData = {
      name: name,
      mobileNumber: mobileNumber,
      email: email,
      telegramChannel: freeTelegramLink,
      telegramFollower: parseInt(membersInTelegram),
      chatId: chatId,
      premiumTelegramChannel: premiumTelegramLink,
      expertImagePath: uploadedImagePath,
      sebiRegNo: sebiRegNo,
      expertTypeId: expertTypeOptions.indexOf(expertTypeId) + 1,
      experience: experienceOptions.indexOf(experienceType) + 1,
    };

    const patchOperations = generatePatchOperations(originalData, updatedData);

    try {
      await axios.patch(EDIT_PROFILE, patchOperations, {
        headers: {
          "Content-Type": "application/json-patch+json",
        },
      });
      setSuccess("Profile updated successfully!");
      fetchDetails();
      setError(null);
      setOriginalData(updatedData);
    } catch (error) {
      setError("An error occurred while updating the profile.");
      setSuccess(null);
    }
  };

  const handleSubClick = (option) => {
    setExpertTypeId(option);
    setIsSubscriptionOpen(false);
  };

  const handleExpClick = (year) => {
    setExperienceType(year);
    setIsExperienceOpen(false);
  };

  const toggleSubscriptionDropdown = () => {
    setIsSubscriptionOpen(!isSubscriptionOpen);
  };

  const toggleExpDropdown = () => {
    setIsExperienceOpen(!isExperienceOpen);
  };

  const closeSubscriptionDropdown = () => {
    setIsSubscriptionOpen(false);
    setIsExperienceOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePath(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePath(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center">
      <div className="fixed inset-0 z-[999] flex items-center py-[8rem] justify-center bg-black bg-opacity-[40%]">
        <div className="bg-[#2E374B] rounded-lg md:w-[1084px] w-[378px] md:h-full h-[600px] overflow-auto p-8">
          <div className="flex items-center justify-between">
            <h2 className="md:h-[52px] font-inter font-[700] md:text-[30px] md:text-[24px] text-[18px] md:leading-[51px] text-new md:ml-0 ml-[-0.8rem]">
              Profile Edit
            </h2>
            <button onClick={closeDialog} className="md:mr-0 mr-[-1.4rem]">
              <img
                src={closeIcon}
                alt="Close_Icon"
                className="md:w-[35px] w-[40px] md:h-[35px] h-[40px]"
              />
            </button>
          </div>
          <div className="flex flex-col mt-8 gap-2 md:ml-0 ml-[-1rem]">
            <span className="h-[23px] text-white md:text-[20px] text-[18px] font-inter font-[500] leading-[16px]">
              Upload Profile Image
            </span>
            <label
              htmlFor="fileInput"
              className="relative md:w-[482px] w-[342px] h-[142px] border-2 border-dotted border-[#ffffff] opacity-[50%] rounded-[10px] cursor-pointer"
            >
              <input
                id="fileInput"
                type="file"
                className="absolute inset-0 opacity-0 w-full h-full"
                onChange={handleFileChange}
              />
              <span className="flex items-center justify-center py-14 font-inter font-[400] text-[13px] leading-[16px] text-white opacity-[50%]">
                Select
              </span>
            </label>

            {imagePath && typeof imagePath === "string" && (
              <div className="mt-4">
                <img
                  src={imagePath}
                  alt="Profile Preview"
                  className="w-[100px] h-[100px] rounded-full object-cover"
                />
              </div>
            )}
          </div>

          <div className="flex md:flex-row flex-col md:justify-between md:mt-8 mt-4 md:ml-0 ml-[-16px] md:gap-0 gap-4">
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[80px] w-[60px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onClick={closeSubscriptionDropdown}
                  type="text"
                  id="default-input"
                  placeholder="Name"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[130px] w-[110px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Mobile Number
                </label>
                <input
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  onClick={closeSubscriptionDropdown}
                  type="number"
                  id="default-input"
                  placeholder="Enter Mobile Number"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between md:mt-8 mt-4 md:ml-0 ml-[-16px] md:gap-0 gap-4">
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[80px] w-[70px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  MAIL ID
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onClick={closeSubscriptionDropdown}
                  type="email"
                  id="default-input"
                  placeholder="Enter your Mail ID"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="expertTypeId"
                className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                    md:w-[110px] w-[90px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
              >
                Expertise In
              </label>
              <div className="relative">
                <div className="relative">
                  <input
                    id="expertTypeId"
                    value={expertTypeId}
                    onChange={(e) => setExpertTypeId(e.target.value)}
                    readOnly
                    onClick={toggleSubscriptionDropdown}
                    className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                  />
                  <img
                    src={dropdown}
                    alt="DropDown"
                    className="absolute inset-y-0 right-3 w-[14px] h-[14px] top-[50%] transform -translate-y-1/2"
                  />
                </div>
                {isSubscriptionOpen && (
                  <div className="absolute z-10 mt-2 w-[482px] rounded-md bg-white shadow-lg">
                    <ul className="py-1">
                      {expertTypeOptions.map((option) => (
                        <li
                          key={option}
                          onClick={() => handleSubClick(option)}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col md:justify-between md:mt-8 mt-4 md:ml-0 ml-[-16px] md:gap-0 gap-4">
            <div className="relative">
              <label
                htmlFor="expertTypeId"
                className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                    md:w-[100px] w-[80px] h-[26px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
              >
                Experience
              </label>
              <div className="relative">
                <div className="relative">
                  <input
                    id="experienceType"
                    value={experienceType}
                    onChange={(e) => setExperienceType(e.target.value)}
                    readOnly
                    onClick={toggleExpDropdown}
                    className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                  />
                  <img
                    src={dropdown}
                    alt="DropDown"
                    className="absolute inset-y-0 right-3 w-[14px] h-[14px] top-[50%] transform -translate-y-1/2"
                  />
                </div>
                {isExperienceOpen && (
                  <div className="absolute z-10 mt-2 w-[482px] rounded-md bg-white shadow-lg">
                    <ul className="py-1">
                      {experienceOptions.map((year) => (
                        <li
                          key={year}
                          onClick={() => handleExpClick(year)}
                          className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {year}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[220px] w-[190px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Free Telegram Channel Link
                </label>
                <input
                  value={freeTelegramLink}
                  onChange={(e) => setFreeTelegramLink(e.target.value)}
                  onClick={closeSubscriptionDropdown}
                  type="link"
                  id="default-input"
                  placeholder="Telegram Channel Link"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between md:mt-8 mt-4 md:ml-0 ml-[-16px] md:gap-0 gap-4">
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[235px] w-[210px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Members In Telegram Channel
                </label>
                <input
                  value={membersInTelegram}
                  onChange={(e) => setMembersInTelegram(e.target.value)}
                  onClick={closeSubscriptionDropdown}
                  type="text"
                  id="default-input"
                  placeholder="Enter Members"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[200px] w-[180px] h-[26px] rounded-[8px] font-[400] text-[14px] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  SEBI Registration Number
                </label>
                <input
                  value={sebiRegNo}
                  onChange={(e) => setSebiRegNo(e.target.value)}
                  onClick={closeSubscriptionDropdown}
                  type="number"
                  id="default-input"
                  placeholder="Enter SEBI Registration Number"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between md:mt-8 mt-4 md:ml-0 ml-[-16px] md:gap-0 gap-4">
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[235px] w-[210px] md:h-[26px] h-[25px] rounded-[8px] font-[400] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Premium Telegram Channel Link
                </label>
                <input
                  value={premiumTelegramLink}
                  onChange={(e) => setPremiumTelegramLink(e.target.value)}
                  type="link"
                  id="default-input"
                  placeholder="Paste Link"
                  className="md:w-[482px] w-[345px] py-2 px-4 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
            <div className="relative">
              <div className="mb-0">
                <label
                  className="flex items-center justify-center bg-[#282F3E] text-white opacity-[50%]
                  md:w-[80px] w-[80px] h-[26px] rounded-[8px] font-[400] text-[14px] md:text-[14px] text-[13px] md:leading-[16px] leading-[15px] text-center"
                >
                  Chat ID
                </label>
                <input
                  value={chatId}
                  onChange={(e) => setChatId(e.target.value)}
                  onClick={closeSubscriptionDropdown}
                  type="number"
                  id="default-input"
                  placeholder="Enter ChatID"
                  className="md:w-[482px] w-[345px] px-4 py-2 rounded-md text-white border border-[#40495C] bg-[#282F3E]"
                />
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between md:mt-8 mt-4 md:ml-0 ml-[-16px] md:gap-0 gap-4">
            <button
              onClick={handleChange}
              className="w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save Changes
            </button>
          </div>

          {error && <div className="text-red-500 mt-4">{error}</div>}
          {success && <div className="text-green-500 mt-4">{success}</div>}
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;