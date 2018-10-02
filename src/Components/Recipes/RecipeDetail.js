import React, { Component } from "react"
import StarRatingComponent from 'react-star-rating-component';
import {Button} from 'reactstrap';
import APIManager from "../../Module/APIManager";
import AddReview from "../Review/AddReview"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Recipe.css"



import Review from "../Review/Review"
export default class RecipeDetail extends Component {

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
       
        
        let id =  parseInt(this.props.match.params.recipeId)
        console.log(id)
        let body = {rating: nextValue}  //sets body to updated rating
        APIManager.postrating(id, body)
        .then(() => {r=>r.json()
            console.log("rating added")
            // const localRating = APIManager.getOneRecipe('rating')
        })        
        
    }

   

    
    
    
    render() {
        // const { goBack } = this.props.navigation;
        const { rating } = this.state;
        const recipe = this.props.recipes.find(r => r.id === parseInt(this.props.match.params.recipeId)) || {}
        console.log(recipe)
        return (
            <section className="recipe-detail">
                <div key={recipe.id} className="card">
                    <div className="card-detail">
                        <h4 className="card-title">
                        <h2 className="drink-title">  {recipe.title}</h2>
                        <div >
                            {/* <h2 className="rating"> Recipe Rating: {rating}</h2> */}
                            <StarRatingComponent
                            className="rating"
                                name="rate1"
                                starCount={5}
                                value={this.state.rating}
                                onStarClick={this.onStarClick.bind(this)}
                            />
                        </div>

                            <img top width="30%" src={recipe.image} className="recipe-image" />
                            <br />
                            {recipe.title}
                        </h4>
                        <h2 className="ingredients">Ingredients:</h2>

                        <ul className="ingredientList">

                            {
                                recipe.ingredients.split("•").map(ingredient =>{
                                    return  <li key={ingredient} className="recipe-ingredients">
                                        {ingredient}
                                    </li>

                                })
                            }


                        </ul>
                        <h2 className="direction"> Direction: </h2>

                        <p className="card-direction">{recipe.direction}</p>
                            
                           
                        

                            <AddReview addReview={this.props.addReview}/>
                            <h2 className="recentcomments"> Recent Comments </h2>
                            <section className="reviews">
                    {
                        this.props.reviews.map(review =>
                            <div key={review.id} className="card">
                               
                                    <p className="review-title" >
                                        {review.review}
                                    </p>

                                     <time>
                                     <FontAwesomeIcon icon="stroopwafel" />Posted on:{review.time}</time>
                                    <h6 className="review-name">By: {review.name}</h6>


                        
                                </div>
                        
                         ) }
                
                    
                
                </section>
                
                            

                    </div>
                </div>
            </section>
        )
    }
}



