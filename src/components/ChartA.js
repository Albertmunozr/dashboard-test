import React from "react";
import ReactApexChart from "react-apexcharts";
import { useGetCurrencyQuery } from "../features/services/currencyChart";

function ChartA({ type, width }) {
  const { data, isError, error, isLoading } = useGetCurrencyQuery();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  const value = data.data.slice(-10).map((val) => val.priceUsd.substring(0, 8));
  const date = data.data.slice(-10).map((dat) => dat.date.substring(0, 10));

  const chardata = {
    //data on the x-axis
    chart: { id: "area-chart" },
    xaxis: {
      categories: date,
    },

    series: [
      //data on the y-axis
      {
        name: "Bitcoin value",
        data: value,
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
        className="bg-white p-2 m-2 rounded-md"
      />
    </div>
  );
}

export default ChartA;
