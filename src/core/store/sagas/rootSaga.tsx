import { takeLatest } from "redux-saga/effects";
import { appSlice } from "../ducks/app";
import { authSlice } from "../ducks/auth";
import { handleLogin, handleLogout, handleStartApp } from "./app";
import { handleGetToken } from "./auth";

export function* watcherSaga() {
  const { startApp, login, logout } = appSlice.actions;
  const { getToken } = authSlice.actions;

  yield takeLatest(startApp.type, handleStartApp);
  yield takeLatest(login.type, handleLogin);
  yield takeLatest(logout.type, handleLogout);
  yield takeLatest(getToken.type, handleGetToken);
}
