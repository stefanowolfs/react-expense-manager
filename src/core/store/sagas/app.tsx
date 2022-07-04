import { put } from "redux-saga/effects";
import { setToken } from "../ducks/auth";

export function* handleStartApp() {
  const storedToken = localStorage.getItem("token");
  if (!!storedToken) {
    yield put(setToken(storedToken));
  }
}

export function* handleLogin() {
  const storedToken = localStorage.getItem("token");
  if (!!storedToken) {
    yield put(setToken(storedToken));
  }
}

export function* handleLogout() {
  yield put(setToken(null));
  localStorage.removeItem("token");
}
