import DashboardGap from "../../UtilComponents/DashboardGap";
import InventoryContaner from "./InventoryContaner";
import { useState } from "react";
function Inventory() {
  const xml = (
    <div className="w-full inventory h-dvh overflow-y-scroll hide-scrollbar">
      <DashboardGap />
      <InventoryContaner />
    </div>
  );
  return xml;
}

export default Inventory;
