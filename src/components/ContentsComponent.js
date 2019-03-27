import React, { Component } from 'react';
import ImageGifComponent from './ImageGifComponent'

const serverUri = 'http://localhost:3003/';



export default class ContentComponent extends Component {
    constructor(props){
     super(props);
        this.state = {
         content: null
        }
    }

    componentDidMount(){
      this.props.fetchcontentsFromserver()
    }


    render() {
        console.log('content render', this.props.contents)
        return (
            <div className="App">
                <div className="container">
                    <div className="content-container">
                        <ImageGifComponent contentCollection = {this.props.contents}/>
                    </div>
                </div>
            </div>
        );
    }
}


