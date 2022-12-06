import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Exquisite glass vase",
    img: "https://around.createx.studio/assets/img/landing/shop/hero/01.png",
    price: 19.0,
    oldPrice: 21.5,
    popular: true,
    trend: false,
  },
  {
    id: 6,
    name: "Loft style lamp",
    img: "https://around.createx.studio/assets/img/shop/products/01.png",
    price: 21.0,
    oldPrice: 22.5,
    popular: false,
    trend: true,
  },
  {
    id: 2,
    name: "Pot for home flowers",
    img: "https://around.createx.studio/assets/img/landing/shop/hero/02.png",
    price: 11.0,
    oldPrice: 12.5,
    popular: true,
    trend: true,
  },
  {
    id: 3,
    name: "Ceramic soap dispenser",
    img: "https://around.createx.studio/assets/img/landing/shop/hero/03.png",
    price: 16.0,
    oldPrice: 17.5,
    popular: true,
    trend: true,
  },
  {
    id: 4,
    name: "Wooden clock with metal hands",
    img: "https://around.createx.studio/assets/img/landing/shop/hero/04.png",
    price: 24.0,
    oldPrice: 24.5,
    popular: true,
    trend: false,
  },
  {
    id: 5,
    name: "Scented candle in ceramic shell",
    img: "https://around.createx.studio/assets/img/landing/shop/hero/05.png",
    price: 13.0,
    oldPrice: 15.5,
    popular: true,
    trend: true,
  },

  {
    id: 7,
    name: "Living room table",
    img: "https://around.createx.studio/assets/img/shop/products/06.png",
    price: 46.0,
    oldPrice: 48.5,
    popular: false,
    trend: true,
  },
];

export const productsSlicer = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlicer.reducer;
