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
import padForTotalIncome from "../../../utils/padForTotalIncome";
import { useEffect, useState } from "react";

const renderLegend = () => {
  return (
    <div className="flex items-center gap-4 mt-4 justify-center max-md:justify-start max-md:pl-[1rem]">
      <div className="flex items-center gap-2">
        <div className="w-[1.3rem] h-[1.3rem] bg-green-900 rounded-full"></div>
        <span className="text-[1.6rem] text-black text-center poppins">
          Sales
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[1.3rem] h-[1.3rem] bg-green-500 rounded-full"></div>
        <span className="text-[1.6rem] text-black text-center poppins">
          Purchase
        </span>
      </div>
    </div>
  );
};
const SalesChart = ({ analyticsChartData }) => {
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
      <h2 className="text-black text-center poppins text-[20px] font-semibold leading-[100%] w-[23.7rem] h-[17px] ml-[2rem] mt-[0.5rem] mb-[4.316rem] max-md:w-[unset] max-md:mx-0 max-md:ml-0 max-md:text-left">
        Sales and Purchase
      </h2>
      <div className="w-full overflow-scroll hide-scrollbar">
        <ResponsiveContainer
          width={screenSize > 768 ? "100%" : "200%"}
          height={397}
          style={{ marginLeft: `${screenSize > 768 ? "0" : "-30px"}` }}
        >
          <BarChart
            data={analyticsChartData}
            margin={{ top: 0, right: 0, left: 20, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="week"
              axisLine={{ stroke: "black", strokeWidth: 2 }}
            />
            <YAxis domain={[0, "dataMax + 50000"]} tickCount={13} />
            <Tooltip />
            <Legend content={renderLegend} />
            <Bar
              dataKey="totalSales"
              fill="#004200"
              barSize={20}
              radius={[9.963, 9.963, 0, 0]}
            />
            <Bar
              dataKey="totalPurchase"
              fill="#61A061"
              barSize={20}
              radius={[9.963, 9.963, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default SalesChart;
