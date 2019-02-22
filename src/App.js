import React, { Component } from 'react';
import ContentComponent from './components/ContentsComponent'
import './App.css';
import './bootstrap.css'

import HeaderComponent from './components/HeaderComponent'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <ContentComponent/>
      </div>
    );
  }
}

export default App;
