import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WhyWe from "./pages/WhyWe";
import Upgrade from "./pages/Upgrade";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Layout from "./layouts/Layout";
import Cart from "./pages/Cart";
import ProductDeatail from "./pages/ProductDeatail";
import Register from "./pages/auth/Register";
import Sms from "./pages/auth/Sms";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="why-we" element={<WhyWe />} />
          <Route path="upgrade" element={<Upgrade />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="payment" element={<Payment />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="productdetail/:id" element={<ProductDeatail />} />
          <Route path="register" element={<Register />} />
          <Route path="sms" element={<Sms />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
