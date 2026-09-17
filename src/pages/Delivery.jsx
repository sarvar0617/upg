import React from "react";

const Delivery = () => {
  return (
    <main className="container mx-auto px-4 py-6 md:px-6">
      <h1 className="border-b border-orange-600 pb-2 text-2xl font-semibold">
        Доставка
      </h1>

      <div className="mt-4 grid gap-2 md:grid-cols-3">
        <div className="border border-gray-200 bg-gray-50">
          <div className="flex h-[246px] items-center justify-center border-b border-gray-200 p-4">
            <img
              src="https://files.ox-sys.com/cache/original/image/0b/92/4f/0b924f2d063c0754c516a52dfd56e64949a475662dac6eaa348a550707164211.png"
              alt="Забрать из магазина"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="p-4">
            <h2 className="border-b border-orange-600 pb-1 text-xl underline">
              Забрать из магазина
            </h2>

            <div className="divide-y divide-gray-400 text-sm">
              <p className="flex justify-between gap-4 py-2">
                <span>Адрес:</span>
                <span className="text-right">
                  г. Ташкент, Трц. Малика, Магазин 24
                  <br />
                  г. Ташкент, ул. Навои 37
                </span>
              </p>

              <p className="flex justify-between py-2">
                <span>Время работы:</span>
                <span>с 10:00 до 20:00</span>
              </p>

              <p className="flex justify-between py-2">
                <span>Предоплата:</span>
                <span>Индивидуально</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 bg-gray-50">
          <div className="flex h-[246px] items-center justify-center border-b border-gray-200 p-4">
            <img
              src="https://files.ox-sys.com/cache/original/image/55/8b/80/558b80f2cfe6aed31af4ae2d9ecdb402808d7857490fd1a7d2298c2339c623a7.png"
              alt="Доставка по Ташкенту"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="p-4">
            <h2 className="border-b border-orange-600 pb-1 text-xl underline">
              Доставка по Ташкенту
            </h2>

            <div className="divide-y divide-gray-400 text-sm">
              <p className="flex justify-between py-2">
                <span>Стоимость:</span>
                <span>Бесплатно</span>
              </p>

              <p className="flex justify-between py-2">
                <span>Предоплата:</span>
                <span>Индивидуально</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 bg-gray-50">
          <div className="flex h-[246px] items-center justify-center border-b border-gray-200 p-4">
            <img
              src="https://files.ox-sys.com/cache/original/image/4d/69/36/4d693644c3506287512498f0a901856e3b7dbdfbf193862d3e0efe729ef5e26a.png"
              alt="Доставка по Узбекистану"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="p-4">
            <h2 className="border-b border-orange-600 pb-1 text-xl underline">
              Доставка по Узбекистану
            </h2>

            <div className="divide-y divide-gray-400 text-sm">
              <p className="flex justify-between py-2">
                <span>Стоимость:</span>
                <span>Индивидуально</span>
              </p>

              <p className="flex justify-between py-2">
                <span>Предоплата:</span>
                <span>100%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Delivery;