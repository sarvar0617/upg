import React from "react";
import { CiSearch, CiWallet } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCodeCompare, FaRegHeart } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { GrContact } from "react-icons/gr";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-md bg-white w-full">
      <div className="container mx-auto px-4 md:px-6 h-20 flex gap-5 justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold  font-[TerminatorGen] cursor-pointer text-orange-600 ">
          <Link to="/">Logo</Link>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center border border-gray-300  px-4 w-1/3 bg-gray-50 focus-within:ring-2 ring-blue-400">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-2 py-1 bg-transparent outline-none text-sm"
          />
          <CiSearch className="text-gray-500" size={20} />
        </div>

        {/* Icons */}
        <ul className="hidden lg:flex items-center gap-5 text-sm text-gray-700">
          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <CiWallet size={20} />
            <span>UZS/USD</span>
          </li>
          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <FaCodeCompare size={18} />
            <span>Сравнение</span>
          </li>
          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <FaRegHeart size={18} />
            <span>Избранное</span>
          </li>
          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <Link to="/cart" className="flex items-center gap-1">
              <SlBasket size={18} />

              <span>Корзина</span>
            </Link>
          </li>
          <li className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
            <GrContact size={18} />
            <span>Контакты</span>
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
          <SlBasket size={20} />
          <FaRegUserCircle size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;
