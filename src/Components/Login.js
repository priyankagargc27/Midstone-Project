import React, { Component } from 'react'
import APIManager from "../Module/APIManager"
//import 'bulma/css/bulma.css';

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        isChecked:false
    };
//gets the value of input fields
    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange);
    }
//on button click checks database to see if user exists, then saves user information in local or session storage
    handleLogin = () => {
        console.log(this.state.email,this.state.password)
        APIManager.getUser(`users?email=${this.state.email}&password=${this.state.password}`)
      .then(user => {
        // let loginUser = users.find(u => u.inputEmail === email && u.inputPassword === password)
        if (user.length > 0 && this.state.password === user[0].password) {
            this.setState({ userId: user[0].id });
            //const checkbox = document.getElementById("checkbox");
            console.log("user",user);

          let loginObj = JSON.stringify({
              email: this.state.email,
              password: this.state.password,
              userId: this.state.userId
            })
            console.log(loginObj)
            if (this.state.isChecked === true) {
                
                console.log(loginObj)
                localStorage.setItem("userInfo", loginObj);
                
            } else {
                console.log("hello")
                sessionStorage.setItem("userInfo", loginObj);
                
            }
            } else {
              alert(
                "Incorrect User Name or Password."
              );
            }
      })
       
        }
      render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h2> Please Login </h2>
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
                 <label> Remember Me</label>
                 <input onClick={() => (this.setState({ isChecked: true }))} type="checkbox" id="myCheck" />
                 {/* <input type="checkbox" id="checkbox" /> */}
                 <button  
                 type="submit">
                Submit
                </button>
            </form>
        )
    }
    }