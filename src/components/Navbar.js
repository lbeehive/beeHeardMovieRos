import React from 'react';
import {NavLink} from 'react-router-dom';

const Link = {
    width: "100px",
    padding: "6px 12px",
    margin: "0 6px 6px",
    background: "white",
    textDecoration: "none",
    color: "black",
}

const Navbar = () => {
    return (
        <div className="Navbar">
            <NavLink to="/" exact style={Link} activeStyle={{background: "blue"}}>Home</NavLink>
            <NavLink to="/products" exact style={Link} activeStyle={{background: "blue"}}>Movies</NavLink>
        </div>
    )
}

export default Navbar;