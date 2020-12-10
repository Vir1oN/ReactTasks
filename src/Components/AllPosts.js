import React, {Component} from 'react';
import PostService from "../Services/PostService";
import Post from "./Post";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import AsyncPost from "./AsyncPost";

class AllPosts extends Component {
    state = {posts: []}
    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.getAllPosts();
        this.setState({posts})
    }

    render() {
        let {posts} = this.state;
        const {match: {url: currentUrl}} = this.props;

        return (
            <div>
                <hr/>
                    <Switch>
                        <Route path={currentUrl + '/:id'} render={(props) => {
                            const {id} = props.match.params;
                            return <AsyncPost id = {id} key = {id}/>
                        }}/>
                    </Switch>
                <hr/>
                {posts.map(value => <Post item = {value} key = {value.id} />)}

            </div>
        );
    }
}

export default withRouter(AllPosts);