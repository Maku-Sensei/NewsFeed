import { createSlice } from "@reduxjs/toolkit";

export const booksQuerySlice = createSlice({
  name: "booksQuery",
  initialState: {
    value: "",
  },
  reducers: {
    setBooksQuery: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBooksQuery } = booksQuerySlice.actions;
export default booksQuerySlice.reducer;
