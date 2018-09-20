import React, { Component }  from 'react'
import {Redirect} from 'react-router-dom'
//import APIManager from "../../Module/APIManager";

export default class AddReview extends Component {

    state= {
        review: "",
        time:"",
        name:"",
        userId: JSON.parse(sessionStorage.getItem("userInfo")).userId,
        //userId: JSON.parse(localStorage.getItem("userInfo")).userId,

        // recipeId: parseInt(this.props.match.params.recipe.recipeId)
        
        
        
        
    }
    user = () => JSON.parse(sessionStorage.getItem("userInfo"))
    
    
    handleFieldChange = evt => {
        console.log("evt handleFieldChange", evt);
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    
    
    //  addReview = review => APIManager.post("reviews", review)
    //  .then(() => APIManager.getAllData("reviews"))
    //  .then(reviews => this.setState({
        //      reviews: reviews
        
        
        //  }))
        
        
        MakeNewReview = evt => {
            evt.preventDefault()
            console.log("user name",this.user.name)
            const review = {
                review:this.state.review,
                time: new Date().toLocaleString(),
                name: JSON.parse(sessionStorage.getItem("userInfo")).name,
                userId: JSON.parse(sessionStorage.getItem("userInfo")).userId,
               // userId: JSON.parse(localStorage.getItem("userInfo")).userId,

                //recipeId: parseInt(this.props.match.params.recipeId,10)
                
                

        
           }
           this.setState({
            name: this.user().name,
            review: ""
            })
          
  
           console.log("hello")
           this.props.addReview(review, "reviews").then(() => <Redirect to="/reviews"/>)
}
   

render() {
    return (
       <React.Fragment>
            <form  onSubmit={this.MakeNewReview} >
           <div className="reviewContainer">
             <h5>Comments & Reviews</h5>
          <form className="reviewForm">
             <div className="form-group">
                <label htmlFor="review">Add a Review</label>
                <input type="text" required="true"
                   className="form-control"
                   onChange={this.handleFieldChange}
                   id="review"

                   value={this.state.review}
                   placeholder="Write a review" />
                    </div>
                    <button type="submit" onClick={this.MakeNewReview} className="btn btn-primary">Submit</button>

                    </form>
                    </div>
                    </form>
                    </React.Fragment>
                    
                    )}
                }