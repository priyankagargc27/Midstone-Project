import React, { Component } from 'react'
//import {Card, CardHeader, CardImage, Button, CardContent, Media, Icon, withHelperModifiers, Image, MediaContent, Title, Subtitle, Content} from 'bloomer'
import { Link } from "react-router-dom"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./Drink.css"






export default class DrinkCard extends Component {


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
        showDrinkDetails: false,



    }
    showDrinkDetails = () => {
        this.setState({ showDrinkDetails: true })



    }

    render() {

        return (
            <React.Fragment>
                <div className="card-body">
                    {/* <img width="30%" src={this.props.drink.image} className="drink--image" /> */}
                    <br />
                    {/* <div class="container"> */}
                    <Link className="dri-link" to={`/drinks/${this.props.drink.id}`}>
                        {this.props.drink.title}
                        <img width="30%" src={this.props.drink.image} className="drink--image" />
                        </Link>
                        <a href="#"
                        onClick={() => {
                            if (window.confirm('Are you sure you want to delete this item?'))
                                this.props.deleteDrink(this.props.drink.id)
                                    .then(() => this.props.history.push("/drinks"))
                        }}
                        className="card-delete"></a>




                    {/* </div> */}
                </div>
            </React.Fragment>


        )
    }

}