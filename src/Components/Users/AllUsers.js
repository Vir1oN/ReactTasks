import React, {Component} from 'react';
import UserService from "../../Services/UserService";
import User from "./User";
import './user.css'
import Post from "../Posts/Post";
import PostService from "../../Services/PostService";

class AllUsers extends Component {
    userService = new UserService();
    postService = new PostService();
    state = {users: [], chosenUser:{}, userPosts: []};

    displayDetails = async (id) => {
        let chosenUser = await this.userService.getUserById(id);
        this.setState({chosenUser});

        const detailsBlock = document.querySelector('.user-details');
        detailsBlock.style.display = 'block';
    }

    displayPosts = async (id) => {
        let userPosts = await this.postService.getPostsByUserId(id);
        this.setState({userPosts});

        const detailsBlock = document.querySelector('.user-posts');
        detailsBlock.style.display = 'flex';
    }

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        this.setState({users});
    }

    render() {
        const {users, chosenUser, userPosts} = this.state;

        return (
            <div>
                <h3>Users</h3>
                <div className={'users'}>
                    <div className={'all-users'}>
                        {users.map(user => <User item = {user} key = {user.id} onDetails = {this.displayDetails} onPost={this.displayPosts}/>)}
                    </div>

                    <div className={'user-details'}>
                        <h1>{chosenUser.name}</h1>
                        <p style={{margin: 0 + 'px'}}>{chosenUser.username}</p>
                        <hr/>
                        <p className={'details-par'}><span className={'bold'}>Phone: </span>{chosenUser.phone}</p>
                        <hr/>
                        <p className={'details-par'}><span className={'bold'}>E-mail: </span>{chosenUser.email}</p>
                        <hr/>
                        <p className={'details-par'}><span className={'bold'}>Website: </span>{chosenUser.website}</p>
                    </div>
                </div>

                <div className={'user-posts'}>
                    {userPosts.map((userPost) => <Post userPost = {userPost} key = {userPost.id}/>)}
                </div>
            </div>
        );
    }
}

export default AllUsers;