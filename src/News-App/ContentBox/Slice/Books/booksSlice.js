import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    value: "Search",
  },
  reducers: {
    setBooksCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBooksCategory } = booksSlice.actions;
export default booksSlice.reducer;
