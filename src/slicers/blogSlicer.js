import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Paintaings for home decore",
    img: "https://around.createx.studio/assets/img/landing/shop/blog/01.jpg",
    des: "Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem",
  },
  {
    name: "How to keep flowers fresh longer",
    img: "https://around.createx.studio/assets/img/landing/shop/blog/02.jpg",
    des: "Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem",
  },
  {
    name: "Bedroom decoration explained",
    img: "https://around.createx.studio/assets/img/landing/shop/blog/03.jpg",
    des: "Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus laoreet sem adipiscing sollicitudin erat massa tellus lorem",
  },
];

const bolgSlicer = createSlice({
  name: "blog",
  initialState,
  reducers: {},
});

export default bolgSlicer.reducer;
