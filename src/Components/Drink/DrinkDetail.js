import React, { Component } from "react"
import StarRatingComponent from 'react-star-rating-component';
import {Button} from 'reactstrap';
import APIManager from "../../Module/APIManager";
import AddReview from "../Review/AddReview"
import "./Drink.css"

import Review from "../Review/Review"
export default class DrinkDetail extends Component {

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
        //APIHandler.rateRecipe(this.props.favorite.id, body) //patches rating onto favorite recipe

        APIManager.postrating(id, body)
        .then(() => {r=>r.json()
            console.log("rating added")
        })        
        
    }
   

    
    
    
    render() {
        // const { goBack } = this.props.navigation;
        const { rating } = this.state;
        const drink = this.props.drinks.find(r => r.id === parseInt(this.props.match.params.drinkId)) || {}
        console.log(drink)
        return (
            <section className="drink-detail">
                <div key={drink.id} className="card">
                    <div className="card-detail">
                        <h4 className="card-title">
                            <img top width="30%" src={drink.image} className="drink-image" />
                            <br />
                            {drink.title}
                        </h4>
                        <ul className="ingredientList">

                            {
                                drink.ingredients.split("•").map(ingredient =>{
                                    return  <li key={ingredient} className="drink-ingredients">
                                        {ingredient}
                                    </li>

                                })
                            }


                        </ul>
                        <p className="card-direction">{drink.direction}</p>
                            <a href="#"
                                onClick={() => this.props.deleteDrink(drink.id)
                                    .then(() => this.props.history.push("/drinks"))}
                                className="card-link">Delete</a>
                        <div>
                            <h5>Drink Rating: {rating}</h5>
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



