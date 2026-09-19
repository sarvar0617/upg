import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaHeart, FaMinus, FaPlus, FaRegHeart, FaStar } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import Components from "../json/Components.json";
import { useCurrency } from "../context/CurrencyContext";
import { useProducts } from "../context/ProductContext";
import {
  useGetAllProductsQuery,
  useGetCategoriesQuery,
  useGetProductsByCategorySlugQuery,
} from "../services/ProductApi";

const categoryAliases = {
  "Клавиатуры": ["keyboards"],
  "Мыши": ["mice", "mouse"],
  "Микрофоны": ["microphones"],
  "Наушники": ["headphones", "headsets"],
  "Мониторы": ["monitors"],
  "Кронштейны": ["mounts", "stands"],
  "Колонки": ["speakers"],
  "Коврики": ["mouse-pads", "mousepads"],
  "Ноутбуки": ["laptops", "notebooks"],
  "Консоли": ["consoles"],
  "Контроллеры": ["controllers", "gamepads"],
  "Wi-Fi адаптеры": ["wifi-adapters", "wi-fi-adapters"],
  "Корпуса": ["cases", "computer-cases"],
  "Процессоры": ["processors", "cpus"],
  "Видеокарты": ["graphics-cards", "video-cards", "gpus"],
  "Оперативная память": ["ram", "memory"],
  "Материнские платы": ["motherboards"],
  "SSD диски": ["ssds", "ssd"],
  "Кулеры": ["coolers"],
  "Блоки питания": ["power-supplies", "psus"],
  "Столы": ["desks", "tables"],
  "Кресла": ["chairs"],
  "Освещение": ["lighting"],
  "Аксессуары": ["accessories"],
};

const slugify = (value) => value
  .toLowerCase()
  .replace(/[ё]/g, "е")
  .replace(/[а-я]/g, (letter) => ({
    а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ж: "zh", з: "z",
    и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p",
    р: "r", с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "ts", ч: "ch",
    ш: "sh", щ: "shch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
  }[letter] || ""))
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const Products = () => {
  const [searchParams] = useSearchParams();
  const { formatPrice } = useCurrency();
  const { cart, addToCart, updateCartQuantity, toggleFavorite, isFavorite } = useProducts();
  const requestedCategory = searchParams.get("category") || "";
  const legacyCategory = Components.find((item) => String(item.id) === requestedCategory);
  const { data: categories = [], isLoading: categoriesLoading } = useGetCategoriesQuery();
  const categoryCandidates = legacyCategory
    ? [slugify(legacyCategory.title), ...(categoryAliases[legacyCategory.title] || [])]
    : [requestedCategory];
  const backendCategory = categories.find((item) => (
    item.slug === requestedCategory
    || categoryCandidates.includes(item.slug)
    || (legacyCategory && item.name.localeCompare(legacyCategory.title, undefined, { sensitivity: "base" }) === 0)
  ));
  const categorySlug = backendCategory?.slug || categoryCandidates[0] || requestedCategory;
  const categoryQuery = useGetProductsByCategorySlugQuery(categorySlug, { skip: !categorySlug });
  const allQuery = useGetAllProductsQuery(undefined, { skip: Boolean(requestedCategory) });
  const category = categoryQuery.data?.category || backendCategory || legacyCategory;
  const products = categorySlug ? categoryQuery.data?.products || [] : allQuery.data?.products || [];
  const error = categorySlug ? categoryQuery.error : allQuery.error;
  const isLoading = categoriesLoading || (categorySlug ? categoryQuery.isLoading : allQuery.isLoading);

  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-10">
      <h1 className="text-2xl sm:text-3xl font-[terminatorgen]">
        {category?.name || category?.title || "Товары"}
      </h1>

      {isLoading ? (
        <p className="mt-8 text-lg text-gray-600">Загрузка товаров...</p>
      ) : error ? (
        <p className="mt-8 text-lg text-red-600">Не удалось загрузить товары.</p>
      ) : products.length === 0 ? (
        <p className="mt-8 text-lg text-gray-600">
          В этой категории пока нет товаров.
        </p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 mt-6 sm:mt-8">
          {products.map((product) => (
            <div
              className="relative bg-white border border-[#00000018] shadow-lg rounded-lg p-2 sm:p-4 flex flex-col justify-between min-h-[300px] sm:min-h-[380px]"
              key={product.id}
            >
              <button type="button" onClick={() => toggleFavorite(product)} aria-label="Добавить в избранное" className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 cursor-pointer text-pink-500 text-lg sm:text-xl">
                {isFavorite(product.id) ? <FaHeart /> : <FaRegHeart />}
              </button>
              <Link to={`/productdetail/${product.slug}`}>
                <div className="w-full h-28 sm:h-48 overflow-hidden flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain max-h-full"
                  />
                </div>
              </Link>
              <div className="mt-2 sm:mt-4 flex flex-col flex-grow">
                <p className="text-xs sm:text-lg font-semibold text-gray-800 line-clamp-2 min-h-8 sm:min-h-14">
                  {product.title}
                </p>
                <div className="flex items-center justify-between gap-1 sm:gap-2 mt-2 text-xs sm:text-sm">
                  <span className="flex text-yellow-500 text-[10px] sm:text-base">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} />
                    ))}
                  </span>
                  <span className="bg-amber-100 text-orange-600 p-1 sm:p-2 text-[10px] sm:text-sm truncate max-w-[55%]">
                    {product.brand}
                  </span>
                </div>
                <p className="text-sm sm:text-lg font-bold text-gray-700 mt-2 truncate">
                  {formatPrice(product.price)}
                </p>
                {cart.find((item) => item.id === product.id) ? (
                  <div className="mt-2 sm:mt-4 w-full h-9 sm:h-10 flex items-center justify-center gap-2 sm:gap-5 border border-orange-600 rounded-md text-orange-600">
                    <button type="button" onClick={() => updateCartQuantity(product.id, cart.find((item) => item.id === product.id).quantity - 1)} className="cursor-pointer p-1 sm:p-2"><FaMinus size={10} /></button>
                    <span className="font-bold">{cart.find((item) => item.id === product.id).quantity}</span>
                    <button type="button" onClick={() => updateCartQuantity(product.id, cart.find((item) => item.id === product.id).quantity + 1)} className="cursor-pointer p-1 sm:p-2"><FaPlus size={10} /></button>
                  </div>
                ) : (
                  <button type="button" onClick={() => addToCart(product)} className="cursor-pointer bg-orange-600 hover:bg-orange-100 hover:text-orange-600 transition text-white mt-2 sm:mt-4 w-full h-9 sm:h-10 rounded-md flex justify-center gap-1 sm:gap-3 items-center text-[11px] sm:text-base">
                    <SlBasket size={16} /> В корзину
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
