import React from "react";
import ClientTable from "../components/ClientTable";
import ChartA from "../components/ChartA";
import ChartC from "../components/ChartC";

function DashboardC() {
  return (
    <>
      <div className="charts">
        <ChartA type="area" data="" />
        <ChartC type="bar" data="" />
      </div>

      <ClientTable />
    </>
  );
}

export default DashboardC;
