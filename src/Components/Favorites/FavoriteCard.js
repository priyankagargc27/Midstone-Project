import React from 'react'
import { Card, CardHeader, CardImage, CardContent, Media, Icon, Button, Image, MediaContent, Title, Subtitle, Content } from 'bloomer'
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'
import APIManager from "../../Module/APIManager";


export default class FavoriteCard extends React.Component {
    state = {
        rating: 0
    }
    //This handles the click on the star rating
    onStarClick = (nextValue, prevValue, name) => {
        this.setState({
            rating: nextValue
        });
        let body = { rating: nextValue }  //sets body to updated rating
        APIManager.postrating(this.props.favorite.id, body) //patches rating onto favorite recipe
    }

    componentDidMount() {
        if (this.props.favorite.rating !== null) {
            console.log("rating", this.props.favorite.rating)
            this.setState({
                rating: this.props.favorite.rating
            })
        }
    }
    //prints the individual favorite cards
    render() {
        return (
            <React.Fragment>
                <Card className="FavCard" isDisplay="inline-flex">

                    <CardImage>
                        <img className="recipeImage" top width="30%" src={this.props.favorite.recipe.image} />
                    </CardImage>

                    <CardContent>
                        <Media>
                            <MediaContent>
                                <Title isSize={6}>{this.props.favorite.recipe.title}</Title>
                                <h3>Ingredients</h3>
                                <ul className="ingredientList">

                                    {
                                        this.props.favorite.recipe.ingredients.split("•").map(ingredient => {
                                            return <li key={ingredient} className="recipe-ingredients">
                                                {ingredient}
                                            </li>

                                        })
                                    }


                                </ul>
                            </MediaContent>
                        </Media>
                        <p className="directions">
                            {this.props.favorite.recipe.direction}
                            <br />
                        </p>
                        <StarRatingComponent
                            name="rate1"
                            starCount={5}
                            value={this.state.rating}
                            onStarClick={this.onStarClick}
                            starColor="#ffb400"
                        />
                    </CardContent>
                    <Button isColor="danger" onClick={() => this.props.deleteFromFav(this.props.favorite.id)}>Delete</Button>
                </Card>
                {/* <Reviews toggleReview={this.props.toggleReview} handleReview={this.props.handleReview} favoriteReview={this.props.favorite.review}/>
            <AddReview toggleReview={this.props.toggleReview}visible={this.props.visible} favoriteReview={this.props.favorite.review} favoriteId={this.props.favorite.id} handleReview={this.props.handleReview}/> */}
            </React.Fragment>
        )
    }
}