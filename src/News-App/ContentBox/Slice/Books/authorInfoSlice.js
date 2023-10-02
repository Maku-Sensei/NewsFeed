import { createSlice } from "@reduxjs/toolkit";

//for displaying books info
export const authorQuerySlice = createSlice({
  name: "authorInfo",
  initialState: {
    value: false,
  },
  reducers: {
    setAuthorInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAuthorInfo } = authorQuerySlice.actions;
export default authorQuerySlice.reducer;
