import { useSelector } from "react-redux";
import About from "../about/About";
import Ad from "../ad/Ad";
import Blog from "../blog/Blog";
import Categories from "../categories/Categories";
import Decore from "../decore/Decore";
import Ft2 from "../footer/Ft2";
import FtSection from "../footer/FtSection";
import Idea from "../idea/Idea";
import Service from "../services/Service";
import ProductShow from "./ProductShow";

const Hero = () => {
  const dark = useSelector((state) => state.dark);
  const scl = useSelector((state) => state.scl.mode);
  // console.log(scl);

  const tran = {
    transform: `translate3d(0px, -${scl}px, 0px)`,
  };

  return (
    <>
      <div className={dark.mode}>
        {/* for hero background */}
        <div className="relative min-h-[900px] sm:min-h-[100vh]">
          <div
            className={`fixed hero-bg min-h-[972px]   w-full z-[-100] overflow-hidden main-bg opacity-100 after:w-full after:h-full after:dark:bg-[#00000080] after:bg-[#00000050] after:fixed `}
            style={tran}
          ></div>

          {/* for hero section */}
          <div className="min-h-full w-full absolute top-0">
            <div className="absolute top-[130px] sm:top-[200px]  md:top-[230px] w-full z-20">
              <div className="con px-[13.2px] mx-auto c-flex ">
                <div className="w-[100%] xl:w-[80%] 2xl:w-[65%] text-white">
                  <h1 className="text-[40px] md:text-[50px] xl:text-[70px] dark:text-black font-bold leading-[50px] md:leading-[65px] xl:leading-[85px]">
                    DECOR TO CREATE <br /> COMFORT AT HOME
                  </h1>
                  <p className="text-gray-300 dark:text-gray-800 text-[16px] w-[70%] py-7">
                    On the site you will find all the wonderful decor items from
                    photo frames to tablecloths for the dining table
                  </p>
                  <button className="text-[15px] dark:text-gray-900 font-semibold border border-white dark:border-gray-900 py-3 sm:py-4 px-5 sm:px-7 rounded-2xl shadow-lg duration-500 origin-top hover:bg-white dark:hover:bg-black hover:text-gray-700 dark:hover:text-gray-500">
                    Explore the catalog
                  </button>
                </div>
                <div className="w-0 xl:w-[20%] 2xl:w-[35%]"></div>
              </div>
              <div className="con mx-auto pt-[40px] pb-[35px] sm:pt-[100px]">
                <ProductShow />
              </div>
            </div>
          </div>
        </div>

        {/* for about section */}
        <About />

        {/* for category section */}
        <Categories />

        {/* for decore section */}
        <Decore />

        {/* for services section */}
        <Service />

        {/* for idea section */}
        <Idea />

        {/* for blog section  */}
        <Blog />

        {/* for ad section */}
        <Ad />

        {/* for footer section */}
        <FtSection />
        <Ft2 />
      </div>
    </>
  );
};

export default Hero;
