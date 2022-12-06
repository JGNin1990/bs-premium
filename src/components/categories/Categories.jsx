import React from "react";

const Categories = () => {
  return (
    <>
      <div className="w-full  dark:bg-black bg-white duration-500">
        <div className="con mx-auto z-20 pb-[100px]">
          <h1 className="px-[13.5px] text-[40px] font-semibold pb-[20px] dark:text-gray-200">
            Categories
          </h1>
          <div className="flex flex-row justify-center flex-wrap md:flex-nowrap">
            <div className="w-full md:w-[33%] h-[320px] md:h-auto my-[13.2px] md:my-0  mx-[13.2px] overflow-hidden relative object-cover rounded-2xl c-shadow cursor-pointer group">
              <img
                src="https://around.createx.studio/assets/img/shop/categories/01.jpg"
                className="w-full group-hover:scale-105 duration-500"
                alt="1"
              />
              <span className="absolute top-0 left-0 w-full h-full z-30 bg-[#1215191a]"></span>
              <button className="absolute z-40 bottom-[30px] sm:bottom-[40px] left-[30px] sm:left-[40px] dark:text-gray-300 text-black font-semibold py-[14px] px-[30px] rounded-full shadow-lg bg-white dark:bg-black duration-500">
                For the living room
              </button>
            </div>
            <div className=" w-full md:w-[66%] mx-[13.2px] flex flex-col justify-center">
              <div className="w-[full] overflow-hidden relative object-cover rounded-2xl c-shadow cursor-pointer group">
                <img
                  src="https://around.createx.studio/assets/img/shop/categories/02.jpg"
                  className="w-full group-hover:scale-105 duration-500"
                  alt="2"
                />
                <span className="absolute top-0 left-0 w-full h-full z-30 bg-[#1215191a]"></span>
                <button className="absolute z-40 sm:bottom-[40px] sm:left-[40px] bottom-[30px] left-[30px] dark:text-gray-300 text-black font-semibold py-[14px] px-[30px] rounded-full shadow-lg bg-white dark:bg-black duration-500">
                  For the kitchen
                </button>
              </div>
              <div className="c-flex flex-wrap md:flex-nowrap mt-[13.2px] sm:mt-[26.4px] w-full justify-center">
                <div className="w-full md:w-[50%] md:mr-[13.2px] my-[13.2px] md:my-0 overflow-hidden relative object-cover rounded-2xl c-shadow cursor-pointer group">
                  <img
                    src="https://around.createx.studio/assets/img/shop/categories/03.jpg"
                    className="w-full group-hover:scale-105 duration-500"
                    alt="3"
                  />
                  <span className="absolute top-0 left-0 w-full h-full z-30 bg-[#1215191a]"></span>
                  <button className="absolute z-40 sm:bottom-[40px] sm:left-[40px] bottom-[30px] left-[30px] dark:text-gray-300 text-black font-semibold py-[14px] px-[30px] rounded-full shadow-lg bg-white dark:bg-black duration-500">
                    For the bathroom
                  </button>
                </div>
                <div className="w-full md:w-[50%] md:ml-[13.2px] my-[13.2px] md:my-0 overflow-hidden relative object-contain rounded-2xl c-shadow cursor-pointer group">
                  <img
                    src="https://around.createx.studio/assets/img/shop/categories/04.jpg"
                    className="w-full group-hover:scale-105 duration-500"
                    alt="4"
                  />
                  <span className="absolute top-0 left-0 w-full h-full z-30 bg-[#1215191a]"></span>
                  <button className="absolute z-40 sm:bottom-[40px] sm:left-[40px] bottom-[30px] left-[30px] dark:text-gray-300 text-black font-semibold py-[14px] px-[30px] rounded-full shadow-lg bg-white dark:bg-black duration-500">
                    For the bedroom
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
