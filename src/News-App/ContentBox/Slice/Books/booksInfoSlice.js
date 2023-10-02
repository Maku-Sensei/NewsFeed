import { createSlice } from "@reduxjs/toolkit";

//for displaying books info
export const booksQuerySlice = createSlice({
  name: "booksInfo",
  initialState: {
    value: false,
  },
  reducers: {
    setBooksInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBooksInfo } = booksQuerySlice.actions;
export default booksQuerySlice.reducer;
