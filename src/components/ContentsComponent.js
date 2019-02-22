import React, { Component } from 'react';


export default class ContentComponent extends Component {



    componentDidMount(){

    }


    render() {
        return (
            <div className="App">

                <div className="container">
                    <div className="content-container">
                        <div className="">
                            <div className="thumbnail">
                                    <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Lights" style={{width:"100%"}}/>
                                    <div className="caption">
                                        <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


