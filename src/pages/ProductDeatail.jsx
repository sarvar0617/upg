import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";
import { useGetAllProductsQuery, useGetProductBySlugQuery } from "../services/ProductApi";
import { useCurrency } from "../context/CurrencyContext";
import { useProducts } from "../context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { formatPrice } = useCurrency();
  const { addToCart, isFavorite, toggleFavorite } = useProducts();
  const [activeTab, setActiveTab] = useState("characteristics");
  const { data: product, error, isLoading } = useGetProductBySlugQuery(id);
  const { data: catalog } = useGetAllProductsQuery();

  if (isLoading) return <div className="container mx-auto px-4 py-10">Loading...</div>;
  if (error || !product) return <div className="container mx-auto px-4 py-10">Mahsulot topilmadi</div>;

  const similar = (catalog?.products || [])
    .filter((item) => item.id !== product.id && item.categoryId === product.categoryId)
    .slice(0, 4);
  const favorite = isFavorite(product.id);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:text-orange-600">Главная</Link> / {product.title}
      </div>
      <h1 className="text-2xl md:text-3xl font-bold mb-8">{product.title}</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="border border-gray-200 rounded-lg p-5 flex items-center justify-center min-h-[420px]">
          <img src={product.image} alt={product.title} className="max-h-[400px] max-w-full object-contain" />
        </div>
        <div className="border border-gray-200 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start gap-4">
              <span className={product.stock > 0 ? "text-green-600" : "text-red-500"}>
                {product.stock > 0 ? "В наличии" : "Нет в наличии"}
              </span>
              <button
                type="button"
                onClick={() => toggleFavorite(product)}
                aria-label={favorite ? "Удалить из избранного" : "Добавить в избранное"}
                className="text-2xl text-pink-500 hover:scale-110 transition"
              >
                {favorite ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
            <div className="flex items-center gap-1 text-yellow-400 mt-6"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p className="text-3xl font-bold text-gray-800 mt-5">{formatPrice(product.price)}</p>
            {product.oldPrice && <p className="text-gray-400 line-through">{formatPrice(product.oldPrice)}</p>}
            <p className="text-gray-500 mt-4">Производитель: <b className="text-gray-800">{product.brand}</b></p>
          </div>
          <div className="space-y-3 mt-8">
            <button type="button" onClick={() => addToCart(product)} className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700 transition flex justify-center items-center gap-2">
              <SlBasket /> В корзину
            </button>
            <button type="button" className="w-full border border-orange-600 text-orange-600 py-3 rounded hover:bg-orange-50 transition">Купить в один клик</button>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <div className="flex border border-gray-300">
          <button type="button" onClick={() => setActiveTab("characteristics")} className={`flex-1 py-3 ${activeTab === "characteristics" ? "text-orange-600 font-semibold bg-orange-50" : ""}`}>Характеристики</button>
          <button type="button" onClick={() => setActiveTab("description")} className={`flex-1 py-3 border-l border-gray-300 ${activeTab === "description" ? "text-orange-600 font-semibold bg-orange-50" : ""}`}>Описание</button>
        </div>
        {activeTab === "characteristics" ? (
          <div className="border border-t-0 border-gray-300">
            {[
              ["Название", product.title],
              ["Артикул", product.sku],
              ["Торговая марка", product.brand],
              ["Категория", product.category?.name || "—"],
              ["Количество на складе", product.stock],
            ].map(([label, value]) => <div key={label} className="grid grid-cols-2 border-b last:border-b-0 border-gray-200 px-5 py-3 text-sm"><span className="text-gray-500">{label}</span><span className="font-medium">{value}</span></div>)}
          </div>
        ) : (
          <div className="border border-t-0 border-gray-300 p-6 text-gray-700 leading-7">{product.description || "Mahsulot tavsifi hozircha mavjud emas."}</div>
        )}
      </section>

      {similar.length > 0 && <section className="mt-12"><h2 className="text-2xl font-bold mb-5">Похожие товары</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{similar.map((item) => <Link to={`/productdetail/${item.id}`} key={item.id} className="border rounded-lg p-4 hover:shadow-lg transition"><img src={item.image} alt={item.title} className="w-full h-40 object-contain" /><p className="font-semibold mt-3">{item.title}</p><p className="text-orange-600 font-bold mt-2">{formatPrice(item.price)}</p></Link>)}</div></section>}
    </div>
  );
};

export default ProductDetail;
