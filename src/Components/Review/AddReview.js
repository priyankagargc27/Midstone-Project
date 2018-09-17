import React, { Component }  from 'react'
//import APIManager from './Module/APIManager'

export default class AddReview extends Component {

    state= {
        Review: "",
        time:"",
     userId: JSON.parse(sessionStorage.getItem("userInfo")).userId
    
    }

    handleFieldChange = evt => {
        console.log("evt handleFieldChange", evt);
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
     }
    
     MakeNewReview = evt => {
        evt.preventDefault()
        const review = {
            Review:this.state.Review,
           time: new Date().toLocaleString(),
           //userId: this.props.users.find(u => u.name === this.state.user).id
           //time:Date.now()
        
        
           }
          
   
    //on event, sets body equal to the input field text and passes the body and id in as parameters
  
    this.props.addReview(review, "reviews").then(() => this.props.history.push("/reviews"))
}
   

render() {
    return (
       <React.Fragment>
           <div className="messageContainer">
             <h5>Comments & Reviews</h5>
          <form className="eventForm">
             <div className="form-group">
                <label htmlFor="Review">Add a Review</label>
                <input type="text" required="true"
                   className="form-control"
                   onChange={this.handleFieldChange}
                   id="reviewinput"

                   
                   placeholder="Write a review" />
                    </div>
                    <button type="submit" onClick={this.MakeNewReview} className="btn btn-primary">Submit</button>

                    </form>
                    </div>
                    </React.Fragment>
                    
                    
                    
                    )
                    }

                    

}