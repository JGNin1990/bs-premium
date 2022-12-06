import { GoPrimitiveDot } from "react-icons/go";
import { HiOutlineArrowRight } from "react-icons/hi";

const Idea = () => {
  return (
    <>
      <div className="bg-white w-full dark:bg-black duration-500">
        <div className="con mx-auto">
          <h1 className="pb-10 text-black dark:text-white text-[45px] font-semibold">
            Idea for your home
          </h1>
          <div className="c-flex flex-wrap">
            <div className="w-full md:w-[50%] px-[13.2px] pb-[26.4px] md:pb-0 relative">
              <img
                src="https://around.createx.studio/assets/img/landing/shop/gallery/01.jpg"
                alt=""
                className="rounded-xl"
              />
              <button className=" top-[14%] left-[62%] btn-blur group">
                <GoPrimitiveDot />
                <div className="absolute top-[137%] -left-[215%] dark:text-gray-300 text-black dark:bg-black bg-white w-[178px] p-5 rounded-3xl scale-y-0 duration-500 origin-top group-focus:scale-y-100">
                  <span className="cl-1 dark:bg-black bg-white absolute top-[-8px] left-[78px] w-[20px] h-[10px]"></span>
                  <div className="c-flex justify-between cursor-pointer text-left  ">
                    <h1 className="w-[70%] text-[16px] font-semibold leading-[19px]">
                      Photo frame Defacto
                    </h1>
                    <div className="w-[20%] text-right text-[20px]">
                      <HiOutlineArrowRight />
                    </div>
                  </div>
                  <p className="text-[14px] pt-2 dark:text-gray-500 text-gray-700 font-medium text-left">
                    $21.00
                  </p>
                </div>
              </button>

              <button className=" top-[20%] left-[28%] btn-blur group">
                <GoPrimitiveDot />
                <div className="absolute top-[137%] -left-[215%] dark:text-gray-300 text-black dark:bg-black bg-white w-[178px] p-5 rounded-3xl scale-y-0 duration-500 origin-top group-focus:scale-y-100">
                  <span className="cl-1 dark:bg-black bg-white absolute top-[-8px] left-[78px] w-[20px] h-[10px]"></span>
                  <div className="c-flex justify-between cursor-pointer text-left  ">
                    <h1 className="w-[70%] text-[16px] font-semibold leading-[19px]">
                      Bronze floor led lamp
                    </h1>
                    <div className="w-[20%] text-right text-[20px]">
                      <HiOutlineArrowRight />
                    </div>
                  </div>
                  <p className="text-[14px] pt-2 dark:text-gray-500 text-gray-700 font-medium text-left">
                    $185.00
                  </p>
                </div>
              </button>
              <button className=" top-[53%] left-[36%] btn-blur group">
                <GoPrimitiveDot />
                <div className="absolute top-[137%] -left-[215%] dark:text-gray-300 text-black dark:bg-black bg-white w-[178px] p-5 rounded-3xl scale-y-0 duration-500 origin-top group-focus:scale-y-100">
                  <span className="cl-1  dark:bg-black bg-white absolute top-[-8px] left-[78px] w-[20px] h-[10px]"></span>
                  <div className="c-flex justify-between cursor-pointer text-left  ">
                    <h1 className="w-[70%] text-[16px] font-semibold leading-[19px]">
                      Bronze floor led lamp
                    </h1>
                    <div className="w-[20%] text-right text-[20px]">
                      <HiOutlineArrowRight />
                    </div>
                  </div>
                  <p className="text-[14px] pt-2 dark:text-gray-500 text-gray-700 font-medium text-left">
                    $185.00
                  </p>
                </div>
              </button>
              <button className=" top-[70%] left-[66%] btn-blur group ">
                <GoPrimitiveDot />
                <div className="absolute -top-[355%] -left-[215%] dark:text-gray-300 text-black dark:bg-black bg-white w-[178px] p-5 rounded-3xl scale-y-0 duration-500 origin-bottom group-focus:scale-y-100">
                  <span className="cl-2 dark:bg-black bg-white absolute bottom-[-8px] left-[78px] w-[20px] h-[10px]"></span>
                  <div className="c-flex justify-between cursor-pointer text-left  ">
                    <h1 className="w-[70%] text-[16px] font-semibold leading-[19px]">
                      Bronze floor led lamp
                    </h1>
                    <div className="w-[20%] text-right text-[20px]">
                      <HiOutlineArrowRight />
                    </div>
                  </div>
                  <p className="text-[14px] pt-2 dark:text-gray-500 text-gray-700 font-medium text-left">
                    $185.00
                  </p>
                </div>
              </button>
            </div>
            <div className="w-full sm:w-[50%] md:w-[25%] flex flex-col px-[13.2px]">
              <img
                src="https://around.createx.studio/assets/img/landing/shop/gallery/02.jpg"
                alt=""
                className="rounded-xl mb-[26.4px]"
              />
              <img
                src="https://around.createx.studio/assets/img/landing/shop/gallery/03.jpg"
                alt=""
                className="rounded-xl"
              />
            </div>
            <div className="w-full sm:w-[50%] md:w-[25%] sm:pt-0 pt-[26.4px]  px-[13.2px]">
              <img
                src="https://around.createx.studio/assets/img/landing/shop/gallery/04.jpg"
                alt=""
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Idea;
