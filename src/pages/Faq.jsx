import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="container mx-auto px-4 py-6 md:px-6">
      <h1 className="border-b border-orange-600 pb-2 text-2xl font-semibold">
        FAQ
      </h1>

      <div className="mt-4 space-y-2">
        <div className="border border-gray-300 bg-gray-100">
          <button
            onClick={() => toggleFaq(0)}
            className="flex w-full cursor-pointer items-center justify-between px-4 py-4 text-left text-sm font-semibold"
          >
            Что такое апгрейд компьютера? Зачем его нужно делать?
            <span className="text-lg">{openIndex === 0 ? "⌃" : "›"}</span>
          </button>
          {openIndex === 0 && (
            <p className="border-t border-gray-300 bg-white px-4 py-4 text-sm text-gray-600">
              Апгрейд — это замена или добавление комплектующих для повышения
              производительности компьютера.
            </p>
          )}
        </div>

        <div className="border border-gray-300 bg-gray-100">
          <button
            onClick={() => toggleFaq(1)}
            className="flex w-full cursor-pointer items-center justify-between px-4 py-4 text-left text-sm font-semibold"
          >
            Что такое модернизация компьютеров? А что такое апгрейд компьютеров?
            Это разные вещи?
            <span className="text-lg">{openIndex === 1 ? "⌃" : "›"}</span>
          </button>
          {openIndex === 1 && (
            <p className="border-t border-gray-300 bg-white px-4 py-4 text-sm text-gray-600">
              Модернизация и апгрейд означают улучшение характеристик компьютера
              путём замены или добавления комплектующих.
            </p>
          )}
        </div>

        <div className="border border-gray-300 bg-gray-100">
          <button
            onClick={() => toggleFaq(2)}
            className="flex w-full cursor-pointer items-center justify-between px-4 py-4 text-left text-sm font-semibold"
          >
            Какой процессор лучше выбрать для игрового ПК?
            <span className="text-lg">{openIndex === 2 ? "⌃" : "›"}</span>
          </button>
          {openIndex === 2 && (
            <p className="border-t border-gray-300 bg-white px-4 py-4 text-sm text-gray-600">
              Выбор процессора зависит от видеокарты, бюджета и требований
              конкретных игр.
            </p>
          )}
        </div>

        <div className="border border-gray-300 bg-gray-100">
          <button
            onClick={() => toggleFaq(3)}
            className="flex w-full cursor-pointer items-center justify-between px-4 py-4 text-left text-sm font-semibold"
          >
            Что выбрать: водяное или воздушное охлаждение для процессора?
            <span className="text-lg">{openIndex === 3 ? "⌃" : "›"}</span>
          </button>
          {openIndex === 3 && (
            <p className="border-t border-gray-300 bg-white px-4 py-4 text-sm text-gray-600">
              Для большинства компьютеров достаточно качественного воздушного
              охлаждения. Водяное охлаждение подходит для мощных систем.
            </p>
          )}
        </div>

        <div className="border border-gray-300 bg-gray-100">
          <button
            onClick={() => toggleFaq(4)}
            className="flex w-full cursor-pointer items-center justify-between px-4 py-4 text-left text-sm font-semibold"
          >
            Как влияет количество ядер процессора на производительность в играх?
            <span className="text-lg">{openIndex === 4 ? "⌃" : "›"}</span>
          </button>
          {openIndex === 4 && (
            <p className="border-t border-gray-300 bg-white px-4 py-4 text-sm text-gray-600">
              Большее количество ядер помогает в современных играх и при
              одновременной работе нескольких приложений.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Faq;