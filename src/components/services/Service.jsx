import { FaBox } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Service = () => {
  return (
    <>
      <div className="w-full bg-white dark:bg-black">
        <div className=" con mx-auto py-[120px]">
          <Swiper
            pagination={{
              clickable: true,
            }}
            slidesPerView={4}
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
            className="mySwiper c-flex"
          >
            <SwiperSlide>
              <div className="  pr-5 text-center sm:text-start">
                <FaBox className="text-[30px] text-[#448c74] mb-3 mx-auto sm:mx-0" />
                <h4 className="py-3 text-[23px] dark:text-gray-300 font-medium ">
                  Fast and free develivery
                </h4>
                <p className="text-gray-600 text-[15px]">
                  Free delivery for all orders over $200 honcus egestas lorem
                  honcus egestas
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  pr-5 text-center sm:text-start">
                <HiOutlineCurrencyDollar className="text-[40px] text-[#448c74] mb-1 mx-auto sm:mx-0" />
                <h4 className="py-3 text-[23px] dark:text-gray-300 font-medium ">
                  Money back guarantee
                </h4>
                <p className="text-gray-600 text-[15px]">
                  We return money within 30 days honcus egestas lorem honcus
                  egestas
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  pr-5 text-center sm:text-start">
                <RiCustomerService2Line className="text-[40px] text-[#448c74] mb-1 mx-auto sm:mx-0" />
                <h4 className="py-3 text-[23px] dark:text-gray-300 font-medium ">
                  24/7 customer support{" "}
                </h4>
                <p className="text-gray-600 text-[15px]">
                  Friendly 24/7 customer support honcus egestas lorem honcus
                  egestas{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  pr-5 text-center sm:text-start">
                <MdOutlineSecurity className="text-[30px] text-[#448c74] mb-3 mx-auto sm:mx-0" />
                <h4 className="py-3 text-[23px] dark:text-gray-300 font-medium ">
                  Secure online payment{" "}
                </h4>
                <p className="text-gray-600 text-[15px]">
                  We possess SSL / Secure сertificate honcus egestas lorem
                  honcus egestas
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <div className="  pr-5">
            <FaBox className="text-[30px] text-[#448c74] mb-3" />
            <h4 className="py-3 text-[23px] dark:text-gray-300 font-medium ">
              Fast and free develivery
            </h4>
            <p className="text-gray-600 text-[15px]">
              Free delivery for all orders over $200 honcus egestas lorem honcus
              egestas
            </p>
          </div>
          <div className="  pr-5">
            <HiOutlineCurrencyDollar className="text-[40px] text-[#448c74] mb-1" />
            <h4 className="py-3 text-[23px] dark:text-gray-300 font-medium ">
              Money back guarantee
            </h4>
            <p className="text-gray-600 text-[15px]">
              We return money within 30 days honcus egestas lorem honcus egestas
            </p>
          </div>
          <div className="  pr-5">
            <RiCustomerService2Line className="text-[40px] text-[#448c74] mb-1" />
            <h4 className="py-3 text-[23px] dark:text-gray-300 font-medium ">
              24/7 customer support{" "}
            </h4>
            <p className="text-gray-600 text-[15px]">
              Friendly 24/7 customer support honcus egestas lorem honcus egestas{" "}
            </p>
          </div>
          <div className="  pr-5">
            <MdOutlineSecurity className="text-[30px] text-[#448c74] mb-3" />
            <h4 className="py-3 text-[23px] dark:text-gray-300 font-medium ">
              Secure online payment{" "}
            </h4>
            <p className="text-gray-600 text-[15px]">
              We possess SSL / Secure сertificate honcus egestas lorem honcus
              egestas
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Service;
