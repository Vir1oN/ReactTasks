import React, {Component} from 'react';
import UserService from "../../Services/UserService";
import User from "./User";
import './user.css'

class AllUsers extends Component {
    userService = new UserService();
    state = {users: [], chosenUser:{}};

    displayDetails = async (id) => {
        const detailsBlock = document.querySelector('.user-details');
        detailsBlock.style.display = 'block';

        let chosenUser = await this.userService.getUserById(id);
        this.setState({chosenUser});
    }

    async componentDidMount() {
        let users = await this.userService.getAllUsers();
        console.log(users);
        this.setState({users});
    }

    render() {
        const {users, chosenUser} = this.state;

        return (
            <div>
                <h3>Users</h3>
                <div className={'users'}>
                    <div className={'all-users'}>
                        {users.map(user => <User item = {user} key = {user.id} onDetails = {this.displayDetails}/>)}
                    </div>

                    <div className={'user-details'}>
                        <h1>{chosenUser.name}</h1>
                        <p style={{margin: 0 + 'px'}}>{chosenUser.username}</p>
                        <hr/>
                        <p className={'details-par'}><span className={'bold'}>Phone:</span>{chosenUser.phone}</p>
                        <hr/>
                        <p className={'details-par'}><span className={'bold'}>E-mail:</span>{chosenUser.email}</p>
                        <hr/>
                        <p className={'details-par'}><span className={'bold'}>Website:</span>{chosenUser.website}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AllUsers;