import React, { Component } from 'react';
//import '../bootstrap.css'
export default function HeaderComponent(){
    return(
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">WebSiteName</a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"> Sign Up</a></li>
                    <li><a href="#"> Login</a></li>
                </ul>
            </div>
        </nav>
    )
}
