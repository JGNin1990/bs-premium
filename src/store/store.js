import { configureStore } from "@reduxjs/toolkit";
import blogSlicer from "../slicers/blogSlicer";
import darkMode from "../slicers/darkSlicer";
import menuSlicer from "../slicers/menuSlicer";
import productsSlicer from "../slicers/products";
import scrollSlicer from "../slicers/scrollSlicer";

export const store = configureStore({
  reducer: {
    dark: darkMode,
    products: productsSlicer,
    menu: menuSlicer,
    scl: scrollSlicer,
    blog: blogSlicer,
  },
});
