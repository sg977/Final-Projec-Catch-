import React, { Component } from 'react';
import "./Header.css";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { Link, BrowserRouter as Router } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
                <Navbar color="indigo" dark expand="lg-12" scrolling>
                        
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem active>
                              <NavLink componentClass={Link} href="/dates" to="/dates">Dates</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/matches">Matches</NavLink>
                          </NavItem>                         
                          <NavItem>
                              <NavLink to="/chat">Direct Message</NavLink>
                          </NavItem>
                          <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>Dropdown</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem to="/signup">Signup</DropdownItem>
                                    <DropdownItem to="/profile">Settings</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default Header; 