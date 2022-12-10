import React from "react";
import ReactApexChart from "react-apexcharts";
import { useGetWeatherQuery } from "../features/services/weatherChart";

function ChartB({ type, width }) {
  const { data, isError, error, isLoading } = useGetWeatherQuery();

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  const time = data.hourly.time.slice(0, 15);
  const relHum = data.hourly.relativehumidity_2m.slice(0, 15);
  const temp = data.hourly.temperature_2m.slice(0, 15);

  const chardata = {
    //data on the x-axis
    chart: { id: "line-chart" },
    xaxis: {
      categories: time,
    },

    series: [
      //data on the y-axis
      {
        name: "Relative Humidity",
        data: relHum,
      },
      {
        name: "Temperature",
        data: temp,
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

export default ChartB;
