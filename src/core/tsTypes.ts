type AuthReducerT = {
  token: string;
  loading: boolean;
};

type ActionT = {
  type: string;
  payload: string;
};

export { ActionT, AuthReducerT };
