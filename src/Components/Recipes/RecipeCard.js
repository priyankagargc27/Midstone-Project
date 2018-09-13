import React, {Component} from 'react'
//import {Card, CardHeader, CardImage, Button, CardContent, Media, Icon, withHelperModifiers, Image, MediaContent, Title, Subtitle, Content} from 'bloomer'
import { Link } from "react-router-dom"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';





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
        this.setState({showRecipeDetails: true})
        


    }
    
    render(){
        
        return (
            <React.Fragment>
                <Card>
            <div className="recipe-card">
            <img top width="30%" src={this.props.recipe.image} className="recipe--image" />
            <br/>
            {/* <a href="#"
                            onClick={this.showRecipeDetails}
                                            
                            className="card-link">{this.props.recipe.title}</a> */}
                            {/* <Link className="nav-link" to={`/recipes/${recipe.id}`}>Details</Link> */}

     {
                       
                        <Link className="nav-link" to={`/recipes/${this.props.recipe.id}`}>{this.props.recipe.title}</Link>
                        
                /* <br/>
                <ul>
                                            {
                                                this.props.recipe.ingredients.split("•").map(ingredient =>
                                                    <li className="card-title" className="recipe-name">
                                                        {ingredient}
                                                    </li>

                                                )
                                            }

                                        </ul>
               <p> {this.props.recipe.direction}</p>
               <div>
                                    <h5>Rating from User: {rating}</h5>
                                    <StarRatingComponent
                                        name="rate1"
                                        starCount={10}
                                        value={rating}
                                        onStarClick={this.onStarClick.bind(this)}
                                    />
                                </div> */}
               
            
                </div>
                </Card>
                </React.Fragment>


        )
        }

    }