import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

export const ProductApi = createApi({
  reducerPath: "ProductApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products?limit=100",
      transformResponse: (response) => {
        const products = response.data.map((product) => ({
          ...product,
          id: product.slug,
          title: product.name,
          brand: product.brand?.name || "",
          currency: "UZS",
        }));

        return {
          newProducts: products.filter((product) => product.isNew),
          bestOffers: products.filter((product) => product.isFeatured),
          products,
        };
      },
    }),
    getProductBySlug: builder.query({
      query: (slug) => `products/${slug}`,
      transformResponse: (response) => {
        const product = response.data;
        return {
          ...product,
          id: product.slug,
          title: product.name,
          brand: product.brand?.name || "",
          currency: "UZS",
        };
      },
    }),
  }),
});
export const { useGetAllProductsQuery, useGetProductBySlugQuery } = ProductApi;
