import React from 'react'
import Profile from './Profile'
import APIManager from "../Module/APIManager"


export default class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        let newState = {};
        let localUser = JSON.parse(sessionStorage.getItem("userInfo"));
        newState.user = localUser;
        DataManager.getUserData("profiles", localUser.id)
        .then(profiles => {newState.profiles = profiles})
        .then(() => {
            this.setState(newState)
        })
    }




    render() {
        
        return (
            <React.Fragment>
                <div className="UserList">
                {
                    this.state.users.map(user => 
                    < Profile key={user.id} user={user} addToFriends={this.addToFriends}/>
                    )
                }
            </div>
            </React.Fragment>
        )
    }
}