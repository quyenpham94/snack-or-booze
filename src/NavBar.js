import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'reactstrap';

const NavBar = () => {
    return (
        <Navbar expand="md">
            <NavLink exact to="/" className="navbar-brand">
                Snack or Booze
            </NavLink>

            <Nav className='ml-auto' navbar>
                <NavItem>
                    <NavLink to="/snacks">Snacks</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/drinks">Drinks</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/add" className="mr-0">Add Item</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavBar;