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

const data = [
  { day: "Mon", sales: 2000 },
  { day: "Tue", sales: 1000 },
  { day: "Wed", sales: 9000 },
  { day: "Thu", sales: 4000 },
  { day: "Fri", sales: 5000 },
  { day: "Sat", sales: 3500 },
];

const SalesTrendChart = () => {
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
