import DashboardGap from "../../UtilComponents/DashboardGap";
import DashboardBox from "./DashboardBox";
import DashboardContainer from "./DashboardContainer";
import DashboardTable from "./DashboardTable";
import MyBarChart from "./MyBarChart";
import { Suspense, useEffect, useState } from "react";
import { useMainContext } from "../../../MainContext";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { Await, Navigate, useLoaderData } from "react-router-dom";
import { get } from "../../../http";
import config from "../../../config";
import Cookies from "universal-cookie";
import DashboardLoaderUI, {
  ChartLoader,
} from "../../LoaderUI/DashboardLoaderUI";
import numberFormatter from "../../../utils/numberFormatter";

function Dashboard() {
  const { cookie } = useMainContext();
  const token = cookie.get("token");
  let decodedToken;
  try {
    decodedToken = jwtDecode(token);
  } catch (error) {
    return <Navigate to="/login"></Navigate>;
  }
  const { dashboardPreviewData } = useLoaderData();
  const type = decodedToken.livestockType;
  const isFish = type === "fish" || type === "both";
  const isPoultry = type === "poultry" || type === "both";

  const xml = (
    <div className="w-full inventory h-dvh overflow-y-scroll hide-scrollbar">
      <DashboardGap />
      <Suspense fallback={<DashboardLoaderUI state="loading" />}>
        <Await resolve={dashboardPreviewData}>
          {(dashboardPreviewData) => {
            return (
              <DashboardContainer gap="gap-[1rem]" p={true} type={type}>
                {isFish && (
                  <DashboardBox
                    head="Fish Count"
                    val={
                      type === "poultry"
                        ? dashboardPreviewData?.data?.totalLivestock
                        : dashboardPreviewData?.data?.totalLivestock?.fish
                    }
                    body={
                      type === "fish"
                        ? Math.abs(dashboardPreviewData?.data?.totalLivestock)
                        : Math.abs(
                            dashboardPreviewData?.data?.totalLivestock?.fish,
                          )
                    }
                  />
                )}
                {isPoultry && (
                  <DashboardBox
                    head="Bird Count"
                    val={
                      type === "poultry"
                        ? dashboardPreviewData?.data?.totalLivestock
                        : dashboardPreviewData?.data?.totalLivestock?.poultry
                    }
                    body={
                      type === "poultry"
                        ? Math.abs(dashboardPreviewData?.data?.totalLivestock)
                        : Math.abs(
                            dashboardPreviewData?.data?.totalLivestock?.poultry,
                          )
                    }
                  />
                )}
                <DashboardBox
                  head="Feed Stock"
                  val={dashboardPreviewData?.data?.totalFeedLeft}
                  body={Math.abs(dashboardPreviewData?.data?.totalFeedLeft)}
                  icon={
                    dashboardPreviewData?.data?.totalFeedLeft <=
                    dashboardPreviewData?.data?.threshold
                  }
                />
                <DashboardBox
                  head="Total Sales"
                  val={dashboardPreviewData?.data?.totalSales}
                  body={`N${numberFormatter(Math.abs(dashboardPreviewData?.data?.totalSales))}`}
                />
              </DashboardContainer>
            );
          }}
        </Await>
      </Suspense>
      <Suspense fallback={<ChartLoader />}>
        <Await resolve={dashboardPreviewData}>
          {(data) => {
            return (
              <DashboardContainer
                mt="mt-[3rem] pb-[1rem]"
                cs="pr-[6.5rem] !block max-md: !pr-[2rem]"
              >
                <MyBarChart dashboardData={data?.data} />
              </DashboardContainer>
            );
          }}
        </Await>
      </Suspense>
      <Suspense>
        <Await resolve={dashboardPreviewData}>
          {(data) => (
            <DashboardContainer
              mt="mt-[4.7rem]"
              cs="mb-[3rem] overflow-x-auto hide-scrollbar"
            >
              <DashboardTable dashboardData={data?.data?.livestockSummary} />
            </DashboardContainer>
          )}
        </Await>
      </Suspense>
    </div>
  );
  return xml;
}

export default Dashboard;

export async function loader() {
  const cookie = new Cookies();
  const token = cookie.get("token");
  const dashboardPreviewData = get(
    `${config.apiDomain}/api/v1/dashboard`,
    token,
  );

  return { dashboardPreviewData };
}
