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
                    <div className="card-body">
                        <br />
                        {/* <div class="container"> */}
                            <Link className="des-link" to={`/desserts/${this.props.dessert.id}`}>{this.props.dessert.title}
                            <img width="30%" src={this.props.dessert.image} className="dessert--image" />
</Link>
<a href="#"
                        onClick={() => {
                            if (window.confirm('Are you sure you want to delete this item?'))
                                this.props.deleteDessert(this.props.dessert.id)
                                    .then(() => this.props.history.push("/desserts"))
                        }}
                        className="card-delete"></a>



                        {/* </div> */}
                    </div>
            </React.Fragment>


        )
    }

}