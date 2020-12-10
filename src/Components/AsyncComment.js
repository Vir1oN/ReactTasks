import React, {Component} from 'react';
import Comment from "./Comment";
import CommentsService from "../Services/CommentsService";

class AsyncComment extends Component {
    state = {comment: null};
    commentsService = new CommentsService();

    async componentDidMount() {
        const {id} = this.props;
        let comment = await this.commentsService.getCommentById(id);
        this.setState({comment});
    }

    render() {
        const {comment} = this.state;

        return (
            <div>
                {comment && <Comment item = {comment} key = {comment.id}/>}
            </div>
        );
    }
}

export default AsyncComment;