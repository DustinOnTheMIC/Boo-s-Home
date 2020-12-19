import Home from "./pages/Home/Home"
import Product from "./pages/TestAPI/Product"
import React, { Component } from 'react';
import NotFound from './components/NotFound/NotFound'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import PageTest from './pages/PageTest/Test'
import './../src/App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Product" component={Product}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
