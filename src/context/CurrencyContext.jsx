import React, { createContext, useContext, useEffect, useState } from "react";

const CurrencyContext = createContext(null);

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(
    localStorage.getItem("currency") || "UZS"
  );
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        const response = await fetch(
          "https://cbu.uz/uz/arkhiv-kursov-valyut/json/"
        );
        const data = await response.json();

        const usd = data.find((item) => item.Ccy === "USD");

        if (usd) {
          setExchangeRate(Number(usd.Rate));
        }
      } catch (error) {
        console.error("Valyuta kursini olishda xatolik:", error);
      }
    };

    getExchangeRate();

    const interval = setInterval(getExchangeRate, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleCurrency = () => {
    const nextCurrency = currency === "UZS" ? "USD" : "UZS";

    setCurrency(nextCurrency);
    localStorage.setItem("currency", nextCurrency);
  };

  const formatPrice = (priceUzs) => {
    if (currency === "USD") {
      if (!exchangeRate) return "Kurs yuklanmoqda...";

      const priceUsd = Math.round(Number(priceUzs) / exchangeRate);

      return `${priceUsd.toLocaleString("en-US")} USD`;
    }

    return `${Number(priceUzs).toLocaleString("ru-RU")} UZS`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        exchangeRate,
        toggleCurrency,
        formatPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);

const currencyDisplay = {
  UZS: "UZS/USD",
  USD: "USD/UZS",
};

export const useCurrencyDisplay = () => {
  const { currency } = useCurrency();
  return currencyDisplay[currency] || "UZS/USD";
};