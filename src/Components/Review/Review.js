import React, { Component } from 'react'
import APIManager from "../../Module/APIManager";
import "./Review.css"

//import { Link } from "react-router-dom"
//import "./Message.css"

export default class Review extends Component {

    

    render() {
        return (
            <React.Fragment>
                <h2> Recent Comments</h2>
                {/* <section className="sec-reviews"> */}
                
                    {
                        this.props.reviews.map(review =>
                            <div key={review.id} className="card">
                                <div className="card-body">
                                    <h5 className="review-title">
                                        {review.eview}
                                    </h5>
                                    
                                    <time>Sent on:{review.time}</time>
                                    <p>{review.userName}</p>


                                  
                                </div>
                            </div>
                        )
                    }
                {/* </section> */}
                
                {/* <div className="reviewButton">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push("/reviews/new")
                        }
                        }>Create New Review
                </button>
                </div> */}
            </React.Fragment>
        )
    }
}