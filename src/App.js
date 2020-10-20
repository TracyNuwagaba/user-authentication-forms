import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/Footer';
import Home from './components/pages/homepage/Home'
import About from './components/pages/aboutUs/About'

function App() {
  // const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
