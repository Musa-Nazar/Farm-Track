import DashboardGap from "../../UtilComponents/DashboardGap";
import DashboardBox from "./DashboardBox";
import DashboardContainer from "./DashboardContainer";
import DashboardTable from "./DashboardTable";
import MyBarChart from "./MyBarChart";
import { useEffect, useState } from "react";
import { useMainContext } from "../../../MainContext";
import http from "../../../http";
import { jwtDecode } from "jwt-decode";
function Dashboard() {
  const { user, setUser, token, cookie } = useMainContext();
  const [dashboardData, setDashboardData] = useState(undefined);

  useEffect(() => {
    async function getUserData() {
      try {
        const data = await http.prototype.get(
          "/api/api/user/profile/",
          token.access
        );
        setUser(data.data);
        cookie.set(
          "user",
          data.data,
          new Date(jwtDecode(token.access).exp * 1000)
        );
      } catch (error) {
        console.log(error);
      }
    }
    getUserData();

    async function getDashboardData() {
      try {
        const dashboardInfo = await http.prototype.get(
          "/api/api/info/dashboard/",
          token.access
        );
        setDashboardData(dashboardInfo);
      } catch (error) {
        console.log(error);
      }
    }
    getDashboardData();
  }, []);
  console.log(dashboardData);
  const type = user.livestock_type
    ? user.livestock_type.toLowerCase()
    : "string";
  let total = 0;
  let totalSales = 0;
  dashboardData &&
    dashboardData.livestock_count.forEach((item) => {
      total += parseInt(item.count);
    });
  dashboardData &&
    dashboardData.sales_data.forEach((item) => {
      totalSales += parseInt(item.total_sales);
    });
  const xml = (
    <div className="w-full inventory h-dvh overflow-y-scroll hide-scrollbar">
      <DashboardGap />
      <div className="flex flex-col w-full">
        <DashboardContainer gap="gap-[1rem]" p={true}>
          {(type === "fish" || type === "both") && (
            <DashboardBox
              head="Fish Count"
              body={dashboardData ? dashboardData.livestock_count[0].count : ""}
            />
          )}
          {(type === "poultry" || type === "both") && (
            <DashboardBox
              head="Bird Count"
              body={
                dashboardData && type === "poultry"
                  ? dashboardData.livestock_count[0].count
                  : dashboardData
                  ? dashboardData.livestock_count[0].count
                  : ""
              }
            />
          )}
          <DashboardBox
            head="Feed Stock"
            body={
              dashboardData &&
              total / 2 < parseInt(dashboardData.low_stock_threshold)
                ? "Low Stock"
                : "In Stock"
            }
            icon={true}
          />
          <DashboardBox
            head="Total Sales"
            body={
              dashboardData ? `N${totalSales.toLocaleString()}` : "N150,000"
            }
          />
        </DashboardContainer>
        <DashboardContainer
          mt="mt-[3rem]"
          cs="pr-[6.5rem] !block max-md: !pr-[2rem]"
        >
          <MyBarChart dashboardData={dashboardData} />
        </DashboardContainer>
        <DashboardContainer
          mt="mt-[4.7rem]"
          cs="mb-[3rem] overflow-x-auto hide-scrollbar"
        >
          <DashboardTable dashboardData={dashboardData} />
        </DashboardContainer>
      </div>
    </div>
  );
  return xml;
}

export default Dashboard;
