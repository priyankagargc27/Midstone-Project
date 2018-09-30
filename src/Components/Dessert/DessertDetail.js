import React, { Component } from "react"
import StarRatingComponent from 'react-star-rating-component';
import {Button} from 'reactstrap';
import APIManager from "../../Module/APIManager";
import AddReview from "../Review/AddReview"
import "./Dessert.css"

import Review from "../Review/Review"
export default class DessertDetail extends Component {

    constructor() {
        super();

        this.state = {
            rating: 0,
            review:"",
            
            userName: ""
        };
    }
    
    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
        
        let id =  parseInt(this.props.match.params.dessertId)
        console.log(id)
        let body = {rating: nextValue}  //sets body to updated rating
        APIManager.postrating(id, body)
        .then(() => {r=>r.json()
            console.log("rating added")
        })        
        
    }
   

    
    
    
    render() {
        // const { goBack } = this.props.navigation;
        const { rating } = this.state;
        const dessert = this.props.desserts.find(r => r.id === parseInt(this.props.match.params.dessertId)) || {}
        console.log(dessert)
        return (
            <section className="dessert-detail">
                <div key={dessert.id} className="card">
                    <div className="card-detail">
                        <h4 className="card-title">
                        <h2 className="drink-title">  {dessert.title}</h2>

                            <img top width="30%" src={dessert.image} className="dessert-image" />
                            <br />
                            {dessert.title}
                        </h4>
                        <h2 className="direction"> Direction: </h2>

                        <ul className="ingredientList">

                            {
                                dessert.ingredients.split("•").map(ingredient =>{
                                    return  <li key={ingredient} className="dessert-ingredients">
                                        {ingredient}
                                    </li>

                                })
                            }


                        </ul>
                        <h2 className="direction"> Direction: </h2>

                        <p className="card-direction">{dessert.direction}</p>
                            <a href="#"
                                onClick={() => this.props.deleteDessert(dessert.id)
                                    .then(() => this.props.history.push("/desserts"))}
                                className="card-link">Delete</a>
                        <div>
                            <h5>Dessert Rating: {rating}</h5>
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={rating}
                                onStarClick={this.onStarClick.bind(this)}
                            />
                        </div>
                           
                        

                            <AddReview addReview={this.props.addReview}/>
                            <section className="reviews">
                    {
                        this.props.reviews.map(review =>
                            //  let currentUser = this.props.users.find(u => u.id === review.userId);
                            
                            <div key={review.id} className="card">
                               
                                    <p className="card-title" className="review-name">
                                        {review.review}
                                    </p>

                                     <time>
                                     <i class="fa fa-calendar" aria-hidden="true"></i>Posted on:{review.time}</time>
                                    <h6>By: {review.name}</h6>


                        
                                </div>
                        
                         ) }
                
                    
                
                </section>
                
                            

                    </div>
                </div>
            </section>
        )
    }
}



