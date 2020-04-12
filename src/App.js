import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './App.css';
import Dashboard from './Containers/Dashboard/Dashboard';
import Layout from './Components/Layout/Layout';

const App = () => {
  return (
    <div className="App">
      <Layout>
        {/* <Dashboard /> */}
        <Redirect from='/' to='/dashboard' />
        <Route path="/dashboard" render={() => <Dashboard />} />
      </Layout>
    </div>
  );
}

export default App;
