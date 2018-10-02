import React, { Component } from 'react'
import FavoriteCard from './FavoriteCard'
import APIManager from '../../Module/APIManager';
import RecipeCard from "../Recipes/RecipeCard"

import "./Favorite.css"





export default class FavoriteList extends Component {

    constructor() {
        super();
        this.state = {
        favorites: [],
        searchText: '',
        visible: false,
    }; 
 }
//on button click show/hide review input field
// toggleReview = () => {
// this.setState((prevState) => {
//     return {visible: !prevState.visible}
// })
// }

//check for current user and print their favorites list only
 getUserFavorites = () => {
     let localUser = JSON.parse(localStorage.getItem("userInfo")); // gets localStorage
     let sessionUser = JSON.parse(sessionStorage.getItem("userInfo")); // gets sessionStorage

    if (sessionUser !== null) { // if sessionStorage is populated with data (ie. user has logged in with sessionStorage)
      return APIManager.getAllData(`favorites?userId=${sessionUser.userId}&_expand=recipe`)
   
      .then(userFavorites => {
          console.log("hello")
          console.log(userFavorites)
          this.setState({ 
              favorites: userFavorites
              
          })
      })

    } else if (localUser !== null) { // if localStorage is populated with data (ie. user has logged in with localStorage)
          APIManager.getAllData(`favorites?userId=${localUser.userId}&_expand=recipe`)
//set state of favorites to this users favorites
      .then(userFavorites => {
          this.setState({ 
              favorites: userFavorites
            })
      })
    }
  };

//remove from favorite list using that favorite id
    deleteFromFav = (favId) => {
        let localUser = JSON.parse(localStorage.getItem("userInfo")); // gets localStorage
     let sessionUser = JSON.parse(sessionStorage.getItem("userInfo")); // gets sessionStorage

    if (sessionUser !== null) {
        return APIManager.delete("favorites", favId)
        .then(() => {
            return APIManager.getAllData(`favorites?userId=${sessionUser.userId}&_expand=recipe`)
            }).then(allFavorites => {
                console.log("allfavorites", allFavorites)
                this.setState({
                    favorites: allFavorites
            })
        })
    }  else if (localUser !== null) { // if localStorage is populated with data (ie. user has logged in with localStorage)
        return APIManager.getAllData(`favorites?userId=${localUser.userId}&_expand=recipe`)

    .then(userFavorites => {
        console.log("userfavorites", userFavorites)
        this.setState({ 
            favorites: userFavorites
        })
    })
  }
};



    componentDidMount() {
        console.log("component mounted")
        this.getUserFavorites()       
    }

    render() {
        
        return (
            <React.Fragment>
                {/* <div className="favDiv"> */}
            <h3 className="favheader">View the full list of favorite recipes</h3>
            <div className="fav-card">
                {
               
                    this.state.favorites.map(favorite => 
                    < FavoriteCard key={favorite.id} 
                    favorite={favorite}
                    deleteFromFav={this.deleteFromFav}
                    // handleReview ={this.handleReview}
                    // toggleReview= {this.toggleReview}
                    visible={this.state.visible}
                    />
                    )
                }
                </div>
               
            </React.Fragment>
        )
    }
}