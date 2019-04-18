import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../screens/Home.js";
import { INDEX_ROUTE } from "./RoutesConstants";

const Routes = () => {
  return (
    <Switch>
      <Route path={INDEX_ROUTE} component={Home} />
    </Switch>
  );
};

export default Routes;
