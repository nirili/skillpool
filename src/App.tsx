import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import "./App.css";
import FormComponent from "./pages/FormComponent";

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        {/* Routes with their path & corresponding component */}
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/dashboard" component={Dashboard} />
            <Route exact={true} path="/register" component={FormComponent} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
