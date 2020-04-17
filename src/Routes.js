import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./View/home";
import Loan from "./View/loan";
import Network from "./View/network";
import ImproveCommerce from "./View/improve-commerce";
import MainLoan from "./Components/loan";
import LoanDetail from "./Components/loan-detail";

import Requirements from "./Components/upload-requirements";
import DetailDeposit from "./Components/detail-deposit";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/loan" component={Loan} />
        <Route path="/netword" component={Network} />
        <Route path="/improvecommerce" component={ImproveCommerce} />
        <Route path="/mainloan" component={MainLoan} />
        <Route path="/loandetail" component={LoanDetail} />

        <Route path="/requisitos" component={Requirements} />
        <Route path="/detaildeposit" component={DetailDeposit} />
      </Switch>
    </HashRouter>
  );
};
export default Routes;
