import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.open-meteo.com/v1/forecast",
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: () =>
        "?latitude=41.39&longitude=2.16&hourly=temperature_2m,relativehumidity_2m",
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
