import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import {NavLink } from 'reactstrap';
import "./NavBar.css"

class NavBar extends Component {
constructor() {
    super();
    this.state={
        search: 'search for'
    };
}
updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)})
    //console.log(event.target.value)
}
logoutFunction = ()=>
    {
        sessionStorage.clear();
        window.location.href="http://localhost:3000/";
    }

    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/recipes">Recipe</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Task">Task</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Events">Events</Link>
                    </li>
                    <li className ="nav-item">
                    <NavLink href="#" onClick={this.logoutFunction} >Logout</NavLink>
                    {/* <Link className="nav-link" id="logout" to="/Logout">Logout</Link> */}
                    </li>
                </ul>
                <div>
                <input type="text" value={this.state.search}
                                       onChange={this.updateSearch.bind(this)}/>
                </div>
            </nav>
        )
    }
}

export default NavBar





















// import React from 'react';
// import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

// export default class NavBar extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       dropdownOpen: false
//     };
//   }

//   toggle() {
//     this.setState({
//       dropdownOpen: !this.state.dropdownOpen
//     });
//   }
//   logoutFunction = ()=>
//     {
//         sessionStorage.clear();
//         window.location.href="http://localhost:3000/";
//     }

//   render() {
//     return (
//       <div>
//         <Nav pills>
//           <NavItem>
//             <NavLink href="#" active>Home</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink href="#" active>About</NavLink>
//           </NavItem>

//           <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//             <DropdownToggle nav caret>
//               Categories
//             </DropdownToggle>
//             <DropdownMenu>
             
//               <DropdownItem>Another Action</DropdownItem>
//               <DropdownItem>Another Action</DropdownItem>
//               <DropdownItem>Another Action</DropdownItem>


//               <DropdownItem divider />
              
//             </DropdownMenu>
//           </Dropdown>
         
//           <NavItem>
//             <NavLink href="#" onClick={this.logoutFunction} >Logout</NavLink>
//           </NavItem>
//           {/* <div>
//                 <button onClick={this.logoutFunction}>Logout</button>
//             </div> */}
         
//         </Nav>
//       </div>
//     );
//   }
// }