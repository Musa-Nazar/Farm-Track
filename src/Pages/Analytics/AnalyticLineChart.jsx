import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";

const data = [
  { month: "Jan", value: 10000 },
  { month: "Feb", value: 15000 },
  { month: "Mar", value: 20000 },
  { month: "Apr", value: 25000 },
  { month: "May", value: 20000 },
  { month: "Jun", value: 30000 },
  { month: "July", value: 35000 },
];

function AnalyticLineChart() {
  return (
    <>
      <h2 className="text-black poppins text-[20px] font-semibold leading-normal mb-[1rem] mt-[1.67rem]">
        Net Profit Trend
      </h2>
      <ResponsiveContainer width="100%" height={380}>
        <LineChart
          data={data}
          margin={{ left: -18, right: 0, top: 0, bottom: 0 }}
        >
          {[...Array(7)].map((i, index) => {
            if ((index + 1) % 2 !== 0) {
              return (
                <ReferenceLine
                  key={index}
                  y={(index + 1) * 5000}
                  stroke="#EBEBEB"
                  strokeDasharray="0 0"
                />
              );
            }
          })}
          <CartesianGrid vertical={false} strokeOpacity={0.7} />
          <Line
            dataKey="value"
            type="monotone"
            dot={false}
            stroke="#61A061"
            strokeWidth={2}
            activeDot={false}
          />
          <XAxis dataKey="month" />
          <YAxis
            dataKey="value"
            strokeOpacity={0}
            domain={[0, 40000]}
            tickCount={5}
            axisLine={false}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default AnalyticLineChart;
