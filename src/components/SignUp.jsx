import React, { useEffect, useState } from "react";
import { closeIcon, signup } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = ({ setIsSignedUp }) => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const STACKHOLDER_API = `https://copartners.in:5132/api/Experts`
  console.log('My User', STACKHOLDER_API)

  const isFormEmpty = () => {
    return (!emailId && !password);
  };

  const handleClose = () => {
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
      mobile: "", // Include mobile if required by your endpoint
      email: emailId,
      passwordHash: password,
      isLoginUsingOtpRequest: true,
      userIpAddress: "string",
    };

    try {
      const response = await fetch(
        "https://copartners.in:5130/Authentication/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.errorMessages || `Error: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log('Getting User Input Value', data.data.stackholderId);
      const stackholderId = data.data.stackholderId;
      
      sessionStorage.setItem('stackholderId', stackholderId)

      const stackholderResponse = await axios.get(`${STACKHOLDER_API}/${stackholderId}`);
      console.log(stackholderResponse.data, 'Stock Holder Id Fetched');

      if (data.data.email.toLowerCase() === emailId.toLowerCase()) {
        console.log("Successfully Logged In");
        setIsSignedUp(true);
        sessionStorage.setItem("visitedSignUp", "true");
        navigate("/");
      } else {
        setError("Email ID or Password does not match.");
      }
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
      setError("Email ID or Password does not match.");
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
        <div className="w-[342px] bg-[#18181B] border-[1px] border-[#ffffff2a] m-4 p-6 rounded-lg w-96 relative text-center">
          <div className="absolute top-3 right-0 text-right">
            <button
              onClick={() => {
                handleClose();
                scrollToTop();
              }}
              className="text-gray-400 w-8 text-[20px] cursor-pointer hover:text-white"
            >
              <img src={closeIcon} className="w-[32px] h-[32px] absolute top-2 right-6" alt="close" />
            </button>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-white">Login</h2>
          </div>
          <p className="text-gray-300 text-center mb-4">
            Get access to daily free calls from varieties of India's SEBI
            Registered Research Analysts.
          </p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="w-full flex gap-2 flex-col justify-between">
            <div className="w-full mx-auto h-[50px]">
              <input
                type="text"
                placeholder="Enter your Mail ID"
                className="bg-[#06030E] rounded-[10px] border border-[#18181B] w-full h-full text-white font-[400] text-[14px] p-2"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>
            <div className="w-full mx-auto h-[50px]">
              <input
                type="password"
                placeholder="Enter your Password"
                className="bg-[#06030E] rounded-[10px] border border-[#18181B] w-full h-full text-white font-[400] text-[14px] p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Link to="/reset">
              <button className="w-full text-[14px] text-[#0081F1] text-right">
                Forget Password?
              </button>
            </Link>
            <button
              type="submit"
              onClick={handleContinue}
              className={`w-full h-[50px] bg-white font-[500] text-[16px] leading-[20px] text-center rounded-[10px]`}
            >
              {loading ? "Loading..." : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
