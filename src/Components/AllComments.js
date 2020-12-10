import React, {Component} from 'react';
import CommentsService from "../Services/CommentsService";
import Comment from "./Comment";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import AsyncComment from "./AsyncComment";

class AllComments extends Component {
    state = {comments: []}
    commentService = new CommentsService();

    async componentDidMount() {
        let comments = await this.commentService.getAllComments();
        this.setState({comments})
    }

    render() {
        let {comments} = this.state;
        const {match: {url: currentUrl}} = this.props;

        return (
            <div>
                <hr/>
                <Switch>
                    <Route path={currentUrl + '/:id'} render={(props) => {
                        const {id} = props.match.params;
                        return <AsyncComment id = {id} key = {id}/>
                    }}/>
                </Switch>
                <hr/>
                {comments.map(value => <Comment item = {value} key = {value.id} />)}
            </div>
        );
    }
}

export default withRouter(AllComments);