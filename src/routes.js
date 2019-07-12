import React from "react";
import { Switch, Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Wizard from "./Components/Wizard/Wizard.js";

export default(
    <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/wizard" component={Wizard}/>
    </Switch>
);