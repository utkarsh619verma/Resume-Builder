import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allExperiences: [],
  newExperience: {
    jobtitle: "",
    company: "",
    description: "",
    startmonth: "",
    startyear: "",
    endmonth: "",
    endyear: "",
    city: "",
    country: "",
  },
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setJobTitle: (state, action) => {
      state.newExperience.jobtitle = action.payload;
    },
    setCompany: (state, action) => {
      state.newExperience.company = action.payload;
    },
    setDescription: (state, action) => {
      state.newExperience.description = action.payload;
    },
    setStartMonth: (state, action) => {
      state.newExperience.startmonth = action.payload;
    },
    setStartYear: (state, action) => {
      state.newExperience.startyear = action.payload;
    },
    setEndMonth: (state, action) => {
      state.newExperience.endmonth = action.payload;
    },
    setEndYear: (state, action) => {
      state.newExperience.endyear = action.payload;
    },
    setCity: (state, action) => {
      state.newExperience.city = action.payload;
    },
    setCountry: (state, action) => {
      state.newExperience.country = action.payload;
    },
    setNewExperience: (state, action) => {
      const old_arr = state.allExperiences;
      old_arr.push(action.payload);
      state.allExperiences = old_arr;
    },
  },
});

export const {
  setJobTitle,
  setCompany,
  setDescription,
  setStartMonth,
  setStartYear,
  setEndMonth,
  setEndYear,
  setCity,
  setCountry,
  setNewExperience,
} = experienceSlice.actions;
export default experienceSlice.reducer;
