import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaHeart, FaMinus, FaPlus, FaRegHeart, FaStar } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import Components from "../json/Components.json";
import NewProduct from "../json/NewProduct.json";
import BestOffers from "../json/BestOffers.json";
import { useCurrency } from "../context/CurrencyContext";
import { useProducts } from "../context/ProductContext";

const productsByCategory = {
  21: [2, 3, 4, 7, 14], // Клавиатуры
  22: [15, 17], // Мыши
  23: [6, 13], // Микрофоны
  24: [5, 18], // Наушники
  25: [16], // Мониторы
  26: [1, 8], // Кронштейны
  27: [], // Колонки
  28: [], // Коврики
  29: [], // Ноутбуки
  30: [10], // Консоли
  31: [19], // Контроллеры
  32: [11], // Wi-Fi адаптеры
  33: [9], // Корпуса
  34: [], // Процессоры
  35: [], // Видеокарты
  36: [], // Оперативная память
  37: [], // Материнские платы
  38: [], // SSD диски
  39: [], // Кулеры
  40: [], // Блоки питания
  41: [20], // Столы
  42: [], // Кресла
  43: [12], // Освещение
  44: [], // Аксессуары
};

const Products = () => {
  const [searchParams] = useSearchParams();
  const { formatPrice } = useCurrency();
  const { cart, addToCart, updateCartQuantity, toggleFavorite, isFavorite } = useProducts();
  const categoryId = Number(searchParams.get("category"));
  const category = Components.find((item) => item.id === categoryId);
  const allProducts = [...NewProduct, ...BestOffers];
  const productIds = productsByCategory[categoryId] || [];
  const products = allProducts.filter((product) => productIds.includes(product.id));

  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-10">
      <h1 className="text-2xl sm:text-3xl font-[terminatorgen]">
        {category?.title || "Товары"}
      </h1>

      {products.length === 0 ? (
        <p className="mt-8 text-lg text-gray-600">
          В этой категории пока нет товаров.
        </p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 mt-6 sm:mt-8">
          {products.map((product) => (
            <div
              className="relative bg-white border border-[#00000018] shadow-lg rounded-lg p-2 sm:p-4 flex flex-col justify-between min-h-[300px] sm:min-h-[380px]"
              key={product.id}
            >
              <button type="button" onClick={() => toggleFavorite(product)} aria-label="Добавить в избранное" className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 cursor-pointer text-pink-500 text-lg sm:text-xl">
                {isFavorite(product.id) ? <FaHeart /> : <FaRegHeart />}
              </button>
              <Link to={`/productdetail/${product.id}`}>
                <div className="w-full h-28 sm:h-48 overflow-hidden flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain max-h-full"
                  />
                </div>
              </Link>
              <div className="mt-2 sm:mt-4 flex flex-col flex-grow">
                <p className="text-xs sm:text-lg font-semibold text-gray-800 line-clamp-2 min-h-8 sm:min-h-14">
                  {product.title}
                </p>
                <div className="flex items-center justify-between gap-1 sm:gap-2 mt-2 text-xs sm:text-sm">
                  <span className="flex text-yellow-500 text-[10px] sm:text-base">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} />
                    ))}
                  </span>
                  <span className="bg-amber-100 text-orange-600 p-1 sm:p-2 text-[10px] sm:text-sm truncate max-w-[55%]">
                    {product.brand}
                  </span>
                </div>
                <p className="text-sm sm:text-lg font-bold text-gray-700 mt-2 truncate">
                  {formatPrice(product.price)}
                </p>
                {cart.find((item) => item.id === product.id) ? (
                  <div className="mt-2 sm:mt-4 w-full h-9 sm:h-10 flex items-center justify-center gap-2 sm:gap-5 border border-orange-600 rounded-md text-orange-600">
                    <button type="button" onClick={() => updateCartQuantity(product.id, cart.find((item) => item.id === product.id).quantity - 1)} className="cursor-pointer p-1 sm:p-2"><FaMinus size={10} /></button>
                    <span className="font-bold">{cart.find((item) => item.id === product.id).quantity}</span>
                    <button type="button" onClick={() => updateCartQuantity(product.id, cart.find((item) => item.id === product.id).quantity + 1)} className="cursor-pointer p-1 sm:p-2"><FaPlus size={10} /></button>
                  </div>
                ) : (
                  <button type="button" onClick={() => addToCart(product)} className="cursor-pointer bg-orange-600 hover:bg-orange-100 hover:text-orange-600 transition text-white mt-2 sm:mt-4 w-full h-9 sm:h-10 rounded-md flex justify-center gap-1 sm:gap-3 items-center text-[11px] sm:text-base">
                    <SlBasket size={16} /> В корзину
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
