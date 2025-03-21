import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

function MyBarChart() {
  const salesData = [
    { month: "Jan", sales: 1200 },
    { month: "Feb", sales: 1500 },
    { month: "Mar", sales: 1800 },
    { month: "Apr", sales: 2200 },
    { month: "May", sales: 1700 },
  ];
  const xml = (
    <>
      <div className="flex mb-[0.35rem] justify-between">
        <h2 className="text-black poppins text-[2.4508rem] font-medium leading-normal ml-[4.3rem]">
          Sales Trend
        </h2>
        <div className="flex gap-[2.7rem] max-md:gap-[1rem]">
          <div className="w-[5.4rem] h-[2.8rem] bg-[#61A061]"></div>
          <span className="text-black poppins text-[2rem] font-semibold leading-normal mr-[0.6rem]">
            Sales
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" minHeight={480} className="mb-[5.7rem]">
        <BarChart
          data={salesData}
          width={500}
          height={500}
          barSize={42}
          layout="vertical"
        >
          <CartesianGrid
            strokeDasharray="1"
            strokeOpacity={0.8}
            horizontal={false}
          />
          <XAxis type="number" />
          <YAxis
            dataKey="month"
            type="category"
            domain={[0, "dataMax + 500"]}
          />
          <Bar
            dataKey="sales"
            fill="#61A061"
            style={{ position: "fixed", zIndex: 0 }}
          ></Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
  return xml;
}

export default MyBarChart;
