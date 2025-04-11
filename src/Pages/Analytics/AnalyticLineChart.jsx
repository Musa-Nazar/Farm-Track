import React, { useEffect, useState } from "react";
import http from "../../../http";
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

function AnalyticLineChart() {
  const { token } = useMainContext();
  const [analyticsChartData, setAnalyticsChartData] = useState(undefined);
  useEffect(() => {
    async function getAnalyticsChartData() {
      try {
        if (!token.access) return location.reload();
        const analyticsChartInfo = await http.prototype.get(
          "https://farmtrack-backend.onrender.com/api/analytics-chart/",
          token.access
        );
        setAnalyticsChartData(analyticsChartInfo);
      } catch (error) {
        toast.error("Unable to Chart fetch Data: 404", {
          className: "poppins text-[1.6rem]",
        });
      }
    }
    getAnalyticsChartData();
  }, []);
  const salesData = analyticsChartData
    ? analyticsChartData.monthly_net_income
    : false;
  const data = salesData
    ? salesData
    : [
        { month: "Jan", net_income: 10000 },
        { month: "Feb", net_income: 15000 },
        { month: "Mar", net_income: 20000 },
        { month: "Apr", net_income: 25000 },
        { month: "May", net_income: 20000 },
        { month: "Jun", net_income: 30000 },
        { month: "July", net_income: 35000 },
      ];
  return (
    <>
      <h2 className="text-black poppins text-[20px] font-semibold leading-normal mb-[1rem] mt-[0.5rem]">
        Net Income
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
            dataKey="net_income"
            type="monotone"
            dot={false}
            stroke="#61A061"
            strokeWidth={2}
            activeDot={false}
          />
          <XAxis dataKey="month" />
          <YAxis
            dataKey="net_income"
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
