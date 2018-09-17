import React, { Component } from 'react'
//import { Link } from "react-router-dom"
//import "./Message.css"

export default class Review extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="reviews">
                    {
                        this.props.reviews.map(review =>
                            <div key={review.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title" className="Message-name">
                                        {review.Review}
                                    </h5>
                                    <time>Sent on:{review.time}</time>
                                    <p>{review.userName}</p>


                                    {/* <h6>

                                        <button type="button" className="btn btn-primary"
                                            onClick={() => this.props.deleteMessage(message.id, "messages")}>Delete</button>

                                        <button type="button" className="btn btn-primary"
                                            onClick={() => this.props.history.push(`/messages/Edit/${message.id}`)}>Edit</button>
                                    </h6> */}
                                </div>
                            </div>
                        )
                    }
                </section>
                <p></p>
                <div className="reviewButton">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push("/reviews/new")
                        }
                        }>Create New Review
                </button>
                </div>
            </React.Fragment>
        )
    }
}