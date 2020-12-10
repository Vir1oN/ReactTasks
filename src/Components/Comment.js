import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class Comment extends Component {
    render() {
        let {item, match: {url: currentUrl}} = this.props;
        return (
            <div>
                <p>Post#{item.postId}: {item.name}-{item.email} <Link to={currentUrl + `/${item.id}`}> Pin </Link></p>
                <p>{item.body}</p>
                <hr/>
            </div>
        );
    }
}

export default withRouter(Comment);