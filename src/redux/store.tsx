import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducerShowProfile from "./showProfile/reducer";

const rootReducer = combineReducers({
  showProfileReducer: reducerShowProfile,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>;
