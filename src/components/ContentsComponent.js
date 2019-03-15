import React, { Component } from 'react';
import ImageGifComponent from './ImageGifComponent'


const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;


const serverUri = 'http://localhost:3003/';






export default class ContentComponent extends Component {
    constructor(props){
     super(props);
        this.state = {
         content: null
        }
    }

    componentDidMount(){


      //this.props.fetchcontentsFromserver()
    }

    handleClick(){
        fetch(serverUri, {headers: {x: 1}})
    }

    render() {
        console.log('content render', this.props.contents)
        return (
            <div className="App">
                <div className="container">
                    <div className="content-container">
                        <ImageGifComponent contentCollection = {this.props.contents}/>
                        <button onClick={this.handleClick.bind(this)}>click me</button>
                    </div>
                </div>
            </div>
        );
    }
}


