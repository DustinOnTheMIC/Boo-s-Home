import React, { Component } from 'react';
import './../src/App.css'
import Routes from './routes'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

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
