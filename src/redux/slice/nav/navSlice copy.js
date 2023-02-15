// create action, slice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postAction = createAsyncThunk("anyName", async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  } catch (error) {
    // dosomething, when error
    return error?.response;
  }
});

const postSlices = createSlice({
  name: "any",
  initialState: {},
  extraReducers: {
    [postAction.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postAction.fulfilled]: (state, action) => {
      state.lists = action.payload;
      console.log(state.lists, "slice 中");
      state.isLoading = false;
    },
    [postAction.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default postSlices.reducer;
