import { NavLink } from "react-router-dom";
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
} from "react-icons/fa";

const Ft2 = () => {
  return (
    <>
      <div className="bg-black w-full">
        <div className="con mx-auto pb-10 ">
          <hr className="pb-7" />
          <div className="c-flex flex-wrap  justify-center sm:justify-between">
            <div className=" c-flex">
              <NavLink to={"/"} className="c-flex pr-5">
                <svg
                  version="1.1"
                  width="35"
                  height="32"
                  viewBox="0 0 36 33"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#448c74]"
                >
                  <path
                    fill="currentColor"
                    d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"
                  ></path>
                </svg>
                <h1 className=" mx-2 text-[23px] text-white font-semibold">
                  Around
                </h1>
              </NavLink>
              <div className="text-white mx-2 p-2 rounded-full bg-[#191919] text-[20px] cursor-pointer hover:bg-blue-500 duration-500">
                <FaTelegramPlane />
              </div>
              <div className="text-white mx-2 p-2 rounded-full bg-[#191919] text-[20px] cursor-pointer hover:bg-red-800 duration-500">
                <FaInstagram />
              </div>
              <div className="text-white mx-2 p-2 rounded-full bg-[#191919] text-[20px] cursor-pointer hover:bg-blue-800 duration-500">
                <FaFacebookF />
              </div>
              <div className="text-white mx-2 p-2 rounded-full bg-[#191919] text-[20px] cursor-pointer hover:bg-rose-600 duration-500">
                <FaPinterestP />
              </div>
            </div>
            <div className="w-[200px] py-5 sm:py-0">
              <img
                src="https://around.createx.studio/assets/img/shop/footer-cards.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ft2;
