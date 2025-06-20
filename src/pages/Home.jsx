import React, { useState } from "react";
import ImageSlider from "../components/ProductSlider";
import NewProduct from "../json/NewProduct.json";
import { FaStar } from "react-icons/fa";

const Home = () => {
  const [newProduct, setNewProduct] = useState(NewProduct);
  return (
    <div>
      <ImageSlider />
      <div className="container mx-auto px-4 md:px-6 mt-10">
        <h1 className="text-[34px] font-[terminatorgen]">Новинки</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
          {newProduct.map((product, index) => (
            <div
              className="bg-white border shadow-md rounded-lg p-4 w-full flex flex-col justify-between h-full min-h-[380px]"
              key={index}
            >
              <div className="w-full h-48 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain max-h-full"
                />
              </div>

              <div className="mt-4 flex flex-col justify-between flex-grow">
                <p className="text-lg font-semibold text-gray-800">
                  {product.title}
                </p>

                <div className="flex items-center justify-between gap-2 mt-2 text-sm text-gray-500">
                  <span className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  <span>{product.brand}</span>
                </div>

                <button className="bg-orange-600 hover:bg-orange-100 hover:text-orange-600 transition text-white mt-4 w-full h-10 rounded-md flex justify-center items-center">
                  в корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
