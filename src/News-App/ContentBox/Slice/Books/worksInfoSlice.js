import { createSlice } from "@reduxjs/toolkit";

//for displaying books info
export const worksQuerySlice = createSlice({
  name: "worksInfo",
  initialState: {
    value: false,
  },
  reducers: {
    setWorksInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setWorksInfo } = worksQuerySlice.actions;
export default worksQuerySlice.reducer;
