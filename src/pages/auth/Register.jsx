import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" flex items-center justify-center mt-20 ">
      <div className="bg-white p-8 rounded-md shadow-xl border-1 border-gray-200 w-full max-w-lg">
        <h2 className="text-center text-xl font-semibold mb-6">Авторизация</h2>

        <label className="block text-sm mb-2">Ваш номер телефона</label>
        <div className="flex items-center border rounded-md px-3 py-2 mb-6">
          <img
            src="https://flagcdn.com/w40/uz.png"
            alt="UZ"
            className="w-6 h-4 mr-2"
          />
          <span className="text-gray-700 mr-1">+998</span>
          <input
            type="text"
            placeholder="90 123 45 67"
            className="flex-1 outline-none"
          />
        </div>

        <div className="flex justify-between items-center">
          <button className="text-sm text-black">Отмена</button>
          <button className="bg-orange-600 hover:bg-orange-100 w-30 text-white hover:text-orange-600 px-6 py-2 rounded-md text-sm">
            <Link to="/sms">Войти</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
