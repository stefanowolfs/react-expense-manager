import { call, put } from "redux-saga/effects";

import { setToken } from "../ducks/auth";
import { login } from "../../../infra/adapter/loginAPI";

export function* handleGetToken() {
  try {
    const token: string = yield call(login);
    yield put(setToken(token));
    localStorage.setItem("token", token);
  } catch (error) {
    console.log(error);
  }
}
