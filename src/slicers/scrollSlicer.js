import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: 0,
};

const scrollSlicer = createSlice({
  name: "scl",
  initialState,
  reducers: {
    changeScl: (state,actions) => {
      state.mode = actions.payload
    },
  },
});

export const { changeScl } = scrollSlicer.actions;
export default scrollSlicer.reducer;
