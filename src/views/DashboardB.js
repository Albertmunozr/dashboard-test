import React from "react";
import ClientTable from "../components/ClientTable";
import ChartB from "../components/ChartB";
import ChartC from "../components/ChartC";

function DashboardB() {
  return (
    <>
      <div className="charts">
        <ChartB type="line" data="" />
        <ChartC type="bar" data="" />
      </div>

      <ClientTable />
    </>
  );
}

export default DashboardB;
