import { useSelector, useDispatch } from "react-redux";
import { openMenu } from "../../slicers/menuSlicer";

const MenuIcon = () => {
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  //   console.log(menu);
  return (
    <>
      <button
        className="group w-[23px] h-[20px]"
        onClick={() => dispatch(openMenu())}
      >
        <div
          className={`menu-icon ${
            menu.mode
              ? "before:w-[22px] before:rotate-45 before:translate-y-[7.7px] after:w-[22px] after:-rotate-45 after:-translate-y-[7.7px] "
              : "h-[2px] "
          }`}
        ></div>
      </button>
    </>
  );
};

export default MenuIcon;
