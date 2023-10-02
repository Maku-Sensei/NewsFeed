import { createSlice } from "@reduxjs/toolkit";

export const usaSlice = createSlice({
  name: "usa",
  initialState: {
    value: "FAANG",
  },
  reducers: {
    setUsCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUsCategory } = usaSlice.actions;
export default usaSlice.reducer;
