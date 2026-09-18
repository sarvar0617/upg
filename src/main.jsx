import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { CurrencyProvider } from "./context/CurrencyContext";
import { ProductProvider } from "./context/ProductContext";
import { store } from "./store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CurrencyProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CurrencyProvider>
    </Provider>
  </React.StrictMode>
);
