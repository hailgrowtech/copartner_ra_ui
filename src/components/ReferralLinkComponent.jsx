import React, { useState, useRef } from "react";
import { tick, clipboard } from "../assets";

const ReferralLinkComponent = () => {
  const [referralLink, setReferralLink] = useState("");
  const [paymentLink, setPaymentLink] = useState("")
  const [copiedReferralLink, setCopiedReferralLink] = useState(false);
  const [copiedPaymentLink, setCopiedPaymentLink] = useState(false);
  const [loading, setLoading] = useState(false);
  const referralLinkRef = useRef(null);
  const paymentLinkRef = useRef(null);

  const stackholderId = sessionStorage.getItem("stackholderId");

  const generateReferralLink = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://copartners.in:5132/api/Experts/GenerateReferralLink/${stackholderId}`
      );
      const result = await response.json();
      if (result.isSuccess) {
        setReferralLink(result.data);
      } else {
        console.error("Failed to generate referral link");
      }
    } catch (error) {
      console.error("Error fetching referral link:", error);
    }
    setLoading(false);
  };

  const generatePaymentLink = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://copartners.in:5132/api/Experts/GenerateExpertPaymentLink/${stackholderId}`
      );
      const result = await response.json();
      if (result.isSuccess) {
        console.log('Payment Link', result.data)
        setPaymentLink(result.data);
      } else {
        console.error("Failed to generate referral link");
      }
    } catch (error) {
      console.error("Error fetching referral link:", error);
    }
    setLoading(false);
  };

  const copyReferralLinkToClipboard = () => {
    if (referralLinkRef.current) {
      navigator.clipboard
        .writeText(referralLinkRef.current.innerText)
        .then(() => {
          setCopiedReferralLink(true);
          setTimeout(() => setCopiedReferralLink(false), 2000);
        });
    }
  };

  const copyPaymentLinkToClipboard = () => {
    if (paymentLinkRef.current) {
      navigator.clipboard
        .writeText(paymentLinkRef.current.innerText)
        .then(() => {
          setCopiedPaymentLink(true);
          setTimeout(() => setCopiedPaymentLink(false), 2000);
        });
    }
  };

  return (
    <div className="flex gap-4 flex-col">
      <div className="flex bg-[#282E3C] text-white flex-row md:flex-row items-center gap-3 w-full md:w-[1120px] rounded-[16px] p-2 px-8">
        <span className="md:text-lg text-sm">Referral Link</span>
        <div className="p-1 px-3 flex rounded-[30px] bg-transparent border-[1px]">
          {referralLink ? (
            <>
              <span
                ref={referralLinkRef}
                className="mr-1 md:block truncate-link"
              >
                {referralLink}
              </span>
              <button
                onClick={copyReferralLinkToClipboard}
                className="flex items-center mt-[2px]"
              >
                |
                {copiedReferralLink ? (
                  <img src={tick} alt="Copied" className="w-5" />
                ) : (
                  <img src={clipboard} alt="Copy" className="w-5" />
                )}
              </button>
            </>
          ) : (
            <button
              onClick={generateReferralLink}
              className="flex items-center mt-[2px]"
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Link"}
            </button>
          )}
        </div>
      </div>
      <div className="flex bg-[#282E3C] text-white flex-row md:flex-row items-center gap-3 w-full md:w-[1120px] rounded-[16px] p-2 px-8">
        <span className="md:text-lg text-sm">Payment Link</span>
        <div className="p-1 px-3 flex rounded-[30px] bg-transparent border-[1px]">
          {paymentLink ? (
            <>
              <span
                ref={paymentLinkRef}
                className="mr-1 md:block truncate-link"
              >
                {paymentLink}
              </span>
              <button
                onClick={copyPaymentLinkToClipboard}
                className="flex items-center mt-[2px]"
              >
                |
                {copiedPaymentLink ? (
                  <img src={tick} alt="Copied" className="w-5" />
                ) : (
                  <img src={clipboard} alt="Copy" className="w-5" />
                )}
              </button>
            </>
          ) : (
            <button
              onClick={generatePaymentLink}
              className="flex items-center mt-[2px]"
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Link"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferralLinkComponent;
