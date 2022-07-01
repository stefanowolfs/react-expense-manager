import { createSlice } from "@reduxjs/toolkit";

const GET_TOKEN = "auth/getToken";
const SET_TOKEN = "auth/setToken";

type AuthState = {
  token: string;
};

const initialState: AuthState = {
  token: null,
};

export function getToken() {
  return { type: GET_TOKEN };
}

export function setToken(token: string) {
  return {
    type: SET_TOKEN,
    payload: token,
  };
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getToken() {},
    setToken(state, action) {
      return { ...state, token: action.payload };
    },
  },
});

export default authSlice.reducer;
