import { createSlice } from "@reduxjs/toolkit";

export const worksInfoIdSlice = createSlice({
  name: "worksInfoId",
  initialState: {
    value: 0,
  },
  reducers: {
    setWorksInfoId: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setWorksInfoId } = worksInfoIdSlice.actions;
export default worksInfoIdSlice.reducer;
