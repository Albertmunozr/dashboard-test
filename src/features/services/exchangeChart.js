import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exchangeApi = createApi({
  reducerPath: "exchangeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest",
  }),
  endpoints: (builder) => ({
    getExchangeValue: builder.query({
      query: () => "/currencies/eur.json",
    }),
    getExchangeName: builder.query({
      query: () => "/currencies.json",
    }),
  }),
});

export const { useGetExchangeValueQuery, useGetExchangeNameQuery } =
  exchangeApi;
