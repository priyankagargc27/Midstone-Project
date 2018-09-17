import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
//import Welcome from './Welcome'
import RecipeForm from "./Recipes/RecipeForm"
import RecipeList from "./Recipes/RecipeList"
import RecipeDetail from './Recipes/RecipeDetail'

import ProfileForm from "./Profile/ProfileForm"
import Profile from "./Profile/Profile"
import APIManager from "../Module/APIManager"
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
        reviews:[]
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
            APIManager.getAllData("reciepe")
                .then(recipes => this.setState({
                    recipes: recipes
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
                            //deleteArticle={this.deleteArticle}
                            recipes={this.state.recipes}
                        // EditArticle={this.EditArticle}
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
                    deleteRecipe={this.deleteRecipe} 
                    recipes={this.state.recipes} />
                }} />

                {/* <Route exact path='/UserList' render={(props) => {
                    if (this.isAuthenticated()) {
                        return <UserList/>
                    } else {
                        return <Login/>
                    }
                }}/> */}

            </React.Fragment>
        )
    }
}