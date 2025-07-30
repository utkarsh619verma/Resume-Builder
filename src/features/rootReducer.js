import personalReducer from "./personalSlice";
import educationReducer from "./educationSlice";
import experienceReducer from "./experienceSlice";
import skillsReducer from "./skillsSlice";
import projectReducer from "./projectsSlice";
import acheivementReducer from "./achievements";
import summaryReducer from "./summary";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  personal: personalReducer,
  education: educationReducer,
  experience: experienceReducer,
  skills: skillsReducer,
  projects: projectReducer,
  achievements: acheivementReducer,
  summary: summaryReducer,
});
