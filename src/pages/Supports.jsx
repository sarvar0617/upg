import React from "react";
import { Link } from "react-router-dom";

const supports = [
  {
    to: "/payment",
    title: "Способы оплаты",
    description: "Все об оплате покупок",
    icon: (
      <svg
        className="h-16 w-16 text-orange-600"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M32 4v8M32 52v8M42 16c-3-4-7-5-12-5-8 0-13 4-13 10 0 15 25 7 25 20 0 6-5 10-13 10-6 0-11-2-14-6" />
      </svg>
    ),
  },
  {
    to: "/faq",
    title: "FAQ",
    description: "Часто задаваемые вопросы",
    icon: (
      <svg
        className="h-16 w-16 text-orange-600"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M32 5l7 6 10-1 2 10 8 6-5 9 2 10-10 2-6 8-9-5-9 5-6-8-10-2 2-10-5-9 8-6 2-10 10 1 7-6z" />
        <path d="M27 25c0-4 3-7 7-7s7 3 7 7c0 6-7 6-7 11M34 42v2" />
      </svg>
    ),
  },
  {
    to: "/delivery",
    title: "Доставка",
    description: "Информация о доставке",
    icon: (
      <svg
        className="h-16 w-16 text-orange-600"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M8 20l24-13 24 13-24 13L8 20zM8 20v24l24 13 24-13V20M32 33v24M20 14l24 13" />
      </svg>
    ),
  },
];

const Supports = () => {
  return (
    <section className="container mx-auto px-4 py-6 md:px-6">
      <h1 className="mb-4 text-2xl font-[terminatorgen]">ПОДДЕРЖКА</h1>

      <div className="grid gap-4 md:grid-cols-3">
        {supports.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="flex min-h-[169px] cursor-pointer flex-col items-center border border-gray-200 bg-gray-50 px-4 py-4 text-center transition hover:bg-white"
          >
            {item.icon}
            <h2 className="mt-1 text-sm font-semibold">{item.title}</h2>
            <p className="mt-1 text-sm text-gray-600">{item.description}</p>
            <span className="mt-auto text-2xl font-light text-gray-600">
              →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Supports;