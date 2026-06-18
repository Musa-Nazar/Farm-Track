import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { tickFormatter } from "../../../utils/numberFormatter";
const SalesTrendChart = ({ data }) => {
  return (
    <>
      <h2 className="text-black ml-[3.5rem] text-[20px] font-bold sf-bold mb-[3.5rem]">
        Sales Trends
      </h2>
      <ResponsiveContainer width="100%" height={387} className="">
        <LineChart
          data={data}
          margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <CartesianGrid vertical={false} strokeOpacity={0.7} />
          <Line
            dataKey="sales"
            type="monotone"
            dot={false}
            stroke="#61A061"
            strokeWidth={2}
            activeDot={false}
          />
          <XAxis
            dataKey="day"
            tick={{
              color: "#222",
              textAlign: "center",
              fontFamily: "Arial",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            dataKey="sales"
            strokeOpacity={0}
            domain={[0, "dataMax + 50000"]}
            tickCount={12}
            tickFormatter={tickFormatter}
            axisLine={false}
            tick={{
              color: "#444",
              textAlign: "left",
              fontFamily: "Arial",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              padding: " 0 100px",
            }}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SalesTrendChart;
