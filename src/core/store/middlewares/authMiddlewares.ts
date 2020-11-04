import { USER_LOGIN_SUCCESS, USER_LOGOUT } from "../auth/types";
import storage from "../../services/storage";
import { ActionT } from "../../tsTypes";

export const storeToken = () => (next: (action: ActionT) => void) => (
  action: ActionT
): void => {
  try {
    if (action.type === USER_LOGIN_SUCCESS) {
      storage.set("token", action.payload);
    }
    if (action.type === USER_LOGOUT) {
      storage.clear();
    }
  } catch (e) {
    console.log(`Interaction with LocalStorage went wrong`, e);
  }

  next(action);
};
