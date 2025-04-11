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
const SalesTrendChart = ({ salesTrend }) => {
  const data = salesTrend
    ? salesTrend.slice(0, 6)
    : [
        { date: "Mon", total_sales: 2000 },
        { date: "Tue", total_sales: 1000 },
        { date: "Wed", total_sales: 9000 },
        { date: "Thu", total_sales: 4000 },
        { date: "Fri", total_sales: 5000 },
        { date: "Sat", total_sales: 3500 },
      ];
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
          {[...Array(9)].map((i, index) => {
            if ((index + 1) % 2 !== 0) {
              return (
                <ReferenceLine
                  key={index}
                  y={(index + 1) * 1000}
                  stroke="#EBEBEB"
                  strokeDasharray="0 0"
                />
              );
            }
          })}
          <CartesianGrid vertical={false} strokeOpacity={0.7} />
          <Line
            dataKey="total_sales"
            type="monotone"
            dot={false}
            stroke="#61A061"
            strokeWidth={2}
            activeDot={false}
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
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            dataKey="total_sales"
            strokeOpacity={0}
            domain={[0, 10000]}
            tickCount={6}
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
