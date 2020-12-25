import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import PackageList from "./Components/PackageList";
import NewPackage from "./Components/NewPackage";
import EditPackage from "./Components/EditPackage";

const App = () => {
  return (
    <Container>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={PackageList} />
          <Route path="/new" component={NewPackage} />
          <Route path="/edit/:id" component={EditPackage} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
