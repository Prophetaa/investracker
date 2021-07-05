import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import ReduxThunk from "redux-thunk";

import reducers from "./combinedReducers";
import socket from "../services/socket";
import { storeToken } from "./middlewares/authMiddlewares";
import { socketAuth } from "./middlewares/socketMiddleware";

const enhancer = composeWithDevTools(
  applyMiddleware(ReduxThunk, storeToken, socketAuth(socket))
);

const store = createStore(reducers, enhancer);
// eslint-disable-next-line
const { getState, dispatch } = store;
// eslint-disable-next-line
const { token } = getState().authReducer;

if (token) {
  socket.connect(dispatch, token);
}

export default store;
