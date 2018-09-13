import React, { Component } from "react"
import StarRatingComponent from 'react-star-rating-component';

export default class RecipeDetail extends Component {
     
    constructor() {
        super();
        
        this.state = {
            rating: 1
        };
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }
    render() {
        const { rating } = this.state;
        const recipe = this.props.recipes.find(a => a.id === parseInt(this.props.match.params.recipeId)) || {}

        return (
            <section className="recipe">
                <div key={recipe.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img top width="30%" src={recipe.image} className="recipe-image" />
                            {recipe.title}
                        </h4>
                        <ul className="ingredientList">
                                            {
                                               this.props.recipe.ingredients.split("•").map(ingredient =>
                                                    <li className="card-title" className="recipe-ingredients">
                                                        {ingredient}
                                                    </li>

                                                )
                                            }

                                        </ul>
                        <p className="card-title">{recipe.direction}</p>
                        <div>
                                    <h5>Rating from User: {rating}</h5>
                                    <StarRatingComponent
                                        name="rate1"
                                        starCount={10}
                                        value={rating}
                                        onStarClick={this.onStarClick.bind(this)}
                                    />
                                </div> 
                       
                        
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