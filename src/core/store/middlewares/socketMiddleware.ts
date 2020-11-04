import { USER_LOGIN_SUCCESS, USER_LOGOUT } from "../auth/types";
import { ActionT } from "../../tsTypes";

// eslint-disable-next-line
export const socketAuth = (socketio) => (store) => (
  next: (action: ActionT) => void
) => (action: ActionT) => {
  if (action.type === USER_LOGIN_SUCCESS) {
    // eslint-disable-next-line
    socketio.connect(store.dispatch, action.payload);
  }

  if (action.type === USER_LOGOUT) {
    // eslint-disable-next-line
    socketio.disconnect();
  }

  next(action);
};
