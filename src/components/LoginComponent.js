import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
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
           if ( typeof props.jwtToken === 'undefined'){
               return;
           }

        console.log('localstore', props.jwtToken.token)
        localStorage.setItem("token", props.jwtToken.token);
    }


    responseFacebook(resp){
        console.log('facebook ', resp)
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