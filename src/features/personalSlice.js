import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  city: "",
  country: "",
  pincode: "",
  phone: "",
  email: "",
  position: "",
  linkedin: "",
  github: "",
};

const personalSlice = createSlice({
  name: "personal",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstname = action.payload;
    },
    setLastName: (state, action) => {
      state.lastname = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPhone(state, action) {
      state.phone = action.payload;
    },
    setCountry(state, action) {
      state.country = action.payload;
    },
    setPincode(state, action) {
      state.pincode = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setLinkedin: (state, action) => {
      state.linkedin = action.payload;
    },
    setGithub: (state, action) => {
      state.github = action.payload;
    },
  },
});
export const {
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setCountry,
  setPincode,
  setCity,
  setPosition,
  setLinkedin,
  setGithub,
} = personalSlice.actions;
export default personalSlice.reducer;
