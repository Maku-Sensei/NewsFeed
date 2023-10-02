import { createSlice } from "@reduxjs/toolkit";

export const booksInfoIdSlice = createSlice({
  name: "booksInfoId",
  initialState: {
    value: 0,
  },
  reducers: {
    setBooksInfoId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBooksInfoId } = booksInfoIdSlice.actions;
export default booksInfoIdSlice.reducer;
