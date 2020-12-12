import React, {Component} from 'react';
import '../Users/user.css'

class Post extends Component {
    render() {
        const {userPost} = this.props;

        return (
            <div className={'user-post'}>
                <p className={'post-title'}>{userPost.id}. {userPost.title}</p>
                <p className={'post-body'}>{userPost.body}</p>
            </div>
        );
    }
}

export default Post;