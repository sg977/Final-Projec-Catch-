import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Navbar, NavItem} from 'react-materialize';
import './Header.css'; 


class Header extends Component{
 render(){
    return (
            <Navbar brand='logo' right>
                <NavItem><Link to="/Home" activeClassName="active">Home</Link></NavItem>
                <NavItem><Link to="/Log in" activeClassName="active">Log in</Link></NavItem>
                <NavItem><Link to="/Register" activeClassName="active">Register</Link></NavItem>
            </Navbar>
            
        
        );
    
    }

}

export default Header; 



