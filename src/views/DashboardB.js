import React from "react";
import ClientTable from "../components/ClientTable";
import ChartB from "../components/ChartB";
import ChartC from "../components/ChartC";

function DashboardB() {
  return (
    <>
      <ChartB type="line" width="500" data="" />
      <ChartC type="bar" width="500" data="" />

      <ClientTable />
    </>
  );
}

export default DashboardB;
