import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Phone from "./Pages/Phone";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/phonecase" component={Phone} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
