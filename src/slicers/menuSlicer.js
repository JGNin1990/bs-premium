import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: false,
};

const menuSlicer = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { openMenu } = menuSlicer.actions;
export default menuSlicer.reducer;
