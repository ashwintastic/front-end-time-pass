import React, { Component } from 'react';
//import '../bootstrap.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function HeaderComponent(){
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to='/'>10Gags</Link>
                </div>
                <NavBarContenet/>
            </div>
        </nav>
    )
}


function NavBarContenet() {

    return (
        <ul className="nav navbar-nav navbar-right">
            <li><Link to='/signIn'>Login</Link></li>
        </ul>
    )

}