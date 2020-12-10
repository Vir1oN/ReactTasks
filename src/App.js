import React, {Component} from 'react';
import AllPosts from "./Components/AllPosts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllComments from "./Components/AllComments";

class App extends Component {


    render() {
        return (
            <Router>
                <div>
                    <Link to={'/posts'}>Posts</Link>
                    <br/>
                    <Link to={'/comments'}>Comments</Link>
                </div>

                <Switch>
                    <Route path={'/posts'} render={() => <AllPosts/>}/>
                    <Route path={'/comments'} render={() => <AllComments/>}/>
                </Switch>
            </Router>

        );
    }
}

export default App;