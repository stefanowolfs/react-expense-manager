import { createSlice } from "@reduxjs/toolkit";

const START_APP = "app/startApp";
const LOGIN = "app/login";
const LOGOUT = "app/logout";

type State = {
  loading: boolean;
};

const initialState: State = {
  loading: false,
};

export function startApp() {
  return { type: START_APP };
}

export function login() {
  return { type: LOGIN };
}

export function logout() {
  return { type: LOGOUT };
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    startApp(state) {
      return { ...state, loading: true };
    },
    login() {},
    logout() {},
  },
});

export default appSlice.reducer;
