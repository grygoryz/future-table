import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {HashRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/configureStore";
import AppContainer from "./containers/AppContainer";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <AppContainer/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

