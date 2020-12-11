import React, {Component} from 'react';
import './user.css'
class User extends Component {
    render() {
        const {item, onDetails} = this.props;
        return (
            <div className={'user'}>
                <div className={'shortinfo'}>
                    {item.id}. {item.name} <span className={'aka'}>aka</span> {item.username}
                </div>
                <div className={"details-buttons"}>
                    <div className={'details'}><button className={'details-btn'}
                                                       onClick={() => onDetails(item.id)}>Details</button></div>
                    <div className={'post'}> <button className={'post-btn'} >Posts</button></div>
                </div>



            </div>
        );
    }
}

export default User;