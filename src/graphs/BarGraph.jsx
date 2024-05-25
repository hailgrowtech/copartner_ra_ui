// import React, { useState, useEffect } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import axios from "axios";
// import { parseISO, format, isWithinInterval } from "date-fns";

// const BarGraph = ({ timeRange, customStartDate, customEndDate }) => {
//   const [userAnalysis, setUserAnalysis] = useState([]);
//   const stackholderId = sessionStorage.getItem('stackholderId');
//   const USER_ANALYSIS = `https://copartners.in:5132/api/RADashboard/GetDashboardRAListingData/${stackholderId}?page=1&pageSize=10`;

//   useEffect(() => {
//     axios.get(USER_ANALYSIS).then((res) => {
//       const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//       const monthsOfYear = [
//         'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//       ];

//       const fetchedData = res.data.data.map((item, index) => {
//         const userVisit = item.arrows ? item.arrows.length : 0;
//         const userBuy = item.subscription !== "No Subscription" ? item.userBuy : 7;

//         let name = '';
//         if (timeRange === 'Today') {
//           name = `Hour ${index + 1}`;
//         } else if (timeRange === 'Weekly') {
//           name = daysOfWeek[index % 7];
//         } else if (timeRange === 'Monthly') {
//           name = `Day ${index + 1}`;
//         } else if (timeRange === 'Yearly') {
//           name = monthsOfYear[index % 12];
//         }

//         return {
//           name,
//           "User Visit": userVisit,
//           "User Buy": userBuy,
//         };
//       });

//       setUserAnalysis(fetchedData);
//     });
//   }, [USER_ANALYSIS, timeRange]);

//   useEffect(() => {
//     if (timeRange === 'Custom' && customStartDate && customEndDate) {
//       axios.get(USER_ANALYSIS).then((res) => {
//         const filteredData = res.data.data.filter((item) => {
//           const date = parseISO(item.date);
//           return isWithinInterval(date, { start: customStartDate, end: customEndDate });
//         }).map((item, index) => {
//           const userVisit = item.arrows ? item.arrows.length : 0;
//           const userBuy = item.subscription !== "No Subscription" ? item.userBuy : 0;
//           const name = format(parseISO(item.date), 'yyyy-MM-dd');

//           return {
//             name,
//             "User Visit": userVisit,
//             "User Buy": userBuy,
//           };
//         });

//         setUserAnalysis(filteredData);
//       });
//     }
//   }, [USER_ANALYSIS, timeRange, customStartDate, customEndDate]);

//   const yTicks = [0, 5, 10, 15, 20, 25];

//   return (
//     <ResponsiveContainer
//       className="bg_cards rounded-[10px] ml-[-3.8rem] md:flex hidden"
//       width="102%"
//       height={300}
//     >
//       <BarChart
//         data={userAnalysis}
//         margin={{
//           top: 5,
//           right: 20,
//           left: 0,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="5 5" stroke="transparent" />
//         <XAxis dataKey="name" />
//         <YAxis ticks={yTicks} />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="User Visit" fill="#8884d8" barSize={10} />
//         <Bar dataKey="User Buy" fill="#82ca9d" barSize={10} />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default BarGraph;

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

          // Initialize data containers
          const dailyData = {};
          const weeklyData = Array(7)
            .fill()
            .map((_, index) => ({
              name: format(new Date(2024, 0, 1 + index), "EEEE"), // Generate day names starting from Monday
              totalVisit: 0,
              paidUsers: 0,
              usersLeft: 0,
            }));
          const monthlyData = Array(12)
            .fill()
            .map((_, index) => ({
              name: format(new Date(2024, index, 1), "MMMM"), // Generate month names
              totalVisit: 0,
              paidUsers: 0,
              usersLeft: 0,
            }));

          // Process API data
          apiData.forEach((item) => {
            const date = item.date ? parseISO(item.date) : null;
            const dayOfWeek = date ? getDay(date) : null;
            const month = date ? getMonth(date) : null;
            const dayLabel = date ? format(date, "yyyy-MM-dd") : "Unknown Date";
            const totalVisit = 1;
            const paidUser =
              item.subscription && item.subscription !== "No Subscrption"
                ? 1
                : 0;
            const notInterested =
              item.subscription && item.subscription == "No Subscrption"
                ? 1
                : 0;

            // Daily data
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

            // Weekly data
            if (dayOfWeek !== null) {
              weeklyData[dayOfWeek].totalVisit += totalVisit;
              weeklyData[dayOfWeek].paidUsers += paidUser;
              weeklyData[dayOfWeek].usersLeft += notInterested;
            }

            // Monthly data
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
    switch (activeButton) {
      case "today":
        return data.daily.slice(-1);
      case "weekly":
        return data.weekly;
      case "monthly":
        return data.monthly;
      case "custom":
        if (customStartDate && customEndDate) {
          return data.daily.filter((d) =>
            isWithinInterval(new Date(d.name), {
              start: customStartDate,
              end: customEndDate,
            })
          );
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
      height={300}
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
          fill="#8884d8"
          name="Total Visit"
          barSize={20}
        />
        <Bar
          dataKey="paidUsers"
          fill="#82ca9d"
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
