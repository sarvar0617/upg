import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Components from "../json/Components.json";

const ComponentsSlider = () => {
  const [components] = useState(Components);

  const chunked = [];
  for (let i = 0; i < components.length; i += 8) {
    chunked.push(components.slice(i, i + 8));
  }

  return (
    <div className="container mx-auto mt-10 mb-10 px-4">
      <h1 className="text-3xl font-[terminatorgen]">комплектующие</h1>
      <div className="flex justify-end gap-2 mb-6">
        <button className="swiper-prev cursor-pointer bg-orange-600 p-3  hover:bg-orange-100 hover:text-orange-600 text-white ">
          <FaArrowLeftLong size={20} />
        </button>
        <button className="swiper-next cursor-pointer bg-orange-600 hover:bg-orange-100 hover:text-orange-600 p-3 text-white ">
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
              <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {group.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-transform cursor-pointer p-4 flex flex-col items-center rounded-sm shadow"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-32 object-contain"
                    />
                    <p className="mt-4 text-lg font-medium">{item.title} →</p>
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
