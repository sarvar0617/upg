import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import Components from "../json/Components.json";

const ComponentsSlider = () => {
  const [components] = useState(Components);
  const navigate = useNavigate();

  const chunked = [];
  for (let i = 0; i < components.length; i += 4) {
    chunked.push(components.slice(i, i + 4));
  }

  return (
    <div className="container mx-auto mt-8 sm:mt-10 mb-10 px-3 sm:px-4">
      <h1 className="text-2xl sm:text-3xl font-[terminatorgen]">комплектующие</h1>
      <div className="flex justify-end gap-2 mb-4 sm:mb-6">
        <button aria-label="Предыдущие комплектующие" className="swiper-prev cursor-pointer bg-orange-600 p-2 sm:p-3 hover:bg-orange-100 hover:text-orange-600 text-white">
          <FaArrowLeftLong size={20} />
        </button>
        <button aria-label="Следующие комплектующие" className="swiper-next cursor-pointer bg-orange-600 hover:bg-orange-100 hover:text-orange-600 p-2 sm:p-3 text-white">
          <FaArrowRightLong size={20} />
        </button>
      </div>
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          slidesPerView={1}
        >
          {chunked.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {group.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/products?category=${item.id}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        navigate(`/products?category=${item.id}`);
                      }
                    }}
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-transform cursor-pointer p-2 sm:p-4 min-h-36 sm:min-h-52 flex flex-col items-center justify-center rounded-sm shadow"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-20 sm:h-32 w-full object-contain"
                    />
                    <p className="mt-2 sm:mt-4 text-xs sm:text-lg text-center font-medium line-clamp-2">{item.title} →</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigatsiya tugmalari */}
      </div>
    </div>
  );
};

export default ComponentsSlider;
