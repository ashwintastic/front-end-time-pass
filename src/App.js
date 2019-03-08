import React, { Component } from 'react';
import ContentContainer from './containers/ContentContainer'
import './App.css';
import './bootstrap.css'
import { Provider } from 'react-redux';
import { store } from './store'
import { BrowserRouter as Router, Route } from "react-router-dom";
import RouterComponent from './router/RouterComponent'
import HeaderComponent from './components/HeaderComponent'
class App extends Component {
    render() {
        return (
            <Provider store ={ store} >
                <Router>
                    <div className="App">
                        <HeaderComponent/>
                        <RouterComponent/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
