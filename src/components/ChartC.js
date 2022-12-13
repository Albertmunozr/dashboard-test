import React from "react";
import ReactApexChart from "react-apexcharts";
import {
  useGetExchangeValueQuery,
  useGetExchangeNameQuery,
} from "../features/services/exchangeChart";

function ChartC({ type, width }) {
  const responseVal = useGetExchangeValueQuery();
  const responseName = useGetExchangeNameQuery();

  if (responseVal.isLoading) return <div>Loading...</div>;
  else if (responseVal.isError)
    return <div>Error: {responseVal.error.message}</div>;

  if (responseName.isLoading) return <div>Loading...</div>;
  else if (responseName.isError)
    return <div>Error: {responseName.error.message}</div>;

  const chardata = {
    //data on the x-axis
    chart: { id: "bar-chart" },
    xaxis: {
      categories: [
        responseName.data.usd,
        responseName.data.gbp,
        responseName.data.chf,
      ],
    },

    series: [
      //data on the y-axis
      {
        name: "Euro Exchange value",
        data: [
          responseVal.data.eur.usd,
          responseVal.data.eur.gbp,
          responseVal.data.eur.chf,
        ],
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

export default ChartC;
