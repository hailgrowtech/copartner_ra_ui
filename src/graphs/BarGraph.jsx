import React from "react";
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

const data = [
    {
      name: "Mon",
      "User Visit": 400,
      "User Buy": 200,
    },
    {
      name: "Tue",
      "User Visit": 300,
      "User Buy": 100,
    },
    {
      name: "Web",
      "User Visit": 200,
      "User Buy": 450,
    },
    {
      name: "Thu",
      "User Visit": 250,
      "User Buy": 500,
    },
    {
      name: "Fri",
      "User Visit": 100,
      "User Buy": 300,
    },
    {
      name: "Sat",
      "User Visit": 100,
      "User Buy": 150,
    },
    {
      name: "Sun",
      "User Visit": 400,
      "User Buy": 100,
    },
  ];

const yTicks = [0, 100, 200, 300, 400, 500];

const BarGraph = () => {
  return (
    <ResponsiveContainer
      className={`bg_cards rounded-[10px] ml-[-3.8rem]`}
      width="102%"
      height={300}
    >
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" stroke="transparent" />
        <XAxis dataKey="name" />
        <YAxis ticks={yTicks} />
        <Tooltip />
        <Legend />
        <Bar dataKey="User Visit" fill="#8884d8" barSize={10} />
        <Bar dataKey="User Buy" fill="#82ca9d" barSize={10} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
