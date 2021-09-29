import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './pages/about';
import Home from './pages/home';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
            <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
