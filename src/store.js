import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./features/rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "personal",
    "education",
    "experience",
    "skills",
    "projects",
    "achievements",
    "summary",
  ],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
