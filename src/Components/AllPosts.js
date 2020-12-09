import React, {Component} from 'react';
import PostService from "../Services/PostService";
import Post from "./Post";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class AllPosts extends Component {
    state = {posts: []}
    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.getAllPosts();
        this.setState({posts})
    }

    render() {
        let {posts} = this.state;
        return (
            <div>
                <hr/>
                    <Switch>
                        <Route path={'/posts/:id'} render={(props) => {
                            return 'To be continued...'
                        }}/>
                    </Switch>
                <hr/>
                {posts.map(value => <Post item = {value} key = {value.id} />)}

            </div>
        );
    }
}

export default AllPosts;