import { NavLink } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { changeScl } from "../../slicers/scrollSlicer";

const About = () => {
  const dispatch = useDispatch();

  window.addEventListener("scroll", (e) => {
    let scrl = window.pageYOffset * 0.7;

    if (scrl < 680) {
      dispatch(changeScl(scrl));
    }
  });

  return (
    <>
      <div className="z-20 w-full dark:bg-black bg-white duration-500">
        <div className="con mx-auto md:px-[13.5px] py-[130px]">
          <h4 className=" w-[95%] md:w-[80%] text-[20px] md:text-[24px] dark:text-gray-200 duration-500">
            We do not believe that one style suits everyone. That is why we
            choose three design directions for the new season. Get inspired by
            new trends and create an atmosphere of coziness and comfort in your
            own home. On the site you will find all the wonderful decor items
            from photo frames to tablecloths for the dining table.
          </h4>

          <NavLink to={"about"}>
            <div className=" inline-flex items-center pt-[30px] text-[18px] font-semibold text-[#3e816b] group">
              <button className="">About us</button>
              <span className=" pl-1 arrow">
                <HiOutlineArrowRight />
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default About;
