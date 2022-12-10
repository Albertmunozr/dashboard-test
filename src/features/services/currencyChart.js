import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const currencyApi = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coincap.io/v2/assets/bitcoin/history",
  }),
  endpoints: (builder) => ({
    getCurrency: builder.query({
      query: () => "?interval=d1",
    }),
  }),
});

export const { useGetCurrencyQuery } = currencyApi;
