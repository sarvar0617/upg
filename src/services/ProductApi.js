import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1").replace(/\/$/, "");

const normalizeProduct = (product) => ({
  ...product,
  id: product.id ?? product.slug,
  slug: product.slug ?? product.id,
  title: product.title ?? product.name,
  brand: product.brand?.name ?? product.brand_name ?? product.brand ?? "",
  image: product.image ?? product.image_url ?? product.images?.[0] ?? "",
  currency: product.currency ?? "UZS",
  isNew: product.isNew ?? product.is_new ?? false,
  isFeatured: product.isFeatured ?? product.is_featured ?? false,
  categoryId: product.categoryId ?? product.category_id,
  categorySlug: product.category?.slug ?? product.category_slug ?? "",
});

export const ProductApi = createApi({
  reducerPath: "ProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products?page=1&limit=1000",
      transformResponse: (response) => {
        const products = (response?.data || []).map(normalizeProduct);
        return {
          newProducts: products.filter((product) => product.isNew),
          bestOffers: products.filter((product) => product.isFeatured),
          products,
        };
      },
    }),
    getCategories: builder.query({
      query: () => "categories",
      transformResponse: (response) => response?.data || [],
    }),
    getProductsByCategorySlug: builder.query({
      query: (slug) => `categories/${encodeURIComponent(slug)}/products`,
      transformResponse: (response) => ({
        category: response?.data?.category || null,
        products: (response?.data?.products || []).map(normalizeProduct),
      }),
    }),
    getProductBySlug: builder.query({
      query: (slug) => `products/${encodeURIComponent(slug)}`,
      transformResponse: (response) => (response?.data ? normalizeProduct(response.data) : null),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategorySlugQuery,
  useGetProductBySlugQuery,
} = ProductApi;
