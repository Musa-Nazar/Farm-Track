import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function MyBarChart({ dashboardData }) {
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

  const saleData = dashboardData?.salesData;
  function getLastSevenDaysSales() {
    const chartData = [];
    for (let day = 0; day < 7; day++) {
      const today = new Date();
      today.setDate(today.getDate() - day);
      const existingSaleData = saleData?.find((data) => {
        const testFormat = `${new Date(data.date).getDate()}/${new Date(data.date).getMonth()}/${new Date(data.date).getFullYear()}`;
        const todayTestFormat = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
        return testFormat === todayTestFormat;
      });
      if (existingSaleData) {
        chartData.unshift(existingSaleData);
        continue;
      }
      chartData.unshift({
        totalSales: 0,
        date: `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`,
      });
    }
    return chartData;
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;

    return (
      <div className="bg-gray-900 text-white p-3 rounded-lg shadow-lg">
        <p className="text-sm font-semibold mb-[1rem]">{label}</p>
        <p className="text-md poppins font-medium text-gray-300">
          Sales: {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  };
  const xml = (
    <>
      <div className="flex mb-[0.35rem] justify-between hide-scrollbar overflow-scroll">
        <h2 className="text-black poppins text-[2rem] font-semibold leading-normal ml-[4.3rem] max-md:ml-0">
          Sales Trend
        </h2>
      </div>
      <ResponsiveContainer
        width={screenSize > 768 ? "100%" : "400%"}
        minHeight={480}
        className="mb-[2rem] pl-[2.5rem] mt-[1.8rem] max-md:p-0"
      >
        <AreaChart data={getLastSevenDaysSales()}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="0 0"
            stroke="#CCCCCC"
            strokeOpacity={0.9}
          />
          <Area
            dataKey="totalSales"
            stroke="#61A061A6"
            fill="#61A061A6"
            activeDot={false}
            opacity={1}
            fillOpacity={1}
          />
          <XAxis
            dataKey="date"
            tick={{
              color: "#222",
              textAlign: "center",
              fontFamily: "Arial",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
            dy={10}
          />
          <YAxis
            dataKey="totalSales"
            domain={[0, "dataMax + 60000"]}
            tickCount={12}
            tickFormatter={(tick) => tick.toLocaleString()}
            padding={{ left: 0 }}
            tick={{
              color: "#444",
              textAlign: "right",
              fontFamily: "Arial",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
            dx={screenSize > 768 ? 0 : -15}
          />
          <Tooltip content={CustomTooltip} />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
  return xml;
}

export default MyBarChart;
