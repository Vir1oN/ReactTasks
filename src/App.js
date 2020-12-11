import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css'
import './Components/Users/AllUsers'
import AllUsers from "./Components/Users/AllUsers";
class App extends Component {
    render() {
        return (
            <Router>
              <header>
                <div className={'link'}><Link to={'/'}>Home </Link></div>
                <div className={'link'}><Link to={'/users'}>Users </Link></div>
              </header>

              <div className={'body'}>
                <Switch>
                  <Route path={'/users'} render={() => <AllUsers/>}/>
                  <Route path={'/'}/>
                </Switch>
              </div>
            </Router>
        );
    }
}

export default App;