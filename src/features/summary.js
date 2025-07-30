import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  summary: "",
};

const summarySlice = createSlice({
  name: "achievements",
  initialState,
  reducers: {
    setSummary: (state, action) => {
      state.summary = action.payload;
    },
  },
});

export const { setSummary } = summarySlice.actions;
export default summarySlice.reducer;
