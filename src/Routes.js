import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import GeneralInformation from "./Components/general-information";
import Requirements from "./Components/upload-requirements";
import DetailDeposit from "./Components/detail-deposit";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={GeneralInformation} />
        <Route path="/requisitos" component={Requirements} />
        <Route path="/detaildeposit" component={DetailDeposit} />
      </Switch>
    </HashRouter>
  );
};
export default Routes;
