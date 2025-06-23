import React from "react";
import noinfo from "../assets/noinfo.png";
const Cart = () => {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-6 mt-10">
        <h1 className="font-[terminatorgen] text-3xl text-orange-600">
          Корзина
        </h1>
        <div>
          <div className="flex items-center justify-center mt-45">
            <p className="text-gray-500 text-lg">Ваша корзина пуста</p>
          </div>
          <div className="flex items-center justify-center ">
            <img src={noinfo} alt="No Information" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
