import DashboardGap from "../../UtilComponents/DashboardGap";
import DashboardBox from "./DashboardBox";
import DashboardContainer from "./DashboardContainer";
import DashboardTable from "./DashboardTable";
import MyBarChart from "./MyBarChart";
function Dashboard() {
  const xml = (
    <div className="w-full inventory h-dvh overflow-y-scroll hide-scrollbar">
      <DashboardGap />
      <div className="flex flex-col w-full">
        <DashboardContainer gap="gap-[1rem]" p={true}>
          <DashboardBox head="Fish Count" body="150" />
          <DashboardBox head="Bird Count" body="100" />
          <DashboardBox head="Feed Stock" body="Low Stock" icon={true} />
          <DashboardBox head="Total Sales" body="N150,000" />
        </DashboardContainer>
        <DashboardContainer
          mt="mt-[3rem]"
          cs="pr-[6.5rem] !block max-md: !pr-[2rem]"
        >
          <MyBarChart />
        </DashboardContainer>
        <DashboardContainer
          mt="mt-[4.7rem]"
          cs="mb-[3rem] overflow-x-auto hide-scrollbar"
        >
          <DashboardTable />
        </DashboardContainer>
      </div>
    </div>
  );
  return xml;
}

export default Dashboard;
