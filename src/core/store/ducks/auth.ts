import { ReduxAction } from "../../../types/reduxAction";

export const GET_TOKEN = "GET_TOKEN";
const SET_TOKEN = "SET_TOKEN";

export type AuthState = {
  token: string;
};

interface SetTokenPayload {
  token: string;
}

export type GetTokenAction = () => void;

const initialState: AuthState = {
  token: null,
};

export const getToken = () => ({
  type: GET_TOKEN,
});

export const setToken = (
  payload: SetTokenPayload
): ReduxAction<SetTokenPayload> => ({
  type: SET_TOKEN,
  payload: payload,
});

export default (state: AuthState = initialState, action: any) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
};
