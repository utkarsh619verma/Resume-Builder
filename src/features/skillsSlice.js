import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allSkills: [],
  currentSkill: "",
};

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    newSkill: (state, action) => {
      state.currentSkill = action.payload;
    },
    addSkill: (state, action) => {
      state.allSkills.push(action.payload);
    },
  },
});

export const { newSkill, addSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
