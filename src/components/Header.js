import React from 'react';
import Navbar from './Navbar';
import {NavLink} from 'react-router-dom';
import Signout from './Signout';
import Signin from './Signin';
import Signup from './Signup';

const Header = () => {
    return (
        <div>
        <Signin />
        <Signup/>
            <div className="Header">
                <Navbar />
                <h1 id="siteTitle"><NavLink to={'/'}><span>MovieRos</span></NavLink></h1>
                <Signout />
            </div>
        </div>
    ) 
}

function signedIn() {
    return (localStorage.getItem("token") != null) ? true : false
}

export default Header;
