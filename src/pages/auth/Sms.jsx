import React, { useEffect, useRef, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sms = () => {
  const [otpInput, setOtpInput] = useState(new Array(5).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleChange = (value, i) => {
    if (isNaN(value)) return;

    const newArr = [...otpInput];
    newArr[i] = value;
    setOtpInput(newArr);

    if (value.trim() && i < 4) {
      inputRef.current[i + 1]?.focus();
    }
  };

  const handleDelete = (event, index) => {
    if (event.key === "Backspace" && !event.target.value && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="mt-20 flex items-center justify-center ">
      <div className="bg-white p-6 rounded-md shadow-xl border-1 border-gray-200 w-full max-w-lg">
        <p className="mb-2 text-sm">
          Введите код, который был отправлен на ваш номер телефона
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium">+9989515380266</span>
          <button className="text-gray-500 hover:text-gray-700 text-lg">
            <FaRegCopy />
          </button>
        </div>

        <div className="flex justify-between gap-3 mb-6">
          {otpInput.map((item, index) => (
            <input
              key={index}
              className="w-14 h-14 border rounded-lg text-center text-2xl outline-none border-gray-300"
              type="text"
              maxLength={1}
              value={otpInput[index]}
              ref={(el) => (inputRef.current[index] = el)}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleDelete(e, index)}
            />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button className="text-sm cursor-pointer text-black">
            <Link to="/register">Отмена</Link>
          </button>
          <button className="cursor-pointer bg-orange-600 hover:bg-orange-100 text-white hover:text-orange-600 px-5 py-2 rounded-md text-sm">
            Подтверждение
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sms;
