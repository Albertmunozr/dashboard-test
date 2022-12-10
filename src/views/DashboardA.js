import React from "react";
import ClientTable from "../components/ClientTable";
import ChartA from "../components/ChartA";
import ChartB from "../components/ChartB";
import ChartC from "../components/ChartC";

function DashboardA() {
  return (
    <>
      <div className="charts">
        <ChartA type="area" data="" />
        <ChartB type="line" data="" />
        <ChartC type="bar" data="" />
      </div>

      <ClientTable />
    </>
  );
}

export default DashboardA;
