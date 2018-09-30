import React, { Component } from 'react'
//import {Card, CardHeader, CardImage, Button, CardContent, Media, Icon, withHelperModifiers, Image, MediaContent, Title, Subtitle, Content} from 'bloomer'
import { Link } from "react-router-dom"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import APIManager from "../../Module/APIManager";


import "./Recipe.css"






export default class RecipeCard extends Component {


    constructor() {
        super();

        this.state = {
            rating: 1
        };
    }
    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }


    state = {
        showRecipeDetails: false,



    }
    showRecipeDetails = () => {
        this.setState({ showRecipeDetails: true })



    }


    render() {

        return (
            <React.Fragment>
                {/* <div className="row"> */}
                {/* <Card > */}
                <div className="recipeCard-body">
                    {/* <div className="recipe-card"> */}
                    <br />
                    {/* <div class="container"> */}
                    <Link className="rec-link" to={`/recipes/${this.props.recipe.id}`}>
                        {this.props.recipe.title}
                        <img top width="30%" src={this.props.recipe.image} className="recipe--image" />

                    </Link>
                    <a href="#"
                        onClick={() => {
                            if (window.confirm('Are you sure you want to delete this item?'))
                                this.props.deleteRecipe(this.props.recipe.id)
                                    .then(() => this.props.history.push("/recipes"))
                        }}
                        className="card-delete"></a>



                    <a className="fav-rec" href="#" onClick={() => this.props.addToFav((this.props.recipe.id), (this.props.userId))}></a>






                    {/* </div> */}
                    {/* </div> */}
                </div>
                {/* </Card> */}
                {/* </div> */}
            </React.Fragment>


        )
    }

}