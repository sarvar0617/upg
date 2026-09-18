import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import noinfo from "../assets/noinfo.png";
import { useCurrency } from "../context/CurrencyContext";
import { useProducts } from "../context/ProductContext";

const Cart = () => {
  const { cart, updateCartQuantity, removeFromCart, clearCart } = useProducts();
  const { formatPrice } = useCurrency();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0),
    [cart]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-green-600">Заказ принят!</h1>
        <p className="mt-4 text-gray-600">Мы свяжемся с вами для подтверждения заказа.</p>
        <Link to="/" className="inline-block mt-8 bg-orange-600 text-white px-6 py-3 rounded">
          Вернуться на главную
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-10">
      <h1 className="font-[terminatorgen] text-3xl text-orange-600">Корзина</h1>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <p className="text-gray-500 text-lg">Ваша корзина пуста</p>
          <img src={noinfo} alt="Нет товаров" className="max-w-xs" />
          <Link to="/" className="bg-orange-600 text-white px-6 py-3 rounded mt-4">Перейти к покупкам</Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 mt-8">
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
                <div className="flex-1">
                  <Link to={`/productdetail/${item.id}`} className="font-semibold hover:text-orange-600">{item.title}</Link>
                  <p className="text-orange-600 font-bold mt-2">{formatPrice(item.price)}</p>
                </div>
                <div className="flex items-center gap-3 self-center sm:self-auto">
                  <button type="button" onClick={() => updateCartQuantity(item.id, item.quantity - 1)} className="border rounded p-2"><FaMinus size={12} /></button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => updateCartQuantity(item.id, item.quantity + 1)} className="border rounded p-2"><FaPlus size={12} /></button>
                </div>
                <button type="button" onClick={() => removeFromCart(item.id)} className="text-red-500 p-2" aria-label="Удалить товар"><FaTrash /></button>
              </div>
            ))}
            <button type="button" onClick={clearCart} className="text-red-500 underline">Очистить корзину</button>
          </div>

          <form onSubmit={handleSubmit} className="border rounded-lg p-6 h-fit space-y-4">
            <h2 className="text-2xl font-bold">Оформление заказа</h2>
            <p className="text-gray-600">Итого: <strong className="text-orange-600">{formatPrice(total)}</strong></p>
            <input required name="name" value={form.name} onChange={handleChange} placeholder="Ваше имя" className="w-full border rounded px-3 py-3" />
            <input required name="phone" value={form.phone} onChange={handleChange} placeholder="Номер телефона" className="w-full border rounded px-3 py-3" />
            <textarea required name="address" value={form.address} onChange={handleChange} placeholder="Адрес доставки" className="w-full border rounded px-3 py-3 min-h-24" />
            <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700">Оформить заказ</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
