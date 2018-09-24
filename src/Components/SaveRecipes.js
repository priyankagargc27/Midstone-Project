import React, { Component } from 'react'
import NavBar from './Nav/NavBar'
import ApplicationViews from './ApplicationViews'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import Carouseljs from './Carousel'

//import "bootstrap/dist/css/bootstrap.min.css"




export default class SaveRecipes extends Component {
    render() {
        return (
            <React.Fragment>
               
                <NavBar/>
                {/* <Carouseljs/> */}

                <ApplicationViews />
        
            </React.Fragment>
        )
    }
}