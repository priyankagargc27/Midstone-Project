import React, { Component } from 'react'

import APIManager from "../Module/APIManager"
import "./Register.css"

export default class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
//on input change update state with field text
    handleFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }
//on click save users registration data to database
    handleRegister = e => {
        e.preventDefault()

        let registerData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        APIManager.post("users", registerData)
        .then(() => {
            this.props.history.push('/Login')
        })
    }
    
    render() {
        return (
            <div className="forms">
            <div className="registerForm">
            <form onSubmit={this.handleRegister}>
                <h2> Register Here!! </h2>
                    <label>Name</label>
                <input 
                id="name"
                type="text" 
                placeholder='Enter Name' 
                onChange = {this.handleFieldChange}/>
                 <label>Email</label>
                 <input 
                 id="email"
                 type="email" 
                 placeholder="Email Address" 
                 onChange = {this.handleFieldChange} />
                 <label>Password</label>
                 <input 
                 id="password"
                 type="password" 
                 placeholder="Password" 
                 onChange = {this.handleFieldChange}/>
                 <button isColor='primary' type="submit">Submit</button>
            </form>
            </div>
            </div>
        )
    }
}