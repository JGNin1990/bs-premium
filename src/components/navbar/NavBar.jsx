import { NavLink } from "react-router-dom";
import { BiSearch, BiUser, BiChevronDown } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import DarkBtn from "./DarkBtn";
import { useSelector } from "react-redux";
import Drop1 from "./Drop1";
import MenuIcon from "./MenuIcon";

const NavBar = () => {
  const darkState = useSelector((state) => state);
  return (
    <>
      <div className={darkState.dark.mode}>
        <div className="bg-white dark:bg-black duration-1000 fixed top-0 w-full z-[1000] shadow-lg">
          <div className="con px-[13.2px] mx-auto c-flex justify-between h-16 md:h-20 ">
            <div className=" c-flex">
              <NavLink to={"/"} className="c-flex">
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
                <h1 className="hidden sm:block mx-2 dark:text-gray-300 text-gray-600 text-[23px] font-semibold">
                  Around
                </h1>
              </NavLink>
              <ul className="!hidden lg:!flex items-center dark:text-gray-400 text-gray-600 font-medium ">
                <li className="ml-10 nav-hover">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="ml-10  cursor-pointer relative py-6 group">
                  <div className="c-flex nav-hover">
                    <span to={"page"}>Pages </span>
                    <BiChevronDown className="ml-2" />
                  </div>
                  <div className="scale-y-0 duration-500 group-hover:scale-y-100 origin-top absolute top-[94%]  -left-[280%]">
                    <Drop1 />
                  </div>
                </li>
                <li className="ml-10 nav-hover c-flex cursor-pointer">
                  <NavLink to={"account"}>Account</NavLink>
                  <BiChevronDown className="ml-2" />
                </li>
                <li className="ml-10 nav-hover">
                  <NavLink to={"ui-kit"}>UI Kit</NavLink>
                </li>
                <li className="ml-10 nav-hover">
                  <NavLink to={"doc"}>Doc</NavLink>
                </li>
              </ul>
            </div>

            <div className="c-flex">
              <div className="ml-6">
                <DarkBtn />
              </div>
              <div className="ml-6 cursor-pointer">
                <BiSearch className="text-[30px]  c-nav-icons" />
              </div>
              <div className="ml-6">
                <NavLink to={"sign-in"}>
                  <BiUser className="text-[25px] c-nav-icons" />
                </NavLink>
              </div>
              <div className="ml-6 cursor-pointer">
                <FiShoppingCart className="text-[25px] c-nav-icons" />
              </div>
              <div className="ml-6 lg:hidden">
                <MenuIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
