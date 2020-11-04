import React from 'react';
// import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">useContext</Link>
             
       
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink  activeClassName="active" className="nav-link" to="/">Home </NavLink>
                    <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
                    <NavLink activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                    
                </div>
                </div>
      </nav>
    )
}
