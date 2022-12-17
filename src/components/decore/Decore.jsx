import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation } from "swiper";
import { FiShoppingCart } from "react-icons/fi";
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

const Decore = () => {
  const [mySwiper, setMySwiper] = useState({});
  const [mySwiper2, setMySwiper2] = useState({});
  const [bgChange, setBgChange] = useState(false);

  const pre = () => {
    mySwiper2.slidePrev();
    mySwiper.slidePrev();
    setBgChange((pre) => !pre);
  };

  const next = () => {
    mySwiper2.slideNext();
    mySwiper.slideNext();
    setBgChange((pre) => !pre);
  };

  // console.log(bgChange);

  return (
    <>
      <div className=" relative ">
        <div
          className={`z-[100] flex flex-row items-start flex-wrap con mx-auto justify-between py-[70px] sm:py-[150px]`}
        >
          <div className="w-full md:w-[65%] lg:w-[50%] xl:w-[45%]">
            <div className="a pb-[40px] sm:pb-[70px]">
              <button
                onClick={pre}
                className=" p-3 rounded-full border border-white dark:border-gray-400 text-[18px] text-white dark:text-gray-400 hover:bg-white dark:hover:bg-gray-400 hover:text-gray-700 dark:hover:text-gray-900 duration-500 "
              >
                <HiArrowLeft />
              </button>
              <button
                onClick={next}
                className=" p-3 rounded-full border border-white dark:border-gray-400 text-[18px] text-white dark:text-gray-400 hover:bg-white dark:hover:bg-gray-400 hover:text-gray-700 dark:hover:text-gray-900 duration-500 ml-3"
              >
                <HiArrowRight />
              </button>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              //   navigation={true}
              modules={[Navigation]}
              onInit={(e) => setMySwiper2(e)}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="">
                  <h1 className=" uppercase lg:text-[55px] sm:text-[40px] text-[30px] pb-[30px] lg:pb-[60px] font-semibold leading-[45px] sm:leading-[50px] lg:leading-[70px] text-white dark:text-gray-400">
                    Meet the guests with a stunning set for a dinner party
                  </h1>
                  <button className="text-[15px] text-white dark:text-gray-400 font-semibold border border-white dark:border-gray-400 py-3 sm:py-4 px-5 sm:px-7 rounded-2xl shadow-lg duration-500 origin-top hover:bg-white dark:hover:bg-gray-400 hover:text-gray-700 dark:hover:text-gray-700">
                    Explore the catalog
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <h1 className=" uppercase text-[30px] sm:text-[40px] lg:text-[55px] pb-[30px] lg:pb-[60px] font-semibold leading-[45px] sm:leading-[50px] lg:leading-[70px] text-white dark:text-gray-400">
                    Decor for the living room or bedrooms in wood style{" "}
                  </h1>
                  <button className="text-[15px] text-white dark:text-gray-400 font-semibold border border-white dark:border-gray-400 py-3 sm:py-4 px-5 sm:px-7 rounded-2xl shadow-lg duration-500 origin-top hover:bg-white dark:hover:bg-gray-400 hover:text-gray-700 dark:hover:text-gray-700">
                    Explore the catalog
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full md:w-[65%] lg:w-[50%] xl:w-[40%] pt-14 lg:pt-0 lg:px-8">
            <div className="bg-white dark:bg-black p-8 rounded-xl shadow-lg">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                // navigation={true}
                modules={[Navigation]}
                onInit={(e) => setMySwiper(e)}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="">
                    <div className=" dark:bg-black bg-white pb-2">
                      <img
                        src="https://around.createx.studio/assets/img/landing/shop/collections/th02.png"
                        alt=""
                      />
                    </div>
                    <div className="my-4">
                      <h4 className="text-[18px] dark:text-gray-400 text-gray-700 font-semibold">
                        A set of flowerpots for the living room
                      </h4>
                      <div className="c-flex justify-between pt-3 text-[17px] dark:text-gray-700 text-gray-500">
                        <p>$78.00</p>
                        <div className="flex flex-row-reverse">
                          <div className="mx-5 text-[20px] cursor-pointer hover:text-[#448c74] hover:scale-110 duration-500 peer">
                            <FiShoppingCart />
                          </div>
                          <p className="text-[15px] dark:text-gray-700 text-gray-400 opacity-0 duration-500 peer-hover:opacity-100">
                            Add to cart
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="bg-white dark:bg-black pb-2">
                      <img
                        src="https://around.createx.studio/assets/img/landing/shop/collections/th01.png"
                        alt=""
                      />
                    </div>
                    <div className="my-4">
                      <h4 className="text-[18px] dark:text-gray-400 text-gray-700 font-semibold">
                        Set for a dinner part of items
                      </h4>
                      <div className="c-flex justify-between pt-3 text-[17px] dark:text-gray-700 text-gray-500">
                        <p>$116.00</p>
                        <div className="flex flex-row-reverse">
                          <div className="mx-5 text-[20px] cursor-pointer hover:text-[#448c74] hover:scale-110 duration-500 peer">
                            <FiShoppingCart />
                          </div>
                          <p className="text-[15px] dark:text-gray-700 text-gray-400 opacity-0 duration-500 peer-hover:opacity-100">
                            Add to cart
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div
          className={`decore-bg1 -z-[10] w-full h-full absolute top-0 left-0 duration-500 ${
            bgChange ? "hidden" : "block"
          }`}
        ></div>
        <div
          className={`decore-bg2 -z-[10] w-full h-full absolute top-0 left-0 after:w-full after:h-full dark:after:bg-[#00000085] after:bg-[#00000070] after:absolute  ${
            bgChange ? "block" : "hidden"
          }`}
        ></div>
      </div>
    </>
  );
};

export default Decore;
