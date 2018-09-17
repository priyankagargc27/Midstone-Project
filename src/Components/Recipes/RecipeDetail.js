import React, { Component } from "react"
import StarRatingComponent from 'react-star-rating-component';
import {Button} from 'reactstrap';
import APIManager from "../../Module/APIManager";
import AddReview from "../Review/AddReview"
 //import Review from "../Review/Review"
export default class RecipeDetail extends Component {

    constructor() {
        super();

        this.state = {
            rating: 0
        };
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
        this.props.recipes.find(recipe => {
            if (recipe.recipeId === this.props.recipeId) {
                let id = recipe.id
                console.log(recipe.id)
               // let id = recipe.id
        let body = {rating: nextValue}  //sets body to updated rating
        APIManager.rating(id, body)
        .then(() => {
           console.log("rating added")
        })        
    }
    })
}
    
    
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
                             {/* <Review Review={this.props.review}/> */}
                             
                            {/* <div className="comments&reviews">
                            <h4> Comments & Reviews </h4>
                            </div>

                            <label for="comment">Post your comment :</label>
                            <textarea class="form-control" rows="4" id="comment" placeholder="Type your comment"></textarea>
                            <input type="hidden" name="recipe_id" id="recipe.id" value="16257"></input>
                            <button type="button" class="btn btn-primary pull-right" name="submit" id="submit" onclick={this.addComments}>
                            Post Comment</button>
                             */}
                            
                            
                            
                             {/* <Button onPress={() => goBack()} title="Go back from this HomeScreen" />
                        */}

                        {/* <a href="#"
                            onClick={() => this.props.deleteAnimal(animal.id)
                                            .then(() => this.props.history.push("/animals"))}
                            className="card-link">Delete</a>

                            <a href="#"
                            onClick={() =>  this.props.history.push(`/animals/Edit/${animal.id}`)}
                        
                                className="card-link">Edit</a> */}

                    </div>
                </div>
            </section>
        )
    }
}



