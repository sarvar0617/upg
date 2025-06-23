import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../services/ProductApi";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Xatolik yuz berdi</h1>;

  const allProducts = [
    ...(data?.newProducts || []),
    ...(data?.bestOffers || []),
  ];

  const product = allProducts.find((item) => String(item.id) === id);
  if (!product) return <h1>Mahsulot topilmadi</h1>;

  return (
    <div className="container mx-auto "> 
      <h1 className="text-2xl mb-4 font-bold">{product.title}</h1>
      <div className="max-w-7xl mx-auto mt-10 p-4 grid md:grid-cols-2 gap-6">
        {/* LEFT IMAGE */}

        <div>
          <div className="border border-[#0000000e]">
            <img
              src={product.image}
              alt={product.title}
              className="w-full rounded-lg shadow"
            />
          </div>
        </div>

        {/* RIGHT INFO */}
        <div>
          {/* Mahsulot narxi va tugmalar */}
          <div className="space-y-4 flex flex-col justify-between border border-[#00000017] p-4 h-72 shadow-sm rounded-md">
            {/* Yuqori qism: mavjudlik va narx */}
            <div>
              <span className="text-green-500 font-medium">В наличии</span>
              <p className="text-gray-700 text-2xl font-semibold mt-2">
                Цена: {product.price.toLocaleString()} {product.currency}
              </p>
            </div>

            {/* Pastki qism: tugmalar */}
            <div className="space-y-3">
              <button className="w-full border border-pink-500 text-pink-500 py-2 rounded hover:bg-pink-50 transition">
                Купить в один клик
              </button>
              <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition">
                В корзину
              </button>
            </div>
          </div>

          {/* Ishlab chiqaruvchi */}
          <div className="flex items-center px-4 py-3 text-gray-600 text-sm mt-4 bg-gray-100 rounded">
            Производитель:{" "}
            <span className="font-medium ml-1">{product.brand}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
