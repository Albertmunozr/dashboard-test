import React from "react";
import ClientTable from "../components/ClientTable";
import ChartA from "../components/ChartA";
import ChartB from "../components/ChartB";
import ChartC from "../components/ChartC";

function DashboardA() {
  return (
    <>
      <ChartA type="area" width="380" />
      <ChartB type="line" width="380" />
      <ChartC type="bar" width="380" />

      <ClientTable />
    </>
  );
}

export default DashboardA;
