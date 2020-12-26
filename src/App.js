import React, { Component } from 'react';
import Home from "./pages/Home/Home"
import Product from "./pages/TestAPI/Product"
import NotFound from './pages/NotFound/NotFound'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import './../src/App.css'
import Routes from './routes'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import index from './components/Service/OneButton/OneButton';

class App extends Component { 
  render() {
    return (
      <Router>
        {this.mapContentsRoutes(Routes)}
      </Router>
    );
  }

  mapContentsRoutes = (routes) =>{
    var results = null;

    if(Routes.length > 0){
      results = Routes.map((route,index) => {
        return(
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
    }

    return <Switch>{results}</Switch>
  }
}

export default App;
