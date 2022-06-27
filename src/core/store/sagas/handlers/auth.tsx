import { call, put } from "redux-saga/effects";

import { setToken } from "../../ducks/authSlice";
import { fakeAuth } from "../../../../infra/adapter/loginAPI";

export function* handleGetToken() {
  try {
    const token: Promise<string> = yield call(fakeAuth);
    yield put(setToken({ token }));
  } catch (error) {
    console.log(error);
  }
}
