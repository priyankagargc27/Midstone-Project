import React, { Component } from "react"
import StarRatingComponent from 'react-star-rating-component';
import {Button} from 'reactstrap';
import APIManager from "../../Module/APIManager";
import AddReview from "../Review/AddReview"
import Review from "../Review/Review"
export default class RecipeDetail extends Component {

    constructor() {
        super();

        this.state = {
            rating: 0,
            review:""
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
       
                let id =  parseInt(this.props.match.params.recipeId)
                console.log(id)
        let body = {rating: nextValue}  //sets body to updated rating
        APIManager.rating(id, body)
        .then(() => {r=>r.json()
           console.log("rating added")
        })        
    
    }
    addReview = review => APIManager.post("reviews", review)
    .then(() => APIManager.getAllData("reviews"))
    .then(reviews => this.setState({
        reviews: reviews
        

    }))

    
    
    
    render() {
        // const { goBack } = this.props.navigation;
        const { rating } = this.state;
        const recipe = this.props.recipes.find(r => r.id === parseInt(this.props.match.params.recipeId)) || {}
        console.log(recipe)
        return (
            <section className="recipe">
                <div key={recipe.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img top width="30%" src={recipe.image} className="recipe-image" />
                            <br />
                            {recipe.title}
                        </h4>
                        <ul className="ingredientList">

                            {
                                recipe.ingredients.split("•").map(ingredient =>{
                                    return  <li key={ingredient} className="recipe-ingredients">
                                        {ingredient}
                                    </li>

                                })
                            }


                        </ul>
                        <p className="card-direction">{recipe.direction}</p>
                            <a href="#"
                                onClick={() => this.props.deleteRecipe(recipe.id)
                                    .then(() => this.props.history.push("/recipes"))}
                                className="card-link">Delete</a>
                        <div>
                            <h5>Recipe Rating: {rating}</h5>
                            <StarRatingComponent
                                name="rate1"
                                starCount={5}
                                value={rating}
                                onStarClick={this.onStarClick.bind(this)}
                            />
                        </div>
                           
                        

                            <AddReview/>
                            <section className="reviews">
                    {
                        this.props.reviews.map(review =>
                            <div key={review.id} className="card">
                                <div className="card-body">
                                    <p className="card-title" className="review-name">
                                        {review.review}
                                    </p>
                                    <br/>
                                    
                                    <time>Sent on:{review.time}</time>
                                    <h5>By:{review.userName}</h5>


                        
                                </div>
                            </div>
                        )
                    }
                </section>
                <div className="reviewButton">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push("/reviews/new")
                        }
                        }>Create New Review
                </button>
                </div>
                            

                    </div>
                </div>
            </section>
        )
    }
}



