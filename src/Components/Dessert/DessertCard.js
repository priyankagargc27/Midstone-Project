import React, { Component } from 'react'
//import {Card, CardHeader, CardImage, Button, CardContent, Media, Icon, withHelperModifiers, Image, MediaContent, Title, Subtitle, Content} from 'bloomer'
import { Link } from "react-router-dom"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./Dessert.css"






export default class DessertCard extends Component {


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
        showDessertDetails: false,



    }
    showDessertDetails = () => {
        this.setState({ showDessertDetails: true })



    }

    render() {

        return (
            <React.Fragment>
                <Card>
                    <div className="dessert-card">
                        <img top width="30%" src={this.props.dessert.image} className="dessert--image" />
                        <br />
                        <div class="container">
                            <Link className="des-link" to={`/desserts/${this.props.dessert.id}`}>{this.props.dessert.title}</Link>




                        </div>
                    </div>
                </Card>
            </React.Fragment>


        )
    }

}