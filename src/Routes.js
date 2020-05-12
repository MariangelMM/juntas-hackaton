import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./View/home";
import Loan from "./View/loan";
import LoanStart from "./Components/loan-start";
import ImproveCommerce from "./View/improve-commerce";
import LoanDetail from "./Components/loan-detail";
import GeneralInformation from "./Components/general-information";
import Requirements from "./Components/upload-requirements";
import DetailDeposit from "./Components/detail-deposit";
import MainLoan from "./Components/loan";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/loanstart" component={LoanStart} />
        <Route path="/loan" component={Loan} />
        <Route path="/mainloan" component={MainLoan} />
        <Route path="/improvecommerce" component={ImproveCommerce} />
        <Route path="/loandetail" component={LoanDetail} />
        <Route path="/generalinformation" component={GeneralInformation} />
        <Route path="/requisitos" component={Requirements} />
        <Route path="/detaildeposit" component={DetailDeposit} />
      </Switch>
    </HashRouter>
  );
};
export default Routes;
