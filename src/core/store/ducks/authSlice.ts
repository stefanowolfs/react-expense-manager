import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {} as AuthState,
  reducers: {
    getToken() {},
    setToken(state, action) {
      return { ...state, token: action.payload };
    },
  },
});

export const { getToken, setToken } = authSlice.actions;
export default authSlice.reducer;
