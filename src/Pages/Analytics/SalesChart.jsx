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

const renderLegend = () => {
  return (
    <div className="flex items-center gap-4 mt-4 justify-center">
      <div className="flex items-center gap-2">
        <div className="w-[1.3rem] h-[1.3rem] bg-green-900 rounded-full"></div>
        <span className="text-[1.6rem] text-black text-center">Sales</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[1.3rem] h-[1.3rem] bg-green-500 rounded-full"></div>
        <span className="text-[1.6rem] text-black text-center">Purchase</span>
      </div>
    </div>
  );
};
const SalesChart = ({ analyticsChartData }) => {
  const chartData = analyticsChartData
    ? analyticsChartData.weekly_sales_purchases
    : false;
  const data = chartData
    ? chartData
    : [
        { week: "Week 1", sales: 50000, purchases: 30000 },
        { week: "Week 2", sales: 45000, purchases: 35000 },
        { week: "Week 3", sales: 52000, purchases: 36000 },
        { week: "Week 4", sales: 48000, purchases: 20000 },
      ];
  return (
    <>
      <h2 className="text-black text-center poppins text-[20px] font-semibold leading-[100%] w-[23.7rem] h-[17px] ml-[2rem] mt-[0.5rem] mb-[4.316rem] max-md:w-full max-md:mx-0">
        Sales and Purchase
      </h2>
      <div className="max-md:ml-[-2rem] w-full">
        <ResponsiveContainer width="100%" height={397}>
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 20, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="week"
              axisLine={{ stroke: "black", strokeWidth: 2 }}
            />
            <YAxis domain={[0, 50000]} tickCount={12} />
            <Tooltip />
            <Legend content={renderLegend} />
            <Bar
              dataKey="sales"
              fill="#004200"
              barSize={20}
              radius={[9.963, 9.963, 0, 0]}
            />
            <Bar
              dataKey="purchases"
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
