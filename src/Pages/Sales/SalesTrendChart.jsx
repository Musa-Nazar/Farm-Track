import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { name: "Mon", Sales: 2000 },
  { name: "Tue", Sales: 1000 },
  { name: "Wed", Sales: 9000 },
  { name: "Thu", Sales: 4000 },
  { name: "Fri", Sales: 5000 },
  { name: "Sat", Sales: 3500 },
];

const SalesTrendChart = () => {
  return (
    <>
      <h2 className="text-black ml-[3.5rem] text-[20px] font-bold sf-bold mb-[3.97rem]">
        Sales Trends
      </h2>
      <div className="w-full h-[80%]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 30, left: 27, bottom: 20 }}
          >
            {/* Grid Lines */}
            <CartesianGrid
              strokeDasharray="0 0"
              stroke="#ccc"
              vertical={false}
            />

            {/* Minor Thin Lines at 500 Intervals */}
            {Array.from({ length: 20 }, (_, i) => (
              <ReferenceLine
                key={i}
                y={i * 500}
                stroke="#eee"
                strokeDasharray="1 1"
              />
            ))}

            {/* X and Y Axis */}
            <XAxis dataKey="name" />
            <YAxis domain={[0, 10000]} tickCount={6} />

            {/* Tooltip & Legend */}
            <Tooltip />
            <Legend />

            {/* Bars */}
            <Bar dataKey="Sales" fill="#4A9C64" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default SalesTrendChart;
