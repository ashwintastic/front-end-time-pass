import React, { Component } from 'react';
import routes from './routes'
import {Route} from "react-router-dom";
export default function RouterComponent(){
    return routes.map((r)=>{
        return(
            <Route  exact path={r.path} component={r.component} key ={r.path}/>
        )
    })
}
