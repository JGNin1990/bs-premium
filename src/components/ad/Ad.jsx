import { FaInstagram } from "react-icons/fa";

const Ad = () => {
  return (
    <>
      <div className="relative w-full bg-white dark:bg-black duration-500">
        <div className="con mx-auto z-[999] relative">
          <div className="lg:flex-row flex flex-col items-center ">
            <div className="p-[13.2px] w-[80%] sm:w-[60%] lg:w-[25%]">
              <div className=" cursor-pointer relative rounded-lg shadow-inner overflow-hidden duration-500 group after:w-full after:h-full after:hover:bg-[#00000040] after:bg-[#00000010] after:absolute after:top-0 after:left-0 after:z-[1000]">
                <FaInstagram className="absolute text-white font-semibold text-[30px] duration-500 top-[45%] left-[44%] opacity-0 z-[1001] group-hover:opacity-100" />
                <img
                  src="https://around.createx.studio/assets/img/landing/shop/instagram/01.jpg"
                  alt=""
                  className="w-full duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="w-[80%] lg:w-[50%] lg:py-0 py-10 px-[26.4px] text-[30px] lg:text-[45px] font-semibold text-center leading-[55px] cursor-pointer">
              <FaInstagram className="text-[#448c74] mx-auto" />
              <h1 className="pt-[20px] lg:pt-[25px] text-black dark:text-gray-200">
                Follow us
              </h1>
              <h1 className="text-[#448c74]">#aroundecor</h1>
            </div>
            <div className="p-[13.2px] w-[80%] sm:w-[60%] lg:w-[25%]">
              <div className=" cursor-pointer relative rounded-lg shadow-inner overflow-hidden duration-500 group after:w-full after:h-full after:hover:bg-[#00000040] after:bg-[#00000010] after:absolute after:top-0 after:left-0 after:z-[1000]">
                <FaInstagram className="absolute text-white font-semibold text-[30px] duration-500 top-[45%] left-[44%] opacity-0 z-[1001] group-hover:opacity-100" />
                <img
                  src="https://around.createx.studio/assets/img/landing/shop/instagram/02.jpg"
                  alt=""
                  className="w-full duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="c-flex flex-wrap lg:flex-nowrap">
            <div className="p-[13.2px] w-[50%] lg:w-[25%]">
              <div className=" cursor-pointer relative rounded-lg shadow-inner overflow-hidden duration-500 group after:w-full after:h-full after:hover:bg-[#00000040] after:bg-[#00000010] after:absolute after:top-0 after:left-0 after:z-[1000]">
                <FaInstagram className="absolute text-white font-semibold text-[30px] duration-500 top-[45%] left-[44%] opacity-0 z-[1001] group-hover:opacity-100" />
                <img
                  src="https://around.createx.studio/assets/img/landing/shop/instagram/03.jpg"
                  alt=""
                  className="w-full duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="p-[13.2px] w-[50%] lg:w-[25%]">
              <div className=" cursor-pointer relative rounded-lg shadow-inner overflow-hidden duration-500 group after:w-full after:h-full after:hover:bg-[#00000040] after:bg-[#00000010] after:absolute after:top-0 after:left-0 after:z-[1000]">
                <FaInstagram className="absolute text-white font-semibold text-[30px] duration-500 top-[45%] left-[44%] opacity-0 z-[1001] group-hover:opacity-100" />
                <img
                  src="https://around.createx.studio/assets/img/landing/shop/instagram/04.jpg"
                  alt=""
                  className="w-full duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="p-[13.2px] w-[50%] lg:w-[25%]">
              <div className=" cursor-pointer relative rounded-lg shadow-inner overflow-hidden duration-500 group after:w-full after:h-full after:hover:bg-[#00000040] after:bg-[#00000010] after:absolute after:top-0 after:left-0 after:z-[1000]">
                <FaInstagram className="absolute text-white font-semibold text-[30px] duration-500 top-[45%] left-[44%] opacity-0 z-[1001] group-hover:opacity-100" />
                <img
                  src="https://around.createx.studio/assets/img/landing/shop/instagram/05.jpg"
                  alt=""
                  className="w-full duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="p-[13.2px] w-[50%] lg:w-[25%]">
              <div className=" cursor-pointer relative rounded-lg shadow-inner overflow-hidden duration-500 group after:w-full after:h-full after:hover:bg-[#00000040] after:bg-[#00000010] after:absolute after:top-0 after:left-0 after:z-[1000]">
                <FaInstagram className="absolute text-white font-semibold text-[30px] duration-500 top-[45%] left-[44%] opacity-0 z-[1001] group-hover:opacity-100" />
                <img
                  src="https://around.createx.studio/assets/img/landing/shop/instagram/06.jpg"
                  alt=""
                  className="w-full duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[150px] bg-black  bottom-0 z-[198] absolute"></div>
      </div>
    </>
  );
};

export default Ad;
