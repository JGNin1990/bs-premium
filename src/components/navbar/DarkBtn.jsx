import { FaSun } from "react-icons/fa";
import { BsMoonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { change } from "../../slicers/darkSlicer";

const DarkBtn = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div
          className="relative w-14 h-7 group border-2 border-gray-300 hover:border-[#448c74] bg-[#448c74] dark:bg-black duration-1000 rounded-full cursor-pointer"
          onClick={() => dispatch(change())}
        >
          <span className=" absolute top-[4px] right-[4px] duration-1000  rounded-full dark:-translate-x-6 dark:rotate-[360deg] opacity-0 dark:opacity-100 ">
            <BsMoonFill className="h-4 w-5 text-gray-300 group-hover:text-[#448c74] group-hover:rotate-[720deg] duration-500" />
          </span>
          <span className=" absolute top-[2px] right-[4px] duration-1000  rounded-full dark:-translate-x-6 dark:rotate-[360deg] opacity-100 dark:opacity-0">
            <FaSun className="h-5 w-5 text-yellow-300 group-hover:rotate-[360deg] duration-500" />
          </span>
        </div>
      </div>
    </>
  );
};

export default DarkBtn;
