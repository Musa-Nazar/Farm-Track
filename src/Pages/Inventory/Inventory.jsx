import {
  Await,
  Navigate,
  redirect,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import DashboardGap from "../../UtilComponents/DashboardGap";
import InventoryContaner from "./InventoryContaner";
import config from "../../../config";
import { deleteEntry, get, postWithToken, patch } from "../../../http";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import isTokenExpired from "../../../utils/isTokenExpired";
import { Suspense } from "react";
import InventoryLoaderUI from "../../LoaderUI/InventoryLoaderUI";
import InventoryErrorUI from "../../LoaderUI/InventoryErrorUI";
function Inventory() {
  const type = useSearchParams()[0].get("type");
  const { entries } = useLoaderData();
  console.log(entries);
  const isTypeValid = type === "feed" || type === "livestock";
  if (!type || !isTypeValid)
    return <Navigate to="/inventory?type=feed"></Navigate>;
  const xml = (
    <div className="w-full inventory h-dvh overflow-y-scroll hide-scrollbar">
      <DashboardGap />
      <Suspense fallback={<InventoryLoaderUI />}>
        <Await resolve={entries}>
          {(entries) =>
            entries?.status >= 400 ? (
              <InventoryErrorUI message={entries?.message} />
            ) : (
              <InventoryContaner data={entries.data} />
            )
          }
        </Await>
      </Suspense>
    </div>
  );
  return xml;
}

export default Inventory;

export async function action({ request, params }) {
  const cookie = new Cookies();
  const token = cookie.get("token");
  const searchParams = new URL(request.url).searchParams;
  const type = searchParams.get("type");
  const formData = await request.formData();
  const submittedFormData = {
    type: formData.get("type") ?? "",
    name: formData.get("name")?.toLowerCase() ?? "",
    action: formData.get("action")?.toLowerCase() ?? "",
    quantity: Number(formData.get("quantity")) ?? "",
    cost: Number(formData.get("cost")) ?? "",
    method: formData.get("method") ?? "",
  };
  const id = formData.get("id");
  // CHECK TOKEN VALIDITY
  const tokenIsExpired = isTokenExpired(token);
  if (tokenIsExpired) return redirect("/login");

  const endpoint = `${config.apiDomain}/api/v1/inventory/entries?type=${submittedFormData.type}`;

  if (submittedFormData.method === "add") {
    // ENTRY
    const entry = await postWithToken(endpoint, token, submittedFormData);
    // CHECK FOR ERRORS
    if (entry?.status >= 400)
      return toast.error(entry?.message ?? "Unable to add entry", {
        className: "poppins text-[1.8rem]",
      });

    // SUCESS
    toast.success(entry?.data?.message, { className: "poppins text-[1.8rem]" });
  } else if (submittedFormData.method === "edit") {
    // ENTRY
    const entry = await patch(
      endpoint.replace(`?type=${type}`, ""),
      token,
      id,
      submittedFormData,
    );

    // CHECK FOR ERRORS
    if (entry?.status >= 400)
      return toast.error(entry?.message ?? "Unable to add entry", {
        className: "poppins text-[1.8rem]",
      });

    // SUCESS
    toast.success(entry?.data?.message, { className: "poppins text-[1.8rem]" });
  } else {
    // ENTRY
    const entry = await deleteEntry(endpoint.replace(`?type=`, ""), token, id);

    // CHECK FOR ERRORS
    if (entry?.status >= 400)
      return toast.error(entry?.message ?? "Unable to add entry", {
        className: "poppins text-[1.8rem]",
      });

    // SUCESS
    toast.success(entry?.data?.message, { className: "poppins text-[1.8rem]" });
  }
}

export async function loader({ request, params }) {
  // GET TOKEN
  const cookie = new Cookies();
  const token = cookie.get("token");

  // GET TYPE
  const searchParams = new URL(request.url).searchParams;
  const type = searchParams.get("type");

  // MAKE REQUEST
  const entries = get(
    `${config.apiDomain}/api/v1/inventory/entries?type=${type}`,
    token,
  );

  // CHECK FOR ERRORS
  if (entries?.status >= 400)
    return toast.error(entries?.message ?? "Unable to fetch entries", {
      className: "poppins text-[1.8rem]",
    });

  // SUCESS
  return { entries };
}
