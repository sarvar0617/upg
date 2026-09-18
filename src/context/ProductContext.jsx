import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

const ProductContext = createContext(null);

const readStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
};

export const ProductProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => readStorage("upg-favorites"));
  const [cart, setCart] = useState(() => readStorage("upg-cart"));

  const persist = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const toggleFavorite = useCallback((product) => {
    setFavorites((current) => {
      const next = current.some((item) => item.id === product.id)
        ? current.filter((item) => item.id !== product.id)
        : [...current, product];
      persist("upg-favorites", next);
      return next;
    });
  }, []);

  const addToCart = useCallback((product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      const next = existing
        ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...product, quantity: 1 }];
      persist("upg-cart", next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({
    favorites,
    cart,
    toggleFavorite,
    addToCart,
    isFavorite: (id) => favorites.some((item) => item.id === id),
  }), [favorites, cart, addToCart, toggleFavorite]);

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export const useProducts = () => useContext(ProductContext);
