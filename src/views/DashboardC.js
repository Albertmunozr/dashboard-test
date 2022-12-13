import React from "react";
import ChartA from "../components/ChartA";
import ChartB from "../components/ChartB";
import ChartC from "../components/ChartC";

function DashboardC() {
  return (
    <>
      <ChartA type="area" width="580" />
      <ChartB type="line" width="580" />
      <ChartC type="bar" width="580" />
    </>
  );
}

export default DashboardC;
