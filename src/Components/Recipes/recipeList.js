

import React, { Component } from 'react'
import RecipeCard from "./RecipeCard"
import APIManager from "../../Module/APIManager";
import { Button } from 'bloomer'

import { Link } from "react-router-dom"
import StarRatingComponent from 'react-star-rating-component';

import "./Recipe.css"
//import "./Article.css"

export default class RecipeList extends Component {
    constructor() {
        super();
        this.state = {
            searchItem: "",
            searchMode: false,
            searchRecipes: null
        }
    }

    handleSearchField = (e) => {
        const stateToChange = this.state
        stateToChange[e.target.id] = e.target.value
        console.log(e.target.id, e.target.value, stateToChange)
        this.setState({
            stateToChange
        })
    }
    removeModal = () => {
        this.setState({
            searchMode: false
        })
    }

    searchRecipes = (evt) => {
        evt.preventDefault()
        const SearchItem = this.state.searchItem

        if (SearchItem !== "") {
            console.log("searchItem", SearchItem)
            console.log(`http://localhost:5002/recipes?q=${SearchItem}`)
            fetch(`http://localhost:5002/recipes?q=${SearchItem}`)
                .then(a => a.json())
                .then((recipes) => {
                    console.log(recipes)
                    this.setState({
                        searchRecipes: recipes,
                        searchMode:true
                    })
                    console.log("search full")
                })
        } else {

            console.log("search empty")

        }
    }
    //pulls recipes from database and updates state




    render() {


        return (
            <React.Fragment>
                <div className="RecipeList">
                    <form className="search-form" >
                        <label className="ishidden" htmlFor="search">Find Recipes</label>
                        <input type="search"
                            name="search"
                            id="searchItem"
                            onChange={this.handleSearchField}
                            placeholder="Search for recipe" />
                        <Button isColor="info" type="submit" id="submit" className="search-button" onClick={this.searchRecipes}>
                            Submit</Button>


                    </form>
                    {this.state.searchMode === true &&

                        <div>
                           
                            {
                                this.state.searchRecipes.map(recipe =>
                                    <RecipeCard key={recipe.id}
                                        recipe={recipe} {...this.props} />
                                )
                            }
                        </div>

                    }
                    {this.state.searchMode === false &&
                        <div>
                            
                            {
                                this.props.recipes.map(recipe =>
                                    <RecipeCard key={recipe.id}
                                        recipe={recipe} {...this.props} />
                                )
                            }
                        </div>
                    }


                    <div className="recipeButton">
                        <button type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                this.props.history.push("/recipes/new")
                            }
                            }>Create New Recipe</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}