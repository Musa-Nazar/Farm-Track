import React, { useEffect, useState } from "react";
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
import { toast } from "react-toastify";
import { useMainContext } from "../../../MainContext";

const formatYAxis = (value) => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
  return value;
};

function AnalyticLineChart({ monthlyIncome }) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
    return () => {
      window.addEventListener("resize", () => {
        setScreenSize(window.innerWidth);
      });
    };
  }, [screenSize]);
  return (
    <>
      <h2 className="text-black poppins text-[20px] font-semibold leading-normal mb-[1rem] mt-[0.5rem]">
        Net Income
      </h2>
      <ResponsiveContainer
        height={380}
        width={screenSize > 768 ? "100%" : "200%"}
        style={{ marginLeft: `${screenSize > 768 ? "0" : "-20px"}` }}
      >
        <LineChart
          data={monthlyIncome}
          margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <CartesianGrid
            vertical={false}
            strokeOpacity={1}
            strokeDasharray="3 3"
          />
          <Line
            dataKey="totalIncome"
            type="monotone"
            dot={false}
            stroke="#61A061"
            strokeWidth={2}
            activeDot={false}
          />
          <XAxis dataKey="month" />
          <YAxis
            dataKey="totalIncome"
            tickLine={false}
            axisLine={false}
            domain={[0, "dataMax + 200000"]} // Caps the empty headroom tightly above your data peak
            tickCount={15} // Packs the horizontal rows tighter
            tickFormatter={formatYAxis} // Changes raw digits to clean M/K text
            style={{ fontSize: "12px" }} // Ensures font size isn't blowing out the boundaries
          />
          {/* <YAxis
            dataKey="totalIncome"
            strokeOpacity={0}
            domain={[0, 50000]}
            tickCount={10}
            axisLine={false}
          /> */}
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default AnalyticLineChart;
