import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
//import UserList from './UserList'


export default class ApplicationViews extends Component {

    // isAuthenticated = () => 
    // localStorage.getItem("userInfo") !== null ||
    // sessionStorage.getItem("userInfo") !== null

    render() {
        return (
            <React.Fragment>
                 <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
                {/* <Route exact path='/UserList' render={props => {
                    if (this.isAuthenticated()) {
                        return <UserList/>
                    } else {
                        return <Login/>
                    }
                }}/> */}

                </React.Fragment>
        )
    }
}