import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import noinfo from "../assets/noinfo.png";
import { useCurrency } from "../context/CurrencyContext";
import { useProducts } from "../context/ProductContext";

const Favorites = () => {
  const { favorites, toggleFavorite } = useProducts();
  const { formatPrice } = useCurrency();

  return (
    <div className="container mx-auto px-4 md:px-6 py-10">
      <h1 className="font-[terminatorgen] text-3xl text-orange-600 mb-8">Избранное</h1>
      {favorites.length === 0 ? (
        <div className="text-center text-gray-500"><p>В избранном пока нет товаров</p><img src={noinfo} alt="Нет избранных товаров" className="mx-auto" /></div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{favorites.map((product) => <div key={product.id} className="border rounded-lg p-4"><Link to={`/productdetail/${product.id}`}><img src={product.image} alt={product.title} className="w-full h-44 object-contain" /></Link><p className="font-semibold mt-3">{product.title}</p><p className="text-orange-600 font-bold mt-2">{formatPrice(product.price)}</p><button type="button" onClick={() => toggleFavorite(product)} className="text-pink-500 mt-3 flex items-center gap-2"><FaHeart /> Удалить</button></div>)}</div>
      )}
    </div>
  );
};

export default Favorites;
