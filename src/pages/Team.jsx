import React, { useState } from "react";
import galleryImages from "../json/TeamImages.json";
import teamMembers from "../json/TeamMembers.json";

const Team = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-6 text-center">
        <h2 className="text-2xl font-bold text-black sm:text-3xl">
          Наша команда
        </h2>

        <p className="mt-2 text-sm font-medium text-black sm:text-base">
          Мы команда профессионалов. Нас объединяет общая страсть к созданию
          компьютеров мирового класса.
        </p>
      </div>

      <div className="mx-auto mt-3 max-w-6xl px-4">
        <div className="flex h-[235px] items-center justify-center overflow-hidden bg-black sm:h-[300px]">
          <img
            src={galleryImages[activeImage]}
            alt="Команда UPGrade"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-black">Компания UPGrade</h3>

          <p className="mt-2 text-sm leading-5 text-gray-700">
            Наша компания успешно работает на рынке Узбекистана с 2009 года,
            предоставляя нашим клиентам широкий ассортимент компьютерной
            техники.
          </p>

          <p className="mt-3 text-sm leading-5 text-gray-700">
            Мы являемся официальными партнерами нескольких десятков
            международных компаний, что гарантирует высокое качество и
            надежность нашей продукции.
          </p>

          <p className="mt-3 text-sm leading-5 text-gray-700">
            Наши сотрудники обладают многолетним опытом работы и всегда готовы
            предоставить профессиональные консультации и помощь при выборе
            техники.
          </p>

          <p className="mt-3 text-sm leading-5 text-gray-700">
            В нашем шоуруме представлен большой выбор товаров, который
            удовлетворит потребности даже самых требовательных клиентов.
          </p>

          <p className="mt-3 text-sm leading-5 text-gray-700">
            Мы предлагаем доставку по всей республике и поддержку всех видов
            оплаты для удобства наших клиентов.
          </p>
        </div>

        <div>
          <div className="h-[210px] overflow-hidden sm:h-[270px]">
            <img
              src={galleryImages[activeImage]}
              alt="UPGrade showroom"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-2 flex justify-center gap-3">
            {galleryImages.map((image, index) => (
              <button
                key={image}
                type="button"
                aria-label={`Показать изображение ${index + 1}`}
                onClick={() => setActiveImage(index)}
                className={`h-2 w-2 rounded-full ${
                  activeImage === index ? "bg-pink-500" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-4 pb-10">
        <h3 className="mb-5 text-center text-2xl font-bold text-black">
          Команда UPGrade
        </h3>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-xl bg-[#242424]"
            >
              <div className="h-[240px] overflow-hidden sm:h-[300px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex min-h-[65px] flex-col items-center justify-center px-2 py-2 text-center">
                <p className="text-xs font-bold text-white sm:text-sm">
                  {member.name} - {member.position}
                </p>

                <p className="mt-1 text-[10px] text-gray-300 sm:text-xs">
                  upgrade.uz
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;