import { useDispatch } from "react-redux";
import {
  configureStore,
  ThunkAction,
  ThunkDispatch,
  Action,
} from "@reduxjs/toolkit";

import loginReducer from "../features/login/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = ThunkDispatch<RootState, void, Action<string>>;
export const useThunkDispatch = () => useDispatch<typeof store.dispatch>();
