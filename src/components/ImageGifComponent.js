import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function ImageGifComponent(props){
    let contentCollection = props.contentCollection;

    if(Object.keys(contentCollection).length == 0) {
        return null
    }

    return  contentCollection.map(function(item){
         return (<div className="thumbnail" key ={item.id}>
            <img src= {item.path} alt="Lights" style={{width:"100%"}}/>
            <div className="caption">
                <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
            </div>
        </div>)
    })


}

ImageGifComponent.propTypes = {
    contentCollection: PropTypes.array
};