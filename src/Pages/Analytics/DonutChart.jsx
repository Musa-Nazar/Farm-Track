import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 25 },
  { name: "Mar", value: 20 },
  { name: "May", value: 15 },
  { name: "Jun", value: 15 },
  { name: "Jul", value: 15 },
];

const COLORS = [
  "#A3E4A3",
  "#76C76B",
  "#009900",
  "#66CC66",
  "#88D788",
  "#B0EAB0",
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-[clamp(0.5rem,1.1vw,1.8rem)] break-all max-md:text-[1.6rem]"
      visibility={percent > 0.02 ? "visible" : "hidden"}
    >
      {`${data[index].name} - ${data[index].value}%`}
    </text>
  );
};

const DonutChart = () => {
  return (
    <>
      <h2 className="text-black poppins text-[20px] font-semibold leading-normal mb-[1.533rem] mt-[1.67rem]">
        Net Profit Trend
      </h2>
      <ResponsiveContainer width="100%" height={369}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            fill="#82ca9d"
            paddingAngle={0}
            dataKey="value"
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default DonutChart;
