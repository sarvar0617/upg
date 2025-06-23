import React, { useState } from "react";
import ImageSlider from "../components/ProductSlider";
import NewProduct from "../json/NewProduct.json";
import { FaStar } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import BestOffers from "../json/BestOffers.json";

import { Link } from "react-router-dom";
import ComponentsSlider from "../components/ComponentSlider";

const Home = () => {
  const [newProduct, setNewProduct] = useState(NewProduct);
  const [bestOffers, setBestOffers] = useState(BestOffers);

  return (
    <div>
      <ImageSlider />
      <div className="container mx-auto px-4 md:px-6 mt-10">
        <h1 className="text-[34px] font-[terminatorgen]">Новинки</h1>
        <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-6">
          {newProduct.map((product, index) => (
            <div
              className="bg-white border-1 border-[#00000018] shadow-lg rounded-lg p-4 w-full flex flex-col justify-between h-full min-h-[380px]"
              key={index}
            >
              <Link
                to={`/productdetail/${product.id}`}
                className="flex items-center gap-2"
              >
                <div className="w-full h-48 overflow-hidden flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain max-h-full"
                  />
                </div>
              </Link>
              <div className="mt-4 flex flex-col justify-between flex-grow">
                <p className="text-lg font-semibold text-gray-800">
                  {product.title}
                </p>

                <div className="flex items-center justify-between gap-2 mt-1 text-sm text-gray-500">
                  <span className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  <span className="bg-amber-100 font-Massarette text-orange-600 p-2">
                    {product.brand}
                  </span>
                </div>
                <p className="text-lg font-bold text-gray-700 mt-1">
                  {product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                  UZS
                </p>
                <button className="bg-orange-600 hover:bg-orange-100 hover:text-orange-600 transition text-white mt-4 w-full h-10 rounded-md flex justify-center gap-3 items-center">
                  <SlBasket className="" size={20} /> В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-[34px] mt-20 font-[terminatorgen]">
          Лучшие предложения
        </h1>
        <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-6">
          {bestOffers.map((product, index) => (
            <div
              className="bg-white border-1 border-[#00000018] shadow-lg rounded-lg p-4 w-full flex flex-col justify-between h-full min-h-[380px]"
              key={index}
            >
              <Link
                to={`/productdetail/${product.id}`}
                className="flex items-center gap-2"
              >
                <div className="w-full h-48 overflow-hidden flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain max-h-full"
                  />
                </div>
              </Link>
              <div className="mt-4 flex flex-col justify-between flex-grow">
                <p className="text-lg font-semibold text-gray-800">
                  {product.title}
                </p>

                <div className="flex items-center justify-between gap-2 mt-1 text-sm text-gray-500">
                  <span className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  <span className="bg-amber-100 font-Massarette text-orange-600 p-2">
                    {product.brand}
                  </span>
                </div>
                <p className="text-lg font-bold text-gray-700 mt-1">
                  {product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                  UZS
                </p>
                <button className="bg-orange-600 hover:bg-orange-100 hover:text-orange-600 transition text-white mt-4 w-full h-10 rounded-md flex justify-center gap-3 items-center">
                  <SlBasket className="" size={20} /> В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-10">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="font-[terminatorgen] text-2xl md:text-3xl mb-2">
              конфигуратор
            </h1>
            <p className="text-sm md:text-base text-gray-700">
              Конфигуратор системного блока UPGrade поможет подобрать
              комплектацию ПК и проверить комплектующие на совместимость.
              Выбирайте, сравнивайте характеристики, заказывайте дополнительные
              опции для создания конфигурации своей мечты!
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://files.ox-sys.com/cache/original/image/c0/c7/eb/c0c7eb9642f27583a30c1699c0366c28fb50e748ff93266aac8ae79c7099af04.png"
              alt="Конфигуратор"
              className="object-contain"
            />
          </div>
        </div>
        <ComponentsSlider />
        <div className=" px-4 py-10">
          <h1 className="text-3xl font-[terminatorgen] mb-6">О КОМПАНИИ</h1>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Rasm */}
            <div className="lg:w-1/2">
              <img
                src="https://files.ox-sys.com/cache/original/image/36/94/94/3694947a86fda51618fea2564bd2a93232511cd2b749880349a06870cdf80e87.jpg"
                alt="about"
                className="w-full h-auto rounded"
              />
            </div>

            {/* Matn qismi */}
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-2xl font-semibold">О компании</h2>
              <p>
                С 2009 года мы продаем компьютерную технику в Узбекистане. Мы -
                официальные партнеры многих международных компаний, что
                гарантирует качество нашей продукции.
              </p>
              <p>
                Наши опытные сотрудники всегда готовы помочь с выбором техники.
                В нашем шоуруме представлен широкий ассортимент товаров.
              </p>
              <p>
                Мы предлагаем доставку по всей республике и поддерживаем все
                виды оплаты для вашего удобства.
              </p>
              <button className="border border-orange-600 text-orange-600 px-4 py-2 rounded hover:bg-orange-600 hover:text-white transition">
                Узнать больше
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
