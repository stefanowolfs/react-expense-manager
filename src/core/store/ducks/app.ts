import { createSlice } from "@reduxjs/toolkit";

const START_APP = "app/startApp";
const LOGIN = "app/login";
const LOGOUT = "app/logout";
const SET_LOADING = "app/setLoading";

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

export function setLoading(status: boolean) {
  return { type: SET_LOADING, payload: status };
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    startApp(state) {
      return { ...state, loading: true };
    },
    login(state) {
      return { ...state, loading: true };
    },
    logout() {},
    setLoading(state, action) {
      return { ...state, loading: action.payload };
    },
  },
});

export default appSlice.reducer;
