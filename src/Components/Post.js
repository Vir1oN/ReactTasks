import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class Post extends Component {
    render() {
        let {item, match: {url: currentUrl}} = this.props;
        return (
            <div>
                <p>User#{item.userId}: {item.title} <Link to={currentUrl + `/${item.id}`}> Pin </Link></p>
                <p>{item.body}</p>
                <hr/>
            </div>
        );
    }
}

export default withRouter(Post);