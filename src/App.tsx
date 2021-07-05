import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";

import store from "./core/store";
import AppRouter from "./router";

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
