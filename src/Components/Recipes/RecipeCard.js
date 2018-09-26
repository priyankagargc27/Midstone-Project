import React, { Component } from 'react'
//import {Card, CardHeader, CardImage, Button, CardContent, Media, Icon, withHelperModifiers, Image, MediaContent, Title, Subtitle, Content} from 'bloomer'
import { Link } from "react-router-dom"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
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
                <div  className="recipeCard-body">
                    {/* <div className="recipe-card"> */}
                        <br />
                        {/* <div class="container"> */}
                            <Link className="rec-link" to={`/recipes/${this.props.recipe.id}`}>
                        <img top width="30%" src={this.props.recipe.image} className="recipe--image" />
                            
                            {this.props.recipe.title}</Link>
                            <Button  onClick={() => this.props.addToFav((this.props.recipe.id),(this.props.userId))}>Add to Favorite</Button>







                        {/* </div> */}
                    {/* </div> */}
                </div>
                {/* </Card> */}
                {/* </div> */}
            </React.Fragment>


        )
    }

}