import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthScreen from "./containers/auth";

const AppRouter: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AuthScreen} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
