import { US, FR, MM, CN } from "country-flag-icons/react/3x2";
import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const FtSection = () => {
  const [lan, setLan] = useState(false);
  //   console.log(lan);
  return (
    <>
      <div className="w-full bg-black">
        <div className="con mx-auto pt-10  ">
          <div className="flex flex-row items-start">
            <div className="w-[17%] px-[13.2px] flex flex-col">
              <h1 className="uppercase font-semibold text-white text-[17.6px] pb-1">
                Useful link
              </h1>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Trending
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Sale
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                About us
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Blog
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Contact
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Shipping & Return
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Devilary info
              </p>
            </div>
            <div className="w-[17%] px-[13.2px] flex flex-col">
              <h1 className="uppercase font-semibold text-white text-[17.6px] pb-1">
                Decors
              </h1>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Vases
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Mirrors
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Paintings
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Figurines
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Textile
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Lighting
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Photo frames
              </p>
            </div>
            <div className="w-[17%] px-[13.2px] flex flex-col">
              <h1 className="uppercase font-semibold text-white text-[17.6px] pb-1">
                Categories
              </h1>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Kitchen
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Bathroom
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Livingroom
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Bedroom
              </p>
            </div>
            <div className="w-[17%] px-[13.2px] flex flex-col">
              <h1 className="uppercase font-semibold text-white text-[17.6px] pb-1">
                Showroom
              </h1>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300 leading-[22px]">
                1501 Main St, Ste 50 <br /> Tewksbury MA 01876
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                email@example.com
              </p>
              <p className="pt-1 pb-3 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                +95 09 440 00 0222
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Mon-Fri: 8:00 - 21:00
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Sat: 8:00 - 21:00
              </p>
              <p className="py-1 font-medium hover:text-[#448c74] cursor-pointer duration-500 text-[17.6px] text-gray-300">
                Sun: 8:00 - 21:00
              </p>
            </div>
            <div className="w-[32%] px-[13.2px] flex flex-col bg-black text-center">
              <h1 className="uppercase font-semibold text-white text-[17.6px] pb-5">
                Download our app
              </h1>
              <div className="c-flex justify-center">
                <div className="w-[40%] bg-[#191919] hover:bg-[#333333] cursor-pointer duration-500 px-6 py-[10px] rounded-2xl mr-3">
                  <img
                    src="https://around.createx.studio/assets/img/market/appstore-light.svg"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="w-[40%] bg-[#191919] hover:bg-[#333333] cursor-pointer duration-500 px-6 py-[10px] rounded-2xl">
                  <img
                    src="https://around.createx.studio/assets/img/market/googleplay-light.svg"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="c-flex justify-between pt-10 pb-7 text-white relative">
            <div className="c-flex">
              <p className="text-[15.4px] text-gray-500 font-medium hover:text-gray-300 cursor-pointer duration-500 px-4">
                Support
              </p>
              <p className="text-[15.4px] text-gray-500 font-medium hover:text-gray-300 cursor-pointer duration-500 px-4">
                Privacy
              </p>
              <p className="text-[15.4px] text-gray-500 font-medium hover:text-gray-300 cursor-pointer duration-500 px-4">
                Terms of us
              </p>
            </div>
            <div
              onClick={() => setLan((pre) => !pre)}
              className="cursor-pointer c-flex text-[15px] font-semibold py-3 sm:py-4 px-5 sm:px-7 rounded-2xl shadow-lg duration-500 border border-gray-400 hover:bg-[#191919]"
            >
              <US title="United States" className="w-[22.5px] h-[15px]" />
              <span className="mx-3"> Eng/USD</span>
              <IoChevronDownSharp />
            </div>

            <div
              className={`border border-gray-400 p-5 rounded-xl absolute top-[-85%] right-[1%] scale-y-0 origin-bottom duration-500 bg-[#191919] ${
                lan && "scale-y-100"
              }`}
            >
              <div className="c-flex cursor-pointer">
                <FR title="United States" className="w-[22.5px] h-[15px] " />
                <span className="pl-3 duration-400 hover:text-[#448c74]">
                  Français
                </span>
              </div>
              <div className="c-flex cursor-pointer py-2">
                <MM title="United States" className="w-[22.5px] h-[15px] " />
                <span className="pl-3 duration-400 hover:text-[#448c74]">
                  Myanmar
                </span>
              </div>
              <div className="c-flex cursor-pointer">
                <CN title="United States" className="w-[22.5px] h-[15px] " />
                <span className="pl-3 duration-400 hover:text-[#448c74]">
                  中國
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FtSection;
