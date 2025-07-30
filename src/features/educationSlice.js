import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allEducations: [],
  currentEducation: {
    universityname: "",
    degree: "",
    marks: "",
    from: "",
    to: "",
  },
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    setUniversityName: (state, action) => {
      state.currentEducation.universityname = action.payload;
    },
    setDegree: (state, action) => {
      state.currentEducation.degree = action.payload;
    },
    setMarks: (state, action) => {
      state.currentEducation.marks = action.payload;
    },
    setFrom: (state, action) => {
      state.currentEducation.from = action.payload;
    },
    setTo: (state, action) => {
      state.currentEducation.to = action.payload;
    },
    setTitle: (state, action) => {
      state.currentEducation.title = action.payload;
    },
    setContent: (state, action) => {
      state.currentEducation.content = action.payload;
    },
    setAdditionalDetails: (state, action) => {
      const old_arr = state.currentEducation.additionaldetails;
      old_arr.push(action.payload);
      state.currentEducation.additionaldetails = old_arr;
    },
    setNewEducation: (state, action) => {
      const old_arr = state.allEducations;
      old_arr.push(action.payload);
      state.allEducations = old_arr;
    },
    // eslint-disable-next-line no-unused-vars
    clearCurrentEducation: (state, action) => {
      Object.keys(state.currentEducation).forEach((key) => {
        state.currentEducation[key] = "";
      });
    },
  },
});

export const {
  setUniversityName,
  setDegree,
  setMarks,
  setFrom,
  setTo,
  setNewEducation,
  clearCurrentEducation,
} = educationSlice.actions;
export default educationSlice.reducer;
