import React from "react";
import ClientTable from "../components/ClientTable";
import ChartA from "../components/ChartA";
import ChartB from "../components/ChartB";
import ChartC from "../components/ChartC";

function DashboardA() {
  return (
    <>
      <ChartA type="area" width="400" data="" />
      <ChartB type="line" width="400" data="" />
      <ChartC type="bar" width="400" data="" />

      <ClientTable />
    </>
  );
}

export default DashboardA;
