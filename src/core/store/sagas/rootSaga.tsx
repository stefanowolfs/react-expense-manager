import { takeLatest } from "redux-saga/effects";

import { getToken } from "../ducks/authSlice";
import { handleGetToken } from "./handlers/auth";

export function* watcherSaga() {
  yield takeLatest(getToken.type, handleGetToken);
}
