import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/pages/Navbar';

function App() {
  // const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      {/* <Route exact path="/" render={() => {
        return (
          isUserAuthenticated ? <Redirect to='/home' /> :
          <Redirect to='/signup' />
          )
        }} /> */}
        {/* <Route path="/" component={Home} /> */}
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
