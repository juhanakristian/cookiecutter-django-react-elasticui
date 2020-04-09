import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

import axios from "axios";

interface LoginState {
  token: string;
}

const initialState: LoginState = {
  token: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    saveToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { saveToken } = loginSlice.actions;

export const login = (
  username: string,
  password: string
): AppThunk<Promise<any>> => (dispatch) => {
  return axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/api/token/`, {
      username,
      password,
    })
    .then((response) => {
      dispatch(saveToken(response.data.access));
    });
};

export const selectToken = (state: RootState) => state.login.token;

export default loginSlice.reducer;
