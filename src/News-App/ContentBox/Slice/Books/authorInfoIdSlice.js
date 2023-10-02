import { createSlice } from "@reduxjs/toolkit";

export const authorInfoIdSlice = createSlice({
  name: "authorInfoId",
  initialState: {
    value: 0,
  },
  reducers: {
    setAuthorInfoId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAuthorInfoId } = authorInfoIdSlice.actions;
export default authorInfoIdSlice.reducer;
