import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
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
import Cookies from "universal-cookie";

function SalesOverallChart({ data }) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // USERDATA
  const cookie = new Cookies();
  const token = cookie?.get("token");
  let decodedToken, type;
  try {
    decodedToken = jwtDecode(token);
    type = decodedToken?.livestockType;
  } catch (error) {
    decodedToken = "";
  }

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
  const stadData = [
    type === "both"
      ? { name: "poultry", sales: 0, expenses: 0, loss: 0 }
      : { name: type, sales: 0, expenses: 0, loss: 0 },
  ];
  return (
    <div className="w-full h-[46.3rem] flex justify-center items-center hide-scrollbar overflow-scroll max-md:justify-baseline">
      <ResponsiveContainer
        width={screenSize > 768 ? "100%" : "200%"}
        height="100%"
        className="shrink-0"
        style={{ marginLeft: `${screenSize > 768 ? "0" : "400px"}` }}
      >
        <BarChart
          data={!!data.length ? data : stadData}
          margin={{
            top: 20,
            right: screenSize > 768 ? 30 : 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#CCCCCC"
            vertical={false}
          />
          {/* {[
            50, 150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150, 1250,
            1350, 1450, 1550,
          ].map((y) => (
            <ReferenceLine key={y} y={y} stroke="#000" strokeDasharray="1 1" />
          ))} */}
          <XAxis dataKey="name" className="text-[1.2rem]" />
          <YAxis
            className="text-[1.2rem]"
            domain={[0, "dataMax + 30000"]}
            tickCount={15}
          />
          <Tooltip />
          <Legend fontSize="14px" />
          <Bar dataKey="sales" fill="#004200" barSize={40} />
          <Bar dataKey="expenses" fill="#61A061" barSize={40} />
          <Bar dataKey="loss" fill="#77F477" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesOverallChart;
