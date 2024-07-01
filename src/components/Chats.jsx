import React, { useState, useEffect } from "react";
import { deleteIcon, edit } from "../assets";
import WebinarDialog from "./WebinarDialog";
import axios from "axios";
import { toast } from "react-toastify";
import SubsriptionDiscountOffer from "./SubsriptionDiscountOffer";
import SubscriptionCourse from "./SubscriptionCourse";

const Chats = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(false);
  const [subTable, setSubTable] = useState([]);
  const [activeUser, setActiveUser] = useState([]);
  const [currentSubscription, setCurrentSubscription] = useState(null);
  const [planTypeCounts, setPlanTypeCounts] = useState({});

  const stackholderId = sessionStorage.getItem("stackholderId");
  const SUB_TABLE = `https://copartners.in:5009/api/Subscription/GetByExpertsId/${stackholderId}`;
  const ACTIVE_USER = `https://copartners.in:5132/api/RADashboard/GetDashboardRAListingData/${stackholderId}?page=1&pageSize=100000`;

  const handleSuccess = () => {
    toast.success("Successfully Deleted!", {
      position: "top-right",
    });
  };

  useEffect(() => {
    const fetchActiveUser = async () => {
      try {
        const res = await axios.get(ACTIVE_USER);
        setActiveUser(res.data.data);
        countPlanTypes(res.data.data);
      } catch (error) {
        console.error("Error fetching active user:", error);
      }
    };

    fetchActiveUser();
  }, [ACTIVE_USER]);

  const axiosServiceData = async () => {
    try {
      const res = await axios.get(SUB_TABLE);
      setSubTable(res.data.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    axiosServiceData();
  }, [SUB_TABLE]);

  useEffect(() => {
    const checkScreenSize = () => {
      setSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const openEditDialog = (subscription) => {
    setCurrentSubscription(subscription);
    setIsEditDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setIsEditDialogOpen(false);
  };

  const handleDeleteTable = async (id) => {
    const DELETE_TABLE = `https://copartners.in:5009/api/Subscription/${id}`;

    try {
      handleSuccess();
      const response = await axios.delete(DELETE_TABLE);
      if (response.status === 200) {
        console.log("Subscription deleted successfully");
        setSubTable(subTable.filter((subscription) => subscription.id !== id));
      } else {
        console.error(
          "Failed to delete subscription, status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error deleting subscription:", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const getSubscriptionTypeLabel = (type) => {
    switch (type) {
      case "3":
        return "Futures & Options";
      case "1":
        return "Commodity";
      case "2":
        return "Equity";
      default:
        return "Select Subscription Type";
    }
  };

  const countPlanTypes = (data) => {
    const counts = data.reduce((acc, item) => {
      acc[item.planType] = (acc[item.planType] || 0) + 1;
      return acc;
    }, {});
    setPlanTypeCounts(counts);
  };

  const sortedSubTable = subTable
    ? [...subTable].sort((a, b) => a.amount - b.amount)
    : [];

  return (
    <div className="pb-[5rem] xl:pl-[12rem] md:pl-[10rem] pl-[1rem] md:py-[6rem] pt-[8rem] bg-gradient min-h-screen">
      <div className="xl:w-[1520px] md:w-[1130px] w-[370px] flex items-center justify-between">
        <span className="w-[176px] h-[27px] font-inter text-[22px] font-[600] leading-[27px] text-white md:ml-0 ml-2">
          Chats Status
        </span>
        <label class="inline-flex items-center me-5 cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" checked />
          <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        </label>
      </div>

      <div className="flex py-[4rem]">
        <div className="flex xl:w-[1520px] md:w-[1120px] md:gap-6 gap-2">
          <div className="md:h-[230px] h-[160px] border border-white border-opacity-50 rounded-lg w-full p-4 flex flex-col gap-4">
            <span className="font-[700] md:text-[26px] text-[14px] md:leading-[35px] leading-[20px] text-gradient-2">
              Paid Active Queries:
            </span>
            <span className="font-[700] md:text-[52px] text-[22px] md:leading-[50px] leading-[12px] text-white">
              10
            </span>
            <span className="text-white opacity-[50%] font-[500] md:text-[16px] text-[12px] md:leading-[18px] leading-[12px]">
              5 Minutes Access
            </span>
            <button className="px-4 w-[100%] py-2 bg-blue-500 text-white md:text-[14px] text-[14px] rounded-lg hover:bg-blue-600">
              Response
            </button>
          </div>
          <div className="md:h-[230px] h-[160px] border border-white border-opacity-50 rounded-lg w-full p-4 flex flex-col gap-4">
            <span className="font-[700] md:text-[26px] text-[14px] md:leading-[35px] leading-[20px] text-gradient-2">
              Paid Active Queries:
            </span>
            <span className="font-[700] md:text-[52px] text-[22px] md:leading-[50px] leading-[12px] text-white">
              10
            </span>
            <span className="text-white opacity-[50%] font-[500] md:text-[16px] text-[12px] md:leading-[18px] leading-[12px]">
              5 Minutes Access
            </span>
            <button className="px-4 w-[100%] py-2 bg-blue-500 text-white md:text-[14px] text-[14px] rounded-lg hover:bg-blue-600">
              Response
            </button>
          </div>
        </div>
      </div>

      <div className="flex md:mt-[3rem] mt-1">
        {smallScreen ? (
          <div className="flex flex-wrap justify-center items-center ml-[-22px]">
            {sortedSubTable.map((row, index) => (
              <div
                key={index}
                className="flex flex-col justify-around w-[361px] h-[248px] bg-[#18181B] bg-opacity-[50%] rounded-[30px] md:m-4 m-[10px] p-4 w-[90%] max-w-sm"
              >
                <div className="flex flex-row justify-between">
                  <p className="w-[173px] h-[26px] font-[600] text-[16px] leading-[25px] text-lightWhite">
                    {getSubscriptionTypeLabel(row.serviceType)}
                  </p>
                  <div className="flex gap-3">
                    {/* <button onClick={() => openEditDialog(row)}>
                      <img
                        src={edit}
                        alt=""
                        className="w-[24px] h-[24px] text-white"
                      />
                    </button>
                    {isEditDialogOpen && (
                      <SubscriptionEditService
                        isEditDialogOpen={isEditDialogOpen}
                        closeDialog={closeDialog}
                      />
                    )} */}
                    <button onClick={() => handleDeleteTable(row.id)}>
                      <img
                        src={deleteIcon}
                        alt=""
                        className="w-[24px] h-[24px] text-white"
                      />
                    </button>
                  </div>
                </div>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">DATE:</span>{" "}
                  {formatDate(row.createdOn)}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[34px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">SERVICE TYPE:</span>{" "}
                  {getSubscriptionTypeLabel(row.serviceType)}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">PLAN NAME:</span>{" "}
                  {row.planType}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">DURATION:</span>{" "}
                  {row.durationMonth}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">AMOUNT:</span> {row.amount}
                </span>
                <span className="flex items-center justify-between sm:w-[305px] h-[13px] font-[500] text-[14px] leading-[12px] text-lightWhite">
                  <span className="text-dimWhite">ACTIVE USER:</span>{" "}
                  {planTypeCounts[row.planType] || 0}/{activeUser.length}
                </span>
              </div>
            ))}
            {sortedSubTable.length > 0 && (
              <button className="mt-6 md:w-[147px] w-[95px] h-[20px] md:h-[40px] md:flex items-center justify-center flex w-[110px] h-[30px] rounded-[6px] bg-lightWhite md:text-[14px] text-[10px] font-[500] md:leading-[16px] leading-[12px]">
                Show More
              </button>
            )}
          </div>
        ) : (
          <table className="xl:w-[1520px] md:w-[1130px] h-[230px] bg-[#29303F] rounded-[30px]">
            <thead className="text-[#BABABA] font-inter font-[600] text-[14px] leading-[20px] h-[51px]">
              <tr>
                <th className="text-center">DATE</th>
                <th className="text-center">SERVICE TYPE</th>
                <th className="text-center">PLAN NAME</th>
                <th className="text-center">DURATION</th>
                <th className="text-center">AMOUNT</th>
                <th className="text-center">ACTIVE USER</th>
                <th className="text-center">ACTION</th>
              </tr>
            </thead>
            <tbody className="text-lightWhite h-[81px]">
              {sortedSubTable.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#1E1E22]" : ""}
                >
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {formatDate(row.createdOn)}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {getSubscriptionTypeLabel(row.serviceType)}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.planType}
                  </td>
                  <td className="py-2 text-center font-[500] text-[16px] leading-[18px]">
                    {row.durationMonth}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {row.amount}
                  </td>
                  <td className="font-[500] text-center text-[16px] leading-[18px]">
                    {planTypeCounts[row.planType] || 0}/{activeUser.length}
                  </td>
                  <td className="flex flex-row items-center justify-center gap-2 py-[2rem]">
                    {/* <button onClick={() => openEditDialog(row)}>
                      <img
                        src={edit}
                        alt=""
                        className="w-[21px] h-[21px] mx-auto"
                      />
                    </button>
                    {isEditDialogOpen && (
                      <SubscriptionEditService
                        isEditDialogOpen={isEditDialogOpen}
                        closeDialog={closeDialog}
                        subTable={subTable}
                      />
                    )} */}
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
      <SubsriptionDiscountOffer />
      <SubscriptionCourse />
    </div>
  );
};

export default Chats;
