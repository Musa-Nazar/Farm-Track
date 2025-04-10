import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from "recharts";

function MyBarChart({ dashboardData }) {
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
  let salesData = dashboardData
    ? dashboardData.sales_data.slice(0, 7)
    : [
        // { date: "Jan", total_sales: 40000 },
        { date: "Jan", total_sales: 40000 },
        { date: "Feb", total_sales: 20000 },
        { date: "Mar", total_sales: 30000 },
        { date: "Apr", total_sales: 45000 },
        { date: "May", total_sales: 50000 },
      ];
  // salesData = [
  //   { date: "Jan", total_sales: 40000 },
  //   { date: "Feb", total_sales: 20000 },
  //   { date: "Mar", total_sales: 30000 },
  //   { date: "Apr", total_sales: 45000 },
  //   { date: "May", total_sales: 50000 },
  // ];
  const xml = (
    <>
      <div className="flex mb-[0.35rem] justify-between">
        <h2 className="text-black poppins text-[2rem] font-semibold leading-normal ml-[4.3rem]">
          Sales Trend
        </h2>
      </div>
      <ResponsiveContainer
        width="100%"
        minHeight={480}
        className="mb-[2rem] pl-[2.5rem] mt-[1.8rem]"
      >
        <AreaChart data={salesData}>
          {[...Array(11)].map((_, index) => {
            if ((index + 1) % 2 !== 0) {
              return (
                <ReferenceLine
                  key={index}
                  y={(index + 1) * 5000}
                  stroke="#EBEBEB"
                  strokeDasharray="0 0"
                  strokeOpacity={0.9}
                />
              );
            }
          })}
          <CartesianGrid
            vertical={false}
            strokeDasharray="0 0"
            stroke="#CCCCCC"
            strokeOpacity={0.9}
          />
          <Area
            dataKey="total_sales"
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
            dataKey="sales"
            domain={[0, 60000]}
            tickCount={7}
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
          />
          <Tooltip content={CustomTooltip} />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
  return xml;
}

export default MyBarChart;
