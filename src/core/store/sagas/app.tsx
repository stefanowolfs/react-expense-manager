import { put } from "redux-saga/effects";
import { setLoading } from "../ducks/app";
import { getToken, setToken } from "../ducks/auth";

export function* handleStartApp() {
  const storedToken = localStorage.getItem("token");
  if (!!storedToken) {
    yield put(setToken(storedToken));
  }
}

export function* handleLogin() {
  yield put(getToken());
  yield put(setLoading(false));
}

export function* handleLogout() {
  yield put(setToken(null));
  localStorage.removeItem("token");
}
