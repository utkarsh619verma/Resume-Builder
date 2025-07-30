import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProjects: [],
  currentProject: {
    title: "",
    description: "",
  },
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.currentProject.title = action.payload;
    },
    setDescription: (state, action) => {
      state.currentProject.description = action.payload;
    },
    addProject: (state, action) => {
      state.allProjects.push(action.payload);
    },
  },
});

export const { setTitle, setDescription, addProject } = projectSlice.actions;
export default projectSlice.reducer;
