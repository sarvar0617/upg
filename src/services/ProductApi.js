import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductApi = createApi({
  reducerPath: "ProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "Main.json",
    }),
  }),
});
export const { useGetAllProductsQuery } = ProductApi;
