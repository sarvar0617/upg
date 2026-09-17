import React from "react";

const Payment = () => {
  return (
    <main className="container mx-auto px-4 py-6 md:px-6">
      <h1 className="border-b border-orange-600 pb-2 text-2xl font-semibold">
        Способ Оплаты
      </h1>

      <div className="mt-4 grid gap-1 md:grid-cols-[1fr_115px_115px_115px]">
        <div className="border border-gray-300 p-4">
          <h2 className="text-2xl font-semibold">
            Оплата в магазине UPGrade
          </h2>
          <p className="mt-2 leading-[21px] text-gray-600">
            Вы можете оплатить компьютер или другой товар непосредственно в
            кассе магазина. Осуществив платеж, вы получаете полный комплект
            документов: кассовый чек, расходную накладную и гарантийный талон.
            Цены в нашем интернет-магазине окончательные: без дополнительных
            комиссий, включая все налоги.
          </p>
        </div>

        <div className="flex min-h-[152px] cursor-pointer flex-col items-center justify-center border border-gray-300 px-2 text-center">
          <svg
            className="h-16 w-16 text-orange-600"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10 8h16M10 8v16M54 8H38M54 8v16M10 56h16M10 56V40M54 56H38M54 56V40" />
            <path d="M22 20v24M32 20v24M42 20v24" />
          </svg>
          <span className="mt-1 text-sm leading-4">
            Оплата
            <br />
            через QR
          </span>
        </div>

        <div className="flex min-h-[152px] cursor-pointer flex-col items-center justify-center border border-gray-300 px-2 text-center">
          <svg
            className="h-16 w-16 text-orange-600"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M8 22h40v30H8zM8 22l12-12 12 8 8-8 12 12" />
            <path d="M36 34h20v12H36c-5 0-8-3-8-6s3-6 8-6z" />
          </svg>
          <span className="mt-1 text-sm leading-4">
            Оплата
            <br />
            наличными
          </span>
        </div>

        <div className="flex min-h-[152px] cursor-pointer flex-col items-center justify-center border border-gray-300 px-2 text-center">
          <svg
            className="h-16 w-16 text-orange-600"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="6" y="14" width="52" height="36" rx="6" />
            <path d="M6 26h52M14 40h14" />
          </svg>
          <span className="mt-1 text-sm leading-4">
            Оплата по
            <br />
            карте
          </span>
        </div>
      </div>
    </main>
  );
};

export default Payment;