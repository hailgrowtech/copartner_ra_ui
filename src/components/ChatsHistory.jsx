import React, { useState, useEffect } from "react";
import {
  userImg,
  threeDots,
  chatUser1,
  chatUser2,
  audio,
  sendChat,
  attachDoc,
  backImg,
} from "../assets";
import axios from "axios";
import { toast } from "react-toastify";
import ChatBubble from "./ChatBubble";
import { Link } from "react-router-dom";

const ChatsHistory = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [subTable, setSubTable] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [planTypeCounts, setPlanTypeCounts] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [activeTab, setActiveTab] = useState("Active");
  const [activeSubTab, setActiveSubTab] = useState("Premium");
  const [messageInput, setMessageInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      _id: 1,
      isOwnSender: false,
      sender: "",
      dateCreated: new Date(),
      type: "text",
      payload: { text: "Hello Friend, See you tomorrow..." },
    },
    // ... (other initial messages)
  ]);
  const [showHistoryButtons, setShowHistoryButtons] = useState(false);

  const stackholderId = sessionStorage.getItem("stackholderId");

  const handleSuccess = () => {
    toast.success("Successfully Deleted!", {
      position: "top-right",
    });
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      const newMessage = {
        _id: chatMessages.length + 1,
        isOwnSender: true,
        sender: "You",
        dateCreated: new Date(),
        type: "text",
        payload: { text: messageInput },
      };

      setChatMessages([...chatMessages, newMessage]);
      setMessageInput(""); // Clear the input field
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newMessage = {
        _id: chatMessages.length + 1,
        isOwnSender: true,
        sender: "You",
        dateCreated: new Date(),
        type: "file",
        payload: { file: URL.createObjectURL(file), fileName: file.name },
      };

      setChatMessages([...chatMessages, newMessage]);
    }
  };

  const chatUserList = [
    {
      id: 1,
      chatUserImg: chatUser1,
      chatUserName: "Saksham Agarwal",
    },
    {
      id: 2,
      chatUserImg: chatUser2,
      chatUserName: "Shubham Ready",
    },
    {
      id: 3,
      chatUserImg: userImg,
      chatUserName: "Maniraj Iyer",
    },
    {
      id: 4,
      chatUserImg: chatUser1,
      chatUserName: "Saksham Agarwal",
    },
    {
      id: 5,
      chatUserImg: chatUser2,
      chatUserName: "Shubham Ready",
    },
    {
      id: 6,
      chatUserImg: userImg,
      chatUserName: "Maniraj Iyer",
    },
    {
      id: 7,
      chatUserImg: chatUser1,
      chatUserName: "Saksham Agarwal",
    },
    {
      id: 8,
      chatUserImg: chatUser2,
      chatUserName: "Shubham Ready",
    },
    {
      id: 9,
      chatUserImg: userImg,
      chatUserName: "Maniraj Iyer",
    },
  ];

  const handleActiveClick = () => {
    setActiveTab("Active");
    setActiveSubTab("Premium");
    setShowHistoryButtons(false);
  };

  const handleHistoryClick = () => {
    setActiveTab("History");
    setActiveSubTab("PremiumHistory");
    setShowHistoryButtons(true);
  };

  return (
    <div className="pb-[5rem] xl:pl-[12rem] md:pl-[10rem] pl-[1rem] md:py-[6rem] pt-[8rem] bg-gradient min-h-screen">
      <div
        className={`flex ${
          smallScreen ? "flex-col" : "flex-row"
        } bg-[#272F3D] p-4 rounded-[18px] xl:w-[1520px] md:w-[1100px] w-[360px] gap-12`}
      >
        {(!smallScreen || !activeUser) && (
          <div className="w-[300px] h-auto bg-[#272F3D]">
            <div className="flex flex-col gap-4 justify-between">
              <div className="flex gap-4 md:ml-[-1rem] ml-0">
                <Link to="/chats" className="flex flex-row items-center gap-2">
                  <img
                    src={backImg}
                    alt=""
                    className="w-[26px] h-[26px] md:hidden flex"
                  />
                </Link>
                <div
                  className={`w-[70px] cursor-pointer h-[40px] text-center flex items-center justify-center rounded-[10px] border-solid border-[1px] border-white text-black ${
                    activeTab === "Active"
                      ? "bg-[#ffffff] font-[600] font-inter text-[12px]"
                      : "bg-transparent text-white font-[600] font-inter text-[12px]"
                  }`}
                  onClick={handleActiveClick}
                >
                  Active
                </div>
                <div
                  className={`w-[70px] cursor-pointer h-[40px] text-center flex items-center justify-center rounded-[10px] border-solid border-[1px] border-white text-black ${
                    activeTab === "History"
                      ? "bg-[#ffffff] font-[600] font-inter text-[12px]"
                      : "bg-transparent text-white font-[600] font-inter text-[12px]"
                  }`}
                  onClick={handleHistoryClick}
                >
                  History
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <ul className="flex flex-row md:gap-10 gap-4">
                  {activeTab === "Active" && (
                    <>
                      <li
                        className={`w-[70px] cursor-pointer h-[40px] text-center flex items-center justify-center rounded-[10px] border-solid border-[1px] border-white text-black ${
                          activeSubTab === "Premium"
                            ? "bg-[#ffffff] font-[600] font-inter text-[12px]"
                            : "bg-transparent text-white font-[600] font-inter text-[12px]"
                        }`}
                        onClick={() => setActiveSubTab("Premium")}
                      >
                        Premium
                      </li>
                      <li
                        className={`w-[70px] cursor-pointer h-[40px] text-center flex items-center justify-center rounded-[10px] border-solid border-[1px] border-white text-black ${
                          activeSubTab === "Free"
                            ? "bg-[#ffffff] font-[600] font-inter text-[12px]"
                            : "bg-transparent text-white font-[600] font-inter text-[12px]"
                        }`}
                        onClick={() => setActiveSubTab("Free")}
                      >
                        Free
                      </li>
                    </>
                  )}
                  {activeTab === "History" && (
                    <>
                      <li
                        className={`w-[120px] cursor-pointer h-[40px] text-center flex items-center justify-center rounded-[10px] border-solid border-[1px] border-white text-black ${
                          activeSubTab === "PremiumHistory"
                            ? "bg-[#ffffff] font-[600] font-inter text-[12px]"
                            : "bg-transparent text-white font-[600] font-inter text-[12px]"
                        }`}
                        onClick={() => setActiveSubTab("PremiumHistory")}
                      >
                        Premium History
                      </li>
                      <li
                        className={`w-[120px] cursor-pointer h-[40px] text-center flex items-center justify-center rounded-[10px] border-solid border-[1px] border-white text-black ${
                          activeSubTab === "FreeHistory"
                            ? "bg-[#ffffff] font-[600] font-inter text-[12px]"
                            : "bg-transparent text-white font-[600] font-inter text-[12px]"
                        }`}
                        onClick={() => setActiveSubTab("FreeHistory")}
                      >
                        Free History
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="w-[362px] max-h-[500px] flex gap-4 flex-col mt-4 overflow-y-auto">
              {chatUserList.map((users) => {
                const isActive = activeUser && activeUser.id === users.id;
                return (
                  <div
                    key={users.id}
                    className={`flex max-h-[490px] flex-row gap-4 cursor-pointer ${
                      isActive ? "bg-[#2E374B]" : "bg-transparent"
                    } p-2 rounded`}
                    onClick={() => setActiveUser(users)}
                  >
                    <img
                      src={users.chatUserImg}
                      alt="User Name"
                      className="w-[58px] h-[58px] rounded-full"
                    />
                    <div className="flex flex-col w-[267px] h-[57px]">
                      <span
                        className={`font-inter font-[600] text-[17.5px] ${
                          isActive ? "text-white" : "text-white opacity-[50%]"
                        }`}
                      >
                        {users.chatUserName}
                      </span>
                      <span className="text-white font-[500] font-inter text-[15px] leading-[23px]">
                        Hello Friend, See you tomorrow...
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="w-full md:h-[600px] h-auto flex flex-col">
          {activeUser ? (
            <>
              <div className="w-[702px] h-[83px] flex justify-between flex-row items-center">
                <div className="w-[301px] h-[65px] flex flex-row gap-4">
                  {smallScreen && (
                    <button
                      onClick={() => setActiveUser(null)}
                      className="text-white mb-4"
                    >
                      <img src={backImg} className="w-[30px] h-[30px]" />
                    </button>
                  )}
                  <img
                    src={activeUser.chatUserImg}
                    alt="CHAT_USER"
                    className="w-[58px] h-[58px] rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-white font-[500] text-[20px] leading-[32px]">
                      {activeUser.chatUserName}
                    </span>
                    <span className="font-[500] text-[17px] leading-[28px] text-white opacity-[50%]">
                      online
                    </span>
                  </div>
                </div>
                <button>
                  <img src={threeDots} alt="" className="w-[27px] h-[27px]" />
                </button>
              </div>

              <div
                className="bg-[#222A38] w-full h-[500px] rounded-[18px] flex-grow overflow-y-auto"
                style={{ maxHeight: "100%" }}
              >
                {chatMessages.map((message) => (
                  <ChatBubble
                    key={message._id}
                    isOwnSender={message.isOwnSender}
                    _id={message._id}
                    sender={message.sender}
                    dateCreated={message.dateCreated}
                    type={message.type}
                    payload={message.payload}
                  />
                ))}
              </div>

              <div className="w-full h-[58px] bg-[#272F3D] rounded-[6px] flex items-center px-2 py-2">
                <button
                  className="mr-2"
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  <img
                    src={attachDoc}
                    alt="Attach Doc"
                    className="md:w-[35px] md:h-[35px]"
                  />
                </button>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
                <input
                  type="text"
                  placeholder="Type your message"
                  className="flex-grow h-[43px] bg-[#1F2735] text-white placeholder-gray-400 px-4 rounded-[6px] focus:outline-none border-none"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
                <button className="ml-2">
                  <img
                    src={audio}
                    alt="Audio Message"
                    className="md:w-[35px] md:h-[35px]"
                  />
                </button>
                <button className="ml-2" onClick={handleSendMessage}>
                  <img
                    src={sendChat}
                    alt="Send"
                    className="md:w-[35px] md:h-[35px]"
                  />
                </button>
              </div>
            </>
          ) : (
            <div className="bg-[#222A38] w-full h-full rounded-[18px] items-center justify-center md:flex hidden">
              <span className="text-white text-[20px] font-[500]">
                Select a user to start chatting
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatsHistory;
