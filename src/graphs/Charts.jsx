import React, {useState, useEffect} from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as LineTooltip,
} from "recharts";

const data = [
  {
    name: "June",
    rs: 2400,
    amt: 2400,
  },
  {
    name: "July",
    rs: 1398,
    amt: 2210,
  },
  {
    name: "Aug",
    rs: 9800,
    amt: 2290,
  },
  {
    name: "Sep",
    rs: 3908,
    amt: 2000,
  },
  {
    name: "Oct",
    rs: 4800,
    amt: 2181,
  },
  {
    name: "Nov",
    rs: 3800,
    amt: 2500,
  },
  {
    name: "Dec",
    rs: 4300,
    amt: 2100,
  },
];

const Charts = () => {
  const [chartHeight, setChartHeight] = useState(300);
  const [chartWidth, setChartWidth] = useState(610);

  useEffect(() => {
    const handleResize = () => {
      const height = window.innerWidth <= 768 ? 245 : 300;
      const width = window.innerWidth <= 768 ? 445 : 610;
      setChartHeight(height);
      setChartWidth(width)
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <LineChart
      className={`bg_cards rounded-[10px]`}
      width={chartWidth}
      height={chartHeight}
      data={data}
      margin={{
        top: 25,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="transparent" />
      <XAxis dataKey="name" />
      <YAxis />
      <LineTooltip />
      <Line type="monotone" dataKey="rs" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default Charts;

