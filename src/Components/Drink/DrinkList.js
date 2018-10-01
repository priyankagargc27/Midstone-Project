

import React, { Component } from 'react'
import DrinkCard from "./DrinkCard"
import APIManager from "../../Module/APIManager";
import { Button } from 'bloomer'

import { Link } from "react-router-dom"
import StarRatingComponent from 'react-star-rating-component';

import "./Drink.css"

export default class DrinkList extends Component {
    constructor() {
        super();
        this.state = {
            searchItem: "",
            searchMode: false,
            searchDrink: null
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

    searchDrinks = (evt) => {
        evt.preventDefault()
        const SearchItem = this.state.searchItem

        if (SearchItem !== "") {
            console.log("searchItem", SearchItem)
            console.log(`http://localhost:5002/drinks?q=${SearchItem}`)
            fetch(`http://localhost:5002/drinks?q=${SearchItem}`)
                .then(a => a.json())
                .then((drinks) => {
                    console.log(drinks)
                    this.setState({
                        searchDrink: drinks,
                        searchMode:true
                    })
                    console.log("search full")
                })
        } else  {
            

            console.log("search empty")

        }
    }

    // add your drinks to favorite
    // addToFav = (recipeId, userId) => {
    //     let currentUser = JSON.parse(localStorage.getItem("userInfo"));
    //     if (currentUser === null) {
    //         currentUser = JSON.parse(sessionStorage.getItem("userInfo"));
    //         userId = currentUser.userId
    //     } else {
    //         userId = currentUser.userId
    //     }
    //         fetch("http://localhost:5002/favorites", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 userId: userId,
    //                 recipeId: +recipeId,
    //                 review: '',
    //                 rating: 0
    //             })
    //         }).then(() => {
                    
    //             alert("Recipe added to your favorites")
    //         })
    // }
   







    render() {


        return (
            <React.Fragment>
                <div className="RecipeList">
                    <form className="search-form" >
                        {/* <label className="Find-drink" htmlFor="search">Find Drink</label> */}
                        <input type="search"
                            name="search"
                            id="searchItem"
                            onChange={this.handleSearchField}
                            placeholder="Search for drinks ..." />
                            <input type="submit" className="search-submit" value="" onClick={this.searchDrinks}/>
                            
                            {/* {this.state.searchItem ==null &&
                            <div>{
                                
                                <p>Sorry, but nothing matched your search terms. Please try again with different keywords.

</p>
                            }
</div>
                            }             */}
                            
                        {/* <Button isColor="info" type="submit" id="submit" className="search-button" onClick={this.searchDrinks}>
                            Submit</Button> */}


                    </form>
                    {this.state.searchMode === true &&

                        <div>
                           
                            {
                                this.state.searchDrink.map(drink =>
                                    <DrinkCard key={drink.id}
                                    drink={drink} {...this.props} />
                                )
                            }
                        </div>

                    }
                    {this.state.searchMode === false &&
                        <div>
                            
                            {
                                this.props.drinks.map(drink =>
                                    <DrinkCard key={drink.id}
                                    drink={drink}{...this.props} />
                                )
                            }
                        </div>
                    }


                    <div className="drinkButton">
                        <button type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                this.props.history.push("/drinks/new")
                            }
                            }>Create New Drink</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}