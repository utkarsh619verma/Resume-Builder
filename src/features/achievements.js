import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allAchievements: [],
  currentAchievement: {
    description: "",
  },
};

const achievementSlice = createSlice({
  name: "achievements",
  initialState,
  reducers: {
    setDescription: (state, action) => {
      state.currentAchievement.description = action.payload;
    },
    addAchievement: (state, action) => {
      state.allAchievements.push(action.payload);
    },
  },
});

export const { setDescription, addAchievement } = achievementSlice.actions;
export default achievementSlice.reducer;
