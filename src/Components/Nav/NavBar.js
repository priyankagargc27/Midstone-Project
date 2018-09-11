import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="#" active>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" active>About</NavLink>
          </NavItem>

          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Categories
            </DropdownToggle>
            <DropdownMenu>
             
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>


              <DropdownItem divider />
              
            </DropdownMenu>
          </Dropdown>
         
          <NavItem>
            <NavLink href="#">Logout</NavLink>
          </NavItem>
         
        </Nav>
      </div>
    );
  }
}