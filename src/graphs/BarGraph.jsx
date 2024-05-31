import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { parseISO, getDay, getMonth, format, isWithinInterval } from "date-fns";

const BarGraph = ({
  activeButton,
  customStartDate,
  customEndDate,
  onDataUpdate,
}) => {
  const [data, setData] = useState({ daily: [], weekly: [], monthly: [] });
  const [error, setError] = useState("");
  const stackholderId = sessionStorage.getItem("stackholderId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://copartners.in:5132/api/RADashboard/GetDashboardRAListingData/${stackholderId}?page=1&pageSize=10`
        );
        if (response.data.isSuccess) {
          const apiData = response.data.data;
          console.log("apiData", apiData);

          const dailyData = {};
          const weeklyData = Array(7)
            .fill()
            .map((_, index) => ({
              name: format(new Date(2024, 0, 1 + index), "EEEE"),
              totalVisit: 0,
              paidUsers: 0,
              usersLeft: 0,
            }));
          const monthlyData = Array(12)
            .fill()
            .map((_, index) => ({
              name: format(new Date(2024, index, 1), "MMMM"),
              totalVisit: 0,
              paidUsers: 0,
              usersLeft: 0,
            }));

          apiData.forEach((item) => {
            const date = item.userJoiningDate ? parseISO(item.userJoiningDate) : null;
            const dayOfWeek = date ? getDay(date) : null;
            const month = date ? getMonth(date) : null;
            const dayLabel = date ? format(date, "yyyy-MM-dd") : "Unknown Date";

            const totalVisit = 1;
            const paidUser = item.subscription && item.subscription !== "No Subscription" && item.subscription !== "No Subscrption" ? 1 : 0;
            const notInterested = item.subscription && (item.subscription === "No Subscription" || item.subscription === "No Subscrption") ? 1 : 0;

            if (!dailyData[dayLabel]) {
              dailyData[dayLabel] = {
                name: dayLabel,
                totalVisit: 0,
                paidUsers: 0,
                usersLeft: 0,
              };
            }
            dailyData[dayLabel].totalVisit += totalVisit;
            dailyData[dayLabel].paidUsers += paidUser;
            dailyData[dayLabel].usersLeft += notInterested;

            if (dayOfWeek !== null) {
              weeklyData[dayOfWeek].totalVisit += totalVisit;
              weeklyData[dayOfWeek].paidUsers += paidUser;
              weeklyData[dayOfWeek].usersLeft += notInterested;
            }

            if (month !== null) {
              monthlyData[month].totalVisit += totalVisit;
              monthlyData[month].paidUsers += paidUser;
              monthlyData[month].usersLeft += notInterested;
            }
          });

          setData({
            daily: Object.values(dailyData),
            weekly: weeklyData,
            monthly: monthlyData,
          });
        } else {
          setError(response.data.displayMessage || "Failed to fetch data");
        }
      } catch (error) {
        setError("Error fetching data: " + (error.message || "Unknown error"));
      }
    };
    fetchData();
  }, [stackholderId]);

  useEffect(() => {
    const selectedData = selectData();
    const totalVisits = selectedData.reduce(
      (sum, item) => sum + item.totalVisit,
      0
    );
    const paidUsers = selectedData.reduce(
      (sum, item) => sum + item.paidUsers,
      0
    );
    const notInterested = selectedData.reduce(
      (sum, item) => sum + item.usersLeft,
      0
    );
    onDataUpdate({ totalVisits, paidUsers, notInterested });
  }, [data, activeButton, customStartDate, customEndDate, onDataUpdate]);

  const selectData = () => {
    const today = format(new Date(), "yyyy-MM-dd");
    switch (activeButton) {
      case "today":
        const todayData = data.daily.filter((d) => d.name === today);
        return todayData.length > 0
          ? todayData
          : [{ name: today, totalVisit: 0, paidUsers: 0, usersLeft: 0 }];
      case "weekly":
        return data.weekly;
      case "monthly":
        return data.monthly;
      case "custom":
        if (customStartDate && customEndDate) {
          return data.daily.filter((d) => {
            const currentDate = parseISO(d.name);
            return isWithinInterval(currentDate, {
              start: customStartDate,
              end: customEndDate,
            });
          });
        }
        return [];
      default:
        return [];
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip rounded-[10px] p-2 bg-gradient border border-[#ffffff31]">
          {payload.map((entry, index) => (
            <p key={`tooltip-${index}`} style={{ color: entry.color }}>
              {`${entry.name} : ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer
      className="bg_cards rounded-[10px] ml-[-3.8rem] md:flex hidden"
      width="110%"
      height={370}
    >
      <BarChart
        data={selectData()}
        margin={{
          top: 25,
          right: 20,
          left: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" stroke="transparent" />
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ color: "#fff" }} />
        <Bar
          dataKey="totalVisit"
          fill="#8884D8"
          name="Total Visit"
          barSize={20}
        />
        <Bar
          dataKey="paidUsers"
          fill="#82CA9D"
          name="Paid Users"
          barSize={20}
        />
        <Bar
          dataKey="usersLeft"
          fill="#D0667A"
          name="Not Interested (Left)"
          barSize={20}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
