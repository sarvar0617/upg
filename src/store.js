import { configureStore } from "@reduxjs/toolkit";
import { ProductApi } from "./services/ProductApi";

export const store = configureStore({
  reducer: {
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getMiddleware) => {
    return getMiddleware().concat(ProductApi.middleware);
  },
});
