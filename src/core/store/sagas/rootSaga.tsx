import { takeLatest } from "redux-saga/effects";
import { authSlice } from "../ducks/auth";
import { handleGetToken } from "./auth";

export function* watcherSaga() {
  const { getToken } = authSlice.actions;

  yield takeLatest(getToken.type, handleGetToken);
}
