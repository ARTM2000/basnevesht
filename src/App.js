import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import StyleSheet from "./App.module.css";
import Dashboard from "./Containers/Dashboard/Dashboard";
import Layout from "./Components/Layout/Layout";

const App = () => {
  return (
    <div className="App">
      <Layout>
        {/* <Dashboard /> */}
        <Redirect from="/" to="/dashboard" />
        <Route path="/dashboard" render={() => <Dashboard />} />
      </Layout>
      <div className={StyleSheet.Sign}>
        <p>Code by Alireza Tanoomandian</p>
      </div>
    </div>
  );
};

export default App;
