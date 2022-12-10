import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vatApi = createApi({
  reducerPath: "vatApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies",
  }),
  endpoints: (builder) => ({
    getVat: builder.query({
      query: () => "/eur.json",
    }),
  }),
});

export const { useGetVatQuery } = vatApi;
