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
  { name: "Birds", Sales: 120, Expenses: 80, Loss: 40 },
  { name: "Catfish", Sales: 100, Expenses: 70, Loss: 30 },
  { name: "Feed", Sales: 0, Expenses: 160, Loss: 0 },
  { name: "Loss", Sales: 0, Expenses: 0, Loss: 60 },
];

function SalesOverallChart() {
  return (
    <div className="w-full h-[46.3rem] flex justify-center items-center">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#CCCCCC"
            vertical={false}
          />
          {[
            50, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150, 1250,
            1350, 1450, 1550,
          ].map((y) => (
            <ReferenceLine key={y} y={y} stroke="#000" strokeDasharray="1 1" />
          ))}
          <XAxis dataKey="name" className="text-sm" />
          <YAxis className="text-sm" domain={[0, 160]} tickCount={9} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Sales" fill="#004200" barSize={40} />
          <Bar dataKey="Expenses" fill="#61A061" barSize={40} />
          <Bar dataKey="Loss" fill="#77F477" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesOverallChart;
