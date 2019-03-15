import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'
var $ = require("jquery");
const fetch = require('node-fetch');

class LoginComponent extends Component {
    state = {
        isLoggedIn: false,
        userId: '',
        name: '',
        email: '',
        picture: ''
    };

    componentClicked(){
        console.log('clicked')
    }

    static getDerivedStateFromProps(props, state){
           if ( typeof props.content == 'undefined'){
               return
           }
            localStorage.setItem("token", props.contents.token.token);
    }


    responseFacebook(resp){
        this.props.fetchTokenFromserver(resp)

    }

    render(){
        let fbContent;
        if (this.state.isLoggedIn){

        }
        else {
            fbContent =(<FacebookLogin
                appId="2333187330038225"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook.bind(this)} />)
        }

        return (
            <div>{fbContent}</div>
        );
    }
}


export default LoginComponent