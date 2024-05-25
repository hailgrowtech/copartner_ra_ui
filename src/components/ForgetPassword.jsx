import React, { useState, useEffect } from "react";
import { closeIcon, signup } from "../assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ForgetPassword = ({ setIsSignedUp }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleClose = () => {
    sessionStorage.setItem("visitedSignUp", "true");
    navigate("/");
    window.location.reload();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleContinue = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const postData = {
      oldPassword: "oldPassword",
      newPassword: "newPassword",
    };

    try {
      const response = await axios.post(
        "https://copartners.in:5130/api/Users/ResetPassword",
        postData
      );

      if (response.status !== 200) {
        toast.error("Something wrong happened!", {
          position: "top-right",
        });
      } else {
        setConfirm(response.data.data.id);
      }
    } catch (error) {
      console.error("Error posting data:", error);
      toast.error("Failed to submit data. Please try again.", {
        position: "top-right",
      });
      setError("Failed to submit data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="h-screen w-screen md:ml-[-7rem]"
        style={{
          backgroundImage: `url(${signup})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50 w-screen h-screen`}
      >
        <div className="bg-[#18181B] border-[1px] border-[#ffffff2a] m-4 p-6 rounded-lg w-96 relative text-center">
          <div className="absolute top-3 right-0 text-right">
            <button
              onClick={() => {
                handleClose();
                scrollToTop();
              }}
              className="text-gray-400 w-8 text-[20px] cursor-pointer hover:text-white"
            >
              <img src={closeIcon} alt="close" />
            </button>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-white">
              Confirm Your Mail ID
            </h2>
          </div>
          <p className="text-gray-300 text-center mb-4">
            Get access to daily free calls from varieties of India's SEBI
            Registered Research Analysts.
          </p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="w-full flex gap-2 flex-col justify-between">
            <div className="w-full mx-auto h-[50px]">
              <input
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                type="text"
                placeholder="Old Password"
                className="bg-[#06030E] rounded-[10px] border border-[#18181B] w-full h-full text-white font-[400] text-[14px] p-2"
              />
            </div>
            <div className="w-full mx-auto h-[50px]">
              <input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type="text"
                placeholder="Confirm New Password"
                className="bg-[#06030E] rounded-[10px] border border-[#18181B] w-full h-full text-white font-[400] text-[14px] p-2"
              />
            </div>
            <button
              onClick={handleContinue}
              className="w-full h-[50px] bg-white font-[500] text-[16px] leading-[20px] text-center rounded-[10px]"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
