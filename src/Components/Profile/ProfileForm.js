import React, { Component } from "react"
//import "./Recipe.css"
//import APIManager from "./module/APIManager"


export default class ProfileForm extends Component {

    state={
        name : "",
    
        Image:"",
        statement:"",
        userId: JSON.parse(sessionStorage.getItem("userInfo")).userId

    }



    handleFieldChange = evt => {
        console.log("evt handleFieldChange", evt);
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
     }

     MakeNewProfile = evt => {
         evt.preventDefault()
         const profile = {
             name:this.state.name,
    
             Image:this.state.Image,
             statement:this.state.statement,
             userId: JSON.parse(sessionStorage.getItem("userInfo")).userId

            }
    
         
            this.props.addProfile(profile, "profile").then(() => this.props.history.push("/profiles"))

//          APIManager.post("articles", article)
// .then(() => APIManager.getAll("articles"))
// .then(articles => this.setState({
//     articles: articles

}

     render() {
        return (
           <React.Fragment>
               
               <div className="recipeContainer">
                 <h3>My Profile</h3>
              <form className="recipeForm">
                 <div className="form-group">
                    <label htmlFor="title">Name</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="name"
                       placeholder="Name" />
                 </div>
                 <div className="form-group">
                    <label htmlFor="Image">Image</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="Image" placeholder="Image" />
                 </div>
                 
                 <div className="form-group">
                    <label htmlFor="Statement">Statement</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="statement"  placeholder="Statement" />
                 </div>
                 {/* <div className="form-group">
                    <label htmlFor="direction">Direction</label>
                    <input type="text" required="true"
                       className="form-control"
                       onChange={this.handleFieldChange}
                       id="direction"  placeholder="Direction" />
                 </div> */}
                 {/* <div className="form-group">
                    <label htmlFor="employee">Assign to caretaker</label>
                    <select defaultValue="" name="employee" id="employee"
                       onChange={this.handleFieldChange}>
                       <option value="">Select an employee</option>
                       {
                          this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                       }
                    </select>
                 </div> */}
                 <button type="submit" onClick={this.MakeNewProfile} className="btn btn-primary">Submit</button>
              </form>
              </div>
           </React.Fragment>
        )
     }
  }