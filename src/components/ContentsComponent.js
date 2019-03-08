import React, { Component } from 'react';
import ImageGifComponent from './ImageGifComponent'

export default class ContentComponent extends Component {
    constructor(props){
     super(props)
        this.state = {
         content: null
        }
    }



    componentDidMount(){
      this.props.fetchcontentsFromserver()
    }

    render() {
        console.log('opopopopop', this.props.contents)
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


