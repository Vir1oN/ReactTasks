import React, {Component} from 'react';
import Post from "./Post";
import PostService from "../Services/PostService";

class AsyncPost extends Component {
    state = {post: null};
    postService = new PostService();

    async componentDidMount() {
        const {id} = this.props;
        let post = await this.postService.getPostById(id);
        this.setState({post});
    }

    render() {
        const {post} = this.state;

        return (
            <div>
                {post && <Post item = {post} key = {post.id}/>}
            </div>
        );
    }
}

export default AsyncPost;