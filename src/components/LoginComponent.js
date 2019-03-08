import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'
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
        console.log('props', props)
    }

    responseFacebook(resp){
        // console.log('response from FB', resp)
        // var resp = await axios.post('http://localhost:3003/facebook/callback',{
        //     data: resp
        // })
        // console.log('token', resp)
        console.log('resp', resp)
        this.props.fetchTokenFromserver(resp)
    }

    render(){
        console.log('props', 'render')
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