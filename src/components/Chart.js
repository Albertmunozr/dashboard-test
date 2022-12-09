import React from "react";
import ReactApexChart from "react-apexcharts";
import { useGetCurrencyQuery } from "../features/services/currencyChart";

function Chart({ type }) {
  const { data, isError, error, isLoading } = useGetCurrencyQuery();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  //console.log(data);
  console.log("Date: " + data.date, "Eur: " + data.eur.ada);

  const chardata = {
    //data on the x-axis
    chart: { id: "bar-chart" },
    xaxis: {
      categories: [1992, 1993, 1994, 1995, 1996],
    },

    series: [
      //data on the y-axis
      {
        name: "Temperature in Celsius",
        data: [20, 25, 35, 30, 23],
      },
    ],
  };

  return (
    <div>
      <ReactApexChart
        options={chardata}
        series={chardata.series}
        type={type}
        width="400"
      />
    </div>
  );
}

export default Chart;
