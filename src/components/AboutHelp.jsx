import React from "react";
import { Link } from "react-router-dom";

const AboutHelp = () => {
  return (
    <section className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 md:grid-cols-5">
        <Link
          to="/team"
          className="flex min-h-[132px] cursor-pointer flex-col items-center justify-between border-b border-gray-200 px-2 py-5 text-center sm:px-4 md:border-b-0 md:border-r"
        >
          <p className="text-[12px] leading-[16px] text-gray-500 sm:text-[13px] sm:leading-[17px]">
            <span className="text-[#ff1493]">Лидеры</span>
            <br />
            на игровом рынке
          </p>
          <span className="text-[28px] font-light leading-none text-gray-500 sm:text-[31px]">
            →
          </span>
        </Link>

        <div className="flex min-h-[132px] cursor-pointer flex-col items-center justify-between border-b border-gray-200 px-2 py-5 text-center sm:px-4 md:border-b-0 md:border-r">
          <p className="text-[12px] leading-[16px] text-gray-500 sm:text-[13px] sm:leading-[17px]">
            Более
            <br />
            <span className="text-[#ff1493]">500 положительных</span>
            <br />
            отзывов
          </p>
          <span className="text-[28px] font-light leading-none text-gray-500 sm:text-[31px]">
            →
          </span>
        </div>

        <div className="flex min-h-[132px] cursor-pointer flex-col items-center justify-between border-b border-gray-200 px-2 py-5 text-center sm:px-4 md:border-b-0 md:border-r">
          <p className="text-[12px] leading-[16px] text-gray-500 sm:text-[13px] sm:leading-[17px]">
            Провели
            <br />
            <span className="text-[#ff1493]">32 киберспортивных</span>
            <br />
            турнира
          </p>
          <span className="text-[28px] font-light leading-none text-gray-500 sm:text-[31px]">
            →
          </span>
        </div>

        <div className="flex min-h-[132px] cursor-pointer flex-col items-center justify-between border-b border-gray-200 px-2 py-5 text-center sm:px-4 md:border-b-0 md:border-r">
          <p className="text-[12px] leading-[16px] text-gray-500 sm:text-[13px] sm:leading-[17px]">
            Топовые блогеры
            <br />
            выбирают нас
          </p>
          <span className="text-[28px] font-light leading-none text-gray-500 sm:text-[31px]">
            →
          </span>
        </div>

        <div className="col-span-2 flex min-h-[132px] cursor-pointer flex-col items-center justify-between border-b border-gray-200 px-2 py-5 text-center sm:px-4 md:col-span-1 md:border-b-0 md:border-r-0">
          <p className="text-[12px] leading-[16px] text-gray-500 sm:text-[13px] sm:leading-[17px]">
            Оборудовали
            <br />
            <span className="text-[#ff1493]">60 компьютерных клубов</span>
            <br />
            под ключ
          </p>
          <span className="text-[28px] font-light leading-none text-gray-500 sm:text-[31px]">
            →
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutHelp;