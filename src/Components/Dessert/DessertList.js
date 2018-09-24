

import React, { Component } from 'react'
import DessertCard from "./DessertCard"
import APIManager from "../../Module/APIManager";
import { Button } from 'bloomer'

import { Link } from "react-router-dom"
import StarRatingComponent from 'react-star-rating-component';

import "./Dessert.css"

export default class DessertList extends Component {
    constructor() {
        super();
        this.state = {
            searchItem: "",
            searchMode: false,
            searchDessert: null
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

    searchDesserts = (evt) => {
        evt.preventDefault()
        const SearchItem = this.state.searchItem

        if (SearchItem !== "") {
            console.log("searchItem", SearchItem)
            console.log(`http://localhost:5002/desserts?q=${SearchItem}`)
            fetch(`http://localhost:5002/desserts?q=${SearchItem}`)
                .then(a => a.json())
                .then((desserts) => {
                    console.log(desserts)
                    this.setState({
                        searchDessert: desserts,
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
                        {/* <label className="ishidden" htmlFor="search">Find Dessert</label> */}
                        <input type="search"
                            name="search"
                            id="searchItem"
                            onChange={this.handleSearchField}
                            placeholder="Search for desserts ..." />
            <input type="submit" class="search-submit" value="" onClick={this.searchDesserts}/>

                        {/* <Button isColor="info" type="submit" id="submit" className="search-button" onClick={this.searchDesserts}>
                            Submit</Button> */}


                    </form>
                    {this.state.searchMode === true &&

                        <div>
                           
                            {
                                this.state.searchDessert.map(dessert =>
                                    <DessertCard key={dessert.id}
                                    dessert={dessert} {...this.props} />
                                )
                            }
                        </div>

                    }
                    {this.state.searchMode === false &&
                        <div>
                            
                            {
                                this.props.desserts.map(dessert =>
                                    <DessertCard key={dessert.id}
                                    dessert={dessert} {...this.props} />
                                )
                            }
                        </div>
                    }


                    <div className="dessertButton">
                        <button type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                this.props.history.push("/desserts/new")
                            }
                            }>Create New Dessert</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}