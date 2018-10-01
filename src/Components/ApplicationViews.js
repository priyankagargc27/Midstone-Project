import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
//import Welcome from './Welcome'
import RecipeForm from "./Recipes/RecipeForm"
import RecipeList from "./Recipes/RecipeList"
import RecipeDetail from './Recipes/RecipeDetail'
import RecipeCard from './Recipes/RecipeCard'

 import Favorites from './Favorites/FavoriteList'
import FavoriteDetail from './Favorites/FavotiteDetail'
import DessertForm from "./Dessert/DessertForm"
import DessertList from "./Dessert/DessertList"
import DessertDetail from './Dessert/DessertDetail'
import DrinkForm from "./Drink/DrinkForm"
import DrinkList from "./Drink/DrinkList"
import DrinkDetail from './Drink/DrinkDetail'
import ProfileForm from "./Profile/ProfileForm"
import Profile from "./Profile/Profile"
import APIManager from "../Module/APIManager"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
//import AddReview from "../Review/AddReview"

//import UserList from './UserList'

//import Login from './Login'




//import UserList from './UserList'


export default class ApplicationViews extends Component {

    isAuthenticated = () =>
        localStorage.getItem("userInfo") !== null ||
        sessionStorage.getItem("userInfo") !== null

    state = {

        currentView: "login",
        activeUser: localStorage.getItem("usersId"),
        recipes: [],
        profiles: [],
        reviews: [],
        desserts: [],
        drinks:[],
        // favorites:[]
        // events:[],
        // messages:[]

    }

    
   

    componentDidMount() {

        APIManager.getAllData("recipes")
            .then(allRecipes => {
                this.setState({
                    recipes: allRecipes
                })
            })
        APIManager.getAllData("profiles")
            .then(allProfiles => {
                this.setState({
                    profiles: allProfiles
                })
            })
        APIManager.getAllData("reviews")
            .then(allReviews => {
                this.setState({
                    reviews: allReviews
                })
            })
        APIManager.getAllData("desserts")
            .then(allDessert => {
                this.setState({
                    desserts: allDessert
                })
            })
            APIManager.getAllData("drinks")
            .then(allDrink => {
                this.setState({
                    drinks: allDrink
                })
            })
            
           
    }



    addReview = review => APIManager.post("reviews", review)
        .then(() => APIManager.getAllData("reviews"))
        .then(reviews => this.setState({
            reviews: reviews


        }))

    addRecipe = recipe => APIManager.post("recipes", recipe)
        .then(() => APIManager.getAllData("recipes"))
        .then(recipes => this.setState({
            recipes: recipes

        }))

    deleteRecipe = id => APIManager.delete("recipes", id)
        .then(() => {
            APIManager.getAllData("recipes")
                .then(recipes => this.setState({
                    recipes: recipes
                }))
        })
    addDessert = dessert => APIManager.post("desserts", dessert)
        .then(() => APIManager.getAllData("desserts"))
        .then(desserts => this.setState({
            desserts: desserts

        }))
    deleteDessert = id => APIManager.delete("desserts", id)
        .then(() => {
            APIManager.getAllData("desserts")
                .then(desserts => this.setState({
                    desserts: desserts
                }))
        })
        addDrink = drink => APIManager.post("drinks", drink)
        .then(() => APIManager.getAllData("drinks"))
        .then(drinks => this.setState({
            drinks: drinks

        }))
        deleteDrink = id => APIManager.delete("drinks", id)
        .then(() => {
            APIManager.getAllData("drinks")
                .then(drinks => this.setState({
                    drinks: drinks
                }))
        })
    addProfile = profile => APIManager.post("profiles", profile)
        .then(() => APIManager.getAllData("profiles"))
        .then(profiles => this.setState({
            profiles: profiles

        }))



    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />

                <Route exact path="/Register" component={Register} />
                {/* <Route exact path="/Profile" component={this.Profile}/> */}
                <Route exact path="/Profile" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <Profile {...props}
                            //deleteArticle={this.deleteArticle}
                            profiles={this.state.profiles}
                        // EditArticle={this.EditArticle}
                        />
                    } else {
                        return <Redirect to="/Login" />
                    }
                }} />

                <Route path="/profiles/new" render={(props) => {
                    return <ProfileForm {...props}
                        addProfile={this.addProfile} />
                }} />

                <Route exact path="/recipes" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <RecipeList {...props}

                        deleteRecipe={this.deleteRecipe}
                            recipes={this.state.recipes}


                        />
                    } else {
                        return <Redirect to="/Login" />
                    }
                }} />

                <Route path="/recipes/new" render={(props) => {
                    return <RecipeForm {...props}
                        addRecipe={this.addRecipe} />
                }} />
                                
                               


                <Route path="/recipes/:recipeId(\d+)" render={(props) => {
                    return <RecipeDetail {...props}
                        addReview={this.addReview}
                        reviews={this.state.reviews}
                        deleteRecipe={this.deleteRecipe}
                        recipes={this.state.recipes} />
                }} />
                
                
                <Route exact path="/desserts" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <DessertList {...props}
                        deleteDessert={this.deleteDessert}


                            desserts={this.state.desserts}

                        />
                    } else {
                        return <Redirect to="/Login" />
                    }
                }} />

                <Route path="/desserts/new" render={(props) => {
                    return <DessertForm {...props}
                        addDessert={this.addDessert} />
                }} />

                <Route path="/desserts/:dessertId(\d+)" render={(props) => {
                    return <DessertDetail {...props}
                        addReview={this.addReview}
                        reviews={this.state.reviews}
                        deleteDessert={this.deleteDessert}
                        desserts={this.state.desserts} />
                }} />

                 <Route exact path="/drinks" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <DrinkList {...props}
                        deleteDrink={this.deleteDrink}


                            drinks={this.state.drinks}

                        />
                    } else {
                        return <Redirect to="/Login" />
                    }
                }} />

                <Route path="/drinks/new" render={(props) => {
                    return <DrinkForm {...props}
                        addDrink={this.addDrink} />
                }} />

                <Route path="/drinks/:drinkId(\d+)" render={(props) => {
                    return <DrinkDetail {...props}
                        addReview={this.addReview}
                        reviews={this.state.reviews}
                        deleteDrink={this.deleteDrink}
                        drinks={this.state.drinks} />
                }} />

 <Route exact path='/Favorites' render={props => {
                    if (this.isAuthenticated()) {
                       return <Favorites{...props}
                       />
                     } else {
                         return <Login/>
                     }
                 }}/>
                  {/* <Route path="/favorites/:favoriteId(\d+)" render={(props) => {
                    return <FavoriteDetail {...props}
                        addReview={this.addReview}
                        reviews={this.state.reviews}
                        deleteRecipe={this.deleteRecipe}
                        recipes={this.state.recipes} />
                }} /> */}

               

            </React.Fragment>
        )
    }
}