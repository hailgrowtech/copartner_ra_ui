import React, { useState, useEffect } from "react";
import { deleteIcon } from "../assets";
import SubscriptionEditDiscount from "./SubscriptionEditDiscount";
import axios from "axios";
import { toast } from "react-toastify";

const SubsriptionDiscountOffer = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [discount, setDiscount] = useState([]);

//   const stackholderId = sessionStorage.getItem('stackholderId');
//   const SUB_TABLE = `https://copartners.in:5009/api/Subscription/GetByExpertsId/${stackholderId}`;

  const handleSuccess = () => {
    toast.success("Successfully Deleted!", {
      position: "top-right",
    });
  };

//   const axiosServiceData = async () => {
//     try {
//       const res = await axios.get(SUB_TABLE);
//       console.log('My date value', res.data.data)
//       setDiscount(res.data.data);
//     } catch (error) {
//       console.log('Something went wrong', error);
//     }
//   };

//   useEffect(() => {
//     axiosServiceData();
//   }, [SUB_TABLE]);

  const handleDeleteTable = async (id) => {
    const DELETE_TABLE = `https://copartners.in:5009/api/Subscription/${id}`;

    try {
      handleSuccess();
      const response = await axios.delete(DELETE_TABLE);
      if (response.status === 200) {
        console.log("Subscription deleted successfully");
        setDiscount(discount.filter(subscription => subscription.id !== id));
      } else {
        console.error("Failed to delete subscription, status:", response.status);
      }
    } catch (error) {
      console.error("Error deleting subscription:", error);
    }
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setIsEditDialogOpen(false);
  };

  const addCourse = (newCourse) => {
    setDiscount([...discount, newCourse]);
    closeDialog();
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="md:py-[5rem] py-[4rem] bg-gradient">
      <div className="xl:w-[1520px] md:w-[1130px] w-[350px] flex items-center justify-between">
        <span className="md:w-[240px] w-[176px] h-[27px] font-inter text-[22px] font-[600] leading-[27px] text-white md:ml-0 ml-2">
          Discount Offers Listing
        </span>
        <button
          onClick={openDialog}
          className="md:w-[100px] w-[70px] md:h-[40px] h-[30px] rounded-[10px] text-white font-[600] font-inter md:text-[12px] text-[14px] border-solid border-[1px] border-white md:mr-4 mr-2"
        >
          +Add
        </button>
        {isDialogOpen && (
          <SubscriptionEditDiscount
            addCourse={addCourse}
            closeDialog={closeDialog}
          />
        )}
      </div>

      <div className="flex md:mt-[3rem] mt-1">
        {smallScreen ? (
          <div className="flex flex-wrap justify-center items-center ml-[-22px]">
            {discount.map((row, index) => (
              <div
                key={index}
                className="flex flex-col justify-around h-[248px] bg-[#18181B] bg-opacity-[50%] rounded-[30px] md:m-4 m-[10px] p-4 w-[90%] max-w-sm"
              >
                <div className="flex flex-row justify-between">
                  <p className="w-[173px] h-[26px] font-[600] text-[16px] leading-[25px] text-lightWhite">
                    {row.courseName}
                  </p>
                  <div className="flex gap-3">
                    <button>
                      <img
                        src={deleteIcon}
                        alt=""
                        className="w-[24px] h-[24px] text-white"
                      />
                    </button>
                  </div>
                </div>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">DATE:</span> {row.date}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[34px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">DURATION:</span> {row.duration}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">SESSION:</span> {row.session}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">AMOUNT:</span> {row.amount}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">LEVEL:</span> {row.level}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">ACTIVE USER:</span> {row.activeUser}
                </span>
              </div>
            ))}
            <button className="mt-6 md:w-[147px] md:h-[40px] md:flex items-center justify-center flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px]">
              Show More
            </button>
          </div>
        ) : (
          <table className="xl:w-[1520px] md:w-[1130px] h-[230px] bg-[#29303F] rounded-[30px]">
            <thead className="text-[#BABABA] font-inter font-[600] text-[14px] leading-[20px] h-[51px]">
              <tr>
                <th className="text-center">DATE</th>
                <th className="text-center">START DATE</th>
                <th className="text-center">END DATE</th>
                <th className="text-center">PLAN</th>
                <th className="text-center">DISCOUNT %</th>
                <th className="text-center">DISCOUNTED AMT.</th>
                <th className="text-center">ACTION</th>
              </tr>
            </thead>
            <tbody className="text-lightWhite h-[81px]">
              {discount.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-[#1E1E22]" : ""}>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.date}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.startDate}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.endDate}
                  </td>
                  <td className="py-2 text-center font-[500] text-[16px] leading-[18px]">
                    {row.planType}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.discountPercentage}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.discountedAmount}
                  </td>
                  <td className="flex flex-row items-center justify-center gap-2 py-[2rem]">
                    <button onClick={() => handleDeleteTable(row.id)}>
                      <img
                        src={deleteIcon}
                        alt=""
                        className="w-[21px] h-[21px] mx-auto flex items-center justify-center"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SubsriptionDiscountOffer;
