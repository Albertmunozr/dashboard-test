import React from "react";
import ClientTable from "../components/ClientTable";
import ChartB from "../components/ChartB";
import ChartC from "../components/ChartC";

function DashboardB() {
  return (
    <>
      <ChartB type="line" width="460" />
      <ChartC type="bar" width="460" />

      <ClientTable />
    </>
  );
}

export default DashboardB;
