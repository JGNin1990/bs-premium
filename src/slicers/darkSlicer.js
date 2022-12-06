import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "",
};

export const darkMode = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    change: (state) => {
      state.mode.length === 0 ? (state.mode = "dark") : (state.mode = "");
    },
  },
});

export const { change } = darkMode.actions;
export default darkMode.reducer;
