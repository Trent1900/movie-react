import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};

const navSlice = createSlice({
  name: "navSlice",
  initialState,
  reducers: {
    navVisible: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { navVisible } = navSlice.actions;

export default navSlice.reducer;
