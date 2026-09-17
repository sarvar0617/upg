import React from "react";

const Contact = () => {
  return (
    <main className="container mx-auto px-4 py-4 md:px-6">
      <h1 className="border-b border-orange-600 pb-2 text-2xl font-semibold">
        Контакты
      </h1>

      <div className="mt-3 grid gap-3 lg:grid-cols-[1.15fr_1fr]">
        <section className="border border-gray-300 bg-gray-50 p-8">
          <h2 className="text-2xl font-semibold">КОНТАКТЫ ДЛЯ ПОКУПАТЕЛЕЙ</h2>
          <p className="mt-1 max-w-[440px] text-sm">
            Ответим на все ваши вопросы и поможем выбрать подходящий компьютер.
          </p>

          <div className="mt-3 grid gap-5 border-t border-orange-600 pt-3 sm:grid-cols-2">
            <div>
              <p className="text-xs text-gray-500">Телефон ул. Навои 37</p>
              <p>+998 (99) 124-24-24</p>
              <p>+998 (88) 124-24-24</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Телефон ТРЦ Малика, Магазин 24
              </p>
              <p>+998 (97) 124-24-24</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Почта</p>
              <p>upghomeforgamers@upg.uz</p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Режим работы</p>
              <p>Ежедневно с 10:00 до 20:00</p>
            </div>
          </div>
        </section>

        <img
          src="https://files.ox-sys.com/cache/original/image/c7/82/65/c782655d6222a7a4073dde958f3dc629b0dfb84fdeff036cc7556a2b0036727d.png"
          alt="Контакты"
          className="h-full min-h-[280px] w-full object-cover"
        />
      </div>

      <div className="mt-3 grid border border-gray-300 p-3 text-center sm:grid-cols-2">
        <strong>Сотрудничество и реклама:</strong>
        <span>bekhruz@upg.uz</span>
      </div>

      <section className="relative mt-5 grid min-h-[355px] lg:grid-cols-[450px_1fr]">
        <div className="z-10 bg-gray-50 p-7">
          <h2 className="mb-4 text-2xl">Карта</h2>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3 bg-white p-3">
              <div className="text-xs">
                <strong>Навои</strong>
                <p>Ташкент, улица Алишера Навои, 37</p>
                <a
                  href="https://maps.google.com/?q=улица+Алишера+Навои+37+Ташкент"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-orange-600"
                >
                  Построить маршрут →
                </a>
              </div>
              <img
                src="https://files.ox-sys.com/cache/original/image/87/95/e5/8795e5a4ac86f2b231e977e1fa739d639ba9c91db2694b59b9f6386104eda164.jpg"
                alt="Магазин на Навои"
                className="h-20 w-36 object-cover"
              />
            </div>

            <div className="flex items-center justify-between gap-3 bg-white p-3">
              <div className="text-xs">
                <strong>Малика</strong>
                <p>Ташкент, Шайхантахурский район, Малика</p>
                <a
                  href="https://maps.google.com/?q=ТЦ+Малика+Ташкент"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-orange-600"
                >
                  Построить маршрут →
                </a>
              </div>
              <img
                src="https://files.ox-sys.com/cache/original/image/00/45/5d/00455df531bd5df175aa2ee5149a602e15f612e548d2b324aef63bb2f6c15578.webp"
                alt="Магазин Малика"
                className="h-20 w-36 object-cover"
              />
            </div>
          </div>
        </div>

        <iframe
          title="Карта магазинов"
          src="https://www.google.com/maps?q=Tashkent%20Uzbekistan&output=embed"
          className="absolute inset-0 h-full w-full border-0 lg:pl-[450px]"
          loading="lazy"
        />
      </section>
    </main>
  );
};

export default Contact;