import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";
const useSupabase = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const normalizeProduct = (product) => ({
  ...product,
  id: product.id ?? product.slug,
  title: product.title ?? product.name,
  brand: product.brand?.name ?? product.brand_name ?? product.brand ?? "",
  image: product.image ?? product.image_url ?? product.images?.[0] ?? "",
  currency: product.currency ?? "UZS",
  isNew: product.isNew ?? product.is_new ?? false,
  isFeatured: product.isFeatured ?? product.is_featured ?? false,
  categoryId: product.categoryId ?? product.category_id,
});

export const ProductApi = createApi({
  reducerPath: "ProductApi",
  baseQuery: useSupabase
    ? fetchBaseQuery({
        baseUrl: `${SUPABASE_URL}/rest/v1`,
        prepareHeaders: (headers) => {
          headers.set("apikey", SUPABASE_ANON_KEY);
          headers.set("Authorization", `Bearer ${SUPABASE_ANON_KEY}`);
          return headers;
        },
      })
    : fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () =>
        useSupabase
          ? "products?select=*&limit=100"
          : "products?limit=100",
      transformResponse: (response) => {
        const products = (useSupabase ? response : response.data).map(normalizeProduct);

        return {
          newProducts: products.filter((product) => product.isNew),
          bestOffers: products.filter((product) => product.isFeatured),
          products,
        };
      },
    }),
    getProductBySlug: builder.query({
      query: (slug) =>
        useSupabase
          ? `products?select=*&or=(slug.eq.${encodeURIComponent(slug)},id.eq.${encodeURIComponent(slug)})&limit=1`
          : `products/${slug}`,
      transformResponse: (response) => {
        const product = useSupabase ? response[0] : response.data;
        return product ? normalizeProduct(product) : null;
      },
    }),
  }),
});
export const { useGetAllProductsQuery, useGetProductBySlugQuery } = ProductApi;
