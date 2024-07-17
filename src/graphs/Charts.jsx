import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  format,
  parseISO,
  startOfMonth,
  endOfMonth,
  eachWeekOfInterval,
  isSameWeek,
  isSameMonth,
  getMonth,
  compareAsc,
} from "date-fns";
import PropTypes from "prop-types";

const Charts = ({ filter, customStartDate, customEndDate }) => {
  const [data, setData] = useState({ daily: [], weekly: [], monthly: [], custom: [] });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const stackholderId = sessionStorage.getItem("stackholderId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (stackholderId) {
          const response = await axios.get(
            `https://copartners.in:5132/api/RADashboard/GetDashboardRAListingData/${stackholderId}?page=1&pageSize=100000`
          );

          if (response.data.isSuccess) {
            const apiData = response.data.data;
            const currentMonth = new Date().getMonth();

            const monthlyData = Array(12)
              .fill()
              .map((_, index) => ({
                name: format(new Date(2024, index, 1), "MMMM"), // Generate month names
                earnings: 0,
              }));

            const weeklyData = [];

            const monthStart = startOfMonth(new Date(2024, currentMonth, 1));
            const monthEnd = endOfMonth(new Date(2024, currentMonth, 1));
            const weeks = eachWeekOfInterval({ start: monthStart, end: monthEnd });

            weeks.forEach((weekStart) => {
              weeklyData.push({
                name: format(weekStart, "yyyy-MM-dd"),
                earnings: 0,
              });
            });

            const dailyData = [];
            const customDataMap = new Map();

            apiData.forEach((item) => {
              if (item.subscribeDate && item.amount !== null) {
                const date = parseISO(item.subscribeDate);
                const month = getMonth(date);
                const earnings = item.amount || 0;

                monthlyData[month].earnings += earnings;

                if (isSameMonth(date, new Date())) {
                  const weekIndex = weeklyData.findIndex((week) =>
                    isSameWeek(date, parseISO(week.name))
                  );

                  if (weekIndex !== -1) {
                    weeklyData[weekIndex].earnings += earnings;
                  }
                }

                if (isSameWeek(date, new Date())) {
                  dailyData.push({
                    name: format(date, "HH:mm"),
                    earnings,
                  });
                }

                if (customStartDate && customEndDate && date >= customStartDate && date <= customEndDate) {
                  const dateString = format(date, "yyyy-MM-dd");
                  if (!customDataMap.has(dateString)) {
                    customDataMap.set(dateString, { name: dateString, earnings });
                  } else {
                    customDataMap.get(dateString).earnings += earnings;
                  }
                }
              }
            });

            const customData = Array.from(customDataMap.values()).sort((a, b) =>
              compareAsc(parseISO(a.name), parseISO(b.name))
            );

            setData({ daily: dailyData, weekly: weeklyData, monthly: monthlyData, custom: customData });
          } else {
            setError(response.data.displayMessage);
            setLoading(false);
            return;
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
        setLoading(false);
        return;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [stackholderId, customStartDate, customEndDate]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip rounded-[10px] p-2 bg-gradient border border-[#ffffff31]">
          {payload.map((entry, index) => (
            <p key={`tooltip-${index}`} style={{ color: entry.color }}>
              {`${entry.name} : ${entry.value.toFixed(2)}`}
            </p>
          ))}
        </div>
      );
    }

    return null;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  let chartData = [];
  if (filter === "today") {
    chartData = data.daily;
  } else if (filter === "weekly") {
    chartData = data.weekly;
  } else if (filter === "monthly") {
    chartData = data.monthly;
  } else if (filter === "custom") {
    chartData = data.custom;
  }

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#2b2d42",
        borderRadius: "30px",
        padding: "15px",
      }}
    >
      {error && <div className="text-red-500">{error}</div>}
      <ResponsiveContainer>
        <LineChart
          data={chartData}
          margin={{ top: 60, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#3a3e5c" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: "#fff" }} />
          <Line
            type="monotone"
            dataKey="earnings"
            stroke="#64dfdf"
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

Charts.propTypes = {
  filter: PropTypes.string.isRequired,
  customStartDate: PropTypes.instanceOf(Date),
  customEndDate: PropTypes.instanceOf(Date),
};

export default Charts;
