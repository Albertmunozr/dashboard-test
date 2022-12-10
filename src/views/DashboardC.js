import React from "react";
import ChartA from "../components/ChartA";
import ChartB from "../components/ChartB";
import ChartC from "../components/ChartC";

function DashboardC() {
  return (
    <>
      <ChartA type="area" width="600" data="" />
      <ChartB type="line" width="600" data="" />
      <ChartC type="bar" width="600" data="" />
    </>
  );
}

export default DashboardC;
