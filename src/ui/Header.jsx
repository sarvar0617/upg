import React, { useState } from "react";
import { CiSearch, CiWallet } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCodeCompare, FaRegHeart } from "react-icons/fa6";
import { FiMenu, FiSun, FiX } from "react-icons/fi";
import { GrContact } from "react-icons/gr";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";
import { useProducts } from "../context/ProductContext";

const Header = () => {
  const { currency, toggleCurrency } = useCurrency();
  const { cart } = useProducts();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-md bg-white w-full">
      <div className="container mx-auto px-4 md:px-6 min-h-20 flex gap-4 justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold  font-[TerminatorGen] cursor-pointer text-orange-600 ">

          <Link to="/">Logo</Link>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center border border-gray-300 px-4 w-1/3 min-w-0 bg-gray-50 focus-within:ring-2 ring-blue-400">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-2 py-1 bg-transparent outline-none text-sm"
          />
          <CiSearch className="text-gray-500" size={20} />
        </div>

        {/* Icons */}
        <ul className="hidden lg:flex items-center gap-5 text-sm text-gray-700">
          <li className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleCurrency}
              className="flex cursor-pointer items-center gap-1 hover:text-orange-600"
            >
              <CiWallet size={20} />
              <span>{currency}</span>
            </button>
          </li>

          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <FaCodeCompare size={18} />
            <span>Сравнение</span>
          </li>
          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <FaRegHeart size={18} />
            <Link to="favorites">
              <span>Избранное</span>
            </Link>
          </li>
          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <Link to="/cart" className="flex items-center gap-1 relative">
              <SlBasket size={18} />

              <span>Корзина</span>
              {cartCount > 0 && <span className="absolute -top-3 -right-4 min-w-5 h-5 px-1 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center">{cartCount}</span>}
            </Link>
          </li>
          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <Link to="/contact" className="flex items-center gap-1">
              <GrContact size={18} />
              <span>Контакты</span>
            </Link>
          </li>
          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <FiSun size={18} />
            <span>Тема</span>
          </li>
          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <Link to="/register" className="flex space-x-1">
              <FaRegUserCircle size={20} />
              <span>Профиль</span>
            </Link>
          </li>
        </ul>

        {/* Mobile icons */}
        <div className="flex lg:hidden items-center gap-3 text-gray-600">
          <CiSearch size={22} className="block md:hidden" />
          <Link to="/cart" className="relative cursor-pointer">
            <SlBasket size={20} />
            {cartCount > 0 && <span className="absolute -top-3 -right-3 min-w-5 h-5 px-1 rounded-full bg-orange-600 text-white text-xs flex items-center justify-center">{cartCount}</span>}
          </Link>
          <Link to="/register" aria-label="Профиль" className="cursor-pointer"><FaRegUserCircle size={20} /></Link>
          <button type="button" aria-label="Открыть меню" onClick={() => setIsMenuOpen((open) => !open)} className="cursor-pointer text-xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 shadow-inner">
          <div className="mb-4 flex items-center border border-gray-300 px-3 py-2 bg-gray-50">
            <input type="text" placeholder="Поиск..." className="w-full bg-transparent outline-none text-sm" />
            <CiSearch className="text-gray-500" size={20} />
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Link onClick={() => setIsMenuOpen(false)} to="/favorites" className="rounded border px-3 py-3">Избранное</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/cart" className="rounded border px-3 py-3">Корзина ({cartCount})</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/contact" className="rounded border px-3 py-3">Контакты</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/register" className="rounded border px-3 py-3">Профиль</Link>
            <button type="button" onClick={toggleCurrency} className="rounded border px-3 py-3 text-left">Валюта: {currency}</button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
