import initialState from "../state";
import { USER_LOGIN_SUCCESS, USER_LOGOUT } from "./types";
import { AuthReducerT, ActionT } from "../../tsTypes";

const authReducer = (
  state = initialState.authState,
  action: ActionT
): AuthReducerT => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
      };
    case USER_LOGOUT: {
      return {
        ...state,
        token: null,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
