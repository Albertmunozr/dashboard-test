import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const currencyApi = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies",
  }),
  endpoints: (builder) => ({
    getCurrency: builder.query({
      query: () => "/eur.json",
    }),
  }),
});

export const { useGetCurrencyQuery } = currencyApi;
