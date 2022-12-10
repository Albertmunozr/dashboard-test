import React from "react";
import ReactApexChart from "react-apexcharts";
import { useGetVatQuery } from "../features/services/vatChart";

function ChartC({ type, width }) {
  const { data, isError, error, isLoading } = useGetVatQuery();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;
  console.log(data);

  //const value = data.data.slice(-10).map((val) => val.priceUsd.substring(0, 8));
  //const date = data.data.slice(-10).map((dat) => dat.date.substring(0, 10));

  const chardata = {
    //data on the x-axis
    chart: { id: "bar-chart" },
    xaxis: {
      categories: [2, 4, 8],
    },

    series: [
      //data on the y-axis
      {
        name: "Bitcoin value",
        data: [4, 12, 45],
      },
    ],
  };

  return (
    <div>
      <ReactApexChart
        options={chardata}
        series={chardata.series}
        type={type}
        width={width}
      />
    </div>
  );
}

export default ChartC;
