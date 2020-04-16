import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import GeneralInformation from "./Components/general-information";
import Requirements from "./Components/upload-requirements";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={GeneralInformation} />
        <Route path="/requisitos" component={Requirements} />
      </Switch>
    </HashRouter>
  );
};
export default Routes;
