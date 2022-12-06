import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Scrollbar } from "swiper";

const ProductShow = () => {
  const [mySwiper, setMySwiper] = useState({});
  const products = useSelector((state) => state.products);
  const dark = useSelector((state) => state.dark.mode);
  // console.log(products);
  return (
    <>
      <div className={dark}>
        <div className="c-flex justify-between py-4">
          <h1 className="text-[18px] font-medium text-white dark:text-gray-900">
            MOST POPULAR
          </h1>

          <div className="a">
            <button
              onClick={() => mySwiper.slidePrev()}
              className=" p-3 rounded-full border border-white dark:border-gray-400 text-[18px] text-white dark:text-gray-400 hover:bg-white dark:hover:bg-gray-400 hover:text-gray-700 dark:hover:text-gray-900 duration-500 "
            >
              <HiArrowLeft />
            </button>
            <button
              onClick={() => mySwiper.slideNext()}
              className=" p-3 rounded-full border border-white dark:border-gray-400 text-[18px] text-white dark:text-gray-400 hover:bg-white dark:hover:bg-gray-400 hover:text-gray-700 dark:hover:text-gray-900 duration-500 ml-3"
            >
              <HiArrowRight />
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.60": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.35": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          onInit={(e) => setMySwiper(e)}
          modules={[Navigation, Scrollbar]}
          className="mySwiper"
        >
          {products.map(
            (e) =>
              e.popular && (
                <SwiperSlide
                  key={e.id}
                  className="rounded-lg cursor-pointer overflow-hidden bg-white"
                >
                  <div className="c-flex justify-between  w-full  p-6 hover:scale-105 duration-500 dark:bg-black rounded-lg  pd-shadow ">
                    <div className="w-[97px] h-[91px]">
                      <img src={e.img} alt="" />
                    </div>
                    <div className="w-[60%] text-start">
                      <h4 className="text-[15px] font-semibold leading-5 pb-2 dark:text-gray-300">
                        {e.name}
                      </h4>
                      <p className="text-[15px] text-gray-500 dark:text-gray-400">
                        ${e.price}.00 &nbsp;
                        <span className="text-[13px] throough text-gray-400 dark:text-gray-500">
                          ${e.oldPrice}0
                        </span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    </>
  );
};

export default ProductShow;
