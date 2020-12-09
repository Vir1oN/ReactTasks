import React, {Component} from 'react';
import PostService from "./Services/PostService";
import AllPosts from "./Components/AllPosts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {


    render() {
        return (
            <Router>
                <div>
                    <Link to={'/posts'}>Posts</Link>
                </div>

                <Switch>
                    <Route path={'/posts'} render={() => <AllPosts/>}/>
                </Switch>
            </Router>

        );
    }
}

export default App;