import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import RecipeForm from "./Recipes/RecipeForm"
import APIManager from "../Module/APIManager"


//import UserList from './UserList'


export default class ApplicationViews extends Component {

    isAuthenticated = () => 
    localStorage.getItem("userInfo") !== null ||
    sessionStorage.getItem("userInfo") !== null

    state = {

        currentView: "login",
        activeUser: localStorage.getItem("usersId"),
        recipes: [],
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
        }

        addRecipe = recipe=> APIManager.post("recipes", recipe)
        .then(() => APIManager.getAll("recipes"))
        .then(recipes => this.setState({
            recipes: recipes

        }))



    render() {
        return (
            <React.Fragment>
                 <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
               
                <Route path="/recipes/new" render={(props) => {
                    return <RecipeForm {...props}
                        addRecipe={this.addRecipe} />
                }} />

                {/* <Route exact path='/UserList' render={props => {
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