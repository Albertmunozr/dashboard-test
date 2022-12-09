import React from "react";
import ClientTable from "../components/ClientTable";
import Chart from "../components/Chart";

function Dashboard() {
  return (
    <>
      <div className="charts">
        <Chart type="bar" data="" />
        <Chart type="line" data="" />
        <Chart type="area" data="" />
      </div>

      <ClientTable />
    </>
  );
}

export default Dashboard;
