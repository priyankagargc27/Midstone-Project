

import React, { Component } from 'react'
import RecipeCard from "./RecipeCard"
import { Link } from "react-router-dom"
import StarRatingComponent from 'react-star-rating-component';

import "./Recipe.css"
//import "./Article.css"

export default class RecipeList extends Component {


    

    render() {
        

        return (
            <React.Fragment>
               
                    {
                        this.props.recipes.map(recipe =>
                            <RecipeCard key={recipe.id}
                            recipe={recipe}/>
                                         
                        )}
                        
                <div className="recipeButton">
                    <button type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            this.props.history.push("/recipes/new")
                        }
                        }>Create New Recipe
                </button>
                </div>
            </React.Fragment>
        )
    }
}