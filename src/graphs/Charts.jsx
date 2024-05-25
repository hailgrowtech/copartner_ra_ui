// import React, {useState, useEffect} from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip as LineTooltip,
// } from "recharts";

// const data = [
//   {
//     name: "June",
//     rs: 2400,
//     amt: 2400,
//   },
//   {
//     name: "July",
//     rs: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Aug",
//     rs: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Sep",
//     rs: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Oct",
//     rs: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Nov",
//     rs: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Dec",
//     rs: 4300,
//     amt: 2100,
//   },
// ];

// const Charts = () => {
//   const [chartHeight, setChartHeight] = useState(300);
//   const [chartWidth, setChartWidth] = useState(610);

//   useEffect(() => {
//     const handleResize = () => {
//       const height = window.innerWidth <= 768 ? 245 : 300;
//       const width = window.innerWidth <= 768 ? 445 : 610;
//       setChartHeight(height);
//       setChartWidth(width)
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <LineChart
//       className={`bg_cards rounded-[10px]`}
//       width={chartWidth}
//       height={chartHeight}
//       data={data}
//       margin={{
//         top: 25,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <LineTooltip />
//       <Line type="monotone" dataKey="rs" stroke="#8884d8" activeDot={{ r: 8 }} />
//     </LineChart>
//   );
// };

// export default Charts;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format, parseISO, getMonth } from 'date-fns';
import PropTypes from 'prop-types';

const Charts = () => {
  const [data, setData] = useState({ daily: [], weekly: [], monthly: [] });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const stackholderId = sessionStorage.getItem('stackholderId');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (stackholderId) {
          console.log('Fetching data for stackholderId:', stackholderId);
          const response = await axios.get(
            `https://copartners.in:5009/api/Subscription/GetByExpertsId/${stackholderId}`
          );
          console.log('Response received:', response);

          if (response.data.isSuccess) {
            const apiData = response.data.data;
            console.log('API Data:', apiData);

            const monthlyData = Array(12).fill().map((_, index) => ({
              name: format(new Date(2024, index, 1), 'MMMM'), // Generate month names
              earnings: 0,
            }));

            apiData.forEach((item) => {
              const date = parseISO(item.createdOn);
              const month = getMonth(date);

              const earnings = item.amount || 0;

              monthlyData[month].earnings += earnings;
            });

            setData({ monthly: monthlyData });
          } else {
            setError(response.data.displayMessage);
            setLoading(false);
            return;
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
        return;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [stackholderId]);

  const CustomTooltip = ({ active, payload }) => {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        width: '100%',
        // height: '400px',
        backgroundColor: '#2b2d42',
        borderRadius: '30px',
        padding: '15px',
      }}
    >
      {error && <div className="text-red-500">{error}</div>}
      <ResponsiveContainer>
        <LineChart
          data={data.monthly} // Displaying monthly data
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#3a3e5c" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: '#fff' }} />
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
  activeButton: PropTypes.string.isRequired,
  customStartDate: PropTypes.instanceOf(Date),
  customEndDate: PropTypes.instanceOf(Date),
};

export default Charts;

