import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UserDetails from "./UserDetails";
import Registration from "./Registration";
import Login from "./Login";
import ViewUser from "./ViewUser";

export default function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/Login" component={Login} />
        <Route path="/Registration" component={Registration} />
        <Route path="/UserDetails" component={UserDetails} />
        <Route exact path="/ViewUser/:id" component={ViewUser} />
      </Router>
    </div>
  );
}
