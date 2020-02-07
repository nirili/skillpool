import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   RouteComponentProps
// } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import FormComponent from "./pages/FormComponent";
import Home from "./pages/Home";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Router>
        <Dashboard />
      </Router> */}

      <Home />

      {/* Routes with their path & coreesponding component */}
      {/* <Route path="" component={} />
      <Route path="" component={} />
      <Route path="" component={} />
      <Route path="" component={} /> */}
    </div>
  );
};

export default App;
