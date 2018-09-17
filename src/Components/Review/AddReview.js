import React, { Component }  from 'react'
import APIManager from "../../Module/APIManager";

export default class AddReview extends Component {

    state= {
        review: "",
        time:"",
     userId: JSON.parse(sessionStorage.getItem("userInfo")).userId
    
    }

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
        const review = {
            review:this.state.review,
           time: new Date().toLocaleString()
           //userId: this.props.users.find(u => u.name === this.state.user).id
           //time:Date.now()
        
        
           }
          
  
           console.log("hello")
           this.props.addReview(review, "reviews").then(() => this.props.history.push("/reviews"))
}
   

render() {
    return (
       <React.Fragment>
            <form  onSubmit={this.MakeNewReview} >
           <div className="messageContainer">
             <h5>Comments & Reviews</h5>
          <form className="eventForm">
             <div className="form-group">
                <label htmlFor="Review">Add a Review</label>
                <input type="text" required="true"
                   className="form-control"
                   onChange={this.handleFieldChange}
                   id="review"

                   
                   placeholder="Write a review" />
                    </div>
                    <button type="submit" onClick={this.MakeNewReview} className="btn btn-primary">Submit</button>

                    </form>
                    </div>
                    </form>
                    </React.Fragment>
                    
                    )}
                }