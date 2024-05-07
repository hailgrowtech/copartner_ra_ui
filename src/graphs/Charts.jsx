import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as LineTooltip,
  Legend as LineLegend,
} from "recharts";

const data = [
  {
    name: "June",
    //   uv: 4000,
    rs: 2400,
    amt: 2400,
  },
  {
    name: "July",
    //   uv: 3000,
    rs: 1398,
    amt: 2210,
  },
  {
    name: "Aug",
    //   uv: 2000,
    rs: 9800,
    amt: 2290,
  },
  {
    name: "Sep",
    //   uv: 2780,
    rs: 3908,
    amt: 2000,
  },
  {
    name: "Oct",
    //   uv: 1890,
    rs: 4800,
    amt: 2181,
  },
  {
    name: "Nov",
    uv: 2390,
    rs: 3800,
    amt: 2500,
  },
  {
    name: "Dec",
    //   uv: 3490,
    rs: 4300,
    amt: 2100,
  },
];

const Charts = () => {
  return (
    <LineChart className={`bg_cards rounded-[10px]`}
      width={610}
      height={300} 
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
      <LineLegend />
      <Line type="monotone" dataKey="rs" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default Charts;
