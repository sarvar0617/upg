import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaHeart, FaMinus, FaPlus, FaRegHeart, FaStar } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useGetAllProductsQuery } from "../services/ProductApi";
import { useCurrency } from "../context/CurrencyContext";
import { useProducts } from "../context/ProductContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetAllProductsQuery();
  const { formatPrice } = useCurrency();
  const { cart, addToCart, updateCartQuantity, toggleFavorite, isFavorite } = useProducts();
  const [activeTab, setActiveTab] = useState("characteristics");
  const [isQuickOrderOpen, setIsQuickOrderOpen] = useState(false);
  const [quickOrderSent, setQuickOrderSent] = useState(false);

  const allProducts = data?.products || [
    ...(data?.newProducts || []),
    ...(data?.bestOffers || []),
  ];
  const product = allProducts.find((item) => String(item.id) === id);

  if (isLoading) return <div className="container mx-auto px-4 py-10">Loading...</div>;
  if (error || !product) {
    return <div className="container mx-auto px-4 py-10">Mahsulot topilmadi</div>;
  }

  const similar = allProducts
    .filter((item) => item.id !== product.id && item.categoryId === product.categoryId)
    .slice(0, 4);
  const favorite = isFavorite(product.id);
  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <h1 className="text-xl sm:text-2xl mb-4 font-bold break-words">{product.title}</h1>
      <div className="max-w-7xl mx-auto mt-6 sm:mt-10 p-0 sm:p-4 grid md:grid-cols-2 gap-6">
        {/* LEFT IMAGE */}

        <div>
          <div className="border border-[#0000000e] rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-h-[420px] object-contain rounded-lg shadow"
            />
          </div>
        </div>

        {/* RIGHT INFO */}
        <div>
          {/* Mahsulot narxi va tugmalar */}
          <div className="space-y-4 flex flex-col justify-between border border-[#00000017] p-4 min-h-56 shadow-sm rounded-md">
            {/* Yuqori qism: mavjudlik va narx */}
            <div>
              <span className="text-green-500 font-medium">В наличии</span>
              <p className="text-gray-700 text-xl sm:text-2xl font-semibold mt-2">
                Цена: {formatPrice(product.price)}
              </p>
            </div>

            <button type="button" onClick={() => toggleFavorite(product)} className="mt-4 flex items-center gap-2 text-pink-500">
              {favorite ? <FaHeart /> : <FaRegHeart />}
              {favorite ? "В избранном" : "В избранное"}
            </button>
          </div>
          <div className="space-y-3 mt-8">
            {cartItem ? (
              <div className="w-full h-12 flex items-center justify-center gap-6 sm:gap-8 border border-orange-600 rounded text-orange-600">
                <button type="button" onClick={() => updateCartQuantity(product.id, cartItem.quantity - 1)} className="cursor-pointer p-3"><FaMinus size={14} /></button>
                <span className="font-bold text-lg">{cartItem.quantity}</span>
                <button type="button" onClick={() => updateCartQuantity(product.id, cartItem.quantity + 1)} className="cursor-pointer p-3"><FaPlus size={14} /></button>
              </div>
            ) : (
              <button type="button" onClick={() => addToCart(product)} className="cursor-pointer w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700 transition flex justify-center items-center gap-2">
                <SlBasket /> В корзину
              </button>
            )}
            <button type="button" onClick={() => setIsQuickOrderOpen(true)} className="w-full border border-orange-600 text-orange-600 py-3 rounded hover:bg-orange-50 transition">Купить в один клик</button>
          </div>
        </div>
      </div>

      <section className="mt-8 sm:mt-12">
        <div className="flex border border-gray-300 text-sm sm:text-base">
          <button type="button" onClick={() => setActiveTab("characteristics")} className={`flex-1 py-3 px-2 ${activeTab === "characteristics" ? "text-orange-600 font-semibold bg-orange-50" : ""}`}>Характеристики</button>
          <button type="button" onClick={() => setActiveTab("description")} className={`flex-1 py-3 px-2 border-l border-gray-300 ${activeTab === "description" ? "text-orange-600 font-semibold bg-orange-50" : ""}`}>Описание</button>
        </div>
        {activeTab === "characteristics" ? (
          <div className="border border-t-0 border-gray-300">
            {[
              ["Название", product.title],
              ["Артикул", product.sku],
              ["Торговая марка", product.brand],
              ["Категория", product.category?.name || "—"],
              ["Количество на складе", product.stock],
            ].map(([label, value]) => <div key={label} className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-3 border-b last:border-b-0 border-gray-200 px-3 sm:px-5 py-3 text-xs sm:text-sm"><span className="text-gray-500">{label}</span><span className="font-medium break-words">{value || "—"}</span></div>)}
          </div>
        ) : (
          <div className="border border-t-0 border-gray-300 p-4 sm:p-6 text-sm sm:text-base text-gray-700 leading-7">{product.description || "Mahsulot tavsifi hozircha mavjud emas."}</div>
        )}
      </section>

      {similar.length > 0 && <section className="mt-8 sm:mt-12"><h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5">Похожие товары</h2><div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">{similar.map((item) => { const itemCart = cart.find((cartProduct) => cartProduct.id === item.id); return <div key={item.id} className="relative border rounded-lg p-2 sm:p-4 hover:shadow-lg transition flex flex-col min-w-0"><button type="button" onClick={() => toggleFavorite(item)} aria-label="Добавить в избранное" className="absolute top-2 right-2 z-10 cursor-pointer text-pink-500 text-base sm:text-xl">{isFavorite(item.id) ? <FaHeart /> : <FaRegHeart />}</button><Link to={`/productdetail/${item.id}`}><img src={item.image} alt={item.title} className="w-full h-28 sm:h-40 object-contain" /><p className="font-semibold text-xs sm:text-base mt-2 sm:mt-3 line-clamp-2 min-h-8 sm:min-h-12">{item.title}</p></Link><p className="text-orange-600 font-bold text-sm sm:text-base mt-2 truncate">{formatPrice(item.price)}</p>{itemCart ? <div className="mt-2 flex items-center justify-center gap-2 sm:gap-4 h-8 sm:h-10 border border-orange-600 rounded text-orange-600"><button type="button" onClick={() => updateCartQuantity(item.id, itemCart.quantity - 1)} className="p-1"><FaMinus size={10} /></button><span className="font-bold">{itemCart.quantity}</span><button type="button" onClick={() => updateCartQuantity(item.id, itemCart.quantity + 1)} className="p-1"><FaPlus size={10} /></button></div> : <button type="button" onClick={() => addToCart(item)} className="mt-2 cursor-pointer bg-orange-600 text-white text-[11px] sm:text-sm py-2 rounded flex items-center justify-center gap-1"><SlBasket size={14} /> В корзину</button>}</div>; })}</div></section>}

      {isQuickOrderOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4" onClick={() => setIsQuickOrderOpen(false)}>
          <form onSubmit={(event) => { event.preventDefault(); setQuickOrderSent(true); }} onClick={(event) => event.stopPropagation()} className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Купить в один клик</h2>
              <button type="button" onClick={() => setIsQuickOrderOpen(false)} className="text-2xl text-gray-500">×</button>
            </div>
            {quickOrderSent ? (
              <div className="text-center py-6">
                <p className="text-green-600 font-semibold">Заявка отправлена!</p>
                <p className="text-gray-600 mt-2">Мы скоро свяжемся с вами.</p>
                <button type="button" onClick={() => { setIsQuickOrderOpen(false); setQuickOrderSent(false); }} className="mt-5 bg-orange-600 text-white px-5 py-2 rounded">Закрыть</button>
              </div>
            ) : (
              <>
                <p className="text-gray-600">{product.title}</p>
                <input required name="name" placeholder="Ваше имя" className="w-full border rounded px-3 py-3" />
                <input required name="phone" type="tel" placeholder="Номер телефона" className="w-full border rounded px-3 py-3" />
                <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700">Отправить заявку</button>
              </>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
