import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Phone from "./Pages/Phone";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Phone} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
